import {Link} from 'react-router';

export interface SanityHeroData {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export function HeroFragment({data}: {data: SanityHeroData}) {
  // Don't load if no data retrieved
  if (!data || (!data.headline && !data.subheadline)) return null;

  return (
    <div className="hero-fragment" style={{ padding: '4rem 2rem', background: '#f4f4f5', textAlign: 'center', marginBottom: '2rem', borderRadius: '8px' }}>
      <h1>{data.headline}</h1>
      <p>{data.subheadline}</p>
      {data.ctaLabel && data.ctaLink && <Link to={data.ctaLink}>{data.ctaLabel}</Link>}
    </div>
  );
}
