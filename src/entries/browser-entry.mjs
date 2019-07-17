import nonesuch from '../nonesuch/index.js';
import { version } from '../package.json';

nonesuch.VERSION = version;

nonesuch.initialize();

export default nonesuch;
