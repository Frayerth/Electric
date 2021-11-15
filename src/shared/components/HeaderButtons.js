import React from "react";
import Button from "react-bootstrap/Button";
//import GoogleLogin from "react-google-login";
import { Auth0Provider } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin}) => {
  const login = (res) => {
    setLogin(true);
    localStorage.setItem("token", res.tokenId);
    console.log(res);
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };

  const loginError = (err) => {
    console.log(err);
  };

  if (isLoggedIn) {
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
  } else {
    return (
      <div>
        <Auth0Provider
          domain="electro1.us.auth0.com"
          clientId="7ueo25P1ucl2X2kToNqfmSjMl39Xs0IU"
          buttonText="Login"
          onSuccess={login}
          onFailure={loginError}
          cookiePolicy={"single_host_origin"}
          //redirectUri={window.location.origin}
        />

      </div>
    );
  }
};

export default HeaderButtons;
