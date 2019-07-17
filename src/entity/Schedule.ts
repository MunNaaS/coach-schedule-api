import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Coach } from './Coach'

@Entity('schedules')
export class Schedule {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => Coach)
  @JoinColumn({ name: 'coache_id' })
  coach: Coach

  @Column({ name: 'start_date' })
  startDate: Date

  @Column({ name: 'end_date' })
  endDate: Date

}
