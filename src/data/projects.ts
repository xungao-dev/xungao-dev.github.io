export const categories = [
  'Machine Learning & Signal Processing',
  'Biomedical',
  'Robotics & Sensing',
  'Software Development',
] as const;

export type Category = typeof categories[number];
export type Art = 'geometry' | 'radar' | 'activity' | 'eye' | 'emotion' | 'game';

export type ProjectFigure = { image: string; alt: string; caption: string; width?: number; height?: number };

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
  highlightsTitle?: string;
  codeNote: string;
  demoUrl?: string;
  github?: string;
  paper?: string;
  paperLabel?: string;
  demoVideo?: string; // Relative to public/; shown only when the file exists at build time.
  figures?: ProjectFigure[];
  sections?: { title: string; paragraphs: string[]; bullets?: string[]; figures?: ProjectFigure[] }[];
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
    title: 'Emotionally Interactive Intelligent Audio Player',
    eyebrow: 'VISION & APPLICATION ENGINEERING',
    subtitle: 'Facial expression recognition for music selection and ESP32 audio playback',
    category: 'Machine Learning & Signal Processing',
    tags: ['Python', 'OpenCV', 'Keras', 'mini-XCEPTION', 'FER2013', 'ESP32'],
    art: 'emotion',
    year: '2022',
    context: 'Academic team project · 6 contributors',
    introduction: 'An academic team project connecting facial expression recognition with music playback. An ESP32-CAM captures images, a PC-side CNN classifies facial expressions, and the system uses the results to choose music played on ESP32 hardware through HTTP communication. My contribution was coding, testing, and debugging the emotion recognition module.',
    approach: 'The team system combines ESP32-CAM image capture, PC-side facial expression classification, and HTTP communication for music selection and playback on ESP32 hardware. The recognition module uses Python, OpenCV, Keras, mini-XCEPTION, and FER2013. My work focused on the emotion recognition module within this broader team system.',
    highlights: [
      'Coded the emotion recognition module.',
      'Tested and debugged the emotion recognition module.',
    ],
    codeNote: 'Part of the code is public, but some imported modules are absent from the repository. Document the missing requirements before presenting it as a runnable demo.',
    github: 'https://github.com/xungao-dev/Emotion-Recgnition',
    demoVideo: 'media/projects/emotion-aware-player-demo.mp4',
  },
  {
    slug: 'biomedical-signal-processing',
    number: '07',
    title: 'Biomedical Signal Processing & Interactive Analysis',
    eyebrow: 'BIOMEDICAL SIGNAL PROCESSING',
    subtitle: 'Interactive MATLAB applications for EEG, ECG, and eye-tracking analysis',
    category: 'Biomedical',
    art: 'activity',
    year: '2022',
    context: 'Academic coursework · MATLAB App Designer',
    featured: false,
    tags: ['MATLAB', 'Signal Processing', 'FFT', 'Digital Filtering', 'EEG', 'ECG', 'Eye Tracking'],
    introduction: 'Developed interactive MATLAB applications for signal processing and visualization through a series of academic experiments. The project covers signal generation, frequency-domain analysis, digital filter design, and applications involving EEG, ECG, and VR eye-tracking data.',
    approach: 'Implemented signal processing workflows using MATLAB and App Designer, including FFT-based spectral analysis, FIR/IIR filtering, event-related potential extraction, EEG-based target recognition, calibration-based gaze classification, and ECG heart-rate estimation.',
    highlights: [
      'Designed MATLAB App Designer interfaces for interactive signal visualization and analysis.',
      'Implemented time-domain and frequency-domain processing, including FFT and FIR/IIR filtering.',
      'Analyzed SSVEP EEG signals using spectral features and multi-channel target classification.',
      'Extracted event-related potentials using filtering, baseline correction, and trial averaging.',
      'Implemented VR eye-tracking target classification using calibration data and left/right eye fusion.',
      'Compared time-domain and frequency-domain methods for estimating heart rate from ECG signals.',
    ],
    codeNote: 'Academic coursework, not a research publication. No public source-code repository is provided. The original report and presentation are not published here.',
    figures: [
      {
        image: 'images/projects/biomedical-signal-processing/vr-eye-tracking-results.png',
        alt: 'MATLAB results for calibration-based VR eye-tracking target classification and gaze-data fusion.',
        caption: 'Figure 1: Calibration-based VR eye-tracking target classification and gaze-data fusion.',
      },
      {
        image: 'images/projects/biomedical-signal-processing/ecg-signal-processing.png',
        alt: 'MATLAB ECG signal filtering, frequency spectrum, and heart-rate estimation results.',
        caption: 'Figure 2: MATLAB ECG signal filtering, spectral analysis, and heart-rate estimation.',
      },
    ],
  },

  {
    slug: 'speech-signal-analysis-coding',
    number: '08',
    title: 'Speech Signal Analysis & Coding',
    eyebrow: 'SPEECH & AUDIO SIGNAL PROCESSING',
    subtitle: 'Python experiments in speech analysis, source–filter modeling, and digital coding',
    category: 'Machine Learning & Signal Processing',
    art: 'activity',
    featured: false,
    context: 'KTH Royal Institute of Technology — EQ2321 Speech and Audio Signal Processing · Academic coursework',
    tags: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Digital Signal Processing', 'Speech Processing', 'Linear Predictive Coding', 'Quantization'],
    introduction: 'This project explores speech signal analysis, parametric modeling, and digital speech coding through a series of Python-based experiments. The work covers spectral analysis, speech parameter estimation, linear predictive coding, vocoder synthesis, and quantization techniques, examining how speech signals can be represented, compressed, and reconstructed.',
    approach: 'Completed analysis, implementation, and evaluation tasks within two course-provided notebooks: Speech Production and Models, and Quantization and Speech Coding. The experiments extend supplied code and use course-provided speech data and pretrained LSF codebooks; the complete system was not developed independently from scratch.',
    sections: [
      {
        title: 'Speech Signal Analysis',
        paragraphs: [
          'Computed FFT-based short-time spectra with Hann and rectangular windows to examine leakage and spectral detail. An initial energy-threshold experiment marks voiced and unvoiced regions; the later frame-based analyzer uses normalized zero-crossing rate for its voicing decision.',
          'Estimated fundamental frequency from spectral peaks and frame autocorrelation. Used order-10 linear prediction to estimate the spectral envelope and inspect formant-related peaks. Compared longer-window narrowband and shorter-window wideband spectrograms to explore time–frequency resolution.',
        ],
        figures: [
          { image: 'images/projects/speech-coding/voiced-unvoiced-regions.png', width: 866, height: 545, alt: 'Speech waveform with regions labeled voiced in green and unvoiced in red.', caption: 'Energy-threshold voicing experiment on a short speech segment. These are heuristic labels, not independently validated annotations.' },
          { image: 'images/projects/speech-coding/window-spectrum-comparison.png', width: 850, height: 468, alt: 'Overlaid power spectra of a speech frame using Hann and rectangular windows.', caption: 'Hann versus rectangular window spectra for the same frame, illustrating the effect of window choice on spectral leakage and peak shape.' },
          { image: 'images/projects/speech-coding/lpc-spectral-envelope.png', width: 571, height: 453, alt: 'Speech-frame spectrum with a smooth LPC envelope and four marked envelope peaks.', caption: 'Order-10 LPC spectral envelope with detected formant-related peaks. Envelope peaks are exploratory estimates rather than verified phonetic labels.' },
          { image: 'images/projects/speech-coding/speech-spectrogram.png', width: 592, height: 453, alt: 'Original grayscale speech spectrogram showing harmonic bands and changing spectral energy.', caption: 'Original notebook spectrogram using 256-sample Hann windows and a 32-sample hop. Its time-axis scaling uses the window length rather than the hop, overstating duration by a factor of eight; the plot is retained as recorded.' },
        ],
      },
      {
        title: 'Speech Modeling and Vocoder',
        paragraphs: [
          'Speech waveform → frame-based analysis → energy, pitch, voicing and LP parameters → excitation and synthesis filter → reconstructed speech.',
          'The source–filter model separates excitation from the vocal-tract spectral envelope. Synthesis experiments compare pulse-train and noise excitation, introduce energy scaling and voiced/unvoiced switching, and explore mixed excitation and time-varying pitch. These experiments investigate the model’s limitations as well as its ability to reconstruct speech-like signals.',
        ],
      },
      {
        title: 'Quantization and Speech Coding',
        paragraphs: [
          'Implemented uniform scalar quantization experiments, comparing linear-domain and log-domain frame-energy coding. Encoded pitch in the log domain and represented the binary voiced/unvoiced decision with one bit.',
          'Converted LPC parameters to line spectral frequencies and implemented two-stage vector-quantizer encoding and decoding using supplied 10-bit codebooks, including a second-stage residual codebook. Bit-allocation experiments examine the quality–rate trade-off without claiming a production-ready bitstream.',
          'Waveform quantization varies bits per sample and quantizer range while measuring SNR. Open-loop DPCM experiments quantize the prediction error and reconstruct speech through an LP synthesis filter, exploring reconstruction error and coding rate.',
        ],
      },
      {
        title: 'Selected Results',
        paragraphs: [
          'The notebook’s listening experiments report approximately 6 bits for log-domain energy quantization versus 11 bits in the linear domain. These are observations from the coursework experiments, not general perceptual thresholds.',
          'The vocoder allocation uses 6 bits for energy, 6 for pitch, 1 for voicing, and two 10-bit LSF indices: 33 nominal parameter bits per frame. The notebook derives approximately 1 kbps using a 256-sample frame at 8 kHz, but its analysis also uses a 32-sample update interval. This calculation is not a verified effective encoded-stream bitrate.',
          'One quantized-vocoder experiment reports an SNR of approximately −5.38 dB. The reconstruction is therefore not presented as high fidelity. Waveform quantization shows increasing SNR with higher quantization rates, from approximately 1.13 dB at 1 bit per sample to 80.15 dB at 16 bits per sample in the recorded experiment.',
          'The DPCM experiments examine prediction-error quantization and reconstruction quality at different coding settings. Their results do not establish a general advantage over PCM or a complete deployed codec.',
        ],
        figures: [
          { image: 'images/projects/speech-coding/snr-quantization-rate.png', width: 686, height: 470, alt: 'SNR rises from about 1 dB to 80 dB as scalar waveform quantization increases from 1 to 16 bits per sample.', caption: 'Recorded waveform-quantization experiment: SNR versus quantizer bits per sample, with a rate-dependent quantizer range. The horizontal axis is not an encoded-stream bitrate.' },
        ],
      },
    ],
    highlights: [
      'Completed and extended notebook-based speech analysis and analysis–synthesis experiments using the supplied coursework framework.',
      'Implemented and evaluated scalar quantization and two-stage LSF vector-quantizer encoding and decoding using course-provided codebooks.',
      'Compared experimental reconstructions and documented limitations in perceptual quality, SNR, and nominal bitrate calculations.',
    ],
    codeNote: 'Academic coursework, not a research publication or production speech codec. Figures are extracted from recorded notebook outputs. No public code repository or audio demo is provided; original notebooks, speech datasets, WAV files, and course-provided codebooks are not distributed here.',
  },
  {
    slug: 'jobmatch',
    number: '09',
    title: 'JobMatch',
    eyebrow: 'SOFTWARE DEVELOPMENT',
    subtitle: 'GitHub-based job discovery and application tracking for developers',
    category: 'Software Development',
    art: 'game',
    featured: false,
    year: '2026',
    context: 'KTH Royal Institute of Technology — Academic group project',
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Firebase Authentication', 'Firestore', 'GitHub REST API', 'Jobtech API', 'Zustand', 'TanStack Query', 'React Router', 'Vitest'],
    introduction: 'JobMatch is a web application that helps developers discover relevant job opportunities by combining information from their GitHub repositories with their career preferences. Users can authenticate through GitHub, specify job preferences, explore matching opportunities, and manage saved and applied jobs.',
    approach: 'The team integrated the GitHub REST API to analyze repository languages and topics, and Sweden’s Jobtech Job Search API to retrieve relevant job postings. Job discovery uses programming languages and user-defined preferences, including location and remote work. Firebase Authentication handles sign-in, while Firestore persists user profiles and job data. The application follows a Model-View-Presenter (MVP) architecture.',
    sections: [
      {
        title: 'Team',
        paragraphs: ['A collaborative team project at KTH Royal Institute of Technology. The features described here are accomplishments of the team.'],
      },
    ],
    highlightsTitle: 'Key Features',
    highlights: [
      'GitHub OAuth authentication and repository analysis.',
      'Job discovery using programming languages and user-defined preferences.',
      'Job search with location and remote-work preferences.',
      'Saving job opportunities and tracking applications.',
      'Firebase persistence for user profiles and job data.',
      'Component organization using Model-View-Presenter architecture.',
    ],
    codeNote: 'The source repository is private. Source code is not published on this portfolio.',
    demoUrl: 'https://developer-jobmatch.web.app/',
  },
  {
    slug: 'cv-object-tracking',
    number: '10',
    title: 'Visual Marker Tracking and 3D Trajectory Reconstruction',
    eyebrow: 'COMPUTER VISION & MOTION TRACKING',
    subtitle: 'Camera calibration, visual marker tracking, and 3D trajectory reconstruction',
    category: 'Robotics & Sensing',
    tags: ['MATLAB', 'Computer Vision', 'Camera Calibration', 'Image Processing', 'KLT Tracking', '3D Reconstruction'],
    art: 'radar',
    featured: false,
    context: 'Individual academic project · Mentorship and supervision from NC State University',
    introduction: 'Developed a computer vision-based data acquisition pipeline to track visual markers and reconstruct their trajectories in three-dimensional space. This individual academic project was completed under mentorship and supervision from NC State University.',
    approach: 'Combined camera calibration, image preprocessing, segmentation, feature tracking, and coordinate transformations to recover marker motion from recorded video sequences. The experiments followed five visual markers on a moving rod in a controlled recording environment.',
    sections: [
      {
        title: 'Reconstructed Trajectories',
        paragraphs: [
          'Successfully reconstructed trajectories of five visual markers for motion along one, two, and three dimensions. The plots show the recovered paths in world coordinates.',
          'The experiments also suggested that some preprocessing and segmentation operations could be omitted under controlled recording conditions.',
        ],
        figures: [
          { image: 'images/projects/cv-object-tracking/trajectory-1d.jpg', width: 1120, height: 840, alt: 'Five reconstructed marker paths for one-dimensional rod motion.', caption: 'Reconstructed trajectories of five markers during 1D motion.' },
          { image: 'images/projects/cv-object-tracking/trajectory-1d-after-segmentation.jpg', width: 700, height: 525, alt: 'Five reconstructed marker paths for one-dimensional motion after image segmentation.', caption: '1D trajectory reconstruction using segmented marker observations.' },
          { image: 'images/projects/cv-object-tracking/trajectory-2d.jpg', width: 1120, height: 840, alt: 'Five reconstructed marker paths for two-dimensional rod motion.', caption: 'Reconstructed trajectories of five markers during 2D motion.' },
          { image: 'images/projects/cv-object-tracking/trajectory-3d.jpg', width: 1120, height: 840, alt: 'Five reconstructed marker paths for three-dimensional rod motion.', caption: 'Reconstructed trajectories of five markers during 3D motion.' },
        ],
      },
      {
        title: 'Camera Calibration',
        paragraphs: ['Estimated intrinsic and extrinsic camera parameters to establish the relationship between camera and world coordinate systems. Checkerboard observations supported calibration of the recording setup.'],
        figures: [
          { image: 'images/projects/cv-object-tracking/experimental-setup.jpg', width: 4032, height: 3024, alt: 'Recording setup with a marker-covered rod against a dark backdrop, a tripod-mounted camera, and a light.', caption: 'Controlled recording environment for tracking visual markers on a moving rod.' },
          { image: 'images/projects/cv-object-tracking/camera-calibration.jpg', width: 2560, height: 1600, alt: 'Checkerboard calibration image with detected and reprojected points beside reprojection-error and camera-pose plots.', caption: 'Checkerboard-based calibration: detected corners, reprojected points, and estimated camera geometry.' },
        ],
      },
      {
        title: 'Image Processing and Segmentation',
        paragraphs: ['Investigated denoising and automatic white balancing, then used color thresholding to separate the visual markers from the background. Segmentation was evaluated as part of the tracking pipeline under controlled recording conditions.'],
        figures: [
          { image: 'images/projects/cv-object-tracking/recorded-marker-frame.png', width: 544, height: 960, alt: 'Recorded frame showing five bright markers on a vertical rod against a dark backdrop.', caption: 'Recorded marker frame before segmentation.' },
          { image: 'images/projects/cv-object-tracking/segmented-marker-frame.png', width: 544, height: 960, alt: 'Binary segmentation mask showing five marker regions and a bright vertical region above them.', caption: 'Thresholded frame highlighting the markers, with a residual foreground region above the rod.' },
        ],
      },
      {
        title: 'Object Tracking',
        paragraphs: ['Defined regions of interest around the visual markers and applied Kanade–Lucas–Tomasi (KLT) tracking to follow marker positions across image sequences. These image-space tracks provided observations for trajectory reconstruction.'],
      },
      {
        title: '3D Trajectory Reconstruction',
        paragraphs: ['Used calibrated camera geometry and coordinate transformations to reconstruct marker positions in world coordinates. The reconstructed trajectories visualize motion along one, two, and three dimensions within the experimental setup.'],
        figures: [
          { image: 'images/projects/cv-object-tracking/camera-world-coordinate-system.png', width: 782, height: 590, alt: 'Diagram locating two cameras relative to the X, Y, and Z axes of the world coordinate system, with dimensions in millimeters.', caption: 'Camera positions and world-coordinate geometry used to relate recorded observations to the experimental space.' },
        ],
      },
    ],
    highlightsTitle: 'Key Accomplishments',
    highlights: [
      'Combined camera calibration, image processing, KLT marker tracking, and coordinate transformations in a MATLAB pipeline.',
      'Reconstructed 1D, 2D, and 3D trajectories of five visual markers on a moving rod.',
      'Examined when preprocessing and segmentation could be omitted under controlled recording conditions.',
    ],
    codeNote: 'No public source-code repository is available for this academic project. This page presents the methodology and experimental figures.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
