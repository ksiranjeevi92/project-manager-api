import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './tasks/tasks.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [TaskModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
