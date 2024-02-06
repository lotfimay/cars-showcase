import axios from "axios";

export async function fetchCars(){
    const options = {
        method: "GET",
        url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
        params: { cylinders: "12" },
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