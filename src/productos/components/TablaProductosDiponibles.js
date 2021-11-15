import Productos1 from "./Productos";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Productos = [
    {
        id : "GL2-303BG",
        marca : "Luminex",
        title: "TOMACORRIENTE BLANCO",
        description: "TOMACORRIENTE DOBLE P/T 15A BLANCO",
        price: 6000,
        category: "Hogar",
        url:"https://s3.amazonaws.com/iecommerce2019/121102101003/121102101003.jpg", 
    },
    {
        id: "GL2-010B",
        marca : "Luminex",
        title: "INTERRUPTOR",
        description: "INTERRUPTOR SENCILLO BLANCO",
        price: 4903,
        category: "Hogar",
        url: "https://s3.amazonaws.com/iecommerce2019/121103101016/121103101016.jpg",
    },
    {
        id: "GL029A9W6",
        marca : "VIE",
        title: "BOMBILLO LED",
        description: "BOMBILLO LED A60 9W E27 100/240V 6500K 807 lm 15H",
        price: 3300,
        category: "Iluminacion",
        url: "https://s3.amazonaws.com/iecommerce2019/106103101009/106103101009.jpg",
    },
    {
        id: "ABT7PDU160B",
        marca : "Schneider Electric",
        title: "transformador de tensión",
        description: "transformador de tensión - 230..400 V - 2 x 24 V - 1,6 KVA SKU:ABT7PDU160B",
        price: 1200000,
        category: "ELECTRICA",
        url: "https://download.schneider-electric.com/files?p_Doc_Ref=ABT7PDU100B_PF106450SE&p_File_Type=rendition_520_jpg",
    },
    {
        id: "CP2X4",
        marca : "TERCOL",
        title: "CAJA 5800 RECTANGULAR",
        description: "CAJA 5800 RECTANGULAR PVC 2Pulg. X 4Pulg. RETIE BLANCO",
        price: 483,
        category: "Electrica",
        url: "https://s3.amazonaws.com/iecommerce2019/144129100315/144129100315.jpg",
    },
    {
        id: "6177005",
        marca : "NACIONAL",
        title: "CHAZO PLASTICO",
        description: "CHAZO PLASTICO 1/ 4Pulg. X 1 1/4Pulg",
        price: 31,
        category: "SOPORTE",
        url: "https://s3.amazonaws.com/iecommerce2019/144111103002/144111103002.jpg",
    },
  
];


  return (
    <Container>
      <Row>
        {Productos.map((Productos) => (
          <Col xs={4}>
            <Productos1 Productos={Productos} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
