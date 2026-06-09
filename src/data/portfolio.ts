export interface Project {
  id: string
  title: string
  category: string
  client: string
  year: string
  thumbnail: string
  videoUrl?: string
  duration: string
  description: string
  tags: string[]
  featured?: boolean
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

export const personalInfo = {
  name: 'Arif Rahman',
  title: 'Professional Video Editor',
  tagline: 'Crafting Visual Stories That Move Audiences',
  email: 'hello@arifrahman.com',
  phone: '+880 1712-345678',
  location: 'Dhaka, Bangladesh',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  bio: 'Award-winning video editor with 8+ years of experience transforming raw footage into compelling visual narratives. Specialized in cinematic editing, color grading, and motion graphics for brands, films, and digital content.',
  socials: {
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    vimeo: 'https://vimeo.com',
    behance: 'https://behance.net',
  },
  stats: [
    { label: 'Projects Completed', value: '250+' },
    { label: 'Happy Clients', value: '120+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Awards Won', value: '15' },
  ],
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Urban Pulse — Brand Film',
    category: 'Commercial',
    client: 'Nike Bangladesh',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    duration: '2:45',
    videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    description: 'High-energy brand film showcasing urban athleticism with dynamic cuts and color-graded cinematic look.',
    tags: ['Color Grading', 'Sound Design', '4K'],
    featured: true,
  },
  {
    id: '2',
    title: 'Echoes of Silence',
    category: 'Documentary',
    client: 'Independent',
    year: '2025',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    duration: '18:30',
    videoUrl: 'https://www.youtube.com/embed/3nQNiWdeH2Q',
    description: 'Award-winning documentary exploring the lives of street musicians in Old Dhaka.',
    tags: ['Documentary', 'Storytelling', 'Audio Mix'],
    featured: true,
  },
  {
    id: '3',
    title: 'Neon Dreams — Music Video',
    category: 'Music Video',
    client: 'Artcell',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1574267432644-f6102b50d0ea?w=800&q=80',
    duration: '4:12',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    description: 'Surreal music video with VFX compositing and neon-infused color palette.',
    tags: ['VFX', 'Motion Graphics', 'Neon Grade'],
    featured: true,
  },
  {
    id: '4',
    title: 'TechForward Launch',
    category: 'Corporate',
    client: 'Grameenphone',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    duration: '1:30',
    videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    description: 'Product launch video with sleek motion graphics and corporate storytelling.',
    tags: ['Motion Graphics', 'Corporate', '2D Animation'],
  },
  {
    id: '5',
    title: 'Wedding Cinematic — R&S',
    category: 'Wedding',
    client: 'Private Client',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    duration: '8:00',
    videoUrl: 'https://www.youtube.com/embed/3nQNiWdeH2Q',
    description: 'Emotional wedding film with slow-motion sequences and orchestral scoring.',
    tags: ['Cinematic', 'Slow Motion', 'Emotional'],
  },
  {
    id: '6',
    title: 'Street Food Chronicles',
    category: 'YouTube',
    client: 'FoodieBD Channel',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    duration: '12:00',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    description: 'Fast-paced food vlog series with engaging transitions and sound design.',
    tags: ['YouTube', 'Fast Cuts', 'Sound FX'],
  },
]

