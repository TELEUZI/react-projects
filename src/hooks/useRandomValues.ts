import { useState } from 'react';
import { HexColor } from '../interfaces/hex-color';
import getRandomColor from '../utils/color-randomizer';
import getRandomNumber from '../utils/number-randomizer';

type State = {
  color: HexColor;
  number: number;
};
export default function useRandomValues(): [
  state: State[],
  createNewBlock: () => void,
  deleteLast: () => void,
] {
  const [randomValues, setValues] = useState<State[]>([]);
  const resetValues = () =>
    setValues((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
  const createBlock = () =>
    setValues((prevState) => [
      ...prevState,
      { color: getRandomColor(), number: getRandomNumber() },
    ]);
  return [randomValues, createBlock, resetValues];
}
