"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";

function AnimatedLogo({ text = "CR" }: { text?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-start">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center
             text-xl font-bold tracking-tighter text-accent sm:text-4xl md:text-6xl md:leading-[4rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
export default AnimatedLogo;
