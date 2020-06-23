import axios from "axios";
import {
  CLIENTE_OPEN_FORM,
  ACCION_NUEVO_CLIENTE,
  ACCION_LIMPIAR_CLIENTE,
} from "./types";

const urlBase = "http://localhost:8080/api/app";

// Lista de clientes
export const ClienteLista = (query) => {
  const { pageSize, page, search } = query;

  //console.log('query: ', query);
  return new Promise((resolve, reject) => {
    let url = urlBase + "/clientes";
    axios
      .post(url, { pageSize: pageSize, page: page + 1, search: search })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        resolve({
          data: res.data,
          page: res.page - 1,
          totalCount: res.totalCount,
        });
      });
  });
};

//Abrir formulario cliente
export const FormCliente = (datos) => {
  const { status } = datos;
  return {
    type: CLIENTE_OPEN_FORM,
    payload: status,
  };
};

//Guardar cliente nuevo
export const NuevoCliente = (datos) => {
  console.log("Nuevo Cliente: ", datos);
  return (dispatch) => {
    return axios
      .post(urlBase + "/cliente/nuevo", datos)
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        const { status } = res;
        console.log("response nuevo: ", res);
        dispatch({
          type: ACCION_NUEVO_CLIENTE,
          payload: res.datos,
        });
        return status;
      });
  };
};

//Limpiar Cliente
export const LimpiarCliente = () => {
  return (dispatch) => {
    dispatch({
      type: ACCION_LIMPIAR_CLIENTE,
    });
  };
};
