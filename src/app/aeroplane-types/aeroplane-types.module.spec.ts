import { AeroplaneTypesModule } from './aeroplane-types.module';

describe('AeroplaneTypesModule', () => {
  let aeroplaneTypesModule: AeroplaneTypesModule;

  beforeEach(() => {
    aeroplaneTypesModule = new AeroplaneTypesModule();
  });

  it('should create an instance', () => {
    expect(aeroplaneTypesModule).toBeTruthy();
  });
});
