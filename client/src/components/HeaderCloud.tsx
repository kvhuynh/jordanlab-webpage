import { motion, Transition } from "framer-motion";
import ReactLogo from "../assets/virus.png";

const bacteriaPositions = [
  // Top-left corner
  { side: "left", top: "-25%", left: "0", width: "clamp(24px, 6vw, 45px)", duration: 6, floatX: [-20, 0, -20, 0], floatY: [-5, 0, -5, 0] },

  // Top-right corner
  { side: "right", top: "-30%", right: "-4%", width: "clamp(30px, 7vw, 50px)", duration: 6.5, floatX: [20, 0, 20, 0], floatY: [-5, 0, -5, 0] },

  // Bottom-left corner
  { side: "left", top: "105%", left: 0, width: "clamp(25px, 6vw, 40px)", duration: 5.5, floatX: [-15, 0, -15, 0], floatY: [5, 0, 5, 0] },

  // Bottom-right corner
  { side: "right", top: "104%", right: "1%", width: "clamp(28px, 6vw, 45px)", duration: 6.2, floatX: [15, 0, 15, 0], floatY: [5, 0, 5, 0] },

  // Above center
  { side: "left", top: "-40%", left: "20%", width: "clamp(18px, 5vw, 32px)", duration: 6, floatX: [-5, 0, -5, 0], floatY: [-15, 0, -15, 0] },
  { side: "left", top: "-30%", left: "45%", width: "clamp(20px, 5vw, 35px)", duration: 6.2, floatX: [-7, 0, -7, 0], floatY: [-12, 0, -12, 0] },
  { side: "right", top: "-15%", left: "78%", width: "clamp(20px, 5vw, 35px)", duration: 6.3, floatX: [7, 0, 7, 0], floatY: [-12, 0, -12, 0] },

  // Below center
  { side: "left", top: "120%", left: "20%", width: "clamp(18px, 5vw, 32px)", duration: 6, floatX: [-5, 0, -5, 0], floatY: [15, 0, 15, 0] },
  { side: "left", top: "135%", left: "40%", width: "clamp(20px, 5vw, 35px)", duration: 6.2, floatX: [-7, 0, -7, 0], floatY: [12, 0, 12, 0] },
  { side: "right", top: "150%", left: "70%", width: "clamp(20px, 5vw, 35px)", duration: 6.3, floatX: [7, 0, 7, 0], floatY: [12, 0, 12, 0] },
];



export const HeaderCloud = () => {
  return (
    <>
      {bacteriaPositions.map((bact, i) => (
        <motion.img
          key={i}
          src={ReactLogo}
          style={{
            position: "absolute",
            top: bact.top,
            left: bact.left,
            right: bact.right,
            width: bact.width,
          }}
          initial={{
            x: bact.side === "left" ? -50 : 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            y: bact.floatY || [0],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 10, delay: i * 0.2 },
            opacity: { duration: 1, delay: i * 0.2 },
            y: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: bact.duration,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </>
  );
};

export default HeaderCloud;