//Importação do Módulo axios para consumir API
import axios from "axios";

//IP Deve ser substituído pelo endereço da API
const api = axios.create({
  baseURL: `http://127.0.0.1:3000/`,
  headers: { "Cache-Control": "no-store", Pragma: "no-cache", Expires: "0" },
});
axios.defaults.timeout = 1000;
api.defaults.timeout = 1000;

export default api;
