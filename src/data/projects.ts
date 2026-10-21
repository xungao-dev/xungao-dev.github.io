export const categories = [
  'Machine Learning & Signal Processing',
  'Biomedical',
  'Robotics & Sensing',
  'Software Development',
] as const;

export type Category = typeof categories[number];
export type Art = 'geometry' | 'radar' | 'activity' | 'eye' | 'emotion' | 'game';

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  category: Category;
  tags: string[];
  art: Art;
  featured?: boolean;
  year?: string;
  context: string;
  introduction: string;
  approach: string;
  highlights: string[];
  codeNote: string;
  github?: string;
  paper?: string;
  paperLabel?: string;
};

// All project text is editable here. Check company/team disclosure rules before adding
// private screenshots, datasets, architectural diagrams, metrics, or source code.
export const projects: Project[] = [
  {
    slug: 'point2acoustic',
    number: '01',
    title: 'Point2Acoustic',
    paper: 'https://arxiv.org/abs/2610.27023',
    paperLabel: 'Read preprint on arXiv',
    eyebrow: 'GEOMETRIC DEEP LEARNING',
    subtitle: 'Acoustic parameter estimation from 3D scene geometry',
    category: 'Machine Learning & Signal Processing',
    tags: ['PyTorch', 'PointNet++', '3D Point Clouds', 'Room Acoustics'],
    art: 'geometry',
    featured: true,
    year: '2026',
    context: 'Master’s thesis research · KTH & Ericsson Research',
    introduction: 'Exploring how geometric deep learning can estimate room acoustic properties directly from 3D scene representations.',
    approach: 'A point-cloud-based multi-task learning pipeline uses scene geometry and material information to estimate acoustic parameters, offering a data-driven alternative to repeated simulation.',
    highlights: [
      'Explored point-cloud neural networks for multi-target regression.',
      'Built a synthetic 3D room dataset with varied geometry and material assignments.',
      'Evaluated model predictions against simulation-based acoustic labels.',
    ],
    codeNote: 'Source code is not publicly provided. This page describes research at a high level; publish any company-derived figures, data or implementation details only with authorization.',
  },
  {
    slug: 'autonomous-driving',
    number: '02',
    title: 'Autonomous Driving Perception',
    eyebrow: 'ROBOTICS & MULTI-SENSOR FUSION',
    subtitle: 'Visual perception and LiDAR–camera calibration for a driverless racecar',
    category: 'Robotics & Sensing',
    tags: ['Computer Vision', 'LiDAR', 'C++', 'Python', 'PP-YOLO'],
    art: 'radar',
    featured: true,
    year: '2020–2023',
    context: 'Formula Student Driverless · Beijing Institute of Technology',
    introduction: 'Contributed to perception algorithms and sensor calibration in an autonomous Formula Student racing team.',
    approach: 'Developed visual object detection and automated LiDAR–camera calibration workflows for an integrated autonomous perception stack.',
    highlights: [
      'Worked on monocular and stereo-camera perception.',
      'Implemented sensor calibration with geometric filtering and robust matching.',
      'Supported integration of algorithms into a real-time autonomous system.',
    ],
    codeNote: 'Team project code is not linked here. Add only materials that your team or institution permits you to share.',
  },
  {
    slug: 'hmm-activity-recognition',
    number: '03',
    title: 'Human Activity Recognition',
    eyebrow: 'PATTERN RECOGNITION',
    subtitle: 'Hidden Markov Models for smartphone accelerometer signals',
    category: 'Robotics & Sensing',
    tags: ['Python', 'HMM', 'Sensor Data', 'Signal Processing'],
    art: 'activity',
    featured: true,
    context: 'Independent / academic project · Public code',
    introduction: 'A sequence-modeling project that classifies standing, walking and running from three-axis acceleration data.',
    approach: 'Built a Hidden Markov Model with Gaussian emissions and expectation-maximization training, then visualized the inferred sequence of activities.',
    highlights: [
      'Implemented a training workflow for probabilistic sequence models.',
      'Evaluated predicted activity sequences against reference labels.',
      'Visualized accelerometer measurements and classification outputs.',
    ],
    codeNote: 'Public repository available. See README for setup, training and an example result.',
    github: 'https://github.com/xungao-dev/HMM-Model-Based-Activity-Recognition',
  },
  {
    slug: 'fundus-image-classification',
    number: '04',
    title: 'Fundus Image Classification',
    eyebrow: 'BIOMEDICAL COMPUTER VISION',
    subtitle: 'Deep-learning-assisted classification of retinal images',
    category: 'Biomedical',
    tags: ['Medical Imaging', 'ResNet', 'Image Processing', 'Deep Learning'],
    art: 'eye',
    year: '2022–2023',
    context: 'Research project · Beijing Institute of Technology',
    introduction: 'Explored a ResNet-based workflow for classifying diabetic retinopathy stages from retinal fundus photographs.',
    approach: 'Prepared images using filtering, enhancement and white-balance preprocessing, then applied a convolutional neural network for classification.',
    highlights: [
      'Worked with medical imagery and visual preprocessing techniques.',
      'Applied transfer-learning-style image classification methods.',
      'Investigated end-to-end biomedical image analysis workflows.',
    ],
    codeNote: 'No public repository is linked. Please verify dataset licenses and collaboration permissions before sharing training images or code.',
  },
  {
    slug: 'emotion-aware-system',
    number: '05',
    title: 'Emotion-Aware Interactive System',
    eyebrow: 'VISION & APPLICATION ENGINEERING',
    subtitle: 'Image-based emotion recognition linked to an interactive interface',
    category: 'Machine Learning & Signal Processing',
    tags: ['Python', 'Computer Vision', 'GUI', 'Multiprocessing'],
    art: 'emotion',
    context: 'Software / computer vision project · Public code',
    introduction: 'An application combining visual emotion detection, interface updates and music selection logic.',
    approach: 'Integrated an emotion recognition component with a Python GUI, data handling and concurrent processing across threads and processes.',
    highlights: [
      'Worked on image-based emotion detection and label aggregation.',
      'Connected model outputs to application state and visual updates.',
      'Explored multi-component desktop application architecture.',
    ],
    codeNote: 'Part of the code is public, but some imported modules are absent from the repository. Document the missing requirements before presenting it as a runnable demo.',
    github: 'https://github.com/xungao-dev/Emotion-Recgnition',
  },
  {
    slug: 'adventure-game',
    number: '06',
    title: 'My Adventure Game',
    eyebrow: 'SOFTWARE DEVELOPMENT',
    subtitle: 'A story-based desktop game with multiple gameplay modes',
    category: 'Software Development',
    tags: ['C++', 'Game Logic', 'Desktop Application'],
    art: 'game',
    context: 'Programming project · Public code',
    introduction: 'A C++ desktop game built around a school adventure storyline and interactive levels.',
    approach: 'Implemented game modes, scene transitions, interactions and level logic in a modular C++ project.',
    highlights: [
      'Built both story mode and endless mode.',
      'Organized game logic across source files and reusable headers.',
      'Worked with desktop graphics, events and audiovisual components.',
    ],
    codeNote: 'Public repository available. Some game assets are not included in the current repository, so a complete build may require additional files.',
    github: 'https://github.com/xungao-dev/Game-MyAdvanture',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
