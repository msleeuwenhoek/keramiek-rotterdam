import React from "react";
import "./CourseInformation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPeopleGroup,
  faPaintBrush,
  faComment,
  faPersonChalkboard,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function CourseInformation() {
  return (
    <div className="CourseInformation">
      <div className="container">
        <h3 className="row">This course includes:</h3>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12 column">
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            <div className="info-heading">Weekly lessons</div>
            <div className="info-description">
              weekly lessons on a fixed time and day in the evening
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 column">
            <FontAwesomeIcon icon={faPaintBrush} className="icon" />
            <div className="info-heading">Materials and baking</div>
            <div className="info-description">
              Glazes, clay, baking and a cup of tea are all included
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 column ">
            <FontAwesomeIcon icon={faPersonChalkboard} className="icon" />
            <div className="info-heading">Flexible instructions</div>
            <div className="info-description">
              instructions tailored to their skill level
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12  column">
            <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
            <div className="info-heading">Small class sizes</div>
            <div className="info-description">Maximally 8 or 9 students</div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12  column">
            <FontAwesomeIcon icon={faPlus} className="icon" />
            <div className="info-heading">A catch-up lesson</div>
            <div className="info-description">
              One extra catch-up lesson is included in case you missed a lesson
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12  column">
            <div className="info-heading">.........</div>
          </div>
        </div>
      </div>
    </div>
  );
}
