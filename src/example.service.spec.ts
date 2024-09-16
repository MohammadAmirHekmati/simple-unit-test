import { Test, TestingModule } from '@nestjs/testing';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleService],
    }).compile();

    service = module.get<ExampleService>(ExampleService);
  });

  it('should return "Test String"', () => {
    expect(service.getString()).toBe('Test String');
  });
  
  it('should not return an incorrect string', () => {
    expect(service.getString()).not.toBe('Incorrect String');
  });

  it('should return 42', () => {
    expect(service.getNumber()).toBe(42);
  });
  
  it('should not return an incorrect number', () => {
    expect(service.getNumber()).not.toBe(24);
  });

  it('should return true', () => {
    expect(service.getBoolean()).toBe(true);
  });
  
  it('should not return false', () => {
    expect(service.getBoolean()).not.toBe(false);
  });

  it('should return an array [1, 2, 3]', () => {
    expect(service.getArray()).toEqual([1, 2, 3]);
  });
  
  it('should not return an incorrect array', () => {
    expect(service.getArray()).not.toEqual([4, 5, 6]);
  });

  it('should return an object with name and age', () => {
    const result = service.getObject("Mohammad Amir",23);
    expect(result).toEqual({name: "Mohammad Amir",age:23});
  });

  it("should check the object property types",()=>{
    const result=service.getObject("Mohammad Amir",23)
    expect(typeof result.name).toEqual("string")
    expect(typeof result.age).toEqual("number")
  })
  
    
});
