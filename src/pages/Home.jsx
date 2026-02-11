import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeaturedCars } from '../data/cars';

// Icônes SVG inline
const IconShield = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconClock = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const IconMapPin = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconCar = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H8.5a1 1 0 0 0-.8.4L5 11l-.16.01a1 1 0 0 0-.84.99V16h3" />
    <path d="M17 21H7a2 2 0 0 1-2-2v-3h14v3a2 2 0 0 1-2 2Z" />
  </svg>
);
const IconStar = ({ className = "w-5 h-5", filled = false }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IconUsers = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconCog = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconFuel = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="15" y2="22" />
    <line x1="4" y1="9" x2="14" y2="9" />
    <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
    <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 6" />
  </svg>
);
const IconCalendar = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IconSearch = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

// Hero decorative car silhouette (SVG)
const HeroCarSilhouette = () => (
  <svg className="w-full h-full max-h-64 md:max-h-80 opacity-20" viewBox="0 0 400 160" fill="none" aria-hidden>
    <path d="M40 100h320v24a4 4 0 01-4 4H44a4 4 0 01-4-4V100z" fill="currentColor" />
    <path d="M60 84h280l-24-32H84L60 84z" fill="currentColor" />
    <circle cx="100" cy="128" r="16" fill="currentColor" />
    <circle cx="300" cy="128" r="16" fill="currentColor" />
    <path d="M120 60h160v8H120z" fill="currentColor" opacity="0.6" />
  </svg>
);

