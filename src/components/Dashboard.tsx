import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <p>Welcome to the Dashboard!</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Dashboard;
