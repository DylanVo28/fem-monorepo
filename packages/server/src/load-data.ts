import { SeedPacket, SeedType } from '@seeds/models';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function loadSeedData(): SeedPacket[] {
  try {
    const dataPath = join(__dirname, '../data/seeds.json');
    const data = readFileSync(dataPath, 'utf-8');
    return JSON.parse(data) as SeedPacket[];
  } catch (error) {
    console.error('Error loading seed data:', error);
    // Return default data if file not found
    return [
      { id: '1', type: SeedType.Corn },
      { id: '2', type: SeedType.Wheat },
    ];
  }
}
