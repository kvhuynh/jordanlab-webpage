// import { motion } from "framer-motion";
// import VirusImage from "../assets/virus.png";
// import CellImage from "../assets/virus.png";

// const bacteriaPositions = [
//   // Top-left corner
//   { side: "left", top: "-55%", left: "0", width: "clamp(24px, 6vw, 45px)", duration: 6, floatX: [-20, 0, -20, 0], floatY: [-5, 0, -5, 0] },

//   // Top-right corner
//   { side: "right", top: "-70%", right: "4%", width: "clamp(30px, 7vw, 50px)", duration: 6.5, floatX: [20, 0, 20, 0], floatY: [-5, 0, -5, 0] },

//   // Bottom-left corner
//   { side: "left", top: "130%", left: 0, width: "clamp(25px, 6vw, 40px)", duration: 5.5, floatX: [-15, 0, -15, 0], floatY: [5, 0, 5, 0] },

//   // Bottom-right corner
//   { side: "right", top: "130%", right: "1%", width: "clamp(28px, 6vw, 45px)", duration: 6.2, floatX: [15, 0, 15, 0], floatY: [5, 0, 5, 0] },

//   // Below center
//   { side: "left", top: "150%", left: "30%", width: "clamp(18px, 5vw, 32px)", duration: 6, floatX: [-5, 0, -5, 0], floatY: [15, 0, 15, 0] },
//   { side: "left", top: "165%", left: "40%", width: "clamp(20px, 5vw, 35px)", duration: 6.2, floatX: [-7, 0, -7, 0], floatY: [12, 0, 12, 0] },
//   { side: "right", top: "145%", left: "70%", width: "clamp(20px, 5vw, 35px)", duration: 6.3, floatX: [7, 0, 7, 0], floatY: [12, 0, 12, 0] },
// ];

// // export const HeaderCloud: React.FC<{ startAnimation: boolean }> = ({ startAnimation }) => {
// //   return (
// //     <>
// //       {bacteriaPositions.map((bact, i) => (
// //         <motion.img
// //           key={i}
// //           src={VirusImage}
// //           style={{
// //             position: "absolute",
// //             top: bact.top,
// //             left: bact.left,
// //             right: bact.right,
// //             width: bact.width,
// //           }}
// //           initial={{
// //             x: bact.side === "left" ? -50 : 50,
// //             opacity: 0,
// //           }}
// //           animate={
// //             startAnimation
// //               ? {
// //                   x: 0,
// //                   opacity: 1,
// //                   y: bact.floatY || [0],
// //                 }
// //               : {} // don't animate until startAnimation is true
// //           }
// //           transition={
// //             startAnimation
// //               ? {
// //                   x: { type: "spring", stiffness: 50, damping: 10, delay: i * 0.2 },
// //                   opacity: { duration: 1, delay: i * 0.2 },
// //                   y: {
// //                     repeat: Infinity,
// //                     repeatType: "mirror",
// //                     duration: bact.duration,
// //                     ease: "easeInOut",
// //                   },
// //                 }
// //               : {}
// //           }
// //         />
// //       ))}
// //     </>
// //   );
// // };

// import { useMemo } from "react";

// export const HeaderCloud: React.FC<{ startAnimation: boolean }> = ({ startAnimation }) => {
//   const images = useMemo(
//     () =>
//       bacteriaPositions.map(() =>
//         Math.random() < 0.5 ? VirusImage : CellImage
//       ),
//     []
//   );

//   return (
//     <>
//       {bacteriaPositions.map((bact, i) => (
//         <motion.img
//           key={i}
//           src={images[i]}
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
//           animate={
//             startAnimation
//               ? {
//                   x: 0,
//                   opacity: 1,
//                   y: bact.floatY || [0],
//                 }
//               : {}
//           }
//           transition={
//             startAnimation
//               ? {
//                   x: { type: "spring", stiffness: 50, damping: 10, delay: i * 0.2 },
//                   opacity: { duration: 1, delay: i * 0.2 },
//                   y: {
//                     repeat: Infinity,
//                     repeatType: "mirror",
//                     duration: bact.duration,
//                     ease: "easeInOut",
//                   },
//                 }
//               : {}
//           }
//         />
//       ))}
//     </>
//   );
// };



