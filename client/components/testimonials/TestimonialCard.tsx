import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

const TestimonialCard = ({
  name,
  role,
  avatar,
  rating,
  quote,
}: TestimonialCardProps) => {
  return (
    <Card className="bg-background max-w-md min-w-[320px] border shadow-sm">
      <CardContent className="flex h-full flex-col gap-6 p-6">
        {/* Quote */}
        <p className="testimonials-card-quote">“{quote}”</p>

        {/* User */}
        <div className="testimonials-card-user-details-wrapper">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
          </Avatar>

          <div className="flex-1">
            <p className="testimonials-card-user-details-name">{name}</p>
            <p className="testimonials-card-user-details-role">{role}</p>
          </div>

          {/* Rating */}
          <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
