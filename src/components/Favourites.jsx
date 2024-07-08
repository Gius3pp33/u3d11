import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const handleRemoveFavourite = (company) => {
    dispatch({ type: "REMOVE_FAVOURITE", payload: company });
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Preferiti</h1>
      <ListGroup>
        {favourites.map((company) => (
          <ListGroup.Item key={company} className="d-flex justify-content-between align-items-center">
            <Link to={`/${company}`}>{company}</Link>
            <Button variant="danger" onClick={() => handleRemoveFavourite(company)}><FaTrash/></Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Favourites;
