import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import VirusImage from "../assets/virus.png";

// How many bacteria to spawn per section
const COUNT = 67;

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const ImageCloud: React.FC = () => {
  const bacteria = Array.from({ length: COUNT }).map((_, i) => ({
    id: i,
    x: `${random(0, 100)}%`,
    y: `${random(0, 100)}%`,
    size: `${random(20, 50)}px`,
    floatX: random(5, 20),
    floatY: random(5, 20),
    duration: random(5, 8),
  }));

  return (
    <Box
      position="absolute"
      inset={0}
      overflow="hidden"
      zIndex={0}
      pointerEvents="none"
    >
      {bacteria.map((b) => (
        <motion.img
          key={b.id}
          src={VirusImage}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            width: b.size,
            opacity: 0.5,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity:[0, 0.5, 0.5, 0],
            y: [0, -b.floatY, 0],
            x: [0, b.floatX, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
};

export default ImageCloud;
