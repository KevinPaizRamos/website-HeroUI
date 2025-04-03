import React from "react";
import timelineElements from "../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import "../styles/experience.css";

function WorkExperience() {
  return (
    <div className="experience-layout">
      <h1>Work Experience</h1>
      <VerticalTimeline lineColor="#6b7280">
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#d1d5db", color: "#111827" }} // Dark Indigo with White Text
              contentArrowStyle={{
                borderRight: "7px solid #4f46e5",
              }}
              iconStyle={{ background: "#4f46e5", color: "#ffffff" }} // Matching Icon Background
              key={element.id}
              date={element.date}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-title">{element.title}</h3>
              <h3 className="vertical-timeline-company">{element.company}</h3>
              <h5 className="vertical-timeline-location">{element.location}</h5>
              <ul className="vertical-timeline-description">
                {element.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default WorkExperience;
