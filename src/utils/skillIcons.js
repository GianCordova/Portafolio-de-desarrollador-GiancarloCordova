import { 
  FaJava, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaDocker, 
  FaDatabase,
  FaCss3Alt,
  FaBootstrap
} from 'react-icons/fa';

// Para TypeScript, C#, Tailwind, etc., usamos Font Awesome alternativas
export const skillIcons = {
  // Lenguajes
  'Java': FaJava,
  'JavaScript': FaJs,
  'C#': FaJava,  // Usamos Java como placeholder (mismo color)
  'TypeScript': FaJs,  // Usamos JS como placeholder
  
  // Frontend
  'React': FaReact,
  'React Native': FaReact,
  'Tailwind': FaCss3Alt,  // CSS como placeholder
  'Bootstrap': FaBootstrap,
  'CSS/SCSS': FaCss3Alt,
  
  // Backend
  'Node.js': FaNode,
  '.NET': FaJava,  // Placeholder
  'Springboot': FaNode,  // Placeholder
  'Docker': FaDocker,
  'PostgreSQL': FaDatabase
};