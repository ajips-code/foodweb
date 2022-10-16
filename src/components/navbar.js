import { Container, Nav, Navbar } from "react-bootstrap";
import SearchMeal from "../components/search";

export function Homenavbar() {
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.themealdb.com/images/category/pork.png"
            width="45"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Djie Food
          <Nav className="nav-link ms-5  my-1 mx-5 ml-5 mr-5">
            <Nav.Link href="#home" clasName="home">
              Home
            </Nav.Link>
            <Nav.Link href="#favorit" clasName="favorite">
              Favorite
            </Nav.Link>
          </Nav>
        </Navbar.Brand>
        <SearchMeal />
      </Container>
    </Navbar>
  );
}
