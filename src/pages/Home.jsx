import React from 'react'
import { Container } from 'reactstrap'
import FetchItems from '../components/FetchItems'
import "../index.css"
import Header from '../components/Header'

const Home = () => {
  return (
    <Container className='center-container'>
        <div>
            <Header />
            <FetchItems />
        </div>
    </Container>
  )
}

export default Home;