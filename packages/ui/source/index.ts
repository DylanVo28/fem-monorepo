import { SeedPacket, SeedType } from '@seeds/models';
import type { SeedPacket as SeedPacketType } from '@seeds/models';

// Ví dụ sử dụng runtime import
const packet: SeedPacket = {
  id: '1',
  type: SeedType.Corn,
};

// Ví dụ sử dụng type-only import (tree-shaking friendly)
function processPacket(packet: SeedPacketType) {
  console.log('Processing packet:', packet.id);
}

processPacket(packet);
console.log(packet);
