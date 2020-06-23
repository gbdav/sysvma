import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { form, Typography, Grid, TextField } from '@material-ui/core'

const  ClienteForm = ({ open, _FormCliente, datos, fnGuardar }) => {
  const [ cliente, setCliente ] = React.useState(datos)
  const _clienteDF = 'clienteDatosFactura'
  
  const handleCliente = (name) => (event) => {
    setCliente({ ...cliente, [name]: event.target.value });
  };

  const handleDFCliente = (name) => (event) => {
    const clienteDF = Object.assign({}, cliente[_clienteDF])
    clienteDF[name] = event.target.value;

    setCliente({ ...cliente, [_clienteDF]: clienteDF});
  };

  const _guardar = () => {
    const status = fnGuardar( cliente )
    if(status){
      setCliente(datos)
      _FormCliente(false)
    }
  }

  return (
    <div>
      <Dialog
        open={ open }
        fullWidth={ true }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Nuevo registro"}</DialogTitle>
        <DialogContent>
          <form autoComplete="off">
            <TextField 
              autoFocus
              margin="dense"
              id="nombre"
              label="Nombre"
              value={ cliente.nombre }
              type="text"
              fullWidth
              size="small"
              onChange={ handleCliente('nombre') } />

            <Typography variant="subtitle1" align="center" color="inherit">Datos de facturación</Typography >

            <Grid container spacing={1}>
              <Grid item xs={5}>
                <TextField
                  margin="dense"
                  id="rfc"
                  label="RFC"
                  value={ cliente[_clienteDF].rfc }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('rfc') } />
              </Grid>
              <Grid item xs={7}>
                <TextField
                  margin="dense"
                  id="razon_social"
                  label="Razón social"
                  value={ cliente[_clienteDF].razon_social }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('razon_social') } />
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  margin="dense"
                  id="calle"
                  label="Calle"
                  value={ cliente[_clienteDF].calle }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('calle') } />
              </Grid>  
              <Grid item xs={3}>
                <TextField 
                  margin="dense"
                  id="num_ext"
                  label="Num. ext."
                  value={ cliente[_clienteDF].num_ext }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('num_ext') } />
              </Grid>
              <Grid item xs={3}>
                <TextField 
                  margin="dense"
                  id="num_int"
                  label="Num. int."
                  value={ cliente[_clienteDF].num_int }
                  type="text"
                  fullWidth
                  onChange={ handleDFCliente('num_int') } />
              </Grid>    
            </Grid>

            <TextField 
            autoFocus
            margin="dense"
            id="colonia"
            label="Colonia"
            value={ cliente[_clienteDF].colonia }
            type="text"
            fullWidth
            size="small"
            onChange={ handleDFCliente('colonia') } />

            <Grid container spacing={1}>
            <Grid item xs={5}>
                <TextField 
                  autoFocus
                  margin="dense"
                  id="estado"
                  label="Estado"
                  value={ cliente[_clienteDF].estado }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('estado') } />
              </Grid>

              <Grid item xs={5}>
                <TextField 
                  autoFocus
                  margin="dense"
                  id="municipio"
                  label="Municipio"
                  value={ cliente[_clienteDF].municipio }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('municipio') } />
              </Grid>

              <Grid item xs={2}>
                <TextField 
                  autoFocus
                  margin="dense"
                  id="codigo_postal"
                  label="C.P."
                  value={ cliente[_clienteDF].codigo_postal }
                  type="text"
                  fullWidth
                  size="small"
                  onChange={ handleDFCliente('codigo_postal') } />
              </Grid>
            </Grid>
          </form> 
        </DialogContent>
        <DialogActions>
          <Button onClick={ () => _FormCliente({ status: false }) } color="primary">
            Cancelar
          </Button>
          <Button onClick={ () => _guardar() } color="primary" autoFocus>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ClienteForm;