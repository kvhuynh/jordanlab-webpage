// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// export const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const inView = useInView(ref, { amount: 0.4, once: true }); // triggers when 40% visible

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{
//         opacity: inView ? 1 : 0,
//         y: inView ? 0 : 30,
//       }}
//       transition={{ duration: 0.8 }}
//       style={{ width: "100%" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const ref = useRef<HTMLDivElement>(null);

	const inView = useInView(ref, {
		amount: 0,
		once: false,
		// rootMargin: "0px 0px 300px 0px",
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 15 }}
			animate={{
				opacity: inView ? 1 : 0,
				y: inView ? 0 : 15,
			}}
			transition={{
				duration: 0.4,
				ease: [0.25, 0.1, 0.25, 1.0],
			}}
			style={{
				width: "100%",
				willChange: "transform, opacity",
				transform: "translateZ(0)",
				WebkitBackfaceVisibility: "hidden",
				backfaceVisibility: "hidden",
			}}
		>
			{children}
		</motion.div>
	);
};
