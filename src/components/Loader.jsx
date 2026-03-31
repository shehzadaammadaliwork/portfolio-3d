import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <div
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0 }}>{progress.toFixed(2)}%</p>
        <p style={{ margin: "8px 0 0 0" }}>{formatTime(time)}</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
