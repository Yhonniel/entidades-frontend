import axios from "axios";

// const API_URL = "https://proyecto-entidad.herokuapp.com/api/entidades";

// export const listEntidades = async () => {
//   return await fetch(API_URL);
// };

export const ENTIDADES_API = axios.create({
  baseURL: "https://proyecto-entidad.herokuapp.com/api",
});
