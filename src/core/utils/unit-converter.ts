import { useMemo } from 'react';

export const useRemToPx = (unit: number | string): number | string => {
  const px = useMemo(() => {
    if (typeof unit === 'string' && unit.includes('rem')) {
      const rem = parseFloat(unit.replace(/rem|\s/, ''));
      return remToPx(rem);
    }
    return unit;
  }, [unit]);
  return px;
};

const remToPx = (rem: number): number =>
  parseFloat(getComputedStyle(document.documentElement).fontSize) * rem;
