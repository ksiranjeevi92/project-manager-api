import { Injectable } from '@nestjs/common';

import { TaskService } from '../tasks/task.service';
import { ClockService } from '../common/clock.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly tasksService: TaskService,
    private readonly clockService: ClockService,
  ) {}
  summary() {
    const tasks = this.tasksService.findAll();

    return {
      total: tasks.length,
      completed: tasks.filter((tasks) => tasks.status == 'done').length,
      generatedAt: this.clockService.new().toISOString(),
    };
  }
}
