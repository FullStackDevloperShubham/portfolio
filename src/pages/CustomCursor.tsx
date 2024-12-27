import { motion } from 'framer-motion';

interface CustomCursorProps {
  position: { x: number; y: number };
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ position }) => {
  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full border-2 border-white pointer-events-none z-50"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      <motion.div
        className="absolute inset-0 bg-white rounded-full"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

