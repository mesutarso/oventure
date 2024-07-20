// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  }, [direction]);
  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      }
    }
  }, [speed]);
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [containerRef, scrollerRef, getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-[90rem] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_90%,transparent)]",
        className,
      )}
      data-aos="zoom-in"
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full  gap-12 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item: any, _idx: number) => (
          <li
            className=" max-w-full w-[200px] relative  flex-shrink-0   "
            key={item.name}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                src={item?.image as string}
                width={150}
                height={150}
                alt="logo partners"
                className="object-cover"
              />
            </AspectRatio>
          </li>
        ))}
      </ul>
    </div>
  );
};
