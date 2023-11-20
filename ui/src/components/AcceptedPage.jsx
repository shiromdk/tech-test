import { createContext, useState, useEffect } from "react";
import AcceptedCard from "./Lead/AcceptedCard";
import LeadSearchBar from "./Lead/LeadSearchBar";
import Loading from "./Lead/Loading";
import useDebounce from "../util/useDebounce";
import InfiniteScroll from "react-infinite-scroll-component";

const AcceptedPageContext = createContext();
export const AcceptedPage = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSearch = async (text) => {
    // Have to reset page state whenever we search
    setData([]);
    setPage(1);
    setSearchTerm(text);
  };
  const fetchData = async (fromSearch) => {
    let url = searchTerm
      ? `http://localhost:8080/api/leads?status=accepted&search=${searchTerm}&page=${page}&limit=5`
      : `http://localhost:8080/api/leads?status=accepted&page=${page}&limit=5`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
        }
      })
      .then((responseJson) => {
        if (fromSearch === true) {
          let newData = [];
          if (responseJson.data) {
            newData = [...responseJson.data];
          }
          setData([...newData]);
        } else {
          let newData = [];
          if (responseJson.data) {
            newData = [...responseJson.data];
          }
          setData([...data, ...newData]);
        }

        setCount(responseJson.count);
        setPage(page + 1);
      });
  };

  useDebounce(
    () => {
      fetchData();
    },
    [searchTerm],
    200
  );
  useEffect(() => {}, [data]);

  return (
    <AcceptedPageContext.Provider
      value={{ data, setData, submitting, setSubmitting }}
    >
      <LeadSearchBar searchFunction={handleSearch} searchTerm={searchTerm} />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={data.length !== count}
        loader={
          <h4>
            <Loading />
          </h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>No more results found</b>
          </p>
        }
      >
        {data.map((job, index) => {
          return <AcceptedCard key={index} job={job} />;
        })}
      </InfiniteScroll>
    </AcceptedPageContext.Provider>
  );
};
