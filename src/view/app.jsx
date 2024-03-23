import { useEffect, useState } from "react";
import { List } from "./list";
import { Filter } from "./filter";
import styled from "styled-components";
 
export function App() {
  const [robotsList, setRobotsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const data_url = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = await fetch(data_url);
        const data = await response.json();
        // console.table(data);
        // console.log(`${data.length} items loaded`);
        setRobotsList(data.map((item) => ({ ...item, show: true })));
      } catch (error) {
        setErrorMsg(`fetch operation failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  return (
    <Div>
      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className="load-label">Loading...</h1>
      ) : (
        <>
          <Filter listData={robotsList} onFilter={setRobotsList} />
          <List listData={robotsList} />
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  background: Cornsilk;
  padding: 10rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  min-width: 60rem;
  /* height: 85vh; */

  & > h1 {
    font-family: "Expletus Sans";
    font-size: 3.5rem;
    font-weight: 400;
    color: maroon;
  }
`;
