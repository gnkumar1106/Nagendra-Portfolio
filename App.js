import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Nagendra Kumar
      </motion.h1>
      <p className="text-lg text-gray-300">
        UI/UX Designer & Front-End Developer
      </p>
      <p className="mt-4 text-sm text-gray-500">
        React • Figma • AEM • TailwindCSS • Framer Motion
      </p>
    </main>
  );
}
