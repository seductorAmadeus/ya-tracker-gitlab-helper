import { Injectable } from '@nestjs/common';
import { TrackerAPI } from '../../config/api/trackerAPI';

@Injectable()
export class TrackerService {
  constructor(private readonly trackerAPI: TrackerAPI) {}

  async publishComment(trackerIssueId: string, text: string): Promise<void> {
    try {
      await this.trackerAPI.postComment(trackerIssueId, text);
    } catch (error) {
      console.log(error);
    }
  }
}
