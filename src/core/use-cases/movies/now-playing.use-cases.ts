import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<MovieResponse>('/now_playing')
    return nowPlaying.results.map( MovieMapper.fromMovieDBResultToEntity )
  } catch (error) {
    throw new Error('now-playing')
  }
}