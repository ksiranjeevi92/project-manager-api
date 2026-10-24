import { Injectable } from '@nestjs/common';

@Injectable()
export class ClockService {
  new() {
    return new Date();
  }
}
