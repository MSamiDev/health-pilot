import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Layouts from "../Layout/Layouts";

const Home = () => {
  return (
    <Layouts>
      <Helmet>
        <title>Wecare | Home</title>
      </Helmet>

      {/* <!-- Main Navigation --> */}
      {/* <Header /> */}
      {/* <!-- Main header --> */}

      <section className="hero-section">
        <div className="hero-content">
          <h1>Feeling ill..?</h1>
          <h1> Get your Health & Mood check up </h1>
          <div>
            <Link to="/chatbot">
              <button className="btn" style={{ margin: "20px" }}>
                Health
              </button>
            </Link>
            <Link to="/funbot">
              <button className="btn" style={{ margin: "20px" }}>
                Mood
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Home;
