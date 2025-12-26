export enum SeedType {
  Corn = 'corn',
  Wheat = 'wheat',
}

export interface SeedPacket {
  id: string;
  type: SeedType;
}
