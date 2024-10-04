// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import particlesJS from '../node_modules/particles.js/particles.js';

particlesJS.load('../../node_modules/particles.js/particles.js', '../../assets/particles.json',
    function() {console.log("callback - particles.js config loaded")});