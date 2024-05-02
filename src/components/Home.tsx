import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <p>Welcome to the Home Page!</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Home;
