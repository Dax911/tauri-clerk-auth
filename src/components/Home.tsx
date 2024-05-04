import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <p>Welcome to the Home Page!</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Home;
