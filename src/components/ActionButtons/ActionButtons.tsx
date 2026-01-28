import './ActionButtons.css';

interface ActionButtonsProps {
  selectedCount: number;
  onMarkViewed: () => void;
  onMarkUnviewed: () => void;
}

export const ActionButtons = ({
  selectedCount,
  onMarkViewed,
  onMarkUnviewed,
}: ActionButtonsProps) => {
  return (
    <div className="action-buttons">
      <button
        onClick={onMarkViewed}
        disabled={selectedCount === 0}
        className="btn btn-primary"
        aria-label="Mark selected as viewed"
      >
        Mark as Viewed ({selectedCount})
      </button>
      <button
        onClick={onMarkUnviewed}
        disabled={selectedCount === 0}
        className="btn btn-secondary"
        aria-label="Mark selected as unviewed"
      >
        Mark as Unviewed ({selectedCount})
      </button>
    </div>
  );
};
