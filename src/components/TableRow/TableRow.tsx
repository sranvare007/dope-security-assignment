import type { CharacterWithViewed } from '../../types';
import { HealthBadge } from '../HealthBadge';
import './TableRow.css';

interface TableRowProps {
  character: CharacterWithViewed;
  isSelected: boolean;
  onSelect: (checked: boolean) => void;
  index: number;
}

export const TableRow = ({ character, isSelected, onSelect, index }: TableRowProps) => {
  const backgroundColor = isSelected 
    ? '#e7f3ff' 
    : index % 2 === 0 ? '#fff' : '#fafafa';

  return (
    <div
      className="table-row"
      style={{ backgroundColor }}
    >
      <div className="table-cell cell-checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={e => onSelect(e.target.checked)}
          aria-label={`Select ${character.name}`}
        />
      </div>
      <div className="table-cell cell-name">{character.name}</div>
      <div className="table-cell cell-location">{character.location}</div>
      <div className="table-cell cell-health">
        <HealthBadge health={character.health} />
      </div>
      <div className="table-cell cell-power">
        {character.power.toLocaleString()}
      </div>
    </div>
  );
};
