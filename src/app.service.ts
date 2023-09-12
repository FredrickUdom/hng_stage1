import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { Cat } from './interfaces/cat.interface';
import { personalDetails } from './interface/app.interface';

@Injectable()
export class PersonalService {
  private readonly cats:personalDetails[] = [
    {
      slack_name: 'Fredrick',
      current_day: 'Monday',
      utc_time: Date(),
      track: 'Backend',
      github_file_url: '',
      github_repo_url: 'https://github.com/FredrickUdom/hng_stage1.git',
      status_code: 200
    }
  ];

  findAll(): personalDetails[] {
    return this.cats;
  }
}