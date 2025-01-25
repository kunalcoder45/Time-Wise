import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRocket, FaPaintBrush, FaCode, FaCheck } from "react-icons/fa";

const VerticalTimelineComponent = () => {
  const events = [
    {
      id: 1,
      date: "January 2025",
      title: "Salon Appointment",
      description: "Book your appointment at the salon to avoid long waiting times.",
      icon: <FaPaintBrush />,
      iconBg: "bg-green-500",
    },
    {
      id: 2,
      date: "February 2025",
      title: "Barber Appointment",
      description: "Schedule your visit to the barber for a quick service.",
      icon: <FaCode />,
      iconBg: "bg-yellow-500",
    },
    {
      id: 3,
      date: "March 2025",
      title: "Hospital Visit",
      description: "Book an appointment at the hospital to minimize waiting time.",
      icon: <FaCheck />,
      iconBg: "bg-red-500",
    },
    {
      id: 4,
      date: "April 2025",
      title: "Store Appointment",
      description: "Reserve your time at the store to avoid queues.",
      icon: <FaRocket />,
      iconBg: "bg-blue-500",
    },
  ];

  const iconStyle = {
    background: "#3B82F6",
    color: "#fff",
    border: "5px solid #F5F5F7",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-8 font-heading text-gray-800">
        Appointment Booking System
      </h1>
      <VerticalTimeline lineColor="rgb(37 99 235)">
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className="vertical-timeline-element--work"
            date={event.date}
            contentStyle={{ background: "rgb(243 244 246)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid #b7b7b7" }}
            iconStyle={iconStyle}
            icon={event.icon}
          >
            <h3 className="vertical-timeline-element-title text-lg font-bold font-heading">
              {event.title}
            </h3>
            <p className="font-heading">{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default VerticalTimelineComponent;
