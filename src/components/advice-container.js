import React from 'react';
import { useQuery } from 'react-query';
import Container from 'react-bootstrap/Container';
import CircleIcon from './circle-icon'
import DividerIcon from './divider-icon'
import QuoteDisplay from './quote-display'
import Spinner from 'react-bootstrap/Spinner'

const AdviceContainer = () => {
  const { isLoading, error, data } = useQuery('advice', () =>
    fetch('https://api.adviceslip.com/advice').then(res =>
      res.json()
    )
  )
  return (
    <Container className="advice-container">
      {isLoading ?  <Spinner /> : error ? error :
       (
        <>
          <QuoteDisplay 
            advice={data} 
          />
          <DividerIcon />
          <CircleIcon />
        </>
        )
    }
      
    </Container>
  )
}

export default AdviceContainer;