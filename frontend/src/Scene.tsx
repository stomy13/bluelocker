import { useScene } from "./hooks/useScene";

export function Scene() {
  const { src } = useScene();
  return (
    <img
      src={src}
      id="reflect"
      alt="reflect"
      style={{
        maxHeight: "100%",
        maxWidth: "100%",
      }}
    />
  );
}
