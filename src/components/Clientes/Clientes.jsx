import React from 'react';
import { connect } from 'react-redux'; 
import MaterialTable from "material-table";

import { ClienteLista, FormCliente, NuevoCliente,  } from '../../actions/clienteAction'

import ClienteForm from '../Clientes/ClienteForm'

const Clientes = ({ rcliente, _FormCliente, _NuevoCliente }) => {
    const { columns, clienteForm, cliente } = rcliente;
    const tableRef = React.useRef();

    return(
        <React.Fragment>
            <MaterialTable
              title="Clientes"
              tableRef={ tableRef }
              options={
                {
                  exportButton: true,
                  exportAllData: true,
                  pageSize: 3,
                  pageSizeOptions: [3,5,10,20,50],
                  columnsButton: true,
                  search: true
                }
              }
              columns={ columns }
              data={ query => ClienteLista(query) }
              actions={[
                {
                  icon: 'refresh',
                  tooltip: 'Refrescar',
                  isFreeAction: true,
                  onClick: () => tableRef.current && tableRef.current.onQueryChange(),
                },
                {
                    icon: 'addBox',
                    tooltip: 'Nuevo',
                    isFreeAction: true,
                    onClick: (e, rowData) => _FormCliente({ status: true })
                }
              ]}
              localization={{
                toolbar: {
                  searchPlaceholder: "Buscar ...",
                }
              }}              
            />
            <ClienteForm 
              open={ clienteForm }
              _FormCliente={ _FormCliente }
              datos={ cliente }
              fnGuardar={ _NuevoCliente }
            />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
  return{
    _FormCliente: (datos) => dispatch( FormCliente(datos) ),
    _NuevoCliente: (datos) => dispatch( NuevoCliente(datos) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);