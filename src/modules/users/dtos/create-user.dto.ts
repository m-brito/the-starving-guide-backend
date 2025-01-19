import {
  IsEmail,
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @MinLength(6)
  password: string

  @IsOptional()
  @IsString()
  image?: string
}
