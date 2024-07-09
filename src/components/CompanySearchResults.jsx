// src/components/CompanySearchResults.jsx
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    const getJobs = async () => {
      const setJobs = (jobs) => ({
        type: "SET_JOBS",
        payload: jobs,
      });

      try {
        const response = await fetch(baseEndpoint + params.company);
        if (response.ok) {
          const { data } = await response.json();
          dispatch(setJobs(data));
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
