import { PhonenumberTransformerPipe } from './phonenumber-transformer.pipe';

describe('PhonenumberTransformerPipe', () => {
  it('create an instance', () => {
    const pipe = new PhonenumberTransformerPipe();
    expect(pipe).toBeTruthy();
  });
});
