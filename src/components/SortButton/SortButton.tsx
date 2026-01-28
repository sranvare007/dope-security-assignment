import type { SortOrder } from '../../types';
import './SortButton.css';

interface SortButtonProps {
  sortOrder: SortOrder;
  onToggle: () => void;
  label: string;
}

export const SortButton = ({ sortOrder, onToggle, label }: SortButtonProps) => {
  return (
    <button
      className="sort-btn"
      onClick={onToggle}
      aria-label={`Sort by ${label} ${sortOrder || 'none'}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 4l3 4H5l3-4z"
          fill={sortOrder === 'asc' ? 'currentColor' : '#ccc'}
        />
        <path
          d="M8 12l3-4H5l3 4z"
          fill={sortOrder === 'desc' ? 'currentColor' : '#ccc'}
        />
      </svg>
    </button>
  );
};
