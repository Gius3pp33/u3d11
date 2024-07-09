import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { removeFavourite } from '../redux/actions';

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const handleRemoveFavourite = (company) => {
    dispatch(removeFavourite(company));
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 display-4">Preferiti</h1>
      <ListGroup>
        {favourites.map((company) => (
          <ListGroup.Item key={company} className="d-flex justify-content-between align-items-center">
            <Link to={`/${company}`}>{company}</Link>
            <Button variant="danger" onClick={() => handleRemoveFavourite(company)}>
              <FaTrash />
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Favourites;
