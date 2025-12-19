// components/how-it-works/HowItWorksCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface HowItWorksCardProps {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const HowItWorksCard = ({
  step,
  icon: Icon,
  title,
  description,
}: HowItWorksCardProps) => {
  return (
    <Card className="bg-background relative border transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex gap-6 p-6">
        {/* How it works content */}
        <div className="how-it-works-card-step-wrapper">
          <span className="how-it-works-card-step-number">{step}</span>
          <div className="how-it-works-card-step-icon">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div>
          <h3 className="how-it-works-card-title">{title}</h3>
          <p className="how-it-works-card-description">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HowItWorksCard;
