import { useEffect, useRef } from 'react';
import type { HealthStatus } from '../../types';
import './HealthFilter.css';

interface HealthFilterProps {
  selectedFilters: Set<HealthStatus>;
  onToggleFilter: (health: HealthStatus) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const healthOptions: HealthStatus[] = ['Healthy', 'Injured', 'Critical'];

export const HealthFilter = ({
  selectedFilters,
  onToggleFilter,
  isOpen,
  onToggle,
}: HealthFilterProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onToggle]);

  return (
    <div className="health-filter" ref={dropdownRef}>
      <button
        className="filter-btn"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-label="Filter by health status"
        aria-expanded={isOpen}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.5 4.5h13M3.5 8h9M5.5 11.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {isOpen && (
        <div className="filter-dropdown" onClick={e => e.stopPropagation()}>
          {healthOptions.map(health => (
            <label key={health} className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.has(health)}
                onChange={() => onToggleFilter(health)}
              />
              <span>{health}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
