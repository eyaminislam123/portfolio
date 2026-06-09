import Marquee from 'react-fast-marquee'
import { marqueeItems } from '../data/portfolio'

export default function MarqueeBanner() {
  return (
    <div className="relative py-6 bg-cinema-accent overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {marqueeItems.map((item, i) => (
          <span key={i} className="flex items-center mx-8">
            <span className="font-display text-2xl md:text-3xl tracking-[0.2em] text-white uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="ml-8 w-2 h-2 rounded-full bg-white/50" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}

export function MarqueeBannerDark() {
  return (
    <div className="relative py-4 border-y border-cinema-gray overflow-hidden">
      <Marquee speed={30} gradient={false} direction="right">
        {['PREMIERE PRO', 'AFTER EFFECTS', 'DAVINCI RESOLVE', 'FINAL CUT PRO', 'PRO TOOLS', 'CINEMA 4D', 'PHOTOSHOP', 'AUDITION'].map(
          (item, i) => (
            <span key={i} className="flex items-center mx-6">
              <span className="font-mono text-sm tracking-[0.3em] text-cinema-muted uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="ml-6 text-cinema-accent">✦</span>
            </span>
          ),
        )}
      </Marquee>
    </div>
  )
}
