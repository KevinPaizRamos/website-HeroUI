import React from "react";
import timelineElements from "../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function WorkExperience() {
  return (
    <div>
      <h1>Work Experience</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
            ></VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default WorkExperience;
