import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: 'LoggerServiceAppService',
          useValue: {
            constructor: jest.fn(),
            log: jest.fn(),
          },
        },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getHello', async () => {
    const result = service.getHello();
    expect(result).toEqual('Hello World!');
  });
});
