import react from 'react';
import { Form, Col, Row, Button  } from 'react-bootstrap';

const Search = ({handleChange, handleSubmit, text}) => {

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control
                    placeholder='search characters'
                    type='text'
                    value={text}
                    onChange={handleChange}
                    />
                </Col>
                <Col md='auto'>
                    <Button type='submit' variant='dark'>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
        </>
    );
};

export default Search;