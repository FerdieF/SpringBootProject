import { WHY_CHOOSE_US_DATA } from "@/data/why-choose-us";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUsGrid = () => {
  return (
    <div className="why-choose-us-grid-grid">
      {WHY_CHOOSE_US_DATA.map((item) => (
        <WhyChooseUsCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default WhyChooseUsGrid;