export const services: Service[] = [
  {
    id: '1',
    icon: 'Film',
    title: 'Video Editing',
    description: 'Professional multi-cam editing, narrative structuring, and pacing for any format.',
    features: ['Multi-cam Sync', 'Narrative Editing', 'Rough & Fine Cuts', 'Version Control'],
  },
  {
    id: '2',
    icon: 'Palette',
    title: 'Color Grading',
    description: 'Cinematic color correction and grading using DaVinci Resolve for film-quality visuals.',
    features: ['Color Correction', 'LUT Design', 'Skin Tone Matching', 'HDR Grading'],
  },
  {
    id: '3',
    icon: 'Sparkles',
    title: 'Motion Graphics',
    description: 'Dynamic titles, lower thirds, and animated elements that elevate your content.',
    features: ['Title Design', 'Lower Thirds', 'Logo Animation', 'Infographics'],
  },
  {
    id: '4',
    icon: 'Volume2',
    title: 'Sound Design',
    description: 'Immersive audio mixing, sound effects, and music synchronization.',
    features: ['Audio Mixing', 'Sound FX', 'Music Sync', 'Voice Cleanup'],
  },
  {
    id: '5',
    icon: 'Clapperboard',
    title: 'Post Production',
    description: 'End-to-end post-production pipeline from ingest to final delivery.',
    features: ['Ingest & Proxy', 'VFX Compositing', 'Subtitling', 'Multi-format Export'],
  },
  {
    id: '6',
    icon: 'MonitorPlay',
    title: 'Social Media Content',
    description: 'Platform-optimized edits for Instagram, TikTok, YouTube, and Facebook.',
    features: ['Reels & Shorts', 'Vertical Format', 'Captions', 'Thumbnail Design'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    role: 'Marketing Director',
    company: 'Nike Bangladesh',
    quote: 'Arif transformed our brand vision into a cinematic masterpiece. His attention to detail and creative instincts are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: '2',
    name: 'Khaled Hassan',
    role: 'Film Director',
    company: 'Independent Films',
    quote: 'Working with Arif feels like having a co-director in the edit bay. He understands story at a deep level.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: '3',
    name: 'Nadia Islam',
    role: 'Content Creator',
    company: 'FoodieBD',
    quote: 'My YouTube channel grew 300% after Arif started editing my content. He knows exactly how to keep viewers engaged.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    id: '4',
    name: 'Tanvir Rahman',
    role: 'CEO',
    company: 'TechStart BD',
    quote: 'Professional, fast, and incredibly talented. Arif delivered our product launch video ahead of schedule with stunning quality.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
]

export const skills: Skill[] = [
  { name: 'Adobe Premiere Pro', level: 95, icon: 'Clapperboard' },
  { name: 'DaVinci Resolve', level: 90, icon: 'Palette' },
  { name: 'After Effects', level: 88, icon: 'Sparkles' },
  { name: 'Final Cut Pro', level: 85, icon: 'Scissors' },
  { name: 'Avid Media Composer', level: 75, icon: 'Film' },
  { name: 'Audition / Pro Tools', level: 80, icon: 'Volume2' },
]

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Senior Video Editor',
    company: 'Freelance / Remote',
    description: 'Leading post-production for international brands and independent filmmakers.',
  },
  {
    year: '2022',
    title: 'Lead Editor',
    company: 'Creative Studios BD',
    description: 'Managed a team of 4 editors, delivering 50+ commercial projects annually.',
  },
  {
    year: '2019',
    title: 'Video Editor',
    company: 'Media House Dhaka',
    description: 'Edited news segments, documentaries, and corporate videos for broadcast.',
  },
  {
    year: '2017',
    title: 'Junior Editor',
    company: 'Film Production House',
    description: 'Started career assisting senior editors on feature films and TV commercials.',
  },
]

export const marqueeItems = [
  'VIDEO EDITING',
  'COLOR GRADING',
  'MOTION GRAPHICS',
  'SOUND DESIGN',
  'CINEMATIC STORYTELLING',
  'POST PRODUCTION',
  'VFX COMPOSITING',
  'DOCUMENTARY',
  'COMMERCIAL',
  'MUSIC VIDEO',
]

export const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and target audience through detailed consultation.' },
  { step: '02', title: 'Ingest & Organize', description: 'Professional media management, proxy creation, and project structuring.' },
  { step: '03', title: 'Rough Cut', description: 'First assembly of footage with narrative flow and pacing established.' },
  { step: '04', title: 'Fine Cut & Grade', description: 'Precision editing, color grading, sound design, and motion graphics.' },
  { step: '05', title: 'Review & Revise', description: 'Collaborative review process with unlimited revision rounds.' },
  { step: '06', title: 'Final Delivery', description: 'Multi-format export optimized for every platform and screen.' },
]
