import { useEffect, useState } from "react";
import { List } from "./list";
import { Filter } from "./filter";

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
    <div className="app">
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
    </div>
  );
}