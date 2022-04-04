import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import ItemDetails from "../components/ItemDetails";
import axios from "axios";

const baseUrl = "https://gateway.marvel.com:443/v1/public/";
const publicKey = "68d345344ef8cef38bb626b41a6cbd9c";
const hash = "17ca025dc7ffe46de524007835669e5f";

const Details = () => {
  const { id } = useParams();
  // console.log(id);
  const api = `${baseUrl}characters/${id}?ts=1&apikey=${publicKey}&hash=${hash}`;
  const urlComics = `${baseUrl}characters/${id}/comics?ts=1&apikey=${publicKey}&hash=${hash}`;
  const urlEvents = `${baseUrl}characters/${id}/events?ts=1&apikey=${publicKey}&hash=${hash}`;
  const urlSeries = `${baseUrl}characters/${id}/series?ts=1&apikey=${publicKey}&hash=${hash}`;
  const urlStories = `${baseUrl}characters/${id}/stories?ts=1&apikey=${publicKey}&hash=${hash}`;

  const [hero, setHero] = useState([]);
  const [comics, setComics] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setHero(res.data.data.results);
        setLoading(false);
        // console.log(res.data.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(urlComics)
      .then((res) => {
        setComics(res.data.data.results);
        setLoading(false);
        // console.log(res.data.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(urlEvents)
      .then((res) => {
        setEvents(res.data.data.results);
        setLoading(false);
        // console.log(res.data.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(urlSeries)
      .then((res) => {
        setSeries(res.data.data.results);
        setLoading(false);
        // console.log(res.data.data.results);
      })
      .catch((error) => console.log(error));

    axios
      .get(urlStories)
      .then((res) => {
        setStories(res.data.data.results);
        setLoading(false);
        // console.log(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <ItemDetails
        hero={hero[0]}
        isLoading={isLoading}
        comics={comics}
        events={events}
        series={series}
        stories={stories}
      />
    </div>
  );
};

export default Details;
