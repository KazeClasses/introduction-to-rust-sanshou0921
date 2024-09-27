// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/mcmc_example.js";
const runWasm = async () => {
 // Instantiate our wasm module
 const helloWorld = await init("./pkg/mcmc_example_bg.wasm");
 // Call the run function in the wasm module, which will return the result of our
  calculation
 helloWorld.run();
};
runWasm();

