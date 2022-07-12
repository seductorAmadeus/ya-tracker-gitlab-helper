import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GitlabAPI {
  constructor(private readonly httpService: HttpService) {}

  private GITLAB_AUTH_HEADERS = { ['PRIVATE-TOKEN']: process.env.GITLAB_TOKEN };
  private GITLAB_PROJECTS_API = `${process.env.GITLAB_HOST}/api/v4/projects`;

  async postIssue(
    projectId: number,
    issueTitle?: string,
    issueDescription?: string,
  ) {
    const url = new URL(`${this.GITLAB_PROJECTS_API}/${projectId}/issues`);

    if (issueTitle && issueTitle != '')
      url.searchParams.append('title', issueTitle);

    if (issueDescription && issueDescription != '')
      url.searchParams.append('description', issueDescription);

    return await this.httpService.axiosRef.post(url.toString(), null, {
      headers: { ...this.GITLAB_AUTH_HEADERS },
    });
  }
}
