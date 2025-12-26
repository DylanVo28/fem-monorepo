import { SeedType } from '@seeds/models';
// Ví dụ sử dụng runtime import
const packet = {
    id: '1',
    type: SeedType.Corn,
};
// Ví dụ sử dụng type-only import (tree-shaking friendly)
function processPacket(packet) {
    console.log('Processing packet:', packet.id);
}
processPacket(packet);
console.log(packet);
//# sourceMappingURL=index.js.map