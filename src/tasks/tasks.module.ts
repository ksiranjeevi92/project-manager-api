import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TaskService } from './task.service';
import {
  TASK_LABEL,
  TASK_OPTIONS,
  TaskOptions,
  HELLO,
  TASK_SERVICE_ALIAS,
} from './tasks.constants';

@Module({
  controllers: [TaskController],
  providers: [
    {
      provide: TaskService,
      useClass: TaskService,
    },
    {
      provide: TASK_OPTIONS,
      useValue: { defaultStatus: 'todo' } as TaskOptions,
    },
    {
      provide: HELLO,
      useValue: 'HELLO',
    },
    {
      provide: TASK_LABEL,
      useFactory: (options: TaskOptions, hello: string) =>
        'New tas starts as' + options.defaultStatus + 'and' + hello,
      inject: [TASK_OPTIONS, HELLO],
    },
    {
      provide: TASK_SERVICE_ALIAS,
      useExisting: TaskService,
    },
  ],
  exports: [TaskService],
  //   providers: [TaskService],
})
export class TaskModule {}
