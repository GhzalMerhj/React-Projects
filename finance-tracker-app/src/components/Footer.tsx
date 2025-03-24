import { Container } from "react-bootstrap";

const Footer: React.FC = () =>{
  
    return (
        <footer className="bg-info text-center text-light p-1">
            <Container>
                <p> Ghazal &copy; { new Date().getFullYear() } Practice React   </p>
            </Container>
        </footer>
    )
}
export default Footer;