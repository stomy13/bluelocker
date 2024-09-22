const filePaths = [
  "/src/assets/images/bluelock/IMG_0721.PNG",
  "/src/assets/images/bluelock/IMG_0722.PNG",
  "/src/assets/images/bluelock/IMG_0723.PNG",
  "/src/assets/images/bluelock/IMG_0724.PNG",
  "/src/assets/images/bluelock/IMG_0725.PNG",
  "/src/assets/images/bluelock/IMG_0726.PNG",
  "/src/assets/images/bluelock/IMG_0727.PNG",
  "/src/assets/images/bluelock/IMG_0728.PNG",
  "/src/assets/images/bluelock/IMG_0729.PNG",
  "/src/assets/images/bluelock/IMG_0730.PNG",
  "/src/assets/images/bluelock/IMG_0731.PNG",
  "/src/assets/images/bluelock/IMG_0732.PNG",
  "/src/assets/images/bluelock/IMG_0733.PNG",
  "/src/assets/images/bluelock/IMG_0734.PNG",
  "/src/assets/images/bluelock/IMG_0735.PNG",
  "/src/assets/images/bluelock/IMG_0736.PNG",
  "/src/assets/images/bluelock/IMG_0737.PNG",
];

export const useScene = () => {
  const dayIndex =
    Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % filePaths.length;
  const src = filePaths[dayIndex];
  return {
    src,
  };
};
