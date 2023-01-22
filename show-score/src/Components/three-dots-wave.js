// import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import React from "react";
import { motion } from 'framer-motion'

const LoadingDot = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "#31383E",
    borderRadius: "50%"
};

const LoadingContainer = {
    width: "5rem",
    height: "2rem",
    display: "flex",
    justifyContent: "space-around"
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const DotVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: "60%"
    }
};



export default function ThreeDotsWave() {
    return (
        <div

            style={{
                paddingTop: "5rem",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "3rem"
            }}
        >
            <motion.div
                style={LoadingContainer}
                variants={ContainerVariants}
                initial="initial"
                animate="animate"


            >
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    // transition={DotTransition}
                    transition={{ duration: 1, repeat: Infinity }}

                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    // transition={DotTransition}
                    transition={{ duration: 1, repeat: Infinity }}

                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    // transition={DotTransition}
                    transition={{ duration: 1, repeat: Infinity }}

                />

            </motion.div>

        </div>
    );
}
