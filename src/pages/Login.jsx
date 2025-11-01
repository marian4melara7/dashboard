import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export function Login() {
    return (
        <>
            <Container>
                <Navbar className="mb-3" bg="dark" data-bs-theme="dark">
                    
                    <Container>
                        <Navbar.Brand href="#">Minha App</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
            <container>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            </Form.Group>
                            <Button variant="primary" type="Entrar">
                                Entrar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </container>
        </>
    );
}