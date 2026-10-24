import type { TaskStatus } from '../task.type';

export class UpdateTasksDto {
  title?: string;
  status?: TaskStatus;
}
