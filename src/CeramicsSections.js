import React from "react";
import "./CeramicsSections.css";

export default function CeramicsSections() {
  return (
    <div className="CeramicsSections">
      <section className="split">
        <img src={require("./images/pottery-wheel.png")} />
        <h4>Follow a pottery course</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
      <section className="split">
        <img src={require("./images/pottery-oven.png")} />
        <h4>Follow a pottery course</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
      <section className="split">
        <img src={require("./images/pottery-glazing.png")} />
        <h4>Follow a pottery course</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
      <section className="split">
        <img src={require("./images/pottery-oven-2.png")} />
        <h4>Follow a pottery course</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
      <section className="split">
        <img src={require("./images/pottery-usage.png")} />
        <h4>Follow a pottery course</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </section>
    </div>
  );
}
