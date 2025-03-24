import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import AddTransactionModal from './components/AddTransactionModal';

function App() {

   const [showModal , setShowModal] = useState(false);
  return (
    <div className='d-flex flex-column vh-100'>
    <Header />
   
        <Container className='flex-grow-1'> 
        <Row>
            <Col>
            <h2 className='text-center mb-3' > Expense & Income Tracker </h2>
            </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}> 
            <div className='p-3 border rounded m-1'>
              <h5> Total Income </h5>
              <h4 className='text-success'> $200</h4>
            </div>
          </Col>
          <Col xs={12} md={4}>
          <div className='p-3 border rounded m-1'>
              <h5> Total Expense </h5>
              <h4 className='text-danger'> $300</h4>
            </div>
          </Col>
          <Col xs={12} md={4}>
          <div className='p-3 border rounded m-1'>
              <h5> Balance </h5>
              <h4 className='text-success'> -$100</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col >
          <Button variant="info m-2 float-end" onClick={() =>{ setShowModal(true)}}> + Add Entry</Button>
          </Col>
         
        </Row>
      </Container>
       <AddTransactionModal show={showModal} onHide={()=>{ setShowModal(false)}} />
    <Footer />
   </div>
  )
}

export default App
