import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

if (process.env.NODE_ENV === 'dev')
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

@Injectable()
export class TrackerAPI {
  constructor(private readonly httpService: HttpService) {}

  private TRACKER_AUTH_HEADERS = {
    Authorization: `OAuth ${process.env.TRACKER_OAUTH_TOKEN}`,
    ['X-Org-ID']: process.env.TRACKER_ORG_ID,
  };

  async postComment(trackerIssueId: string, text: string) {
    const url = new URL(
      `${process.env.TRACKER_HOST}/v2/issues/${trackerIssueId}/comments`,
    );

    return await this.httpService.axiosRef.post(
      url.toString(),
      { text: text },
      {
        headers: { ...this.TRACKER_AUTH_HEADERS },
      },
    );
  }
}
