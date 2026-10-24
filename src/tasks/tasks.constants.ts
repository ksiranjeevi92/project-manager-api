import { Task } from './task.type';

export type TaskOptions = {
  defaultStatus: Task['status'];
};

export const TASK_OPTIONS = Symbol('TASK_OPTIONS');

export const TASK_LABEL = Symbol('TASK_LABEL');

export const TASK_SERVICE_ALIAS = Symbol('TASK_SERVICE_ALIAS');

export const HELLO = Symbol('HELLO');
