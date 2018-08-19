const JSDOM = require('jsdom').JSDOM;

global.window = new JSDOM().window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;

global.expect = require('chai').expect;
