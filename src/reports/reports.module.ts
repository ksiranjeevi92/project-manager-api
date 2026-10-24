import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TaskModule } from '../tasks/tasks.module';
import { ClockModule } from '../common/clock.module';

@Module({
  providers: [ReportsService],
  controllers: [ReportsController],
  imports: [TaskModule, ClockModule],
})
export class ReportsModule {}
