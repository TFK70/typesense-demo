import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  name: string

  @Column('text')
  author: string
}
