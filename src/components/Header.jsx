import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Button, Card } from 'reactstrap';
import { FaPlus, FaArrowCircleRight } from 'react-icons/fa';
import "../index.css"

const Header = () => {

    const location = useLocation();
    return (

        <Card className='header bg-info border-0 '>
            <h3>
                Lista de Compras
            </h3> 
            {
                location.pathname === '/' ? 
                    <Link to="/new">
                        <Button outline color="success">Novo Item <FaPlus/></Button>
                    </Link>
                    :
                    <Link to="/">
                        <Button outline color="success">Voltar <FaArrowCircleRight/></Button>
                    </Link>
            }
        </Card>
    )
}

export default Header