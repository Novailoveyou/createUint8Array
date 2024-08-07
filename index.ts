const createUint8Array = (length: number) => {
  // 1 byte: [0, 0, 0, 0, 0, 0, 0, 0]
  const uint8 = new Uint8Array(length)

  const addByte = (byte: number, value: number) => (uint8[byte] = value)

  const readBit = (byte: number, bit: number) => (uint8[byte] >> bit) & 0x01

  return { uint8, readBit, addByte }
}

const { uint8, readBit, addByte } = createUint8Array(5)

addByte(0, 10)

console.log(readBit(0, 0))
console.log(readBit(0, 1))
console.log(readBit(0, 2))
console.log(readBit(0, 3))
console.log(readBit(0, 4))
console.log(readBit(0, 5))
console.log(readBit(0, 6))
console.log(readBit(0, 7))
