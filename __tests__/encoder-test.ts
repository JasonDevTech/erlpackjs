jest.dontMock('../src/index.ts');

import { pack } from '../src';

describe('packs', () => {
    it('an object', () => {
        const packed = pack({ x: 1n });
        const expected = new Uint8Array([
            131, 116, 0, 0, 0, 1, 109, 0, 0, 0, 1, 120, 111, 0, 0, 0, 1, 0, 1,
        ]);

        expect(packed).toEqual(expected);
    });
});
