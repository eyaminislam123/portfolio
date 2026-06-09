export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export const showreel = {
  title: '2025 Showreel',
  subtitle: 'A collection of my best work from the past year',
  thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  duration: '2:30',
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Starter Edit',
    price: '$299',
    period: 'per project',
    description: 'Perfect for short-form content, social media clips, and quick turnarounds.',
    features: [
      'Up to 5 min final video',
      'Basic color correction',
      '2 revision rounds',
      'Music sync & sound mix',
      '3-day delivery',
      '1080p export',
    ],
    cta: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$799',
    period: 'per project',
    description: 'Full post-production for commercials, music videos, and brand films.',
    features: [
      'Up to 15 min final video',
      'Cinematic color grading',
      'Unlimited revisions',
      'Motion graphics & titles',
      'Sound design & mixing',
      '5-day delivery',
      '4K export + social cuts',
    ],
    popular: true,
    cta: 'Most Popular',
  },
  {
    id: 'premium',
    name: 'Premium Film',
    price: '$1,999',
    period: 'per project',
    description: 'End-to-end post-production for documentaries, films, and premium content.',
    features: [
      'Unlimited duration',
      'Hollywood-grade color grade',
      'VFX compositing',
      'Custom LUT creation',
      'Dedicated project manager',
      'Priority 24/7 support',
      'All formats + DCP ready',
    ],
    cta: 'Contact Me',
  },
]

export const clients = [
  'NIKE', 'GRAMEENPHONE', 'ARTCELL', 'FOODIEBD', 'TECHSTART', 'UNILEVER', 'ROBI', 'BATA'
]
