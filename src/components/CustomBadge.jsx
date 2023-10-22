import React from 'react'
import { Badge, Col} from 'react-bootstrap'
const CustomBadge = ({text}) => {
    const textStyle = {
        fontSize: '1.5 rem',
        fontWeight: 'bold',
        textWrap: 'wrap',
        color: '#000000',
        content: 'left',
        padding: '5vh 0',
        height: '100%', 
        boxSizing: 'border-box',
        backgroundColor: '#f04802',
      }
  return (
    <Col lg={3} md={6} className="text-center mb-5">
    <Badge bg='danger' text='dark' pill className="p-3" style={textStyle}>
      <span className="font-weight-medium">{text}</span>
    </Badge>
  </Col>
  )
}

export default CustomBadge