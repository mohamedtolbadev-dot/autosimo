import { useState, useEffect, useRef } from 'react';

// Icônes
const IconMapPin = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconCompass = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

const IconSun = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

const IconMountain = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
  </svg>
);

const IconPalmtree = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/>
    <path d="M13 6.5V12h-1v-1h-1v1h-1v-1h-1v1H8v-1H7v1H6v-1H5v1H4v-1H3v1H2v-1H1v1h11c.55 0 1-.45 1-1V6.5z"/>
    <path d="M13 22H7v-6h6v6z"/>
  </svg>
);

// Images des paysages et sites touristiques du Maroc - 12 destinations
const moroccoImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
    title: 'Marrakech',
    subtitle: 'La médina rouge',
    description: 'Jardins luxuriants, palais somptueux et souks animés',
    category: 'Villes Impériales',
    icon: IconMapPin,
    color: 'from-amber-500/20 to-orange-600/20'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    title: 'Chefchaouen',
    subtitle: 'La perle bleue',
    description: 'Ruelles bleues emblématiques dans le Rif',
    category: 'Villes',
    icon: IconCompass,
    color: 'from-blue-400/20 to-cyan-500/20'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&q=80',
    title: 'Sahara',
    subtitle: 'Les dunes de Merzouga',
    description: 'Lever de soleil magique sur les dunes dorées',
    category: 'Nature',
    icon: IconSun,
    color: 'from-yellow-400/20 to-amber-500/20'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1548013146-cf9e0c7d1f9f?w=800&q=80',
    title: 'Fès',
    subtitle: 'La capitale spirituelle',
    description: 'Plus ancienne médina du monde, patrimoine UNESCO',
    category: 'Villes Impériales',
    icon: IconMapPin,
    color: 'from-emerald-500/20 to-teal-600/20'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1512691453108-4c7f05d5d093?w=800&q=80',
    title: 'Essaouira',
    subtitle: 'La cité des vents',
    description: 'Remparts atlantiques et ambiance bohème',
    category: 'Côtes',
    icon: IconPalmtree,
    color: 'from-sky-400/20 to-blue-500/20'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
    title: 'Atlas',
    subtitle: 'Haut Atlas majestueux',
    description: 'Montagnes enneigées et villages berbères',
    category: 'Nature',
    icon: IconMountain,
    color: 'from-slate-400/20 to-slate-600/20'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800&q=80',
    title: 'Casablanca',
    subtitle: 'Mosquée Hassan II',
    description: 'Chef-d\'œuvre architectural sur l\'océan',
    category: 'Villes',
    icon: IconMapPin,
    color: 'from-indigo-400/20 to-purple-500/20'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1533632359083-018577724325?w=800&q=80',
    title: 'Ouarzazate',
    subtitle: 'Hollywood du désert',
    description: 'Kasbahs spectaculaires et studios de cinéma',
    category: 'Villes',
    icon: IconCompass,
    color: 'from-rose-400/20 to-pink-500/20'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1549140603-56d8de1c146e?w=800&q=80',
    title: 'Rabat',
    subtitle: 'Capitale moderne',
    description: 'Jardins andalous et tour Hassan',
    category: 'Villes Impériales',
    icon: IconMapPin,
    color: 'from-teal-400/20 to-emerald-500/20'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
    title: 'Agadir',
    subtitle: 'Perle du Sud',
    description: 'Plages dorées et promenade animée',
    category: 'Côtes',
    icon: IconPalmtree,
    color: 'from-orange-400/20 to-red-400/20'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
    title: 'Tanger',
    subtitle: 'Porte de l\'Afrique',
    description: 'Rencontre de la Méditerranée et l\'Atlantique',
    category: 'Côtes',
    icon: IconPalmtree,
    color: 'from-cyan-400/20 to-blue-500/20'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1504973529218-74cffd402da1?w=800&q=80',
    title: 'Meknès',
    subtitle: 'Ville des cent portes',
    description: 'Splendeurs impériales et patrimoine historique',
    category: 'Villes Impériales',
    icon: IconMapPin,
    color: 'from-violet-400/20 to-purple-500/20'
  }
];

