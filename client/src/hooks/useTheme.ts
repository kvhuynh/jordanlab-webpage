// import { useEffect, useState } from "react";

// export function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     // First load: use saved theme or system preference
//     const saved = localStorage.getItem("theme");
//     if (saved) return saved;

//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   });

//   useEffect(() => {
//     const root = document.documentElement;

//     if (theme === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   function toggleTheme() {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   }

//   return { theme, toggleTheme };
// }


import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme + save preference
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Update if system theme changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}
