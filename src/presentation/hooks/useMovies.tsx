import { useEffect, useState } from "react"
import { Movie } from "../../core/models/movie.model"
import { moviesNowPlayingUseCase } from "../../core/use-cases/movies/now-playing.use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])

  useEffect(() => {

  }, [])

  const initialLoad = () => {
    const nowPlayingMovie = moviesNowPlayingUseCase(movieDBFetcher)
  }
  

  return {

  }
}

export default useMovies