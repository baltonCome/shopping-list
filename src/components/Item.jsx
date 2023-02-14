import React from 'react'
import {Card, CardTitle, CardSubtitle, CardText, CardBody ,Badge, Button, Container, Row, Col } from 'reactstrap'
import { FaCheck, FaTrash } from 'react-icons/fa';
import api from '../services/api';

const Item = ({ item }) => {

    const deleteClick = () => {
        api.delete(`items/${item.id}`).then(window.location.href='/')
    }

    const boughtClick = () => {
        api.patch(`items/${item.id}`, {bought: !item.bought} ).then(window.location.href='/')
    }

    return (
        <Container>
            <Card className="my-4 p-3 bg-light border-0">
            <CardBody>
                <CardTitle>
                    <h5>
                        {item.name}
                            <div className="text-muted my-2 font-weight-light float-end small">
                            {item.date}
                        </div>
                    </h5>
                </CardTitle>
                <CardSubtitle>
                    <h5 className='mb-2'>
                        <Badge className="mr-2" pill color="secondary"> 
                            { item.quantity } {' '} 
                            { item.measuring_unit }
                        </Badge>
                    </h5>
                </CardSubtitle>
                <CardText>
                    <h6 className='mb-2'>
                        <Row>
                            <Col className=''>
                                Custo por unidade de medida : <Badge pill color='warning' className="mr-2">
                                {item.price} MZN
                                </Badge>
                            </Col>
                            <Col style={{ textAlign: 'right' }}>
                                Prioridade : 
                                <Badge color={ 
                                    item.priority.toString() === "alta" ? "danger" : 
                                    item.priority.toString() === "media" ? "warning" :
                                    "info"
                                    }>
                                    {item.priority}
                                </Badge>
                            </Col>
                        </Row>
                    </h6>
                </CardText>
                <Row className='mt-4'>
                    <Col className='h5'>
                        Custo Total : <Badge pill className="mr-2">
                            {item.quantity * item.price} MZN
                        </Badge>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <Row className='mx-3'>
                        {
                            !item.bought ?  <Button className= "mb-2" onClick={boughtClick} outline color="success">Marcar comprado<FaCheck/></Button>
                            :
                            <Button className="mb-2" color="success">Comprado <FaCheck/></Button>
                        }
                        <Button onClick={deleteClick}   outline color="danger">Apagar<FaTrash/></Button>
                        </Row>  
                    </Col>
                </Row>
            </CardBody>
            </Card>
        </Container>
    )
};

export default Item;