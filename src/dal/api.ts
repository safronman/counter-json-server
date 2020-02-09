import axios from "axios"

export const instance = axios.create({
    baseURL: "http://localhost:3004/counter"
});

interface ICounterResponse {
    value: number
}

const api = {
    async getCounterValue(): Promise<number> {
        let response = await instance.get<ICounterResponse>('');
        return response.data.value
    },
    async incrementCounterValue(value: number): Promise<number> {
        let response = await instance.patch<ICounterResponse>('', {value});
        return response.data.value
    }
};
export default api