const Home = () => {
  const navigate = useNavigate();
  const inputBaseClassName =
    'w-full rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/40 focus:border-red-500 focus:outline-none transition min-h-11';
  const inputWithIconClassName =
    'w-full rounded-xl pl-10 pr-4 py-3 text-slate-800 placeholder:text-slate-400 bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/40 focus:border-red-500 focus:outline-none transition min-h-11';
  const selectWithIconClassName =
    'w-full rounded-xl pl-10 pr-10 py-3 text-slate-800 bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/40 focus:border-red-500 focus:outline-none transition cursor-pointer appearance-none min-h-11';

  const [searchData, setSearchData] = useState({
    location: 'Casablanca',
    startDate: '',
    endDate: ''
  });

  const clientCount = '10K+';

  const testimonials = [
    {
      name: 'Sara A.',
      city: 'Casablanca',
      rating: 5,
      text: 'Voiture propre, service rapide et très bon rapport qualité/prix. Parfait pour un voyage en famille.'
    },
    {
      name: 'Youssef B.',
      city: 'Rabat',
      rating: 5,
      text: 'Réservation simple, récupération sans attente. L’équipe est professionnelle et très réactive.'
    },
    {
      name: 'Khadija M.',
      city: 'Marrakech',
      rating: 5,
      text: 'Excellent confort sur route, tout était conforme. Je recommande vivement !'
    },
    {
      name: 'Omar H.',
      city: 'Tanger',
      rating: 4,
      text: 'Très bonne expérience globalement. Support disponible et informations claires.'
    },
    {
      name: 'Nadia E.',
      city: 'Agadir',
      rating: 5,
      text: 'Service premium, véhicules récents. On a apprécié l’assistance et la flexibilité.'
    }
  ];

  const faqs = [
    {
      q: 'Quels documents dois-je fournir pour louer une voiture ?',
      a: 'Une pièce d\'identité valide, un permis de conduire en cours de validité et un moyen de paiement. Des documents supplémentaires peuvent être demandés selon le véhicule.'
    },
    {
      q: 'Puis-je annuler ma réservation ?',
      a: 'Oui. Les conditions d\'annulation varient selon la réservation. Nous recommandons d\'annuler au plus tard 24h avant la prise en charge pour éviter des frais.'
    },
    {
      q: 'Est-ce que l\'assurance est incluse ?',
      a: 'L\'assurance de base est incluse. Vous pouvez choisir une option premium pour une couverture renforcée selon vos besoins.'
    },
    {
      q: 'Puis-je ajouter un siège enfant ?',
      a: 'Oui, vous pouvez ajouter un siège enfant lors de la réservation (selon disponibilité).'
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const isSearchFormValid =
    Boolean(searchData.location) && Boolean(searchData.startDate) && Boolean(searchData.endDate);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!isSearchFormValid) return;
    const params = new URLSearchParams();
    if (searchData.location) params.append('location', searchData.location);
    if (searchData.startDate) params.append('startDate', searchData.startDate);
    if (searchData.endDate) params.append('endDate', searchData.endDate);
    navigate(`/cars?${params.toString()}`);
  };

  const featuredCars = getFeaturedCars();

 
  

  return (
    <div className="min-h-screen bg-slate-50 min-w-0 overflow-x-hidden">
      {/* Hero — image Maroc en fond, overlay pour lisibilité */}
      <section
        className="relative text-white overflow-hidden rounded-b-2xl sm:rounded-b-3xl bg-slate-800"
        style={{
          backgroundImage: 'url(https://www.goride.ma/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoride-ma.c6b6281e.jpg&w=3840&q=75)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay sombre pour contraste du texte */}
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
        {/* Légère grille optionnelle */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl py-10 sm:py-16 md:py-24">
          <div className="grid md:grid-cols-12 md:gap-10 lg:gap-14 items-center">
            {/* Copy block */}
            <div className="md:col-span-7 min-w-0">
              <p className="text-slate-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                Location de véhicules
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-5 text-white break-words">
                Louez votre voiture au Maroc
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                Des prix compétitifs, un service de qualité et une flotte moderne pour tous vos déplacements au royaume.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link
                  to="/cars"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors text-sm sm:text-base"
                >
                  Voir nos véhicules
                  <IconArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors text-sm sm:text-base"
                >
                  Nous contacter
                </Link>
              </div>
              {/* Trust line */}
              <ul className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300" role="list">
                <li className="flex items-center gap-2">
                  <IconShield className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Assurance incluse</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconClock className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Assistance 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconMapPin className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Agences partout au Maroc</span>
                </li>
              </ul>
            </div>
            {/* Decorative visual */}
            <div className="hidden md:flex md:col-span-5 justify-end items-center pt-8 md:pt-0">
              <HeroCarSilhouette />
            </div>
          </div>
        </div>
      </section>

      {/* Barre de recherche — champs détaillés, placeholder date masqué */}
      <section className="px-4 sm:px-6 -mt-6 sm:-mt-8 relative z-10">
        <div className="container mx-auto max-w-5xl min-w-0">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-5 md:p-6">
            <form onSubmit={handleSearch} className="space-y-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Lieu */}
                <div className="flex flex-col">
                  <label htmlFor="search-location" className="text-sm font-medium text-slate-700 mb-2">
                    Lieu de prise en charge
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden>
                      <IconMapPin className="w-5 h-5" />
                    </span>
                    <select
                      id="search-location"
                      value={searchData.location}
                      onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                      className={`search-field-input ${selectWithIconClassName}`}
                    >
                      <option>Casablanca</option>
                      <option>Rabat</option>
                      <option>Marrakech</option>
                      <option>Fès</option>
                      <option>Tanger</option>
                      <option>Agadir</option>
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" aria-hidden>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                    </span>
                  </div>
                </div>

                {/* Date de début — placeholder natif masqué */}
                <div className="flex flex-col">
                  <label htmlFor="search-start" className="text-sm font-medium text-slate-700 mb-2">
                    Date de début
                  </label>
                  <div className={`relative date-field-wrapper ${!searchData.startDate ? 'date-field-empty' : ''}`}>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" aria-hidden>
                      <IconCalendar className="w-5 h-5" />
                    </span>
                    <input
                      id="search-start"
                      type="date"
                      value={searchData.startDate}
                      onChange={(e) => setSearchData({ ...searchData, startDate: e.target.value })}
                      className={`search-date-input ${inputWithIconClassName}`}
                    />
                    {!searchData.startDate && (
                      <span className="date-custom-placeholder pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-slate-400 text-[15px]">
                        Choisir une date
                      </span>
                    )}
                  </div>
                </div>

                {/* Date de fin — placeholder natif masqué */}
                <div className="flex flex-col">
                  <label htmlFor="search-end" className="text-sm font-medium text-slate-700 mb-2">
                    Date de fin
                  </label>
                  <div className={`relative date-field-wrapper ${!searchData.endDate ? 'date-field-empty' : ''}`}>
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none z-10" aria-hidden>
                      <IconCalendar className="w-5 h-5" />
                    </span>
                    <input
                      id="search-end"
                      type="date"
                      value={searchData.endDate}
                      onChange={(e) => setSearchData({ ...searchData, endDate: e.target.value })}
                      className={`search-date-input ${inputWithIconClassName}`}
                    />
                    {!searchData.endDate && (
                      <span className="date-custom-placeholder pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-slate-400 text-[15px]">
                        Choisir une date
                      </span>
                    )}
                  </div>
                </div>

                {/* Bouton Rechercher */}
                <div className="flex flex-col justify-end">
                  <label className="text-sm font-medium text-slate-700 mb-2 invisible">Rechercher</label>
                  <button
                    type="submit"
                    disabled={!isSearchFormValid}
                    className={`search-submit-btn w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors min-h-11 ${
                      !isSearchFormValid
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    <IconSearch className="w-5 h-5 shrink-0" />
                    Rechercher
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Véhicules en vedette — bandeau avec défilement auto vers la gauche */}
      <section className="py-10 sm:py-14 md:py-16 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl min-w-0">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                Véhicules en vedette
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Découvrez notre sélection — défilement automatique
              </p>
            </div>
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 shrink-0"
            >
              Voir tous les véhicules
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </header>
        </div>
        <div className="relative overflow-hidden">
          {/* Masque en dégradé à gauche (optionnel) */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-slate-50 z-10 pointer-events-none [mask-image:linear-gradient(to_right,black,transparent)]" aria-hidden />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-slate-50 z-10 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
          <div className="flex w-max cars-scroll-track" style={{ width: 'max-content' }}>
            {[...featuredCars, ...featuredCars].map((car, index) => (
              <article
                key={`${car.id}-${index}`}
                className="w-[260px] sm:w-[300px] md:w-[340px] shrink-0 mx-2 md:mx-3 first:ml-4 last:mr-4 sm:first:ml-4 md:first:ml-6 md:last:mr-6"
              >
                <Link to={`/cars/${car.id}`} className="block group">
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                    <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded-t-2xl">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-red-600 transition-colors">{car.name}</h3>
                          <p className="text-sm text-slate-500">{car.category}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xl font-bold text-red-600">{car.price} MAD</p>
                          <p className="text-xs text-slate-500">par jour</p>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600 mb-3">
                        <li className="flex items-center gap-1">
                          <IconUsers className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{car.seats} pl.</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <IconCog className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{car.transmission}</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <IconFuel className="w-4 h-4 text-slate-500 shrink-0" />
                          <span>{car.fuel}</span>
                        </li>
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-red-600 font-medium text-sm group-hover:gap-2 transition-all">
                        Réserver
                        <IconArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

       
        <div className="relative overflow-hidden mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-slate-50 z-10 pointer-events-none [mask-image:linear-gradient(to_right,black,transparent)]" aria-hidden />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-slate-50 z-10 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />
          <div className="flex w-max cars-scroll-track-right" style={{ width: 'max-content' }}>
            {[...featuredCars, ...featuredCars].map((car, index) => (
              <article
                key={`right-2-${car.id}-${index}`}
                className="w-[240px] sm:w-[280px] md:w-[320px] shrink-0 mx-2 md:mx-3 first:ml-4 last:mr-4 md:first:ml-6 md:last:mr-6"
              >
                <Link to={`/cars/${car.id}`} className="block group">
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                    <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded-t-2xl">
                      <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-red-600 transition-colors">{car.name}</h3>
                          <p className="text-sm text-slate-500">{car.category}</p>
                        </div>
                        <p className="text-lg font-bold text-red-600 shrink-0">{car.price} MAD</p>
                      </div>
                      <ul className="flex flex-wrap gap-x-3 text-sm text-slate-600 mb-3">
                        <li className="flex items-center gap-1"><IconUsers className="w-4 h-4 text-slate-500 shrink-0" /><span>{car.seats} pl.</span></li>
                        <li className="flex items-center gap-1"><IconCog className="w-4 h-4 text-slate-500 shrink-0" /><span>{car.transmission}</span></li>
                        <li className="flex items-center gap-1"><IconFuel className="w-4 h-4 text-slate-500 shrink-0" /><span>{car.fuel}</span></li>
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-red-600 font-medium text-sm group-hover:gap-2 transition-all">Réserver <IconArrowRight className="w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Family Comfort Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80"
                  alt="Famille en voyage en voiture"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/45 to-transparent" />

                <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900 border border-white/60">
                    <IconShield className="w-4 h-4 text-red-600" />
                    Sécurité famille
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-900 border border-white/60">
                    <IconCar className="w-4 h-4 text-red-600" />
                    Grand coffre
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white rounded-2xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
                    <IconUsers className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-slate-900 leading-none">7</p>
                    <p className="text-xs text-slate-500 font-semibold">places max</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-flex items-center gap-2 text-red-600 text-sm font-semibold uppercase tracking-wider mb-3">
                Pour toute la famille
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Confort, espace et tranquillité
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Pour vos vacances ou sorties en famille, choisissez un véhicule spacieux et agréable.
                Climatisation, rangement et sécurité : tout est pensé pour un voyage sans stress.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                      <IconShield className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Sécurité renforcée</p>
                      <p className="text-xs text-slate-600">Systèmes modernes + entretien régulier</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                      <IconClock className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Assistance 24/7</p>
                      <p className="text-xs text-slate-600">Support rapide pendant votre trajet</p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-red-100">
                    <IconUsers className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm sm:text-base">Sièges enfants et rehausseurs disponibles</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-8 h-8 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-red-100">
                    <IconCar className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm sm:text-base">SUV & monospaces récents, parfaits pour la route</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/cars"
                  className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                >
                  Voir les véhicules familiaux
                  <IconArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                >
                  Besoin de conseils ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-red-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
              </svg>
              Processus simple
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comment réserver votre véhicule ?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              4 étapes simples pour louer votre voiture et partir à l'aventure
            </p>
          </div>

          {/* Steps Diagram */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  step: '01',
                  title: 'Choisissez',
                  desc: 'Sélectionnez votre véhicule idéal parmi notre flotte',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21 21-4.34-4.34"/>
                      <circle cx="10" cy="10" r="7"/>
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/>
                      <polyline points="13 2 13 9 20 9"/>
                    </svg>
                  )
                },
                {
                  step: '02',
                  title: 'Réservez',
                  desc: 'Remplissez vos informations et choisissez vos options',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                      <path d="m9 16 2 2 4-4"/>
                    </svg>
                  )
                },
                {
                  step: '03',
                  title: 'Confirmez',
                  desc: 'Recevez votre confirmation par email instantanément',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                      <circle cx="18" cy="17" r="3"/>
                      <path d="m20.5 18.5 1 1"/>
                    </svg>
                  )
                },
                {
                  step: '04',
                  title: 'Partez',
                  desc: 'Retirez votre voiture et profitez de votre voyage',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 13.1V16c0 .6.4 1 1 1h2"/>
                      <circle cx="7" cy="17" r="2"/>
                      <circle cx="17" cy="17" r="2"/>
                      <path d="M2 12h6"/>
                      <path d="M12 2v6"/>
                      <path d="m15 5 3-3 3 3"/>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={item.step} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0">
                  {/* Broken/Twisted arrows between steps */}
                  {idx < 3 && (
                    <>
                      {/* Desktop: arrows from step to step */}
                      <div className="hidden md:block absolute top-10 left-1/2 translate-x-[52px] z-0 pointer-events-none" aria-hidden>
                        <svg width="170" height="64" viewBox="0 0 170 64" fill="none">
                          <path
                            d="M2 48 C 40 8, 78 8, 92 32 S 132 56, 162 18"
                            stroke="#ef4444"
                            strokeOpacity="0.55"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="9 8"
                          />
                          <path
                            d="M156 12 L162 18 L154 22"
                            stroke="#ef4444"
                            strokeOpacity="0.8"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Mobile: arrows down */}
                      <div className="md:hidden absolute left-6 top-[64px] z-0 pointer-events-none" aria-hidden>
                        <svg width="64" height="140" viewBox="0 0 64 140" fill="none">
                          <path
                            d="M46 2 C 18 28, 54 46, 22 74 S 50 118, 18 134"
                            stroke="#ef4444"
                            strokeOpacity="0.45"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="9 8"
                          />
                          <path
                            d="M12 128 L18 134 L10 136"
                            stroke="#ef4444"
                            strokeOpacity="0.8"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  )}

                  {/* Step Node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center justify-center relative group">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <span className="absolute -top-2 -right-2 w-9 h-9 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-xs font-black text-slate-900">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 md:mt-6 md:text-center md:px-2">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 sm:mt-14 text-center">
            <Link
              to="/cars"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-red-200 transition-all duration-300"
            >
              <span>Commencer ma réservation</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              Réservation rapide · Confirmation immédiate · Annulation gratuite
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-red-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
              Foire aux questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Tout ce que vous devez savoir
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
              Réponses claires et complètes pour vous aider à prendre la meilleure décision
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-red-200 shadow-lg shadow-red-100/50' 
                      : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <span className="text-sm font-bold">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <span className={`text-sm sm:text-base font-semibold transition-colors ${
                        isOpen ? 'text-slate-900' : 'text-slate-700'
                      }`}>
                        {item.q}
                      </span>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-red-600 text-white rotate-180' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-18">
                      <div className="flex gap-3">
                        <div className="w-px bg-red-200 shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-900">Vous avez d'autres questions ?</p>
                  <p className="text-xs text-slate-500">Notre équipe est là pour vous aider</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors text-sm whitespace-nowrap"
              >
                Contactez-nous
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Count + Testimonials Marquee */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Ils nous font confiance</p>
                <div className="mt-3 flex items-end gap-3">
                  <p className="text-4xl font-black text-slate-900 leading-none">{clientCount}</p>
                  <p className="text-sm font-semibold text-slate-600 pb-1">clients satisfaits</p>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Des avis authentiques et une expérience de location fluide, partout au Maroc.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center text-amber-500">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <IconStar key={n} className="w-4 h-4" filled />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Note moyenne 4.9/5</span>
                </div>

                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  Ouvrir sur Google Maps
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 min-w-0">
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-white z-10 pointer-events-none [mask-image:linear-gradient(to_right,black,transparent)]" aria-hidden />
                <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-white z-10 pointer-events-none [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden />

                <div className="flex w-max cars-scroll-track" style={{ width: 'max-content' }}>
                  {[...testimonials, ...testimonials].map((t, idx) => (
                    <article
                      key={`${t.name}-${idx}`}
                      className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 mx-2 sm:mx-3"
                    >
                      <div className="h-full bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-lg hover:border-slate-300 transition-all">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-slate-900 truncate">{t.name}</p>
                            <p className="text-xs text-slate-500">{t.city}</p>
                          </div>
                          <div className="flex items-center text-amber-500 shrink-0">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <IconStar
                                key={i}
                                className="w-4 h-4"
                                filled={i < t.rating}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                          “{t.text}”
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — fond uni */}
      <section className="bg-red-600 text-white py-10 sm:py-14 md:py-16 rounded-t-2xl sm:rounded-t-3xl">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center min-w-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 px-1">
            Prêt à partir à l'aventure ?
          </h2>
          <p className="text-base sm:text-lg text-red-100 mb-4 sm:mb-6">
            Réservez votre véhicule en quelques clics
          </p>
          <Link
            to="/cars"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:bg-red-50 transition-colors text-sm sm:text-base"
          >
            Découvrir nos offres
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
