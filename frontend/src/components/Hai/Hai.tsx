import React from 'react';
import { Img } from './HaiStyle'

type HaiType = 'm'|'p'|'s'|'z'

type Props = {
  type: HaiType,
  number: number,
}

export const Hai: React.FC<Props> = ({
  type = 'm',
  number = 1,
}) => {

  const isValidNumberMinMax = (min: number, max: number): boolean => {
    return (min <= number) && (number <= max)
  }

  const isValidHaiNumber = (): boolean => {
    switch (type) {
      case 'z':
        return isValidNumberMinMax(1, 7);
      case 'm':
      case 'p':
      case 's':
        return isValidNumberMinMax(1, 9);
      default:
        return false
    }
  }

  const defaultHaiLink = `/images/hai/m1.png`
  const haiLink = `/images/hai/${type}${String(number)}.png`

  const haiSrc = isValidHaiNumber() ? haiLink : defaultHaiLink

  return <Img src={haiSrc} alt={`Hai-${type}-${number}`}/>
};
