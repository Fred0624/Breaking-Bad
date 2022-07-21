import { Link } from 'react-router-dom';
import { Card, Row } from 'react-bootstrap';

const Characters = ({characters}) => {



    return (
        <Row xs={3} md={4} lg={5} xl={6} >
            {characters.map(character => {
                return (
                <Card key={character.char_id} className='card'>
                <Card.Img src={character.img} alt={character.name} className='chaImg'/>
                <Card.Footer>
                    <p>
                    <Link to={'/characters/'+ character.char_id} className='nameLink'>
                    {character.name}
                    </Link>
                    </p>
                </Card.Footer>  
                </Card>
                )
            })}
        </Row>
    );
};

export default Characters;