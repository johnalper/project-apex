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
    <div className="hero-fragment">
      <h1>{data.headline}</h1>
      <p>{data.subheadline}</p>
    </div>
  );
}
