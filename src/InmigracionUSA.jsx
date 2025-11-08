\
            import React, { useState, useEffect } from 'react';
            import { Menu, X, Globe, Phone, Mail, ChevronDown, MessageCircle, FileText, Briefcase, GraduationCap, Home, Shield, Users, Calendar, Send, CheckCircle, ArrowRight, Award, Clock, Star } from 'lucide-react';

            const InmigracionUSA = () => {
              const [lang, setLang] = useState('es');
              const [menuOpen, setMenuOpen] = useState(false);
              const [activeSection, setActiveSection] = useState('inicio');
              const [openFaq, setOpenFaq] = useState(null);
              const [chatOpen, setChatOpen] = useState(false);
              const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '', tipoVisa: '' });
              const [scrollY, setScrollY] = useState(0);

              useEffect(() => {
                const handleScroll = () => setScrollY(window.scrollY);
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
              }, []);

              const t = lang === 'es' ? {
                nav: { inicio: 'Inicio', servicios: 'Servicios', visas: 'Visas', testimonios: 'Testimonios', contacto: 'Contacto', faq: 'FAQ' },
                hero: { title: 'Su Socio Legal Confiable', subtitle: 'Asesoría migratoria profesional con más de 15 años de experiencia', cta: 'Consulta Gratuita' },
                services: { title: 'Servicios Profesionales', items: ['Consultoría Legal', 'Preparación Documentos', 'Representación Legal', 'Seguimiento de Caso', 'Asesoría Corporativa', 'Apelaciones'] },
                visas: { title: 'Categorías de Visa', items: ['Visa Turismo B1/B2', 'Visas Trabajo H-1B/L-1/O-1', 'Visa Estudiante F-1/M-1', 'Green Card Residencia', 'Asilo y Refugio', 'Lotería DV'] }
              } : {
                nav: { inicio: 'Home', servicios: 'Services', visas: 'Visas', testimonios: 'Testimonials', contacto: 'Contact', faq: 'FAQ' },
                hero: { title: 'Your Trusted Legal Partner', subtitle: 'Professional immigration advisory with over 15 years of experience', cta: 'Free Consultation' },
                services: { title: 'Professional Services', items: ['Legal Consultation', 'Document Preparation', 'Legal Representation', 'Case Tracking', 'Corporate Advisory', 'Appeals'] },
                visas: { title: 'Visa Categories', items: ['Tourist Visa B1/B2', 'Work Visas H-1B/L-1/O-1', 'Student Visa F-1/M-1', 'Green Card Residence', 'Asylum & Refuge', 'DV Lottery'] }
              };

              const faqs = lang === 'es' ? [
                { q: '¿Cuánto cuesta la consulta inicial?', a: 'La primera consulta es GRATUITA por 30 minutos. Evaluamos su elegibilidad sin compromiso.' },
                { q: '¿Cuál es su tasa de éxito?', a: 'Mantenemos una tasa de aprobación del 98% gracias a nuestra preparación exhaustiva.' },
                { q: '¿Cuánto tiempo tarda?', a: 'Turista: 2-4 semanas. Trabajo: 3-6 meses. Green Card: 1-3 años.' },
                { q: '¿Están certificados?', a: 'Sí, nuestro equipo incluye abogados miembros de AILA con licencias vigentes.' }
              ] : [
                { q: 'How much is the initial consultation?', a: 'The first consultation is FREE for 30 minutes. We evaluate your eligibility without commitment.' },
                { q: 'What is your success rate?', a: 'We maintain a 98% approval rate thanks to our thorough preparation.' },
                { q: 'How long does it take?', a: 'Tourist: 2-4 weeks. Work: 3-6 months. Green Card: 1-3 years.' },
                { q: 'Are you certified?', a: 'Yes, our team includes AILA member attorneys with current licenses.' }
              ];

              const visaIcons = [Home, Briefcase, GraduationCap, Shield, Users, Calendar];
              const visaColors = ['from-blue-500 to-blue-700', 'from-indigo-500 to-indigo-700', 'from-purple-500 to-purple-700', 'from-green-500 to-green-700', 'from-red-500 to-red-700', 'from-amber-500 to-amber-700'];
              const serviceIcons = [FileText, Award, Shield, CheckCircle, Briefcase, Mail];

              const handleSubmit = () => {
                if (!formData.nombre || !formData.mensaje) {
                  console.error(lang === 'es' ? 'Error: Complete nombre y mensaje' : 'Error: Complete name and message');
                  return;
                }
                const msg = `CONSULTA - ${formData.nombre}\\nEmail: ${formData.email}\\nTel: ${formData.telefono}\\nVisa: ${formData.tipoVisa}\\n\\n${formData.mensaje}`;
                window.open(`https://wa.me/573152738241?text=${encodeURIComponent(msg)}`, '_blank');
              };

              const USFlag = () => (
                <svg viewBox="0 0 60 40" className="w-full h-full">
                  <rect width="60" height="40" fill="#B22234"/>
                  <path d="M0,3h60M0,8h60M0,13h60M0,18h60M0,23h60M0,28h60M0,33h60M0,38h60" stroke="#fff" strokeWidth="3"/>
                  <rect width="24" height="17" fill="#3C3B6E"/>
                </svg>
              );

              return (
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 font-sans">
                  <style>{`
                    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                    @keyframes slideLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
                    @keyframes slideRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
                    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                    @keyframes glow { 0%, 100% { box-shadow: 0 0 20px rgba(59,130,246,0.5); } 50% { box-shadow: 0 0 40px rgba(59,130,246,0.8); } }
                    .fade { animation: fadeInUp 0.8s ease-out; }
                    .slide-l { animation: slideLeft 0.8s ease-out; }
                    .slide-r { animation: slideRight 0.8s ease-out; }
                    .float { animation: float 3s ease-in-out infinite; }
                    .glow { animation: glow 2s ease-in-out infinite; }
                    .hover-card { transition: all 0.4s cubic-bezier(0.4,0,0.2,1); }
                    .hover-card:hover { transform: translateY(-12px) scale(1.03); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
                  `}</style>

                  <header className={`bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-2xl sticky top-0 z-50 transition-all ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
                    <div className="container mx-auto px-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-10 rounded overflow-hidden shadow-lg ring-2 ring-yellow-400">
                          <USFlag />
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Immigration Law Firm</h1>
                          <p className="text-xs text-blue-200 font-semibold">{lang === 'es' ? 'Abogados Certificados' : 'Certified Attorneys'}</p>
                        </div>
                      </div>

                      <nav className="hidden lg:flex space-x-5">
                        {Object.entries(t.nav).map(([key, value]) => (
                          <button key={key} onClick={() => setActiveSection(key)} className={`hover:text-yellow-400 transition text-sm font-medium ${activeSection === key ? 'text-yellow-400' : ''}`}>
                            {value}
                          </button>
                        ))}
                      </nav>

                      <div className="flex items-center space-x-3">
                        <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="flex items-center space-x-2 hover:text-yellow-400 transition bg-blue-800 px-3 py-2 rounded-lg">
                          <Globe className="w-4 h-4" />
                          <span className="text-sm font-semibold">{lang === 'es' ? 'EN' : 'ES'}</span>
                        </button>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
                          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                      </div>
                    </div>

                    {menuOpen && (
                      <nav className="lg:hidden bg-blue-800 px-4 py-4 space-y-2 fade border-t border-blue-700 mt-3">
                        {Object.entries(t.nav).map(([key, value]) => (
                          <button key={key} onClick={() => { setActiveSection(key); setMenuOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-blue-700 rounded-lg transition">
                            {value}
                          </button>
                        ))}
                      </nav>
                    )}
                  </header>

                  {activeSection === 'inicio' && (
                    <>
                      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white py-20 overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
                          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                        </div>

                        <div className="container mx-auto px-4 relative z-10">
                          <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="slide-l">
                              <div className="inline-block bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-yellow-400/30">
                                <p className="text-yellow-300 font-semibold text-sm">🏆 {lang === 'es' ? 'Firma Legal Certificada' : 'Certified Law Firm'}</p>
                              </div>
                              <h2 className="text-5xl md:text-6xl font-bold mb-6">{t.hero.title}</h2>
                              <p className="text-xl mb-8 text-blue-100">{t.hero.subtitle}</p>
                              <div className="flex flex-wrap gap-4">
                                <button onClick={() => setActiveSection('contacto')} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition shadow-2xl inline-flex items-center space-x-2 glow">
                                  <Calendar className="w-5 h-5" />
                                  <span>{t.hero.cta}</span>
                                </button>
                                <button onClick={() => window.open('https://wa.me/573152738241', '_blank')} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition inline-flex items-center space-x-2">
                                  <MessageCircle className="w-5 h-5" />
                                  <span>WhatsApp</span>
                                </button>
                              </div>
                            </div>

                            <div className="slide-r">
                              <div className="grid grid-cols-2 gap-4">
                                {['2,500+', '98%', '15+', 'AILA'].map((stat, i) => (
                                  <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover-card">
                                    <Award className="w-10 h-10 text-yellow-400 mb-3" />
                                    <p className="text-3xl font-bold mb-1">{stat}</p>
                                    <p className="text-blue-200 text-sm">{i === 0 ? (lang === 'es' ? 'Casos' : 'Cases') : i === 1 ? (lang === 'es' ? 'Aprobación' : 'Approval') : i === 2 ? (lang === 'es' ? 'Años' : 'Years') : 'Certified'}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                          <div className="text-center mb-16 fade">
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">{t.services.title}</h2>
                            <p className="text-gray-600 text-xl">{lang === 'es' ? 'Soluciones integrales especializadas' : 'Specialized comprehensive solutions'}</p>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t.services.items.map((service, i) => {
                              const Icon = serviceIcons[i];
                              return (
                                <div key={i} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border-2 border-blue-100 hover-card fade">
                                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                    <Icon className="w-7 h-7 text-white" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service}</h3>
                                  <p className="text-gray-600">{lang === 'es' ? 'Servicio profesional especializado con resultados comprobados' : 'Specialized professional service with proven results'}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </section>
                    </>
                  )}

                  <main className="container mx-auto px-4 py-16">
                    {activeSection === 'visas' && (
                      <section>
                        <div className="text-center mb-16 fade">
                          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">{t.visas.title}</h2>
                          <p className="text-gray-600 text-xl">{lang === 'es' ? 'Expertos en todos los procesos migratorios' : 'Experts in all immigration processes'}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {t.visas.items.map((visa, i) => {
                            const Icon = visaIcons[i];
                            return (
                              <div key={i} className="bg-white rounded-2xl shadow-xl p-8 hover-card fade">
                                <div className={`bg-gradient-to-br ${visaColors[i]} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                                  <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{visa}</h3>
                                <p className="text-gray-600 mb-4">{lang === 'es' ? 'Procesamiento profesional completo con seguimiento constante' : 'Complete professional processing with constant tracking'}</p>
                                <button className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center space-x-2">
                                  <span>{lang === 'es' ? 'Más información' : 'Learn more'}</span>
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    )}

                    {activeSection === 'testimonios' && (
                      <section>
                        <div className="text-center mb-16 fade">
                          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">{lang === 'es' ? 'Historias de Éxito' : 'Success Stories'}</h2>
                          <p className="text-gray-600 text-xl">{lang === 'es' ? 'Casos reales de nuestros clientes' : 'Real cases from our clients'}</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                          {[
                            { name: 'María G.', text: lang === 'es' ? 'Proceso impecable. Aprobación en tiempo récord. Muy profesionales.' : 'Impeccable process. Record time approval. Very professional.' },
                            { name: 'Carlos R.', text: lang === 'es' ? 'Resolvieron mi caso complejo sin problemas. Excelente servicio.' : 'They resolved my complex case smoothly. Excellent service.' },
                            { name: 'Ana S.', text: lang === 'es' ? 'Después de 3 años separada, traje a mi familia. Eternamente agradecida.' : 'After 3 years apart, I brought my family. Eternally grateful.' }
                          ].map((t, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-xl p-8 hover-card fade">
                              <div className="flex mb-4">
                                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                              </div>
                              <p className="text-gray-700 mb-6 italic text-lg">"{t.text}"</p>
                              <p className="font-bold text-gray-800">{t.name}</p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {activeSection === 'faq' && (
                      <section className="max-w-4xl mx-auto">
                        <div className="text-center mb-16 fade">
                          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">{lang === 'es' ? 'Preguntas Frecuentes' : 'FAQ'}</h2>
                          <p className="text-gray-600 text-xl">{lang === 'es' ? 'Respuestas de expertos' : 'Expert answers'}</p>
                        </div>
                        <div className="space-y-4">
                          {faqs.map((f, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover-card fade">
                              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition">
                                <span className="font-bold text-gray-800 text-lg pr-4">{f.q}</span>
                                <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                              </button>
                              {openFaq === i && (
                                <div className="px-8 py-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-100">
                                  <p className="text-gray-700 text-lg">{f.a}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {activeSection === 'contacto' && (
                      <section className="max-w-5xl mx-auto">
                        <div className="text-center mb-12 fade">
                          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">{lang === 'es' ? 'Agende su Consulta' : 'Schedule Consultation'}</h2>
                          <p className="text-gray-600 text-xl">{lang === 'es' ? 'Primera consulta GRATUITA - 30 minutos' : 'First consultation FREE - 30 minutes'}</p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-8">
                          <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">{lang === 'es' ? 'Contacto' : 'Contact'}</h3>
                            <div className="space-y-5">
                              <div className="flex items-start space-x-3">
                                <MessageCircle className="w-6 h-6 mt-1" />
                                <div>
                                  <p className="text-sm text-blue-200 mb-1">WhatsApp</p>
                                  <p className="font-bold text-lg">+57 315 273 8241</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Mail className="w-6 h-6 mt-1" />
                                <div>
                                  <p className="text-sm text-blue-200 mb-1">Email</p>
                                  <p className="font-semibold break-all">andresmontalvo2222@gmail.com</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <Clock className="w-6 h-6 mt-1" />
                                <div>
                                  <p className="text-sm text-blue-200 mb-1">{lang === 'es' ? 'Horario' : 'Hours'}</p>
                                  <p className="font-semibold">{lang === 'es' ? 'Lun-Vie: 9AM-6PM' : 'Mon-Fri: 9AM-6PM'}</p>
                                  <p className="font-semibold">{lang === 'es' ? 'Sáb: 10AM-2PM' : 'Sat: 10AM-2PM'}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-3 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8">
                            <div className="space-y-4">
                              <div>
                                <label className="block text-gray-700 font-bold mb-2">{lang === 'es' ? 'Nombre *' : 'Name *'}</label>
                                <input type="text" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                              </div>
                              <div>
                                <label className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                              </div>
                              <div>
                                <label className="block text-gray-700 font-bold mb-2">{lang === 'es' ? 'Teléfono' : 'Phone'}</label>
                                <input type="tel" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
                              </div>
                              <div>
                                <label className="block text-gray-700 font-bold mb-2">{lang === 'es' ? 'Tipo de visa' : 'Visa type'}</label>
                                <select value={formData.tipoVisa} onChange={(e) => setFormData({...formData, tipoVisa: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                  <option value="">{lang === 'es' ? 'Seleccione...' : 'Select...'}</option>
                                  <option value="B1/B2">B-1/B-2 Tourist</option>
                                  <option value="H1B">H-1B Work</option>
                                  <option value="F1">F-1 Student</option>
                                  <option value="GreenCard">Green Card</option>
                                  <option value="Other">{lang === 'es' ? 'Otro' : 'Other'}</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-gray-700 font-bold mb-2">{lang === 'es' ? 'Mensaje *' : 'Message *'}</label>
                                <textarea rows="3" value={formData.mensaje} onChange={(e) => setFormData({...formData, mensaje: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                              </div>
                              <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition flex items-center justify-center space-x-2 shadow-xl">
                                <Send className="w-5 h-5" />
                                <span>{lang === 'es' ? 'Enviar Consulta' : 'Send Consultation'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </main>

                  <button onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 flex items-center justify-center z-50 glow">
                    <MessageCircle className="w-8 h-8" />
                  </button>

                  {chatOpen && (
                    <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-6 w-80 z-50 fade">
                      <h3 className="font-bold text-xl mb-2">{lang === 'es' ? '¿Necesitas ayuda?' : 'Need help?'}</h3>
                      <p className="text-gray-600 mb-4">{lang === 'es' ? 'Escríbenos por WhatsApp' : 'Write us on WhatsApp'}</p>
                      <button onClick={() => window.open('https://wa.me/573152738241', '_blank')} className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition flex items-center justify-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  )}

                  <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 mt-16">
                    <div className="container mx-auto px-4">
                      <div className="grid md:grid-cols-4 gap-10 border-b border-blue-700 pb-8 mb-8">
                        <div className="md:col-span-2">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-7 rounded overflow-hidden shadow-lg ring-1 ring-yellow-400">
                              <USFlag />
                            </div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Immigration Law Firm</h3>
                          </div>
                          <p className="text-blue-200">{lang === 'es' ? 'Su socio legal confiable para todos sus trámites migratorios en EE. UU. Más de 15 años de experiencia y 98% de aprobación.' : 'Your trusted legal partner for all your US immigration processes. Over 15 years experience and 98% approval rate.'}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-yellow-400">{lang === 'es' ? 'Navegación' : 'Navigation'}</h4>
                          <ul className="space-y-2 text-blue-200">
                            {Object.entries(t.nav).map(([key, value]) => (
                              <li key={key}>
                                <button onClick={() => setActiveSection(key)} className="hover:text-white transition">{value}</button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-yellow-400">{lang === 'es' ? 'Contacto' : 'Contact'}</h4>
                          <div className="space-y-3 text-blue-200">
                            <p className="flex items-center space-x-2"><MessageCircle className="w-4 h-4 text-green-400" /> <span>+57 315 273 8241</span></p>
                            <p className="flex items-center space-x-2"><Mail className="w-4 h-4" /> <span className="break-all">andresmontalvo2222@gmail.com</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-blue-300 pt-8 text-sm">
                        <p>&copy; {new Date().getFullYear()} Immigration Law Firm. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
                        <p className="mt-2">{lang === 'es' ? 'Abogados miembros de AILA. La información en este sitio no es un consejo legal.' : 'AILA member attorneys. Information on this site is not legal advice.'}</p>
                      </div>
                    </div>
                  </footer>
                </div>
              );
            };

            export default InmigracionUSA;
