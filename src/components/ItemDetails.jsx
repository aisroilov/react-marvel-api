import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ItemDetails = (props) => {
  const hero = props.hero;
  // console.log(props.comics.length);
  return (
    <>
      {!props.isLoading ? (
        <Container>
          <div className="fixed-nav">
            <a href="#hero">Hero</a>
            <a href="#comics">Comics</a>
            <a href="#events">Events</a>
            <a href="#series">Series</a>
            <a href="#stories">Stories</a>
          </div>
          <Row id="hero">
            <Col sm={4}>
              <div className="hero-img">
                <img
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
              </div>
            </Col>
            <Col sm={8}>
              <div className="hero-description">
                <h2>{hero.name}</h2>
                <p> {hero.description ? hero.description : "Awesome Hero"}</p>
              </div>
            </Col>
          </Row>

          <Row id="comics">
            <div className="headline">
              <h2>COMICS</h2>
            </div>
            {props.comics.length > 0 ? (
              <div className="hero-container">
                {props.comics.map((comic) => {
                  return (
                    <div className="flip-card" key={comic.id}>
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                            alt="Avatar"
                          />
                        </div>
                        <div className="flip-card-back">
                          <div className="hero-name">
                            <h4>{comic.title}</h4>
                          </div>
                          <div className="hero-description">
                            {comic.description
                              ? comic.description
                              : "Amazing Comic"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="center">
                <h4>No comics found</h4>
              </div>
            )}
          </Row>

          <Row id="events">
            <div className="headline">
              <h2>EVENTS</h2>
            </div>
            {props.events.length > 0 ? (
              <div className="hero-container">
                {props.events.map((event) => {
                  return (
                    <div className="flip-card" key={event.id}>
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                            alt="Avatar"
                          />
                        </div>
                        <div className="flip-card-back">
                          <div className="hero-name">
                            <h4>{event.title}</h4>
                          </div>
                          <div className="hero-description">
                            {event.description
                              ? event.description
                              : "Amazing Event"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="center">
                <h4>No events found</h4>
              </div>
            )}
          </Row>

          <Row id="series">
            <div className="headline">
              <h2>SERIES</h2>
            </div>
            {props.series.length > 0 ? (
              <div className="hero-container">
                {props.series.map((serie) => {
                  return (
                    <div className="flip-card" key={serie.id}>
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img
                            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                            alt="Avatar"
                          />
                        </div>
                        <div className="flip-card-back">
                          <div className="hero-name">
                            <h4>{serie.title}</h4>
                          </div>
                          <div className="hero-description">
                            {serie.description
                              ? serie.description
                              : "Amazing Series"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="center">
                <h4>No series found</h4>
              </div>
            )}
          </Row>

          <Row id="stories">
            <div className="headline">
              <h2>STORIES</h2>
            </div>
            {props.stories.length > 0 ? (
              <div>
                {props.stories.map((story) => {
                  return (
                    <div className="mb-5" key={story.id}>
                      <h4>{story.title}</h4>
                      {story.description ? story.description : "Amazing Story"}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="center">
                <h4>No stories found</h4>
              </div>
            )}
          </Row>
        </Container>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
};

export default ItemDetails;
