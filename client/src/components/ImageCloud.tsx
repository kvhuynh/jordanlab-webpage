import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import VirusImage from "../assets/virus.png";
import CellImage from "../assets/cell.png";
import React from "react";

// How many bacteria to spawn per section
const COUNT = 67;

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const ImageCloud: React.FC = () => {

	const image = Array.from({ length: COUNT }).map((_, i) => {
		const src = Math.random() < 0.6 ? VirusImage : CellImage;

		return {
			id: i,
			src,
			x: `${random(0, 100)}%`,
			y: `${random(0, 100)}%`,
			size: `${random(20, 40)}px`,
			floatX: random(5, 20),
			floatY: random(5, 20),
			duration: random(5, 8),
			rotate: `${random(0, 70)}deg`,
		};
	});

	return (
		<Box
			position="absolute"
			inset={0}
			overflow="hidden"
			zIndex={0}
			pointerEvents="none"
		>
			{image.map((b) => (
				<motion.img
					key={b.id}
					src={b.src}
					style={{
						position: "absolute",
						left: b.x,
						top: b.y,
						width: b.size,
						opacity: 0.5,
						transform: `rotate(${b.rotate})`,
					}}
					initial={{
						opacity: 0,
						y: 10,
					}}
					animate={{
						opacity: [0, 0.5, 0.5, 0],
						y: [0, -b.floatY, 0],
						x: [0, b.floatX, 0],
						rotate: b.rotate, // keep static rotation
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

// export default ImageCloud;
export default React.memo(ImageCloud);
