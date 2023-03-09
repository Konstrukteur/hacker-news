import { useEffect, useState } from "react";
// import { link } from "react-router-dom";
import Search from "./components/Search";
import Entry from "./components/Entry";
import loading from "./images/loading.gif";
import Pagination from "./components/Pagination";

function App() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  const handlePagination = () => {};

  return (
    <div>
      <Search
        entries={entries}
        setEntries={setEntries}
        setIsLoading={setIsLoading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setTotalPages={setTotalPages}
      />
      <div>
        {isLoading === true && <img src={loading} alt='loading'></img>}
        {entries.length > 1 &&
          entries.map((entry) => (
            <Entry
              key={entry.objectID}
              entry={entry}
              setIsLoading={setIsLoading}
            />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;