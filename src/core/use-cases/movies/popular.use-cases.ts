import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesPopularUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieResponse>('/popular')
    return popular.results.map( MovieMapper.fromMovieDBResultToEntity )
  } catch (error) {
    throw new Error("popular");
  }
}