import ListGroup from 'react-bootstrap/ListGroup';

const TextContent =({list}) => {
  return (
    <ListGroup variant="flush" className='text-light bg-dark '>
        {list.map((item, index) => {
            return (
                <ListGroup.Item key={index} className='text-light bg-dark'>
                    <div className="d-flex justify-content-between">
                        <div>{item}</div>
                    </div>
                </ListGroup.Item>
            );
        })}
    </ListGroup>
  );
}

export default TextContent;