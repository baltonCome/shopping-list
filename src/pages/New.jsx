import Header from '../components/Header'
import NewItem from '../components/NewItem'
import { Container } from 'reactstrap'
import "../index.css"

import React from 'react'

const New = () => {
  return (
    <Container className='center-container'>
        <div className='fit-width'>
            <Header/>
            <NewItem/>
        </div>
    </Container>
  )
}

export default New