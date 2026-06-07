import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(
    @Query('title') title?: string,
    @Query('genre') genre?: string,
  ): Promise<Movie[]> {
    return this.moviesService.findAll(title, genre);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(Number(id));
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() movie: Partial<Movie>) {
    return this.moviesService.update(Number(id), movie);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(Number(id));
  }
}
