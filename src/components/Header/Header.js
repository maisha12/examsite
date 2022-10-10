import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Exam-Site</Navbar.Brand>
                    <Nav className="me-auto">

                        <Link className='ms-2' to="/">Home</Link>
                        <Link className='ms-2' to="/blog">Blog</Link>
                        <Link className='ms-2' to="/blog">About</Link>
                        <Link className='ms-2' to='/statistics'>Statistics</Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
}

export default Header;