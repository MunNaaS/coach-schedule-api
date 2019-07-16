import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Coach } from './Coach'

@Entity()
export class Schedule {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Coach, coach => coach.schedules)
  coach: Coach

  @Column()
  startDate: string

  @Column()
  endDate: string

}
