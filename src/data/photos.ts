// Royalty-free photos from Unsplash (Unsplash License), downloaded by scripts/fetch-images.py.
// These are illustrative stock photos: no person shown is a J & J employee or customer.

type PhotoInfo = { widths: number[]; credit: string; alt: string }

export const photos = {
  'hero-quilt': { widths: [900, 1600, 2400], credit: 'Dinh Pham', alt: 'Patchwork quilt blocks with spools of thread and red-handled scissors' },
  'fabric-shelves': { widths: [800, 1400], credit: 'Tuti Fruti Cahyadi', alt: 'Shelves stacked with bolts of printed quilting cotton' },
  'learning-machine': { widths: [800, 1400], credit: 'Ashley Diane Worsham', alt: 'Close view of hands feeding fabric through a sewing machine' },
  'vacuum-home': { widths: [800, 1400], credit: 'Vitaly Gariev', alt: 'Vacuuming the floor of a bright, airy home' },
  'thread-wall': { widths: [800, 1400], credit: 'Andy Kennedy', alt: 'Rows of thread spools in every color on a store display' },
  'embroidery-stitch': { widths: [800, 1400], credit: 'Omar Alrawi', alt: 'A sewing machine stitching a green embroidered design' },
  'quilt-stitching': { widths: [800, 1400], credit: 'K Adams', alt: 'Detail of hand-quilted stitching across colorful patchwork' },
  'serger-dials': { widths: [800, 1400], credit: 'Ilinca Roman', alt: 'Tension dials on a four-thread serger' },
  'quilt-blue': { widths: [800, 1400], credit: 'Matt Benson', alt: 'A blue and white geometric quilt hanging over a rail' },
  'embroidery-hoop': { widths: [800, 1400], credit: 'Rendy Novantino', alt: 'An embroidery machine stitching lettering inside a hoop' },
  'quilt-cathedral': { widths: [800, 1400], credit: 'Jen Couser', alt: 'A cathedral-window quilt in dozens of small prints' },
  'living-room-rug': { widths: [800, 1600], credit: 'Sven Brandsma', alt: 'A calm modern living room with a patterned rug and light floors' },
  'presser-foot': { widths: [800, 1400], credit: 'Bozhin Karaivanov', alt: 'A presser foot stitching blue fabric' },
  'quilt-railing': { widths: [900, 1600, 2400], credit: 'Matt Benson', alt: 'A bright checkered quilt draped over a wooden railing' },
  'machine-moody': { widths: [900, 1600, 2400], credit: 'Alexander Grey', alt: 'A hand smoothing fabric beside a sewing machine needle' },
  'bright-living-room': { widths: [900, 1600, 2400], credit: 'Zac Gudakov', alt: 'A bright modern living room with light oak floors' },
  'quilt-fence': { widths: [800, 1400], credit: 'Matt Benson', alt: 'A colorful quilt draped over a fence post in a green field' },
  'fabric-rolls': { widths: [800, 1400], credit: 'Victor Volkov', alt: 'Folded fabric in teal, blue and white' },
} satisfies Record<string, PhotoInfo>

export type PhotoName = keyof typeof photos
