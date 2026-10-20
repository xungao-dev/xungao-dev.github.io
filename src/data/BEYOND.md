# Updating Beyond Engineering

Edit `src/data/beyond.ts` for all gallery, music, and guitar media entries.
Paths are relative to `public/`; the page adds the GitHub Pages base automatically.

## Photographs

Put photographs in `public/images/beyond/photos/`. Replace or add a `photos` entry:

```ts
{
  image: 'images/beyond/photos/my-photo.jpg',
  title: 'My photo title',
  location: 'Stockholm',
  date: 'October 2026',
  caption: 'An optional personal note.',
  alt: 'A specific description of what is visible in the photograph.',
  orientation: 'landscape', // or 'portrait'
}
```

Omit `image` to show a clearly labeled placeholder. Other fields are optional;
always provide descriptive alt text for real photographs. Tiles reserve their
space before loading, and images load lazily. Use compressed WebP/AVIF/JPEG files
around 1600–2000 pixels on the long edge to keep downloads lightweight. Landscape
and portrait tiles crop to their frame; the lightbox shows the entire photograph.
Click a real photograph to open it. Escape closes; left/right arrow keys navigate.
Placeholder tiles do not open the viewer.

## Favorite songs and albums

Put optional cover images in `public/images/beyond/music/`. Edit `music`:

```ts
{
  title: 'Your favorite song or album',
  artist: 'Artist name',
  cover: 'images/beyond/music/cover.jpg',
  link: 'https://example.com/your-music-link',
  note: 'Why you like it.',
  example: false,
}
```

Remove `example: true` when replacing the example entries with your own choices.
Missing covers use a neutral record illustration; missing links omit the Listen
link. Delete entries to remove them.

## Guitar photo or clip

Uncomment and edit the optional fields in `guitar` in the same data file. Put a
photo in `public/images/beyond/photos/` and a recording in `public/media/beyond/`.
MP4/WebM use a video player; MP3/WAV/OGG/M4A use an audio player. Media never
autoplays. Add captions to any future video containing speech. Without media,
the page displays a clearly labeled placeholder.
