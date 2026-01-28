import type { HealthStatus } from '../../types';
import './HealthBadge.css';

interface HealthBadgeProps {
  health: HealthStatus;
}

export const HealthBadge = ({ health }: HealthBadgeProps) => {
  return (
    <span className={`health-badge health-${health.toLowerCase()}`}>
      {health}
    </span>
  );
};
