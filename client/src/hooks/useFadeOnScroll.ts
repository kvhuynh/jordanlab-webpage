import { useScroll, useTransform } from "framer-motion";

export function useFadeOnScroll(start: number, end: number) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [start, end], [0, 1]);
  return opacity;
}
