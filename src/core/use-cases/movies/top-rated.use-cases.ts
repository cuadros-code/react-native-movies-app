import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]>  => {
  try {
    const topRated = await fetcher.get<MovieResponse>('/top_rated')
    return topRated.results.map( MovieMapper.fromMovieDBResultToEntity )
  } catch (error) {
    throw new Error('top_rated')
  }
}