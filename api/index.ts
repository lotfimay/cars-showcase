import { FilterProps } from "@/types";
import axios from "axios";

export async function fetchCars(filters : FilterProps){

    const {make , model , fuel , year , limit} = filters;
    const options = {
        method: "GET",
        url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel=${fuel}&year=${year}&limit=${limit}`,
        // params: filters,
        headers: {
          "X-RapidAPI-Key":
            `${process.env.RAPID_API_KEY}`,
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const result = await response.data;
        return result;
      } catch (error) {
        throw error;
      }
}