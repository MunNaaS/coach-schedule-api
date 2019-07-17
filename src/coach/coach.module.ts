import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CoachController } from './coach.controller'
import { CoachService } from './coach.service'
import { Coach } from '../entity/Coach'
import { Schedule } from '../entity/Schedule'

@Module({
  imports: [
    TypeOrmModule.forFeature([Coach]),
    TypeOrmModule.forFeature([Schedule]),
  ],
  controllers: [CoachController],
  providers: [CoachService],
})
export class CoachModule {}
