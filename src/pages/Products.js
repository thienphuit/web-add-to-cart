import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios';
import {CartContext} from '../contexts/Cart'

class Products extends React.Component {
  state = {
    products: [],
  };
  componentDidMount(){
      axios.get('https://o24xu.sse.codesandbox.io/products').then(res => {
        this.setState({
          products: res.data
        })
      }).catch(erro => {
        console.log(erro)
      })
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
          <h2>Products</h2>
        <Row>
          {products.map((item) => (
            <Col sm="4">
              <Card key={item.id}>
                <CardImg
                  top
                  width="100%"
                  src={item.imageUrl}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>{item.descriptions}</CardText>
                  <CartContext.Consumer>
                    {({addCart}) => <Button onClick={() => addCart(item)}>Add Cart</Button>}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Products;
