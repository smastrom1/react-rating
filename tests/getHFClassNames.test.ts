import { getHalfFillClassNames } from '../src/getHFClassNames';

import { CSSClassName } from '../src/internalTypes';

const ratingValues = [1, 2, 3, 4, 5];

const Test1 = `It should return an array, whose value at the intersectionIndex
has a special className if halfFillMode equals to "box"`;

const X: CSSClassName = 'rar--hf-box-int';
const I: CSSClassName = 'rar--hf-box-on';
const O: CSSClassName = 'rar--hf-box-off';

test(Test1, () => {
  expect(getHalfFillClassNames(0.4, ratingValues, 'box')).toStrictEqual([X, O, O, O, O]);
  expect(getHalfFillClassNames(1.5, ratingValues, 'box')).toStrictEqual([I, X, O, O, O]);
  expect(getHalfFillClassNames(2.33, ratingValues, 'box')).toStrictEqual([I, I, X, O, O]);
  expect(getHalfFillClassNames(3.33, ratingValues, 'box')).toStrictEqual([I, I, I, X, O]);
  expect(getHalfFillClassNames(4.33, ratingValues, 'box')).toStrictEqual([I, I, I, I, X]);
});

const Test2 = `It should return an array, whose value at the intersectionIndex and
all values before have an active className if halfFillMode equals to "svg"`;

const ON: CSSClassName = 'rar--hf-svg-on';
const _: CSSClassName = 'rar--hf-svg-off';

test(Test2, () => {
  expect(getHalfFillClassNames(0.41, ratingValues, 'svg')).toStrictEqual([ON, _, _, _, _]);
  expect(getHalfFillClassNames(1.51, ratingValues, 'svg')).toStrictEqual([ON, ON, _, _, _]);
  expect(getHalfFillClassNames(2.33, ratingValues, 'svg')).toStrictEqual([ON, ON, ON, _, _]);
  expect(getHalfFillClassNames(3.33, ratingValues, 'svg')).toStrictEqual([ON, ON, ON, ON, _]);
  expect(getHalfFillClassNames(4.33, ratingValues, 'svg')).toStrictEqual([ON, ON, ON, ON, ON]);
});
