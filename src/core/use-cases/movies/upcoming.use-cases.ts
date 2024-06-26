import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieResponse>('/upcoming')
    return upcoming.results.map( MovieMapper.fromMovieDBResultToEntity )
  } catch (error) {
    throw new Error('upcoming')
  }
}