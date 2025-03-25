async function loadWasm() {
  try {
    const response = await fetch('https://ymekdad.com/wasm/module.wasm');
    const bytes = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(bytes);
    console.log('WASM Module loaded:', wasmModule);
  } catch (err) {
    console.error('Error loading WASM:', err);
  }
}

// Trigger the loading when the script runs
loadWasm();
