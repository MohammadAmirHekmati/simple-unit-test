import { Injectable } from "@nestjs/common";

@Injectable()
export class ExampleService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(name: string, age: number): { name: string; age: number } {
    return { name, age };
  }

  getString(): string {
    return 'Test String';
  }

  getNumber(): number {
    return 42;
  }

  getBoolean(): boolean {
    return true;
  }

  getArray(): number[] {
    return [1, 2, 3];
  }
}
