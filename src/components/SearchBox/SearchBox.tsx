import './SearchBox.css';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

export const SearchBox = ({
  value,
  onChange,
  placeholder = 'Search...',
  ariaLabel = 'Search',
}: SearchBoxProps) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="search-input"
        aria-label={ariaLabel}
      />
    </div>
  );
};
