export const pageAppearFromRight = {
  hidden: {
    x: -1500,
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      delay: 0.8,
      duration: 1,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export const pageAppearFromTop = {
  hidden: {
    y: -1200,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      delay: 0.6,
      duration: 1,
    },
    end: {
      y: 1200,
      transition: {
        type: "spring",
        delay: 0.6,
        duration: 1,
      },
    },
  },
};
