"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Award, Users, Microscope, Clock, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LDMPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Animation au scroll pour les sections
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".scroll-animate")
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/21698765432", "_blank")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION avec vidéo background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Vidéo background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://placehold.co/1920x1080?text=Medical+dental+laboratory+precision+technology+abstract+video+background"
            type="video/mp4"
          />
        </video>

        {/* Overlay bleu LDM */}
        <div className="absolute inset-0 bg-primary/70" />

        {/* Contenu hero */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          {/* Logo LDM */}
          <div className="mb-8 animate-fade-in">
            <img
              src="https://placehold.co/180x80?text=LDM+Logo+Modern+Medical+Dental+Laboratory"
              alt="Logo LDM Laboratoire Dentaire"
              className="mx-auto h-20 w-auto"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up tracking-tight">
            LDM – Laboratoire de Prothèses Dentaires
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 text-white/90 font-light max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Votre partenaire professionnel en prothèse dentaire à Sousse
          </p>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold shadow-xl animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contacter via WhatsApp
          </Button>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="apropos" className="py-24 px-6 bg-white scroll-animate opacity-0">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">À Propos de LDM</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                LDM est un laboratoire de prothèses dentaires de référence à Sousse, offrant des solutions
                professionnelles de haute qualité aux praticiens dentaires.
              </p>
              <p>
                Notre expertise technique et notre engagement envers l'excellence nous permettent de créer des prothèses
                dentaires précises, esthétiques et durables qui répondent aux standards les plus exigeants.
              </p>
              <p>
                Grâce à notre équipe qualifiée et à nos technologies de pointe, nous garantissons un travail de
                précision pour chaque projet confié.
              </p>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://placehold.co/800x1000?text=Professional+dental+laboratory+workspace+modern+equipment+clean+environment+technician+working"
              alt="Laboratoire dentaire LDM à Sousse avec équipement moderne"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION NOS SPÉCIALITÉS */}
      <section id="specialites" className="py-24 px-6 bg-secondary/30 scroll-animate opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Nos Spécialités</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prothèse Conjointe - MISE EN AVANT PRINCIPALE */}
            <Card className="border-2 border-primary shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://placehold.co/800x600?text=High+quality+dental+crown+bridge+precision+prosthetic+work+close+up+professional"
                  alt="Prothèse dentaire conjointe de haute qualité LDM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Spécialité Principale
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Prothèse Conjointe</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Notre expertise phare : couronnes, bridges et inlays-onlays réalisés avec une précision
                  exceptionnelle. Nous combinons esthétique naturelle et durabilité grâce à des matériaux de haute
                  qualité et des techniques avancées.
                </p>
              </CardContent>
            </Card>

            {/* Prothèse Dentaire Générale */}
            <Card className="border border-border shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://placehold.co/800x600?text=Complete+dental+prosthesis+denture+high+quality+craftsmanship+medical+grade"
                  alt="Prothèses dentaires complètes LDM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Prothèse Dentaire</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Solutions complètes de prothèses dentaires amovibles et fixes, conçues pour offrir confort,
                  fonctionnalité et esthétique optimale à vos patients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION ACTUALITÉS / NOUVEAUTÉS */}
      <section id="actualites" className="py-24 px-6 bg-white scroll-animate opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Actualités & Nouveautés</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://placehold.co/600x400?text=New+CAD+CAM+technology+dental+laboratory+modern+digital+equipment"
                  alt="Nouvelle technologie CAD CAM au laboratoire LDM"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Nouvelle Technologie CAD/CAM</h3>
                <p className="text-muted-foreground leading-relaxed">
                  LDM investit dans les dernières technologies de conception assistée par ordinateur pour une précision
                  inégalée.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://placehold.co/600x400?text=Dental+ceramics+materials+premium+quality+aesthetic+natural+look"
                  alt="Nouvelles céramiques dentaires haute qualité LDM"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Céramiques de Haute Qualité</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Introduction de nouveaux matériaux céramiques offrant une esthétique et une résistance
                  exceptionnelles.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://placehold.co/600x400?text=Professional+training+dental+laboratory+team+continuous+education"
                  alt="Formation continue équipe LDM laboratoire dentaire"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Formation Continue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre équipe participe régulièrement à des formations spécialisées pour rester à la pointe de
                  l'innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION POURQUOI CHOISIR LDM */}
      <section id="pourquoi" className="py-24 px-6 bg-secondary/20 scroll-animate opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Pourquoi Choisir LDM ?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Excellence & Qualité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Standards de qualité les plus élevés pour chaque prothèse réalisée
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Microscope className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Précision Technique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Équipements de pointe et techniques avancées pour un travail millimétré
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Délais Respectés</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organisation rigoureuse garantissant des livraisons dans les temps
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Équipe Expérimentée</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prothésistes qualifiés avec plusieurs années d'expérience
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Matériaux Certifiés</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilisation exclusive de matériaux biocompatibles et certifiés
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Communication Fluide</h3>
              <p className="text-muted-foreground leading-relaxed">
                Échanges réguliers et suivi personnalisé de vos commandes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SAVOIR-FAIRE */}
      <section id="savoirfaire" className="py-24 px-6 bg-white scroll-animate opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Notre Savoir-Faire</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-foreground mb-6">Processus de Travail Rigoureux</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Chaque prothèse est le résultat d'un processus méticuleux alliant artisanat traditionnel et
                  technologies modernes.
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Analyse précise des empreintes et besoins spécifiques</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Conception assistée par ordinateur pour une précision optimale</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Fabrication artisanale avec contrôle qualité à chaque étape</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>Finitions esthétiques pour un résultat naturel</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/800x600?text=Dental+technician+precision+work+microscope+detailed+prosthetic+fabrication"
                alt="Processus de fabrication précis au laboratoire LDM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/800x600?text=Dental+professionals+collaboration+consultation+discussion+teamwork"
                alt="Collaboration professionnelle avec dentistes partenaires LDM"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Collaboration Professionnelle</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Nous travaillons en étroite collaboration avec les praticiens dentaires pour garantir la satisfaction
                  de leurs patients.
                </p>
                <p>
                  Notre approche collaborative permet d'ajuster chaque détail selon les exigences spécifiques du cas
                  clinique, assurant ainsi des résultats parfaitement adaptés.
                </p>
                <p>
                  La confiance de nos partenaires dentaires repose sur notre capacité à livrer des prothèses de qualité
                  supérieure dans les délais convenus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="py-24 px-6 bg-primary text-white scroll-animate opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Contactez-Nous</h2>
          <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Vous êtes praticien dentaire à Sousse ou dans la région ? Contactez LDM pour discuter de vos besoins en
            prothèses dentaires.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">📍 Localisation</div>
              <div className="text-lg text-white/90">Sousse, Tunisie</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">💬 Contact Rapide</div>
              <div className="text-lg text-white/90">Via WhatsApp</div>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 rounded-full font-semibold shadow-xl"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Démarrer une Conversation WhatsApp
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="https://placehold.co/160x70?text=LDM+Logo+White"
                alt="Logo LDM"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/70 leading-relaxed">Laboratoire de prothèses dentaires professionnel à Sousse</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>📍 Sousse, Tunisie</li>
                <li>💬 WhatsApp</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Spécialités</h4>
              <ul className="space-y-2 text-white/70">
                <li>Prothèse Conjointe</li>
                <li>Prothèse Dentaire</li>
                <li>Couronnes & Bridges</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 LDM - Laboratoire de Prothèses Dentaires. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </main>
  )
}
