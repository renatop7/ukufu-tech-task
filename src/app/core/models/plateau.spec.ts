import { Plateau } from './plateau';

describe('Plateau', () => {
  it('should create an instance', () => {
    const coord = { x: 1, y: 1 };
    expect(new Plateau(coord)).toBeTruthy();
  });
});
