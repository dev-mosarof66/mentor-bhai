"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pricingData } from "./pricing";

import PricingCard from "./pricing-card";

export const PricingCarousel = () => {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {pricingData.map((plan, index) => (
          <CarouselItem key={index}>
            <PricingCard plan={plan} carousel={true} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="default" />
      <CarouselNext variant="default" />
    </Carousel>
  );
};
