# erlpackjs

ErlpackJS is a fast encoder and decoder for the Erlang Term Format (version 131) for JavaScript based on [erlpack](https://www.npmjs.com/package/erlpack) supporting the browser and node.

![npm](https://img.shields.io/npm/v/erlpackjs?style=for-the-badge) ![npm](https://img.shields.io/npm/dt/erlpackjs?style=for-the-badge) ![CircleCI](https://img.shields.io/circleci/build/github/SemperFortis/erlpackjs?style=for-the-badge&token=14cb29543eed3a469fb59a9e0d100281579dac98) ![Maintenance](https://img.shields.io/maintenance/yes/2021?style=for-the-badge)

## Installation

```bash
$ yarn add erlpackjs
```

## Things that can be packed

-   [x] Null
-   [x] Booleans
-   [x] Strings
-   [ ] Atoms
-   [x] Unicode Strings
-   [x] Floats
-   [x] Integers
-   [ ] Longs
-   [ ] Longs over 64 bits
-   [x] Objects
-   [x] Arrays
-   [ ] Tuples
-   [ ] PIDs
-   [ ] Ports
-   [ ] Exports
-   [ ] References

## Usage

### How to pack

```js
import { pack } from 'erlpackjs';

const packed = pack({ a: true, list: ['of', 3, 'things', 'to', 'pack'] });

console.log(packed);
```

### How to unpack

Note: Unpacking requires the binary data be a Uint8Array or Buffer.

```js
import { unpack } from 'erlpackjs';

const packed = Buffer.from('', 'binary');
let unpacked = null;

try {
    unpacked = unpack(packed);

    console.log(unpacked);
} catch (err) {
    // Got an exception parsing
    console.log(err);
}
```
