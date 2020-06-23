import {
  CLIENTE_OPEN_FORM,
  ACCION_NUEVO_CLIENTE,
  ACCION_LIMPIAR_CLIENTE,
} from "../actions/types";
import { ClienteModel } from "../model/ClienteModel";

let initialState = {
  columns: [
    { title: "ID", field: "id_cliente" },
    { title: "Cliente", field: "nombre" },
    { title: "Fecha", field: "creado_en" },
  ],
  data: [],
  clienteForm: false,
  cliente: Object.assign({}, ClienteModel()),
};
//console.log(Object.assign({}, ClienteModel()));

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENTE_OPEN_FORM:
      return {
        ...state,
        clienteForm: action.payload,
      };
    case ACCION_NUEVO_CLIENTE:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    case ACCION_LIMPIAR_CLIENTE:
      console.log("Limpiar cliente ...", state);
      return {
        ...state,
        cliente: Object.assign({}, ClienteModel()),
      };
    default:
      return state;
  }
};

export const clientData = (state) => state.rcliente;
