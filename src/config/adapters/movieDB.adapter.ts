import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: '72c248578199bcc02efdbc32f4595e96',
    language: 'es'
  }
})