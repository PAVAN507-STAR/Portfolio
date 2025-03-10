import React from "react";
import TimelineItem from "./timeline-item";
import { TimelineItemProps } from "./timeline-item";

interface TimelineListProps {
  items: TimelineItemProps[];
}

function TimelineList({ items }: TimelineListProps) {
  return (
    <ol className="timeline-list">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <TimelineItem
            company={item.company}
            location={item.location}
            role={item.role}
            duration={item.duration}
            tasksMarkdown={item.tasksMarkdown}
          />
        </React.Fragment>
      ))}
    </ol>
  );
}

export default TimelineList;
