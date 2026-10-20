// Paths are relative to public/. Example: 'images/beyond/photos/stockholm.jpg'.
// Local paths automatically respect the site's GitHub Pages base path.
export interface Photo {
  image?: string;
  title?: string;
  location?: string;
  date?: string;
  caption?: string;
  alt?: string;
  orientation?: 'portrait' | 'landscape';
}

export interface MusicEntry {
  title?: string;
  artist?: string;
  cover?: string;
  link?: string;
  note?: string;
  example?: boolean;
}

export const photos: Photo[] = [
  { title: 'Somewhere along the way', caption: 'A place for a landscape photograph.', orientation: 'landscape' },
  { title: 'A closer look', caption: 'A place for the little details.', orientation: 'portrait' },
  { title: 'In passing', caption: 'A place for an everyday moment.', orientation: 'portrait' },
  { title: 'The long way home', caption: 'A place for another view.', orientation: 'landscape' },
];

export const music: MusicEntry[] = [
  { title: 'A song on repeat', note: 'Add a favorite song, its artist, and what keeps you coming back.', example: true },
  { title: 'An album to get lost in', note: 'Add an album and a little note about why it stays with you.', example: true },
  { title: 'Something to learn on guitar', note: 'Add a song you enjoy playing, or would like to learn.', example: true },
];

export const guitar: { image?: string; alt?: string; clip?: string; caption?: string } = {
  // image: 'images/beyond/photos/guitar.jpg',
  // alt: 'Describe your guitar photograph here.',
  // clip: 'media/beyond/guitar.mp4', // MP4/WebM video or MP3/WAV/OGG audio
  // caption: 'An optional note about the photo or clip.',
};
