import axios from 'axios';
const config = {
  headers: {
    timeout: `${process.REACT_APP_AXIOS_TIMEOUT}`
  }
};
export const getRates = async () => {
  return await axios
    .get(`${process.VETA_BASE_URL}/rates`, config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const addRates = async (rateReq) => {
  return await axios
    .post(`${process.VETA_BASE_URL}/rates`, rateReq, config)
    .then((res) => res.data)
    .catch((error) => error);
};
