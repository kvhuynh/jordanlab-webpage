// import { motion, Transition } from "framer-motion";
// import ReactLogo from "../assets/virus.png";

// const bacteriaPositions = [
//   // Top-left corner
//   { side: "left", top: "-25%", left: "0", width: "clamp(24px, 6vw, 45px)", duration: 6, floatX: [-20, 0, -20, 0], floatY: [-5, 0, -5, 0] },

//   // Top-right corner
//   { side: "right", top: "-30%", right: "-4%", width: "clamp(30px, 7vw, 50px)", duration: 6.5, floatX: [20, 0, 20, 0], floatY: [-5, 0, -5, 0] },

//   // Bottom-left corner
//   { side: "left", top: "105%", left: 0, width: "clamp(25px, 6vw, 40px)", duration: 5.5, floatX: [-15, 0, -15, 0], floatY: [5, 0, 5, 0] },

//   // Bottom-right corner
//   { side: "right", top: "104%", right: "1%", width: "clamp(28px, 6vw, 45px)", duration: 6.2, floatX: [15, 0, 15, 0], floatY: [5, 0, 5, 0] },

//   // Above center
//   { side: "left", top: "-40%", left: "20%", width: "clamp(18px, 5vw, 32px)", duration: 6, floatX: [-5, 0, -5, 0], floatY: [-15, 0, -15, 0] },
//   { side: "left", top: "-30%", left: "45%", width: "clamp(20px, 5vw, 35px)", duration: 6.2, floatX: [-7, 0, -7, 0], floatY: [-12, 0, -12, 0] },
//   { side: "right", top: "-15%", left: "78%", width: "clamp(20px, 5vw, 35px)", duration: 6.3, floatX: [7, 0, 7, 0], floatY: [-12, 0, -12, 0] },

//   // Below center
//   { side: "left", top: "120%", left: "20%", width: "clamp(18px, 5vw, 32px)", duration: 6, floatX: [-5, 0, -5, 0], floatY: [15, 0, 15, 0] },
//   { side: "left", top: "135%", left: "40%", width: "clamp(20px, 5vw, 35px)", duration: 6.2, floatX: [-7, 0, -7, 0], floatY: [12, 0, 12, 0] },
//   { side: "right", top: "150%", left: "70%", width: "clamp(20px, 5vw, 35px)", duration: 6.3, floatX: [7, 0, 7, 0], floatY: [12, 0, 12, 0] },
// ];



// export const BacteriaCloud = () => {
//   return (
//     <>
//       {bacteriaPositions.map((bact, i) => (
//         <motion.img
//           key={i}
//           src={ReactLogo}
//           style={{
//             position: "absolute",
//             top: bact.top,
//             left: bact.left,
//             right: bact.right,
//             width: bact.width,
//           }}
//           initial={{
//             x: bact.side === "left" ? -50 : 50,
//             opacity: 0,
//           }}
//           animate={{
//             x: 0,
//             opacity: 1,
//             y: bact.floatY || [0],
//           }}
//           transition={{
//             x: { type: "spring", stiffness: 50, damping: 10, delay: i * 0.2 },
//             opacity: { duration: 1, delay: i * 0.2 },
//             y: {
//               repeat: Infinity,
//               repeatType: "mirror",
//               duration: bact.duration,
//               ease: "easeInOut",
//             },
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default BacteriaCloud;


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
