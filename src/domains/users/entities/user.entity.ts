import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { File } from './file.entity';
import { Message } from './message.entity';
import { TimeRecord } from './time-record.entity';
import { MonthlyWorkHour } from './monthly-work-hour.entity';
import { Api } from './api.entity';
import { Pay } from './pay.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 50 })
  firstName: string;

  @Column({ name: 'last_name', length: 50 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'int', nullable: true })
  age?: number;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber?: number;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @Column()
  password: string;

  @Column({ name: 'is_initinal_password', default: false })
  isInitialPassword: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // リレーション定義
  @OneToOne(() => Pay)
  @JoinColumn()
  pay: Pay;

  @OneToMany(() => File, (file) => file.sender)
  fileSender: File[];

  @OneToMany(() => File, (file) => file.receiver)
  fileReceiver: File[];

  @OneToMany(() => Message, (message) => message.sender)
  messageSender: Message[];

  @OneToMany(() => Message, (message) => message.receiver)
  messageReceiver: Message[];

  @OneToMany(() => TimeRecord, (timeRecord) => timeRecord.user)
  timeRecords: TimeRecord[];

  @OneToMany(() => MonthlyWorkHour, (workHour) => workHour.user)
  monthlyWorkHour: MonthlyWorkHour[];

  @OneToMany(() => Api, (api) => api.user)
  apis: Api[];
}