import React from "react";
import "./CeramicsSections.css";

export default function CeramicsSections() {
  return (
    <div className="CeramicsSections">
      <section className="split">
        <img src={require("./images/pottery-wheel.png")} />
        <div className="img-description">
          <h4>Create your own cups and bowls</h4>
          <p>
            On the manual pottery wheel you will sit down to create your own
            ceramics. Starting with small cups and bowl, you can move on to
            other shapes as your skills progress.
          </p>
        </div>
      </section>
      <section className="split">
        <div className="img-description">
          <h4>Your work will be baked for you</h4>
          <p>
            In between lessons your ceramics will be placed in a ceramics oven.
          </p>
        </div>{" "}
        <img src={require("./images/pottery-oven.png")} />
      </section>
      <section className="split">
        <img src={require("./images/pottery-glazing.png")} />
        <div className="img-description">
          <h4>Glaze and decorate your ceramics to your liking.</h4>
          <p>
            A range of colours is available for you to dip your ceramics into.
            You will learn the proper techniques to glaze your work in full. In
            addition you can paint small details and decorations onto your
            ceramics.
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
          <h4>Enjoy your creations at home!</h4>
          <p>
            At the end of the course you will have your own ceramics to use
            around your house. Put some houseplants in them or use them for your
            morning coffee! Everything is dishwasher safe.
          </p>
        </div>
      </section>
    </div>
  );
}
