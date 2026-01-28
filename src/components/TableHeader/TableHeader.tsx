import type { HealthStatus, SortOrder } from '../../types';
import { HealthFilter } from '../HealthFilter';
import { SortButton } from '../SortButton';
import './TableHeader.css';

interface TableHeaderProps {
  allSelected: boolean;
  someSelected: boolean;
  onSelectAll: (checked: boolean) => void;
  healthFilters: Set<HealthStatus>;
  onToggleHealthFilter: (health: HealthStatus) => void;
  showHealthFilter: boolean;
  onToggleHealthFilterDropdown: () => void;
  sortOrder: SortOrder;
  onToggleSort: () => void;
}

export const TableHeader = ({
  allSelected,
  someSelected,
  onSelectAll,
  healthFilters,
  onToggleHealthFilter,
  showHealthFilter,
  onToggleHealthFilterDropdown,
  sortOrder,
  onToggleSort,
}: TableHeaderProps) => {
  return (
    <div className="table-header">
      <div className="header-row">
        <div className="header-cell header-checkbox">
          <input
            type="checkbox"
            checked={allSelected}
            ref={input => {
              if (input) input.indeterminate = someSelected && !allSelected;
            }}
            onChange={e => onSelectAll(e.target.checked)}
            aria-label="Select all rows"
          />
        </div>
        <div className="header-cell header-name">Name</div>
        <div className="header-cell header-location">Location</div>
        <div className="header-cell header-health">
          <div className="header-with-filter">
            Health
            <HealthFilter
              selectedFilters={healthFilters}
              onToggleFilter={onToggleHealthFilter}
              isOpen={showHealthFilter}
              onToggle={onToggleHealthFilterDropdown}
            />
          </div>
        </div>
        <div className="header-cell header-power">
          <div className="header-with-sort">
            Power
            <SortButton
              sortOrder={sortOrder}
              onToggle={onToggleSort}
              label="power"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
