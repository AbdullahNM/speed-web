import Card from 'react-bootstrap/Card';
import image1 from "../assets/pic2.jpeg"
import '../css/ImageSlide.css'
function ImgOverlayExample() {
  return (
    <Card className="bg-light text-black">
      <Card.Img src={image1} alt="Card image" style={{ height: '90vh'}} className='cardimage' />
      <Card.ImgOverlay>
        <Card.Title style={{justifyContent:'center',padding: '100px 20px 30px 40px'}}>Speed Cargo Movers</Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;