const nonesuch = require('./');
const elements = require('./elements');
const pkg = require('../package.json');

describe('nonesuch', function () {
    let subject = nonesuch;

    it('should exist', function () {
        expect(subject).to.exist;
    });

    it('should be an object', function () {
        expect(subject).to.be.an('object');
    });

    it('should have expected keys', function () {
        expect(subject).to.have.keys([
            'VERSION',
            'elements',
        ]);
    });

    describe('.VERSION', function () {
        beforeEach(function () {
            subject = nonesuch.VERSION;
        });

        it('should exist', function () {
            expect(subject).to.exist;
        });

        it('should be a string', function () {
            expect(subject).to.be.a('string');
        });

        it('should match "version" in package.json', function () {
            expect(subject).to.eq(pkg.version);
        });
    });

    describe('.elements', function () {
        beforeEach(function () {
            subject = nonesuch.elements;
        });

        it('should exist', function () {
            expect(subject).to.exist;
        });

        it('should be an object', function () {
            expect(subject).to.be.an('object');
        });

        it('should match "elements" module', function () {
            expect(subject).to.eq(elements);
        });
    });
});
