import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemContainer = (props) => {
  return (
    <div>
      {!props.isLoading ? (
        <Container fluid>
          <div className="hero-container">
            {props.data.map((hero) => {
              return (
                <div className="flip-card" key={hero.id}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        alt="Avatar"
                      />
                    </div>
                    <div className="flip-card-back">
                      <div className="hero-name">
                        <h4>{hero.name}</h4>
                      </div>
                      <div className="hero-description">
                        {hero.description ? hero.description : "Amazing Hero"}
                      </div>

                      <div className="hero-btn">
                        <Link to={`/hero/${hero.id}`}>More Info</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ItemContainer;
