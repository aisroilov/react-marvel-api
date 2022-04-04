import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import axios from "axios";
import ItemContainer from "../components/ItemContainer";
import MyPagination from "../components/MyPagination";

const baseUrl = "https://gateway.marvel.com:443/v1/public/";
const publicKey = "68d345344ef8cef38bb626b41a6cbd9c";
// const privateKey = "ef97b414184f926cc6a99c2841b5b19aef1d88ac";
const hash = "17ca025dc7ffe46de524007835669e5f";
// const api = `${baseUrl}characters?limit=20&ts=1&apikey=${publicKey}&hash=${hash}`;

const Home = () => {
  const [characters, setCharecteres] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const itemsPerPage = 20;
  const [nextPage, setNextPage] = useState(0);

  useEffect(() => {
    const api = `${baseUrl}characters?limit=${itemsPerPage}&offset=${nextPage}&ts=1&apikey=${publicKey}&hash=${hash}`;
    const fetch = async () => {
      if (query === "") {
        setLoading(true);
        await axios
          .get(api)
          .then((res) => {
            setCharecteres(res.data.data.results);
            setLoading(false);
            setTotalPages(Math.ceil(res.data.data.total / itemsPerPage));
            // console.log(res.data.data);
          })
          .catch((error) => console.log(error));
      } else {
        await axios
          .get(
            `${baseUrl}characters?nameStartsWith=${query}&ts=1&apikey=${publicKey}&hash=${hash}`
          )
          .then((res) => {
            setCharecteres(res.data.data.results);
            setCurrentPage(0);
            setLoading(false);
            // console.log(res.data.data.results);
          })
          .catch((error) => console.log(error));
      }
    };

    fetch();
  }, [query, nextPage]);

  const HandleClick = (pageNumber) => {
    setNextPage((pageNumber - 1) * itemsPerPage);
    setCurrentPage(pageNumber);
    // console.log(pageNumber);
  };

  return (
    <div>
      <Header />
      <Search search={(q) => setQuery(q)} />
      <MyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        maxPageLimit={maxPageLimit}
        handleClick={HandleClick}
      />
      <ItemContainer data={characters} isloading={isloading} />
      <MyPagination
        totalPages={totalPages}
        currentPage={currentPage}
        maxPageLimit={maxPageLimit}
        handleClick={HandleClick}
      />
    </div>
  );
};

export default Home;
