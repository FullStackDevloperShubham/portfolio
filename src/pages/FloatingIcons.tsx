import { useEffect, useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiKubernetes,
  SiGraphql,
} from 'react-icons/si';

const icons = [
  { Icon: FaReact, color: 'text-blue-400' },
  { Icon: FaNodeJs, color: 'text-green-500' },
  { Icon: FaPython, color: 'text-yellow-300' },
  { Icon: FaDatabase, color: 'text-red-400' },
  { Icon: FaHtml5, color: 'text-orange-500' },
  { Icon: FaCss3Alt, color: 'text-blue-500' },
  { Icon: FaJs, color: 'text-yellow-400' },
  { Icon: SiExpress, color: 'text-gray-400' },
  { Icon: SiMongodb, color: 'text-green-400' },
  { Icon: SiPostgresql, color: 'text-blue-600' },
  { Icon: SiRedux, color: 'text-purple-400' },
  { Icon: SiTailwindcss, color: 'text-blue-400' },
  { Icon: SiTypescript, color: 'text-blue-500' },
  { Icon: FaDocker, color: 'text-blue-400' },
  { Icon: SiKubernetes, color: 'text-blue-500' },
  { Icon: SiGraphql, color: 'text-pink-400' },
  { Icon: FaAws, color: 'text-orange-400' },
];

type Position = {
  x: number;
  y: number;
};

const MIN_DISTANCE = 15; // Minimum distance between icons in percentage
const ICON_SIZE = 4; // Approximate icon size in percentage
const MAX_ATTEMPTS = 50; // Maximum attempts to find a valid position

const getDistance = (pos1: Position, pos2: Position): number => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const generateRandomPosition = (): Position => ({
  x: Math.floor(Math.random() * (100 - 2 * ICON_SIZE) + ICON_SIZE),
  y: Math.floor(Math.random() * (100 - 2 * ICON_SIZE) + ICON_SIZE),
});

const isValidPosition = (
  newPos: Position,
  existingPositions: Position[]
): boolean => {
  return existingPositions.every(
    (pos) => getDistance(newPos, pos) >= MIN_DISTANCE
  );
};

const findValidPosition = (existingPositions: Position[]): Position | null => {
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    const newPos = generateRandomPosition();
    if (isValidPosition(newPos, existingPositions)) {
      return newPos;
    }
  }
  return null;
};

export const FloatingIcons = () => {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const newPositions: Position[] = [];

    // Place icons with collision detection
    icons.forEach(() => {
      const validPosition = findValidPosition(newPositions);
      if (validPosition) {
        newPositions.push(validPosition);
      }
    });

    setPositions(newPositions);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, color }, index) => {
        if (!positions[index]) return null;

        const { x, y } = positions[index];

        return (
          <div
            key={index}
            className={`absolute ${color} transition-all duration-500 ease-in-out`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Icon className="text-4xl" />
          </div>
        );
      })}
    </div>
  );
};