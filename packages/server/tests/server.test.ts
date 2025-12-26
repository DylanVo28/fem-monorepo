import { describe, it, expect } from 'vitest';
import { loadSeedData } from '../src/load-data.js';
import { SeedType } from '@seeds/models';

describe('Server', () => {
  it('loads seed data', () => {
    const seeds = loadSeedData();
    expect(seeds.length).toBeGreaterThan(0);
    expect(seeds[0]).toHaveProperty('id');
    expect(seeds[0]).toHaveProperty('type');
  });

  it('returns valid seed types', () => {
    const seeds = loadSeedData();
    const types = seeds.map((s) => s.type);
    expect(types).toContain(SeedType.Corn);
  });
});
