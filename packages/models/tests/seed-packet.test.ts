import { SeedType } from '../source/index.js';
import { describe, it, expect } from 'vitest';

describe('SeedType', () => {
  it('exists', () => {
    expect(SeedType.Corn).toBe('corn');
  });
});
