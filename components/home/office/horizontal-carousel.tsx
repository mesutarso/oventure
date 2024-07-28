//@ts-nocheck
"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

function HorizontalCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "10%"]);

  return (
    <>
      <div
        className="relative w-full md:block "
        ref={targetRef}
        data-aos="zoom-out-right"
      >
        <div className="sticky top-0 hidden lg:flex flex-col w-full items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex flex-col md:flex-row -ml-1 w-full"
          >
            <div
              id={"card-1"}
              className="group relative h-[600px] md:w-[600px] w-full overflow-hidden "
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-primary shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text text-white">
                      grands projets big impact.
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              id={"card-2"}
              className="group relative h-[600px] w-[600px] overflow-hidden"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-secondary shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text">
                      le plus grand marché carbone en afrique
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              id={"card-3"}
              className="group relative h-[600px] w-[600px] overflow-hidden bg-neutral-200"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-blueLight shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text text-white">
                      analyses &amp; rapports
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="sticky top-0 flex flex-col w-full items-center overflow-hidden section ">
          <div className="flex flex-col md:flex-row -ml-1 w-full space-y-8">
            <div
              id={"card-1"}
              className="group relative  w-full overflow-hidden "
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-primary shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text text-white">
                      grands projets big impact.
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              id={"card-2"}
              className="group relative w-full overflow-hidden"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-secondary shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text">
                      le plus grand marché carbone en afrique
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              id={"card-3"}
              className="group relative w-full overflow-hidden bg-neutral-200"
            >
              <div className="p-1">
                <div className="rounded-xl border text-card-foreground bg-blueLight shadow-sm border-none w-full">
                  <div className="flex aspect-[16/12] items-center justify-center p-0 relative">
                    <h1 className="absolute bottom-0 left-0 p-10 text-3xl md:text-4xl lg:text-5xl font-black uppercase outlined-text text-white">
                      analyses &amp; rapports
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalCarousel;
