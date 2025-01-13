import React from "react";
import { InfiniteMovingCards } from "./ui/MovingCards";
import { testimonials } from "@/data";

function Clients() {
  return (
    <div
      className="py-20"
      id="testimonials">
      <h1 className="heading">
        What my <span className="text-purple">Clients are saying</span>
      </h1>

      <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden mt-5 md:mt-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}

export default Clients;
