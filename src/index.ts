import Encoder from './encoder';
import Decoder from './decoder';

const pack = (data: any) => {
    const encoder = new Encoder();

    encoder.pack(data);

    return encoder.buffer.slice(0, encoder.offset);
};
    
const unpack = (buffer: Buffer | Uint8Array, { bigintToString = false } = {}) => {
    const decoder = new Decoder(buffer, bigintToString);

    return decoder.unpack();
};

export { pack, unpack };
