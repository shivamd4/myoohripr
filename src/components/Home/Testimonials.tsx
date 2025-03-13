import { useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { testimonials } from "../../../constants/testimonials";
import Section from "../Section";
import Title from "../Title";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const getIndex = (type: 0 | 1 | -1) => {
    if (type === 0) {
      return index;
    } else if (type === 1) {
      return index === testimonials.length - 1 ? 0 : index + 1;
    } else {
      return index === 0 ? testimonials.length - 1 : index - 1;
    }
  };
  return (
    <Section className="mt-24">
      <Title>What Client think about us</Title>

      <div className="flex justify-center gap-x-12 mt-12">
        <div className="hidden lg:block">
          <TestimonialCard
            text={testimonials[getIndex(-1)].text}
            by={testimonials[getIndex(-1)].by}
          />
        </div>
        <TestimonialCard
          text={testimonials[getIndex(0)].text}
          by={testimonials[getIndex(0)].by}
        />
        <div className="hidden lg:block">
          <TestimonialCard
            text={testimonials[getIndex(1)].text}
            by={testimonials[getIndex(1)].by}
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-5 mt-5">
        <FaCircleChevronLeft
          color="black"
          size={28}
          className="cursor-pointer hover:fill-blue-600 delay-100 disabled:fill-gray-700 transition-all"
          onClick={() => {
            setIndex((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            );
          }}
        />
        <FaCircleChevronRight
          color="black"
          size={28}
          className="cursor-pointer hover:fill-blue-600 delay-100 disabled:fill-gray-700 transition-all"
          onClick={() => {
            setIndex((prev) =>
              prev === testimonials.length - 1 ? 0 : prev + 1
            );
          }}
        />
      </div>
    </Section>
  );
};

export default Testimonials;
