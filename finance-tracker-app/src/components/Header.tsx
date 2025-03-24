import { Container, Navbar } from "react-bootstrap";

const Header: React.FC = () => {

    return (
        <Navbar expand="lg" className="bg-info mb-2 p-2">
        <Container>
          <Navbar.Brand href="#home">Finance Traker</Navbar.Brand>
        </Container>
      </Navbar>
    );
} 
export default Header;
