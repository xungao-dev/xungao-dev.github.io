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
  { image: 'images/beyond/photos/flower-shop.jpg', title: 'Strasbourg, France', alt: 'Colorful flowers and potted plants outside a flower shop beneath a cream awning.', orientation: 'landscape' },
  { image: 'images/beyond/photos/waterfront-skyline.jpg', title: 'Toronto, Canada', alt: 'Boats on the water in front of the Toronto skyline and CN Tower beneath a pale blue sky.', orientation: 'portrait' },
  { image: 'images/beyond/photos/sunset-silhouettes.jpg', title: 'Oslo, Norway', alt: 'Silhouettes of people against a golden sunset, with a standing figure in the foreground.', orientation: 'landscape' },
  { image: 'images/beyond/photos/winter-cityscape.jpg', title: 'Salzburg, Austria', alt: 'Snow-covered rooftops and church towers overlooking a winding river, with warm city lights at dusk.', orientation: 'landscape' },
  { image: 'images/beyond/photos/by-the-sea.jpg', title: 'Sicily, Italy', alt: 'A person in a red jacket sits in a folding chair on a beach facing turquoise waves.', orientation: 'landscape' },
];

// Add files to public/images/beyond/drawings/, then set image and descriptive alt.
// Example: { image: 'images/beyond/drawings/sketch.jpg', alt: 'Pencil sketch of ...', caption: 'An optional note.' }
export const drawings: Pick<Photo, 'image' | 'title' | 'caption' | 'alt'>[] = [
  { image: 'images/beyond/drawings/bust-study.jpg', alt: 'Pencil drawing of a sculpted bearded bust, with strong shadows and flowing hair.' },
  { image: 'images/beyond/drawings/still-life.jpg', alt: 'Pencil still-life drawing of glass bottles and fruit arranged on draped fabric.' },
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
