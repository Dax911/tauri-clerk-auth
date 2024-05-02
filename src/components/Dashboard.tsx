import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
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
      <p>Welcome to the Dashboard!</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Dashboard;
