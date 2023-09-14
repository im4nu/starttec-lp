export const RightToLeft = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.5,
    },
  },
};

export const BotToTop = {
  offscreen: {
    paddingTop: 100,
    opacity: 0,
  },
  onscreen: {
    paddingTop: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.5,
    },
  },
};