import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEquipoInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;
}