// export default HeaderCloud;

import { motion } from "framer-motion";
import { useMemo } from "react";

import VirusImage from "../assets/virus.png";
import CellImage from "../assets/cell.png";

type Position = {
	side: "left" | "right";
	top: string;
	left?: string | number;
	right?: string | number;
	width: string;
	duration: number;
	floatX: number[];
	floatY: number[];
};

const bacteriaPositions: Position[] = [
	// Top-left
	{
		side: "left",
		top: "-55%",
		left: "0",
		width: "clamp(24px, 6vw, 45px)",
		duration: 6,
		floatX: [-20, 0, -20, 0],
		floatY: [-5, 0, -5, 0],
	},

	// Top-right
	{
		side: "right",
		top: "-70%",
		right: "4%",
		width: "clamp(30px, 7vw, 50px)",
		duration: 6.5,
		floatX: [20, 0, 20, 0],
		floatY: [-5, 0, -5, 0],
	},

	// Bottom-left
	{
		side: "left",
		top: "130%",
		left: 0,
		width: "clamp(25px, 6vw, 40px)",
		duration: 5.5,
		floatX: [-15, 0, -15, 0],
		floatY: [5, 0, 5, 0],
	},

	// Bottom-right
	{
		side: "right",
		top: "130%",
		right: "1%",
		width: "clamp(28px, 6vw, 45px)",
		duration: 6.2,
		floatX: [15, 0, 15, 0],
		floatY: [5, 0, 5, 0],
	},

	// Below center
	{
		side: "left",
		top: "150%",
		left: "30%",
		width: "clamp(18px, 5vw, 32px)",
		duration: 6,
		floatX: [-5, 0, -5, 0],
		floatY: [15, 0, 15, 0],
	},
	{
		side: "left",
		top: "165%",
		left: "40%",
		width: "clamp(20px, 5vw, 35px)",
		duration: 6.2,
		floatX: [-7, 0, -7, 0],
		floatY: [12, 0, 12, 0],
	},
	{
		side: "right",
		top: "145%",
		left: "70%",
		width: "clamp(20px, 5vw, 35px)",
		duration: 6.3,
		floatX: [7, 0, 7, 0],
		floatY: [12, 0, 12, 0],
	},
];

type HeaderCloudProps = {
	startAnimation: boolean;
};

export const HeaderCloud: React.FC<HeaderCloudProps> = ({
	startAnimation,
}) => {
	// Assign virus or cell ONCE (no flicker, no reshuffle)
	const images = useMemo(
		() =>
			bacteriaPositions.map(() =>
				Math.random() < 0.5 ? VirusImage : CellImage
			),
		[]
	);

	return (
		<>
			{bacteriaPositions.map((bact, i) => (
				<motion.img
					key={i}
					src={images[i]}
					alt=""
					style={{
						position: "absolute",
						top: bact.top,
						left: bact.left,
						right: bact.right,
						width: bact.width,
						pointerEvents: "none",
					}}
					initial={{
						x: bact.side === "left" ? -50 : 50,
						opacity: 0,
					}}
					animate={
						startAnimation
							? {
									x: 0,
									opacity: 1,
									y: bact.floatY,
							  }
							: {}
					}
					transition={
						startAnimation
							? {
									x: {
										type: "spring",
										stiffness: 50,
										damping: 10,
										delay: i * 0.2,
									},
									opacity: {
										duration: 1,
										delay: i * 0.2,
									},
									y: {
										repeat: Infinity,
										repeatType: "mirror",
										duration: bact.duration,
										ease: "easeInOut",
									},
							  }
							: {}
					}
				/>
			))}
		</>
	);
};

export default HeaderCloud;
