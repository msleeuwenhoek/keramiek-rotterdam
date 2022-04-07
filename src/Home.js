import React from "react";
import "./Home.css";
import CeramicsSections from "./CeramicsSections";

export default function Header() {
  return (
    <div className="Home">
      <div className="header">
        <h1>Keramiek Rotterdam</h1>
        <h2>Hester van den Haak</h2>
        <button>Join</button>
      </div>
      <CeramicsSections />
    </div>
  );
}
