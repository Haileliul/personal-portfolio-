import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
const Education_TimeLine = () => {
  return (
    <Timeline>
      <Timeline.Item color="red">
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="px-10">
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          {/*  <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item color="red">
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="px-10">
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          {/*  <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item color="red">
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="px-10">
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          {/*  <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item color="red">
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="px-10">
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          {/*  <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

export default Education_TimeLine;
