import { Movie } from "../../core/models/movie.model";
import { Result } from "../interfaces/movie-db.responses";

export class MovieMapper {

  static fromMovieDBResultToEntity( result: Result ): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date( result.release_date ),
      rating: result.vote_count,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    }
  }

}