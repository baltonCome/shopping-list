import React, { useEffect, useState } from 'react'
import { Card, Container, Input } from 'reactstrap';
import api from '../services/api'
import Item from './Item';
import { Spinner, FormGroup } from "reactstrap";
import "../index.css"
import Select from 'react-select'

const FetchItems = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [searchKey, setSearchKey] = useState("");
    const [priority, setPriority] = useState([]);

    const priorities = [
        { value: 'baixa', label: 'Ordenar de forma Ascendente (Baixa para Alta)' },
        { value: 'alta', label: 'Ordenar de forma Descendente (Alta para Baixa)' },
    ];

    const keys = [
        "name",
        "measuring_unit",
        "priority"
    ]

    const sortAsc = (a, b) => {
        const order = ["baixa", "media", "alta"];
        const valueA = order.indexOf(a.priority);
        const valueB = order.indexOf(b.priority);
        return valueA - valueB;
    }

    const sortDesc = (a, b) => {
        const order = ["baixa", "media", "alta"];
        const valueA = order.indexOf(a.priority);
        const valueB = order.indexOf(b.priority);
        return valueB - valueA;
    }

    useEffect(() => {
        api.get("/items").then((res) => {
            let data = {};
            priority.value === "baixa" ? data = res.data.reverse().sort(sortAsc) :
            data = res.data.reverse().sort(sortDesc);
            setItems(data);
        }).catch(error => console.log(error))
    }, [priority]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }, []);

    useEffect( () => {
        async function getItems(){
            await api.get("/items").then((res) => {
                setItems(res.data.reverse());
            }).catch(error => console.log(error))
        }
        getItems()
    },[]);

    if (loading) {
        return (
            <div className="loading-spinner center-container">
            <Spinner />
            </div>
        );
    }

    return (
        <Container>
            <Container>
                <Input
                    className='mb-2'
                    type="search"
                    placeholder='Pesquisar por nome, unidade de medida ou prioridade'
                    value={searchKey}
                    onChange={(e)=> setSearchKey(e.target.value)} 
                />
                <FormGroup>
                    <Select
                        defaultValue={priority}
                        onChange={setPriority}
                        options={priorities}     
                        placeholder={'Selecione aqui para filtrar por prioridade'}
                        isSearchable={true}
                    />
                </FormGroup>
            </Container>
            {
                items.length ? (
                    items
                    .filter(item => keys.some((key) => item[key].toLowerCase().includes(searchKey)))
                    .map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))
                ) : <Card className='text-center m-5 p-3'>
                    Sem itens registados
                    <div className="loading-spinner center-container">
                        <Spinner />
                    </div>
                </Card>
            }
        </Container>
    )
};

export default FetchItems;