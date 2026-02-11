import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/cars', label: 'Nos véhicules' },
    { to: '/about', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
    { to: '/booking', label: 'Réserver' }
  ];

  const services = [
    'Location courte durée',
    'Location longue durée',
    'Location avec chauffeur',
    'Transfert aéroport',
    'Assurance complète'
  ];

  const cities = [
    'Casablanca',
    'Rabat',
    'Marrakech',
    'Fès',
    'Tanger',
    'Agadir'
  ];

  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
                Location <span className="text-red-600">Maroc</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour la location de voitures au Maroc. 
              Une flotte moderne et un service client disponible 24h/24.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-slate-600 hover:text-red-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Nos services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-600 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-slate-600 text-sm">
                  123 Boulevard Mohammed V,<br />Casablanca, Maroc
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <a href="tel:+212522123456" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                  +212 522 123 456
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <a href="mailto:contact@locationvoiture.ma" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                  contact@locationvoiture.ma
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-slate-600 text-sm">
                  Lun-Sam: 8h-20h<br />Dim: 9h-18h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Location Maroc. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
                Conditions générales
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
