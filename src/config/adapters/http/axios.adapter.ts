import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Option {
  baseUrl: string,
  params: Record<any, any>
}

export class AxiosAdapter implements HttpAdapter {

  private axiosInstance: AxiosInstance

  constructor( options: Option ){
    this.axiosInstance = axios.create({
      baseURL : options.baseUrl,
      params  : options.params
    })
  }

  async get<T>(url: string, options?: AxiosRequestConfig<any> | undefined): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options)
      return data
    } catch (error) {
      throw new Error(`Error fetch ${url}`)
    }
  }

}