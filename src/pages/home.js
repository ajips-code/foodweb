import LayoutHome from "../app/layout";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Cards from "../components/cards";

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch("https:/www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
    console.log(data);
  }, []
  );

  return (
    <>
      <LayoutHome>
        {loading && <p>Loading..</p>}
        {error && <p>Error</p>}
        {data && (
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            clasName="align-content-stretch d-flex"
          >
            {data.categories.slice(5).map((d) => (
              <Col className="mx-4  my-3 ">
                <Cards data={d} />
              </Col>
            ))}
          </Row>
        )}
      </LayoutHome>
    </>
  );
}

export default Home;
