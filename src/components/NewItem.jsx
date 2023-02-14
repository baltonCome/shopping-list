import React, { useState } from 'react'
import { Card, Container, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import "../index.css"
import { FaPlus } from 'react-icons/fa'
import api from '../services/api'
import Select from 'react-select';

const NewItem = () => {

    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [metric, setMetric] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [priority, setPriority] = useState("Media")

    const priorities = [
        { value: 'Alta', label: 'Alta' },
        { value: 'Media', label: 'Média' },
        { value: 'Baixa', label: 'Baixa' },
    ];

    const handleSubmit = async (e) => {

        e.preventDefault()
        
        const item = {
            name,
            price,
            quantity,
            measuring_unit : metric,
            priority: priority.value.toLowerCase(),
            date : new Date().toLocaleString()
        }
        await api.post("items", item).then(window.location.href='/')
    } 

    return (
        <Container className='px-4 fit-width'>
            <Form onSubmit={handleSubmit}>
                <Card className="my-4 p-3 bg-light border-0">
                    <CardBody>
                        <CardTitle>
                            <h5>
                                Registar Novo Item
                            </h5>
                        </CardTitle>
                        <FormGroup>
                            <Label>
                                Nome
                            </Label>
                            <Input 
                                type='text'
                                placeholder='Insira o nome do Item'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Preço em Meticais
                            </Label>
                            <Input 
                                type='number'
                                placeholder='Insira o Preço do Item'
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                step="0.1"
                                min={0.1}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Unidade de medida
                            </Label>
                            <Input
                                type='text'
                                placeholder='Ex: Kilogramas'
                                onChange={(e) => setMetric(e.target.value)}
                                value={metric}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Quantidade
                            </Label>
                            <Input 
                                type='number'
                                placeholder='Insira o nome do Item'
                                onChange={(e) => setQuantity(e.target.value)}
                                value={quantity}    
                                min={1}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Prioridade
                            </Label>
                            <Select
                                defaultValue={priority}
                                onChange={setPriority}
                                options={priorities}     
                                placeholder={'Prioridade'}
                                isSearchable={true}
                            />
                        </FormGroup>
                        <div style={{ textAlign: 'right' }}>
                            <Button type='submit' outline color="success">Adicionar <FaPlus/></Button>
                        </div>
                    </CardBody>
                </Card>
            </Form>
        </Container>
    )
}

export default NewItem