const MoroccoGallery = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);

  // Animation d'entrée au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Background décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />
      
      {/* Motifs géométriques subtils */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Header amélioré */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <IconCompass className="w-4 h-4 text-red-600" />
            <span className="text-red-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Destinations
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172B] mb-5 tracking-tight">
            Explorez les merveilles
            <span className="block mt-1 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              du Maroc
            </span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Des villes impériales chargées d'histoire aux paysages sahariens époustouflants, 
            découvrez les trésors cachés du royaume
          </p>

          {/* Ligne décorative */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>

        {/* Gallery Grid - Design amélioré */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {moroccoImages.map((image, index) => {
            const isHovered = hoveredId === image.id;
            const hasHover = hoveredId !== null;
            const shouldShrink = hasHover && !isHovered;
            const isVisible = visibleItems.has(image.id);
            const Icon = image.icon;

            // Grille spéciale pour certaines images
            const isLarge = index === 0 || index === 3 || index === 6;
            
            return (
              <div
                key={image.id}
                data-id={image.id}
                className={`gallery-card relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer group
                  transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${isHovered ? 'md:col-span-2 md:row-span-2 scale-[1.02] z-20 shadow-2xl shadow-black/20' : ''}
                  ${shouldShrink ? 'scale-[0.97] opacity-60' : ''}
                  ${isLarge ? 'md:col-span-2' : ''}
                `}
                style={{ 
                  transitionDelay: `${index * 80}ms`,
                  height: isHovered ? '360px' : isLarge ? '200px' : '160px'
                }}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image avec effet parallaxe */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out
                      ${isHovered ? 'scale-125' : 'scale-100 group-hover:scale-110'}
                    `}
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay gradient amélioré */}
                <div className={`absolute inset-0 transition-all duration-500
                  ${isHovered 
                    ? 'from-black/80 via-black/30 to-transparent' 
                    : `from-black/70 via-black/20 to-transparent bg-gradient-to-br ${image.color}`}
                `} />

                {/* Bordure subtile au survol */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300
                  ${isHovered ? 'border-white/30' : 'border-white/10'}
                `} />

                {/* Badge catégorie avec icône */}
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 sm:gap-2
                  px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/95 backdrop-blur-md rounded-full
                  shadow-lg transition-all duration-300
                  ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-3 scale-90'}
                `}>
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600" />
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700">
                    {image.category}
                  </span>
                </div>

                {/* Effet de brillance au survol */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 
                  translate-x-[-100%] transition-transform duration-700
                  ${isHovered ? 'translate-x-[100%]' : ''}
                `} />

                {/* Content amélioré */}
                <div className={`absolute inset-x-0 bottom-0 p-4 sm:p-5 transition-all duration-300
                  ${isHovered ? 'pb-5 sm:pb-7' : ''}
                `}>
                  {/* Titre avec animation */}
                  <h3 className={`font-bold text-white transition-all duration-300 tracking-tight
                    ${isHovered ? 'text-xl sm:text-2xl md:text-3xl mb-2' : 'text-sm sm:text-base mb-1'}
                  `}>
                    {image.title}
                  </h3>
                  
                  {/* Sous-titre */}
                  <p className={`text-white/90 font-medium transition-all duration-300
                    ${isHovered 
                      ? 'text-sm sm:text-base opacity-100 translate-y-0' 
                      : 'text-xs opacity-80'}
                  `}>
                    {image.subtitle}
                  </p>

                  {/* Description visible au survol */}
                  <p className={`text-white/70 text-xs sm:text-sm mt-2 transition-all duration-300
                    ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}
                  `}>
                    {image.description}
                  </p>
                  
                  {/* Bouton "Découvrir" stylisé */}
                  <div className={`overflow-hidden transition-all duration-300
                    ${isHovered ? 'max-h-14 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
                  `}>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 
                      hover:bg-red-50 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200
                      shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                      Explorer
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Numéro de la carte */}
                <span className={`absolute top-3 right-3 sm:top-4 sm:right-4 
                  w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center
                  bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs font-bold
                  border border-white/20 transition-all duration-300
                  ${isHovered ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
                `}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA amélioré */}
        <div className="mt-14 sm:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-slate-600 text-base sm:text-lg">
              Prêt à explorer ces destinations magnifiques ?
            </p>
            
            <a
              href="/cars"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 
                text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg
                hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-red-200 
                transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-red-200/50
                hover:shadow-2xl hover:shadow-red-300/40"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 13.1V16c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
              Louer une voiture maintenant
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </a>

            {/* Info supplémentaire */}
            <div className="flex items-center gap-6 mt-4 text-xs sm:text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Réservation en 2 min
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Annulation gratuite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoroccoGallery;
