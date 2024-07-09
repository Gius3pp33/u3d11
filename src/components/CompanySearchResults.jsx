import { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions";

const CompanySearchResults = () => {
  const { content, isLoading, hasError, errorMessage } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchJobs(params.company));
  }, [params.company, dispatch]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {isLoading ? (
            <Spinner animation="border" />
          ) : hasError ? (
            <Alert variant="danger">{errorMessage}</Alert>
          ) : (
            content.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
