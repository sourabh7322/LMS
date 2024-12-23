"use-client";

import React from "react";
import { motion } from "framer-motion";
export const  Landing=()=> {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
        <motion.div
        initial={{y:20, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{ duration: 0.5}}
        className="landing__hero"
        >
            <div className="landing__hero-content">
                <h1 className="landing__title">Courses</h1>
                <p className="landing__description">
                    This is the list of the courses you can enroll in.
                    <br/>
                    Courses when you need them and want them.
                </p>
            </div>
        </motion.div>
    </motion.div>

  );
}

