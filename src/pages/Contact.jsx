import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const inputBaseClassName =
    'w-full rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/40 focus:border-red-500 focus:outline-none transition';
  const selectBaseClassName =
    'w-full rounded-xl px-4 py-3 text-slate-800 bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/40 focus:border-red-500 focus:outline-none transition cursor-pointer appearance-none';
  const textareaBaseClassName =
    'w-full rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-red-500/40 focus:border-red-500 focus:outline-none transition resize-none';
  const primaryButtonClassName =
    'w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition flex items-center justify-center gap-2';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const agencies = [
    {
      city: 'Casablanca',
      address: '123 Boulevard Mohammed V, Casablanca',
      phone: '+212 522 123 456',
      email: 'casablanca@locationvoiture.ma',
      hours: 'Lun-Sam: 8h-20h, Dim: 9h-18h'
    },
    {
      city: 'Rabat',
      address: '45 Avenue Hassan II, Rabat',
      phone: '+212 537 234 567',
      email: 'rabat@locationvoiture.ma',
      hours: 'Lun-Sam: 8h-20h, Dim: 9h-18h'
    },
    {
      city: 'Marrakech',
      address: '78 Avenue Mohammed VI, Marrakech',
      phone: '+212 524 345 678',
      email: 'marrakech@locationvoiture.ma',
      hours: 'Lun-Sam: 8h-20h, Dim: 9h-18h'
    },
    {
      city: 'Fès',
      address: '56 Boulevard Moulay Youssef, Fès',
      phone: '+212 535 456 789',
      email: 'fes@locationvoiture.ma',
      hours: 'Lun-Sam: 8h-20h, Dim: 9h-18h'
    },
    {
      city: 'Tanger',
      address: '90 Avenue des FAR, Tanger',
      phone: '+212 539 567 890',
      email: 'tanger@locationvoiture.ma',
      hours: 'Lun-Sam: 8h-20h, Dim: 9h-18h'
    },
    {
      city: 'Agadir',
      address: '34 Boulevard Hassan I, Agadir',
      phone: '+212 528 678 901',
      email: 'agadir@locationvoiture.ma',
      hours: 'Lun-Sam: 8h-20h, Dim: 9h-18h'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 min-w-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden rounded-b-2xl sm:rounded-b-3xl bg-slate-800">
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-6xl py-10 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3">Contact</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-base sm:text-lg text-slate-200">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Message envoyé !</h3>
                <p className="text-emerald-700 text-sm">
                  Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputBaseClassName}
                    placeholder="Ex: Mohamed Tolba"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputBaseClassName}
                      placeholder="exemple@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputBaseClassName}
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={selectBaseClassName}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="information">Demande d'information</option>
                    <option value="modification">Modification de réservation</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={textareaBaseClassName}
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className={primaryButtonClassName}
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Téléphone</h3>
                    <p className="text-slate-600">+212 522 123 456</p>
                    <p className="text-sm text-slate-500">Service client disponible 24/7</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-slate-600">contact@locationvoiture.ma</p>
                    <p className="text-sm text-slate-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Horaires</h3>
                    <p className="text-slate-600">Lun-Sam: 8h00 - 20h00</p>
                    <p className="text-slate-600">Dimanche: 9h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-sm p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Besoin d'aide urgente ?</h3>
              <p className="text-slate-200 mb-4 text-sm sm:text-base">
                Notre service d'assistance est disponible 24h/24 et 7j/7 pour vous aider en cas de besoin.
              </p>
              <a 
                href="tel:+212522123456"
                className="inline-flex items-center justify-center bg-white text-red-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transition"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>

        {/* Agencies Grid */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-8 text-center">Nos agences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencies.map((agency, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 hover:shadow-lg hover:border-slate-300 transition-all">
                <h3 className="text-lg font-bold text-red-600 mb-4">{agency.city}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <p className="text-slate-600">{agency.address}</p>
                  </div>
                  <div className="flex gap-2">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`tel:${agency.phone}`} className="text-slate-600 hover:text-red-600">
                      {agency.phone}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`mailto:${agency.email}`} className="text-slate-600 hover:text-red-600">
                      {agency.email}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <p className="text-slate-600">{agency.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
            <div className="h-96 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
              <div className="text-center">
                <MapPin className="w-14 h-14 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Carte des agences</p>
                <p className="text-sm text-slate-500">(Intégration Google Maps à venir)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;