import React from "react";
import "./CeramicsSections.css";

export default function CeramicsSections() {
  return (
    <div className="CeramicsSections">
      <section className="split">
        <img src={require("./images/pottery-wheel.png")} />
        <div className="img-description">
          <h4>Follow a pottery course</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </section>
      <section className="split">
        <div className="img-description">
          <h4>Follow a pottery course</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>{" "}
        <img src={require("./images/pottery-oven.png")} />
      </section>
      <section className="split">
        <img src={require("./images/pottery-glazing.png")} />
        <div className="img-description">
          <h4>Follow a pottery course</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </section>
      <section className="split">
        <div className="img-description">
          <h4>Follow a pottery course</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>{" "}
        <img src={require("./images/pottery-oven-2.png")} />
      </section>
      <section className="split">
        <img src={require("./images/pottery-usage.png")} />
        <div className="img-description">
          <h4>Follow a pottery course</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
