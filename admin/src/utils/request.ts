import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

class HttpService {
    private instance: AxiosInstance

    constructor(options: AxiosRequestConfig) {
        this.instance = this.createAxiosInstance(options)
    }
    private createAxiosInstance(config: AxiosRequestConfig): AxiosInstance {
        return axios.create(config)
    }
}

const service = new HttpService({
    timeout: 5000,
})

export default service

