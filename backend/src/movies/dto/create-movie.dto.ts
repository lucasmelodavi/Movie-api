import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsNumber()
  releaseYear!: number;

  @IsString()
  genre!: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  rating!: number;
}