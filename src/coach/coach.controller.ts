import { Controller, Get, Body, Post } from '@nestjs/common'
import { CoachService } from './coach.service'
import { Coach } from '../entity/Coach'
import { Schedule } from '../entity/Schedule'

@Controller('api/coaches')
export class CoachController {
  constructor (private readonly coachService: CoachService) {}

  @Get()
  getAll (): Promise<Coach[]> {
    return this.coachService.findAll()
  }

  @Get('me')
  getMe (): Promise<Coach> {
    return this.coachService.findMe()
  }

  @Post('me/schedules')
  getMySchedules (@Body() body): Promise<Coach> {
    let schedule = new Schedule()
    schedule.startDate = body.startDate
    schedule.endDate = body.endDate
    return this.coachService.saveMySchedule(schedule)
  }
}
