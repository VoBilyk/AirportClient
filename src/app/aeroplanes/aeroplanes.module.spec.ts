import { AeroplanesModule } from './aeroplanes.module';

describe('AeroplanesModule', () => {
  let aeroplanesModule: AeroplanesModule;

  beforeEach(() => {
    aeroplanesModule = new AeroplanesModule();
  });

  it('should create an instance', () => {
    expect(aeroplanesModule).toBeTruthy();
  });
});
