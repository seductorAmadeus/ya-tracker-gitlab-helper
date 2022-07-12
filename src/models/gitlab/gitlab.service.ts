import { Injectable } from '@nestjs/common';
import { GitlabAPI } from '../../config/api/gitlabAPI';

@Injectable()
export class GitlabService {
  constructor(private readonly gitlabAPI: GitlabAPI) {}

  async publishIssue(
    projectId: number,
    issueTitle: string,
    issueDescription: string,
  ): Promise<string> {
    const res = await this.gitlabAPI.postIssue(
      projectId,
      issueTitle,
      issueDescription,
    );

    const data = res.data;

    return data.web_url;
  }
}
