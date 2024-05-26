import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
        <Form>
            <Form.Group  controlId="formGridEmail">
                <Form.Label>Home</Form.Label>
            </Form.Group>
            <p>
                <Link to="/login">Go back to Login page</Link>
            </p>
        </Form>
    </div>
  )
}
