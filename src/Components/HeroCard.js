"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/textshow";

export function HeroCard() {
  return (
    <div className="rounded-2xl">
      <TextRevealCard
        text="We know the industry"
        revealText="UX/UI Designing, Web Development"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to experience it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        This is a service showcase card. Hover over to reveal the hidden text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
export default HeroCard;
