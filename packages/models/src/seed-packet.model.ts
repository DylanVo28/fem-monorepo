/**
 * @public
 */
export enum SeedType {
  Corn = 'corn',
  Wheat = 'wheat',
}

/**
 * @public
 */
export interface SeedPacket {
  id: string;
  type: SeedType;
}

