import { signupSchema } from 'src/Schemas/joi-auth-schema';
import { JoiValidationPipe } from './joi-validation.pipe';

describe('JoiValidationPipe', () => {
  it('should be defined', () => {
    expect(new JoiValidationPipe(signupSchema)).toBeDefined();
  });
});
