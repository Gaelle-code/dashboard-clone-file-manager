function makeImageDataUrl(title, initials, primaryColor, secondaryColor) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 640">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${primaryColor}" />
          <stop offset="100%" stop-color="${secondaryColor}" />
        </linearGradient>
      </defs>
      <rect width="900" height="640" fill="url(#bg)" />
      <circle cx="760" cy="110" r="150" fill="rgba(255,255,255,0.15)" />
      <circle cx="160" cy="120" r="140" fill="rgba(255,255,255,0.12)" />
      <path d="M0 470C150 360 250 560 410 445C560 338 675 375 900 260V640H0Z" fill="rgba(255,255,255,0.18)" />
      <path d="M0 530C180 450 290 560 470 470C620 395 720 420 900 355V640H0Z" fill="rgba(15,23,42,0.12)" />
      <rect x="64" y="62" width="180" height="54" rx="18" fill="rgba(255,255,255,0.2)" />
      <text x="92" y="98" fill="white" font-size="26" font-family="Arial, sans-serif" font-weight="700">${initials}</text>
      <text x="70" y="546" fill="white" font-size="56" font-family="Arial, sans-serif" font-weight="800">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const images = [
  {
    id: 1,
    name: 'Aurora Terminal',
    alt: 'Blue and violet dashboard illustration',
    createdAt: '2026-06-18T09:20:00',
    lastOpenedAt: '2026-06-21T07:15:00',
    size: '2.4 MB',
    format: 'PNG',
    description: 'Soft gradients and a layered light trail pulled from the visual language of the clone.',
    url: makeImageDataUrl('Aurora', 'AT', '#3a57e8', '#7f8cff'),
  },
  {
    id: 2,
    name: 'Signal Harbor',
    alt: 'Teal and deep blue visual with floating shapes',
    createdAt: '2026-06-17T13:05:00',
    lastOpenedAt: '2026-06-20T18:30:00',
    size: '1.9 MB',
    format: 'JPG',
    description: 'Bright accent shapes with a balanced teal and blue dashboard palette.',
    url: makeImageDataUrl('Signal', 'SH', '#08b1ba', '#175d95'),
  },
  {
    id: 3,
    name: 'Paper Horizon',
    alt: 'Warm sunset inspired abstract image',
    createdAt: '2026-06-16T11:40:00',
    lastOpenedAt: '2026-06-21T01:40:00',
    size: '3.1 MB',
    format: 'PNG',
    description: 'A warmer card used to keep the gallery visually varied and readable.',
    url: makeImageDataUrl('Paper', 'PH', '#f97316', '#f43f5e'),
  },
  {
    id: 4,
    name: 'Glassfield Notes',
    alt: 'Green and cyan abstract composition',
    createdAt: '2026-06-15T08:25:00',
    lastOpenedAt: '2026-06-19T16:45:00',
    size: '2.1 MB',
    format: 'PNG',
    description: 'The title reflects a clean card composition with subtle glass effects.',
    url: makeImageDataUrl('Glass', 'GN', '#22c55e', '#0ea5e9'),
  },
  {
    id: 5,
    name: 'Summit Frame',
    alt: 'Dark violet and blue file preview',
    createdAt: '2026-06-14T10:12:00',
    lastOpenedAt: '2026-06-21T06:45:00',
    size: '4.0 MB',
    format: 'JPG',
    description: 'A darker option to anchor the top row of the recent view scroller.',
    url: makeImageDataUrl('Summit', 'SF', '#1d4ed8', '#4f46e5'),
  },
  {
    id: 6,
    name: 'Orbit Sheet',
    alt: 'Sky blue layered wave artwork',
    createdAt: '2026-06-13T15:55:00',
    lastOpenedAt: '2026-06-20T08:10:00',
    size: '2.8 MB',
    format: 'PNG',
    description: 'Rounded wave forms help the image cards feel like real media tiles.',
    url: makeImageDataUrl('Orbit', 'OS', '#0ea5e9', '#2563eb'),
  },
  {
    id: 7,
    name: 'Studio Bloom',
    alt: 'Pink and orange abstract preview',
    createdAt: '2026-06-12T14:00:00',
    lastOpenedAt: '2026-06-18T13:10:00',
    size: '1.7 MB',
    format: 'JPG',
    description: 'This tile adds a warmer accent so the row does not feel repetitive.',
    url: makeImageDataUrl('Studio', 'SB', '#ec4899', '#f59e0b'),
  },
  {
    id: 8,
    name: 'Prism Stack',
    alt: 'Purple and cyan layered geometric design',
    createdAt: '2026-06-11T09:30:00',
    lastOpenedAt: '2026-06-19T08:20:00',
    size: '3.5 MB',
    format: 'PNG',
    description: 'A geometric composition that works well in the responsive grid.',
    url: makeImageDataUrl('Prism', 'PS', '#6366f1', '#06b6d4'),
  },
  {
    id: 9,
    name: 'Metro Archive',
    alt: 'Slate and indigo archive image',
    createdAt: '2026-06-10T17:15:00',
    lastOpenedAt: '2026-06-17T15:50:00',
    size: '2.2 MB',
    format: 'PNG',
    description: 'Muted tones keep the file details readable inside the white cards.',
    url: makeImageDataUrl('Metro', 'MA', '#475569', '#334155'),
  },
  {
    id: 10,
    name: 'Canvas Loop',
    alt: 'Cyan and royal blue looping illustration',
    createdAt: '2026-06-09T12:48:00',
    lastOpenedAt: '2026-06-20T19:05:00',
    size: '2.9 MB',
    format: 'JPG',
    description: 'The preview reads like a poster card and gives the modal a strong hero image.',
    url: makeImageDataUrl('Canvas', 'CL', '#0f766e', '#3b82f6'),
  },
  {
    id: 11,
    name: 'Northlight',
    alt: 'Deep navy and blue glow design',
    createdAt: '2026-06-08T08:35:00',
    lastOpenedAt: '2026-06-16T10:00:00',
    size: '4.6 MB',
    format: 'PNG',
    description: 'A cool-toned asset with a subtle spotlight effect in the composition.',
    url: makeImageDataUrl('North', 'NL', '#0f172a', '#1e40af'),
  },
  {
    id: 12,
    name: 'Tide Panel',
    alt: 'Ocean-inspired abstract panel',
    createdAt: '2026-06-07T16:20:00',
    lastOpenedAt: '2026-06-15T11:22:00',
    size: '2.0 MB',
    format: 'PNG',
    description: 'This asset mirrors the calm, card-led rhythm of the reference screen.',
    url: makeImageDataUrl('Tide', 'TP', '#0284c7', '#14b8a6'),
  },
  {
    id: 13,
    name: 'Bloom Panel',
    alt: 'Coral and rose abstract tile',
    createdAt: '2026-06-06T10:55:00',
    lastOpenedAt: '2026-06-14T09:45:00',
    size: '1.5 MB',
    format: 'JPG',
    description: 'A lighter card that keeps the gallery from feeling too heavy or dense.',
    url: makeImageDataUrl('Bloom', 'BP', '#fb7185', '#f97316'),
  },
  {
    id: 14,
    name: 'Frame Current',
    alt: 'Indigo and sky blue artwork for a file tile',
    createdAt: '2026-06-05T13:12:00',
    lastOpenedAt: '2026-06-13T08:12:00',
    size: '3.9 MB',
    format: 'PNG',
    description: 'Used to round out the all-images grid with a distinct primary shape.',
    url: makeImageDataUrl('Frame', 'FC', '#4338ca', '#38bdf8'),
  },
  {
    id: 15,
    name: 'Dawn Layer',
    alt: 'Gold and orange sunrise-inspired tile',
    createdAt: '2026-06-04T09:05:00',
    lastOpenedAt: '2026-06-12T14:18:00',
    size: '2.6 MB',
    format: 'JPG',
    description: 'A bright ending tile that helps the lightbox feel full and balanced.',
    url: makeImageDataUrl('Dawn', 'DL', '#f59e0b', '#fb7185'),
  },
  {
    id: 16,
    name: 'Slate Vector',
    alt: 'Neutral gray and blue file preview',
    createdAt: '2026-06-03T15:25:00',
    lastOpenedAt: '2026-06-11T12:34:00',
    size: '2.3 MB',
    format: 'PNG',
    description: 'A muted tile that keeps the image index grounded and realistic.',
    url: makeImageDataUrl('Slate', 'SV', '#1e293b', '#64748b'),
  },
];

export const mockImages = images;
