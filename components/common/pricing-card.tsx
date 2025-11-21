"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingDataProps } from "./pricing";

type Props = {
  plan: pricingDataProps;
  carousel?: boolean;
};

const PricingCard = ({ plan, carousel }: Props) => {
  return (
    <Card
      className={`w-full h-96 flex flex-col justify-between gap-6 rounded-2xl shadow-md bg-secondary/5 dark:bg-secondary/10 border 
                  ${
                    plan.highlight
                      ? `border-secondary shadow-orange-600/20 ${
                          !carousel && "scale-105"
                        }`
                      : "border-background/20 dark:border-neutral-800"
                  }
                `}
    >
      <CardHeader className="flex flex-col items-center gap-2">
        <CardTitle className="w-full flex items-center justify-center gap-2 text-xl font-semibold  text-primary">
          {plan.icon}
          {plan.title}
        </CardTitle>
        <p className="text-xl font-bold">{plan.price}</p>
      </CardHeader>

      <CardContent className="flex flex-col justify-between gap-4">
        <ul className="space-y-3">
          {plan.features.map((f, idx) => (
            <li key={idx} className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-secondary" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="px-4">
        <Button
          className={`w-full ${
            plan.highlight
              ? "bg-secondary font-bold btn"
              : "bg-primary font-semibold"
          } text-background`}
        >
          {plan.button}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
