import Card from 'react-bootstrap/Card';
import image1 from "../assets/pic2.jpeg"
import '../css/ImageSlide.css'
function ImgOverlayExample() {
  const textStyle = {
    fontSize: 'xxx-large',
    fontWeight: 'bold',
    textWrap: 'wrap',
    color: '#f04802',
    content: 'left',
    padding: '5vh 0',
    width: '100%',
    height: '100%', 
    boxSizing: 'border-box'
  }
  return (
    <Card className="bg-dark text-light opacity-90" >
      <Card.Img src={image1} alt="Card image" style={{ height: '90vh'}} className='cardimage' />
      <Card.ImgOverlay>
        <Card.Title className="d-flex justify-content-evenly"style={{...textStyle,justifyContent:'center'}}>Speed Cargo Movers</Card.Title>
        <Card.Text>
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;