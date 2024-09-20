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
  );
};

export default Education_TimeLine;
