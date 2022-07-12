import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GitlabAPI } from './config/api/gitlabAPI';
import { TrackerAPI } from './config/api/trackerAPI';
import { GitlabController } from './models/gitlab/gitlab.controller';
import { GitlabService } from './models/gitlab/gitlab.service';
import { TrackerService } from './models/tracker/tracker.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    HttpModule,
  ],
  controllers: [GitlabController],
  providers: [GitlabService, TrackerService, TrackerAPI, GitlabAPI],
})
export class AppModule {}
