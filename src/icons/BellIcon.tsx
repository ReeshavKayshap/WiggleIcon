import { motion } from "motion/react";

export const BellIcon = () => {
  return (
    <>
      {" "}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        //   class="icon icon-tabler icons-tabler-outline icon-tabler-bell"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          variants={{
            animate: {
              rotate: [12, 0, -12, 0, 12, 0],
            },
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
        />
        <motion.path
          variants={{
            animate: { x: [0, 3, 0, -3, 0] },
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          d="M9 17v1a3 3 0 0 0 6 0v-1"
        />
      </motion.svg>
    </>
  );
};
