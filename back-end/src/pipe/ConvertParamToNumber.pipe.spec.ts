import { ParseIntParamsPipe } from './ConvertParamToNumber.pipe';

describe('NumPipe', () => {
  it('should be defined', () => {
    expect(new ParseIntParamsPipe()).toBeDefined();
  });
});
