import { useState, useMemo, useCallback, useRef } from 'react';
import type { CharacterWithViewed, HealthStatus, SortOrder } from '../../types';
import { SearchBox } from '../SearchBox';
import { ActionButtons } from '../ActionButtons';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import './Table.css';

interface TableProps {
  data: CharacterWithViewed[];
  isLoading: boolean;
}

const ROW_HEIGHT = 48;
const VISIBLE_ROWS_BUFFER = 5;

export const Table = ({ data, isLoading }: TableProps) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [healthFilters, setHealthFilters] = useState<Set<HealthStatus>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [showHealthFilter, setShowHealthFilter] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Apply health filters
    if (healthFilters.size > 0) {
      result = result.filter(char => healthFilters.has(char.health));
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        char =>
          char.name.toLowerCase().includes(query) ||
          char.location.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (sortOrder) {
      result.sort((a, b) => {
        return sortOrder === 'asc' ? a.power - b.power : b.power - a.power;
      });
    }

    return result;
  }, [data, healthFilters, searchQuery, sortOrder]);

  // Handle scroll for virtualization
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  // Calculate visible rows for virtualization
  const { visibleData, totalHeight, offsetY, startIndex } = useMemo(() => {
    const containerHeight = 600;
    const startIdx = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - VISIBLE_ROWS_BUFFER);
    const endIdx = Math.min(
      filteredAndSortedData.length,
      Math.ceil((scrollTop + containerHeight) / ROW_HEIGHT) + VISIBLE_ROWS_BUFFER
    );
    
    return {
      visibleData: filteredAndSortedData.slice(startIdx, endIdx),
      totalHeight: filteredAndSortedData.length * ROW_HEIGHT,
      offsetY: startIdx * ROW_HEIGHT,
      startIndex: startIdx
    };
  }, [scrollTop, filteredAndSortedData]);

  // Handle select all
  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setSelectedIds(new Set(filteredAndSortedData.map(char => char.id)));
      } else {
        setSelectedIds(new Set());
      }
    },
    [filteredAndSortedData]
  );

  // Handle individual row selection
  const handleRowSelect = useCallback((id: string, checked: boolean) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  }, []);

  // Handle health filter toggle
  const handleHealthFilterToggle = useCallback((health: HealthStatus) => {
    setHealthFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(health)) {
        newSet.delete(health);
      } else {
        newSet.add(health);
      }
      return newSet;
    });
  }, []);

  // Handle sort toggle
  const handleSortToggle = useCallback(() => {
    setSortOrder(prev => {
      if (prev === null) return 'asc';
      if (prev === 'asc') return 'desc';
      return null;
    });
  }, []);

  // Handle mark as viewed/unviewed
  const handleMarkViewed = useCallback((viewed: boolean) => {
    const selectedArray = Array.from(selectedIds);
    console.log(`Marking ${viewed ? 'viewed' : 'unviewed'}:`, selectedArray);
  }, [selectedIds]);

  // Check if all visible rows are selected
  const allSelected = filteredAndSortedData.length > 0 && 
    filteredAndSortedData.every(char => selectedIds.has(char.id));
  const someSelected = filteredAndSortedData.some(char => selectedIds.has(char.id));

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner" aria-label="Loading data"></div>
        <p>Loading characters...</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <div className="table-controls">
        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name or location..."
          ariaLabel="Search characters"
        />
        <ActionButtons
          selectedCount={selectedIds.size}
          onMarkViewed={() => handleMarkViewed(true)}
          onMarkUnviewed={() => handleMarkViewed(false)}
        />
      </div>

      <div className="table-wrapper">
        <TableHeader
          allSelected={allSelected}
          someSelected={someSelected}
          onSelectAll={handleSelectAll}
          healthFilters={healthFilters}
          onToggleHealthFilter={handleHealthFilterToggle}
          showHealthFilter={showHealthFilter}
          onToggleHealthFilterDropdown={() => setShowHealthFilter(!showHealthFilter)}
          sortOrder={sortOrder}
          onToggleSort={handleSortToggle}
        />
        {filteredAndSortedData.length === 0 ? (
          <div className="no-results">
            No characters found matching your criteria
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="virtual-scroll-container"
            onScroll={handleScroll}
            style={{
              height: 600,
              overflow: 'auto',
              position: 'relative'
            }}
          >
            <div style={{ height: totalHeight, position: 'relative' }}>
              <div style={{ transform: `translateY(${offsetY}px)`, willChange: 'transform' }}>
                {visibleData.map((char, idx) => (
                  <TableRow
                    key={char.id}
                    character={char}
                    isSelected={selectedIds.has(char.id)}
                    onSelect={(checked) => handleRowSelect(char.id, checked)}
                    index={startIndex + idx}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="table-footer">
        Showing {filteredAndSortedData.length} of {data.length} characters
      </div>
    </div>
  );
};
