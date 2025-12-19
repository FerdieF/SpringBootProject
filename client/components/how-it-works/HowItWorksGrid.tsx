import { HOW_IT_WORKS_DATA } from "@/data/how-it-works";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorksGrid = () => {
  return (
    <div className="how-it-works-grid-grid">
      {HOW_IT_WORKS_DATA.map((item) => (
        <HowItWorksCard
          key={item.step}
          step={item.step}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default HowItWorksGrid;
