import { Controller, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { GitlabService } from './gitlab.service';
import { TrackerService } from './../tracker/tracker.service';

@Controller('gitlab')
export class GitlabController {
  constructor(
    private readonly gitlabService: GitlabService,
    private readonly trackerService: TrackerService,
  ) {}

  /**
   * Create gitlab issue and post link to the issue as a comment in yandex tracker
   *
   * @param {string} gitlabProjectId - The project ID on gitlab.
   * @param {string} trackerIssueId - The issue id on yandex tracker.
   * @param {string} title - The issue title.
   * @param {string} description - The issue description.
   *
   * @returns {Promise} Promise object respresents the gitlab issue url
   */
  @Post('/project/:gitlabProjectId/tracker/issue/:trackerIssueId')
  async postIssue(
    @Param('gitlabProjectId', new ParseIntPipe()) gitlabProjectId: number,
    @Param('trackerIssueId') trackerIssueId: string,
    @Query('title')
    title: string,
    @Query('description') description: string,
  ): Promise<any> {
    const issueUrl = await this.gitlabService.publishIssue(
      gitlabProjectId,
      title,
      description,
    );

    const commentText = `Issue: ${issueUrl}`;

    await this.trackerService.publishComment(trackerIssueId, commentText);

    return issueUrl;
  }
}
