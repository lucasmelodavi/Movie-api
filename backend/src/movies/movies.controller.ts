import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { MoviesService } from './movie.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(Number(id));
  }

  @Post()
  create(@Body() movie: Movie) {
    return this.moviesService.create(movie);
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
