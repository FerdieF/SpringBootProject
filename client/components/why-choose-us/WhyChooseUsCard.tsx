import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface WhyChooseUsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const WhyChooseUsCard = ({
  icon: Icon,
  title,
  description,
}: WhyChooseUsCardProps) => {
  return (
    <Card className="bg-background relative overflow-hidden border transition-all duration-300 hover:shadow-lg">
      <CardContent className="relative z-10 flex flex-col gap-4 p-6">
        {/* Why choose us content */}
        <div className="why-choose-us-card-icon-wrapper">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="why-choose-us-card-title">{title}</h3>
        <p className="why-choose-us-card-description">{description}</p>
      </CardContent>
    </Card>
  );
};

export default WhyChooseUsCard;
