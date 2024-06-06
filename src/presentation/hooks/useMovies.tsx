import { useEffect, useState } from "react"
import { Movie } from "../../core/models/movie.model"
import { moviesNowPlayingUseCase } from "../../core/use-cases/movies/now-playing.use-cases"
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter"
import { moviesUpcomingUseCase } from "../../core/use-cases/movies/upcoming.use-cases"

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {

    const [ nowPlayingMovie, upcomingMovie ] = await Promise.all([
      moviesNowPlayingUseCase(movieDBFetcher),
      moviesUpcomingUseCase(movieDBFetcher)
    ])

    setNowPlaying(nowPlayingMovie)
    setUpcoming(upcomingMovie)
  }
  

  return {
    nowPlaying,
    isLoading,
    upcoming,
  }
}

export default useMovies