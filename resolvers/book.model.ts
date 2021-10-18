import { Field }      from '@nestjs/graphql'
import { Int }        from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Book {
  @Field((type) => Int)
  id: number

  @Field()
  name: string

  @Field()
  author: string
}
