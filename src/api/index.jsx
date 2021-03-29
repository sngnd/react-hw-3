import config from "../config.json";
import axios from "axios";

const getPost = (date, isRange) => {
  if (!isRange) {
    return axios.get(config.url, {
      params: {
        api_key: config.api_key,
        date: date,
      },
    });
  } else {
    const arrayOfDate = date.split("/");
    const startDate = arrayOfDate[0];
    const endDate = arrayOfDate[1];
    return axios.get(`${config.url}`, {
      params: {
        api_key: config.api_key,
        start_date: startDate,
        end_date: endDate,
      },
    });
  }
};

export { getPost };
