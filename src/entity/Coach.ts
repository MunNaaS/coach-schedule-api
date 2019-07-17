import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Schedule } from './Schedule'

@Entity('coaches')
export class Coach {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(type => Schedule, schedule => schedule.coach)
  schedules: Schedule[]

}
