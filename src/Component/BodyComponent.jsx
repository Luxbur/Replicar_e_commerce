import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function BodyComponent() {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [imagenesCarrusel, setImagenesCarrusel] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch('https://dummyjson.com/products/category/laptops?limit=6');
        const datos = await respuesta.json();
        setProductosDestacados(datos.products);
        setImagenesCarrusel(datos.products.slice(0, 3));
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="body-component">
      <Container className="mb-5">
        <h2 className="text-center mb-4">Nuestros Productos</h2>
        <Row>
          {productosDestacados.map((producto) => (
            <Col key={producto.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={producto.thumbnail}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>
                    {producto.description.substring(0, 100)}...
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">${producto.price}</span>
                    <span className="text-success">
                      {producto.discountPercentage}% DCTO
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BodyComponent;
