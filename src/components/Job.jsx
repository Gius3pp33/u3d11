import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart,FaTrash } from 'react-icons/fa';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const isFavourite = favourites.includes(data.company_name);

  const handleAddFavourite = () => {
    dispatch({ type: "ADD_FAVOURITE", payload: data.company_name });
  };

  const handleRemoveFavourite = () => {
    dispatch({ type: "REMOVE_FAVOURITE", payload: data.company_name });
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        {isFavourite ? (
          <Button variant='danger' onClick={handleRemoveFavourite}>  <FaTrash /> </Button>
        ) : (
          <Button  onClick={handleAddFavourite}><FaHeart/></Button>
        )}
      </Col>
    </Row>
  );
};



export default Job;
