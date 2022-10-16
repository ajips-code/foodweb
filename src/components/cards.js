import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.strCategoryThumb} />
      <Card.Body>
        <Card.Title>{data.strCategory}</Card.Title>
        <Card.Text>{data.strCategoryDescription.substring(0, 70)}...</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  );
}
