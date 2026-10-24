import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  Inject,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTasksDto } from './dto/create-tasks.dto';
import { UpdateTasksDto } from './dto/update-tasks.dto';
import { TASK_LABEL, TASK_SERVICE_ALIAS } from './tasks.constants';

@Controller('tasks')
export class TaskController {
  constructor(
    private taskService: TaskService,
    @Inject(TASK_LABEL) private readonly taskLabel: string,
    @Inject(TASK_SERVICE_ALIAS) private readonly taskAlias: TaskService,
  ) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() dto: CreateTasksDto) {
    return this.taskService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTasksDto) {
    return this.taskService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.remove(id);
  }
}
