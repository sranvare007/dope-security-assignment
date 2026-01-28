export type Location = 'Konoha' | 'Suna' | 'Kiri' | 'Iwa' | 'Kumo';
export type HealthStatus = 'Healthy' | 'Injured' | 'Critical';

export interface Character {
  id: string;
  name: string;
  location: Location;
  health: HealthStatus;
  power: number;
}

export interface CharacterWithViewed extends Character {
  viewed: boolean;
}

export type SortOrder = 'asc' | 'desc' | null;
