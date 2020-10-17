import { MAKE_FALSE, TOGGLE } from './action';

export function toggle(mainIndex, index) {
  return {
    type: TOGGLE,
    data: {
      mainIndex,
      index,
    },
  };
}

export function makeFalse(mainIndex, index) {
  return {
    type: MAKE_FALSE,
    data: {
      mainIndex,
      index,
    },
  };
}