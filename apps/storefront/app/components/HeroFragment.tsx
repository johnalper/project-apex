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
    <div 
      className="hero-fragment" 
      style={{ 
        padding: '4rem 2rem', 
        background: '#f4f4f5', 
        textAlign: 'center', 
        marginBottom: '2rem', 
        borderRadius: '8px',
        border: '1px solid #e4e4e7'
      }}
    >
      {data.headline && (
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#09090b' }}>
          {data.headline}
        </h1>
      )}
      {data.subheadline && (
        <p style={{ fontSize: '1.25rem', color: '#71717a', marginBottom: '1.5rem' }}>
          {data.subheadline}
        </p>
      )}
      {data.ctaLabel && data.ctaLink && (
        <Link 
          to={data.ctaLink} 
          className="cta-button"
          style={{ 
            background: '#000', 
            color: '#fff', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            fontWeight: '500',
            display: 'inline-block'
          }}
        >
          {data.ctaLabel}
        </Link>
      )}
    </div>
  );
}
