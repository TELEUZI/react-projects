import { HexColor } from '../interfaces/hex-color';

export default function getRandomColor(): HexColor {
  return <HexColor>(
    `#${(Math.random() * 0xffffff).toString(16).toUpperCase().slice(0, 6)}`
  );
}
