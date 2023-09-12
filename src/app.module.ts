import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PersonalService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PersonalService],
})
export class AppModule {}
