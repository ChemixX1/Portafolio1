const fs = require('node:fs');
const path = require('node:path');

const src = 'node_modules/three/examples/jsm/libs/draco/gltf';
const output = 'public/draco';

// Copy Draco decoder assets from Three.js into the public directory.
fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(
  path.join(src, 'draco_decoder.wasm'),
  path.join(output, 'draco_decoder.wasm')
);
fs.copyFileSync(
  path.join(src, 'draco_wasm_wrapper.js'),
  path.join(output, 'draco_wasm_wrapper.js')
);
