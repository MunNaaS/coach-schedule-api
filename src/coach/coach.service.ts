import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, In, Brackets } from 'typeorm'
import { Coach } from '../entity/Coach'
import { Schedule } from '../entity/Schedule'
import * as moment from 'moment'

@Injectable()
export class CoachService {
  constructor (
    @InjectRepository(Coach)
    private readonly coachRepository: Repository<Coach>,
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  findAll (): Promise<Coach[]> {
    return this.coachRepository.find()
  }

  async findMe (): Promise<Coach> {
    let me = await this.coachRepository.findOne({
      where: {
        id: 1,
      },
      relations: ['schedules'],
    })
    return me
  }

  async saveMySchedule (schedule: any): Promise<any> {
    let me = await this.findMe()
    let mySchedulesDeleted = await this.scheduleRepository.createQueryBuilder().delete()
    .where({ coach: me })
    .andWhere(new Brackets(qb => {
      qb.where('start_date = :startDate', {
        startDate: moment(schedule.startDate).format('YYYY-MM-DD HH:mm:ss'),
      },
      ).orWhere('end_date = :endDate', {
        endDate: moment(schedule.endDate).format('YYYY-MM-DD HH:mm:ss'),
      })
    })).execute()

    let newSchedule = await this.scheduleRepository.save({
      coach: me,
      ...schedule,
    })
    delete newSchedule.coach
    return newSchedule
  }
}
