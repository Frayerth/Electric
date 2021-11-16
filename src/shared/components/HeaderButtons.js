import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const HeaderButtons = ({setLogin}) => {

  const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
  const [textButton, setTextButton] = useState('Login')
  const [Name, setName] = useState('')

  useEffect(() => {
      if(isAuthenticated){
        setLogin(true);
        setTextButton('Logout')
        setName( user.name)
      }else{
        setLogin(false);
        setTextButton('Login')
        setName('')
      }
  }, [isAuthenticated])

  useEffect(()=>{
      const getToken = async ()=>{
          const accessToken = await getAccessTokenSilently();
          localStorage.setItem('token', accessToken)
      }
      if(isAuthenticated){
          getToken();
      }
  }, [isAuthenticated, getAccessTokenSilently])

    if (isAuthenticated) {
      return (
        <React.Fragment>

          <Link to="/SistemaVentas">
            <Button variant="danger" className="me-3">
              Ingresar Ventas
            </Button>
          </Link>

          <Link to="/VentasRealizadas">
            <Button variant="danger" className="me-3">
              Gestionar Ventas
            </Button>
          </Link>

          <Link to="/CrearProducto">
            <Button variant="danger" className="me-3">
              Ingresar producto
            </Button>
          </Link>

          <Link to="/Gestion">
            <Button variant="danger" className="me-3">
              Gestionar Productos
            </Button>
          </Link>

          <Link to="/ProductosDisponibles">
            <Button variant="danger" className="me-3">
              Productos
            </Button>
          </Link>

          <Link to="/CrearUsuario">
            <Button variant="danger" className="me-3">
              Crear Usuarios
            </Button>
          </Link>

          <Link to="/TablaGestorUsuario">
            <Button variant="danger" className="me-3">
              Gestion Usuarios
            </Button>
          </Link>

          <Link to="/">
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </Link>
        </React.Fragment>
        );
  } 

  return(
      isAuthenticated ?
        <Button
          onClick={()=>logout({ returnTo: window.location.origin})}
          className="btn btn-primary"> {textButton} </Button> :
        <Button
          onClick={() => loginWithRedirect()}
          className="btn btn-primary"> {textButton} </Button>
  )

}

export default HeaderButtons;
