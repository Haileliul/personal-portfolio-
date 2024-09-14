import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
const Education_TimeLine = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Timeline>
            <Timeline.Item color="red">
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content className="px-10">
                <Timeline.Time>{item.date}</Timeline.Time>
                <Timeline.Title>{item.title}</Timeline.Title>
                <Timeline.Body>{item.description}</Timeline.Body>
                {props.isEducation ? (
                  <Button color="gray">
                    Learn More
                    <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                  </Button>
                ) : (
                  <span></span>
                )}
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        );
      })}
    </div>
    /*    <Timeline>
      <Timeline.Item color="red">
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="px-10">
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
        
        </Timeline.Content>
      </Timeline.Item>
    </Timeline> */
  );
};

export default Education_TimeLine;
