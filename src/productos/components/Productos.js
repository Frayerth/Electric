import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Productos1 = ({ Productos }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <center>
          <h2>{Productos.marca}</h2>
        </center>
      </Card.Header>
      <Card.Img
        variant="top"
        src={Productos.url}
        width={300}
        height={300}
        alt="300x300"
        rounded
      />
      <Card.Body>
        <Card.Title>{Productos.title}</Card.Title>
        <Card.Text>{Productos.description}</Card.Text>
        <Button variant="danger" size="sm">
          ${Productos.price}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger" size="sm">
          {Productos.category}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Productos1;
