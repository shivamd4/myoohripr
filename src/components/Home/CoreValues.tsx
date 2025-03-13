import Title from "../Title";
import { coreValues } from "../../../constants/core-values";
import Section from "../Section";
import CoreValuesCard from "../CoreValuesCard";

const CoreValues = () => {
  return (
    <Section className="bg-gray-100 py-8">
      <Title>Our Core Values</Title>

      <div className="flex flex-wrap px-6 gap-x-6 gap-y-10 mt-10 justify-center">
        {coreValues.map((item) => {
          return <CoreValuesCard item={item} key={item.title} />;
        })}
      </div>
    </Section>
  );
};

export default CoreValues;
