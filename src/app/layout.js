import Footer from "../components/footer";
import { Homenavbar } from "../components/navbar";
import { Container} from "react-bootstrap";

export default function LayoutHome({children}) {
  return (
    <>
      <Homenavbar>
      </Homenavbar>
      <div>
        <Container>
        {children}
        </Container>
      </div>
      <Footer/>
    </>
  );
}
