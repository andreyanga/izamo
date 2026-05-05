/**
 * translate.js — Izamo Website
 * Centralised translation system. Include on every page.
 * Usage: add data-i18n="key" to any element.
 * Language persists via localStorage key "site_lang".
 */
(function() {
  "use strict";

  // ── Translations dictionary ──────────────────────────────
var izoTranslations = {
    pt: {
      // Navigation
      'nav.home': 'Página Inicial',
      'nav.about': 'Sobre Nós', 
      'nav.services': 'Catálogo de Serviços',
      'nav.contact': 'Contacto',
      
      // Hero Section
      'hero.title': 'Explore as Maravilhas de Cape Town com Izamo',
      'hero.subtitle': 'Descubra a beleza e cultura da África do Sul com nossos passeios exclusivos',
      'hero.cta': 'Reserve seu Passeio',
      'hero.accommodation': 'Acomodação',
      'hero.tourism': 'Turismo',
      'hero.transport': 'Transporte',
      'hero.documentation': 'Documentação',
      
      // About Section
      'about.title': 'Sobre Nós',
      'about.subtitle': 'Conheça a Izamo',
      'about.heading': 'Sua jornada para a África do Sul começa aqui',
      'about.description': 'Nosso objetivo é tornar sua experiência na África do Sul mais fácil e segura, oferecendo acompanhamento especializado em acomodação, turismo, transporte e documentação.',
      'about.bullet1': 'Seja para uma viagem de lazer, estudos ou uma nova oportunidade de vida',
      'about.bullet2': 'Estamos aqui para ajudar você a realizar seu sonho',
      'about.bullet3': 'Serviços personalizados para cada necessidade',
      'about.bullet4': 'Rede de parceiros confiáveis em toda a África do Sul',
      'about.final': 'Com anos de experiência no mercado, a Izamo se consolidou como a melhor opção para quem busca estabelecer-se na África do Sul com tranquilidade e segurança.',
      
      // Features Section
      'features.title': 'Por que escolher a Izamo?',
      'features.experience.title': 'Experiência e Confiabilidade',
      'features.experience.desc': 'Anos de atuação ajudando pessoas a se estabelecerem na África do Sul',
      'features.personal.title': 'Atendimento Personalizado',
      'features.personal.desc': 'Cada cliente é único e merece uma solução sob medida',
      'features.partners.title': 'Rede de Parceiros',
      'features.partners.desc': 'Trabalhamos com as melhores instituições e fornecedores para garantir qualidade e segurança',
      
      // Services Section
      'services.title': 'Nossos Passeios',
      'services.subtitle': 'Descubra as Maravilhas de Cape Town',
      'services.citytour.title': 'CITY TOUR',
      'services.citytour.duration': 'Half Day (7am – 1pm)',
      'services.citytour.price': 'Desde R 3,000',
      'services.citytour.highlight': 'Destaque: Table Mountain',
      'services.citytour.btn': 'Ver Detalhes',
      'services.peninsula.title': 'CAPE PENINSULA TOUR',
      'services.peninsula.duration': 'Full Day (7am – 6pm)',
      'services.peninsula.price': 'Desde R 5,000',
      'services.peninsula.highlight': 'Destaque: Cape of Good Hope & Penguins (Boulders Beach)',
      'services.peninsula.btn': 'Ver Detalhes',
      'services.winery.title': 'WINERY TOUR',
      'services.winery.duration': 'Full Day (8am – 5pm)',
      'services.winery.price': 'Desde R 5,000',
      'services.winery.highlight': 'Destaque: Stellenbosch & Franschhoek',
      'services.winery.btn': 'Ver Detalhes',
      'services.safari.title': 'SAFARI AQUILA',
      'services.safari.duration': 'Full Day (5am – 6pm)',
      'services.safari.price': 'Preço sob consulta (por km)',
      'services.safari.highlight': 'Destaque: Safari de vida selvagem',
      'services.safari.btn': 'Ver Detalhes',
      'services.extra.title': 'EXTRA PACKAGE',
      'services.extra.duration': 'Half Day',
      'services.extra.price': 'Desde R 3,000',
      'services.extra.highlight': 'Destaque: Constantia Winery & Kirstenbosch Garden',
      'services.extra.btn': 'Ver Detalhes',
      'services.vip.title': 'VIP / PRIVATE TOUR',
      'services.vip.duration': 'Full Day',
      'services.vip.price': 'Desde R 5,000',
      'services.vip.highlight': 'Destaque: Experiência exclusiva com guia privado',
      'services.vip.btn': 'Ver Detalhes',
      'services.agulhas.title': 'CAPE AGULHAS TOUR',
      'services.agulhas.duration': 'Full Day',
      'services.agulhas.price': 'Preço sob consulta',
      'services.agulhas.highlight': 'Destaque: Extremo Sul da África – encontro dos oceanos',
      'services.agulhas.btn': 'Ver Detalhes',
      
      // Tour Details Page
      'tour.visited': 'Locais visitados',
      'tour.info': 'Informações',
      'tour.reserve': 'Reservar',
      'tour.back': 'Back Home',
      
      // CTA Section
      'cta.title': 'Pronto para começar sua jornada?',
      'cta.subtitle': 'Entre em contato conosco hoje mesmo e descubra como podemos transformar sua experiência na África do Sul!',
      'cta.btn': 'Fale Conosco',
      
      // Portfolio Section
      'portfolio.title': 'Destinos',
      'portfolio.subtitle': 'Principais Destinos na África do Sul',
      'portfolio.all': 'Todos',
      'portfolio.capetown': 'Cidade do Cabo',
      'portfolio.joburg': 'Joanesburgo',
      'portfolio.durban': 'Durban',
      'portfolio.capetown.desc': 'Table Mountain',
      'portfolio.joburg.desc': 'Centro Financeiro',
      'portfolio.durban.desc': 'Praias Paradisíacas',
      'portfolio.capetown.wineries': 'Vinícolas',
      'portfolio.joburg.soweto': 'Soweto',
      'portfolio.durban.nightlife': 'Vida Noturna',
      'portfolio.more': 'Mais Detalhes',
      
      // Events Section
      'events.title': 'Eventos',
      'events.subtitle': 'Nossos Próximos Eventos',
      'events.study.title': 'Feira de Estudos na África do Sul',
      'events.study.date': 'Sexta-feira, 12 de Novembro de 2023',
      'events.study.desc': 'Venha conhecer as melhores oportunidades de estudo na África do Sul com representantes das principais universidades.',
      'events.workshop.title': 'Workshop de Documentação',
      'events.workshop.date': 'Sábado, 20 de Novembro de 2023',
      'events.workshop.desc': 'Aprenda tudo sobre os documentos necessários para viajar, estudar ou trabalhar na África do Sul.',
      
      // FAQ Section
      'faq.title': 'FAQ',
      'faq.subtitle': 'Perguntas Frequentes',
      'faq.q1': 'Quais documentos são necessários para viajar para a África do Sul?',
      'faq.a1': 'Para viajar à África do Sul como turista, você precisará de passaporte válido por pelo menos 6 meses, visto (quando necessário), comprovante de hospedagem, passagem de volta e comprovante de recursos financeiros. Para estudo ou trabalho, são necessários documentos adicionais específicos.',
      'faq.q2': 'Como posso encontrar acomodação segura na África do Sul?',
      'faq.a2': 'A Izamo oferece um serviço completo de busca de acomodação, considerando sua localização preferencial, orçamento e necessidades específicas. Trabalhamos apenas com imóveis em áreas seguras e com proprietários confiáveis.',
      'faq.q3': 'Quanto tempo leva para obter um visto de estudante?',
      'faq.a3': 'O processo de visto de estudante normalmente leva de 6 a 8 semanas após a entrega de todos os documentos necessários. Recomendamos iniciar o processo com pelo menos 3 meses de antecedência para evitar contratempos.',
      'faq.q4': 'Quais são as melhores cidades para estudantes na África do Sul?',
      'faq.a4': 'As cidades mais populares para estudantes são Cidade do Cabo (UCT, UWC), Joanesburgo (Wits, UJ), Pretória (UP, TUT), Stellenbosch (SU) e Durban (UKZN). Cada uma oferece vantagens específicas em termos de qualidade de vida, custo e especializações acadêmicas.',
      'faq.q5': 'A Izamo oferece suporte após a chegada à África do Sul?',
      'faq.a5': 'Sim, oferecemos suporte completo desde o planejamento da viagem até sua estadia na África do Sul. Nossos serviços incluem transfer do aeroporto, orientação sobre a cidade, ajuda com abertura de contas bancárias, registro na polícia (quando necessário) e suporte contínuo durante toda sua estadia.',
      
      // Contact Section
      'contact.title': 'Contato',
      'contact.subtitle': 'Entre em Contato Conosco',
      'contact.location.title': 'Localização',
      'contact.location': 'Cape Town, África do Sul',
      'contact.email.title': 'Email',
      'contact.phone.title': 'Telefones',
      'contact.cta.title': 'Pronto para começar sua jornada?',
      'contact.cta.subtitle': 'Entre em contato conosco através de qualquer um dos canais acima',
      
      // Footer
      'footer.phones': 'Telefones:',
      'footer.useful': 'Links Úteis',
      'footer.knowmore': 'Saiba Mais',
             'footer.ourtours': 'Nossos Passeios',
       'footer.citytour': 'City Tour',
       'footer.peninsula': 'Cape Peninsula Tour',
       'footer.winery': 'Winery Tour',
       'footer.safari': 'Safari Aquila',
       'footer.extra': 'Extra Package',
       'footer.vip': 'VIP / Private Tour',
       'footer.agulhas': 'Cape Agulhas Tour',
      'footer.newsletter.title': 'Newsletter',
      'footer.newsletter.desc': 'Assine nossa newsletter e receba novidades e promoções exclusivas',
      'footer.newsletter.email': 'Seu Email',
      'footer.newsletter.submit': 'Assinar',
      'footer.privacy.title': 'Política de Privacidade',
      'footer.privacy.link': 'Política de Privacidade',
      'footer.terms.title': 'Termos e Condições',
      'footer.terms.link': 'Termos e Condições',
      'footer.copyright': 'Todos os direitos reservados',

      // ---- Partners Section (homepage) ----
      'partners.title': 'Parceiros da Izamo',
      'partners.subtitle': 'Quem Caminha Connosco',
      'partners.badge': 'Parceiro Imobiliário Oficial',
      'partners.name': 'Rawson (Observatory)',
      'partners.desc1': 'A Izamo colabora com a Rawson (Observatory) como parte do seu compromisso em oferecer soluções de alojamento e serviços imobiliários de alta qualidade na Cidade do Cabo.',
      'partners.desc2': 'Esta relação estratégica permite à Izamo ligar os seus clientes a uma ampla seleção de propriedades residenciais, seja para alojamento de longa duração ou para investimento imobiliário.',
      'partners.desc3': 'O resultado é uma experiência simples, confiável e profissional para clientes que procuram alojamento ou oportunidades no mercado imobiliário na Cidade do Cabo.',
      'partners.tag1': 'Imobiliária',
      'partners.tag3': 'Parceiro Estratégico',
      'partners.btn': 'Ver Serviços Imobiliários',
      'footer.developed': 'Desenvolvido por',
      // ---- Real Estate Page ----
      'nav.realestate': 'Real Estate Service',
      'nav.tourism': 'Tourism',
      're.hero.h1a': 'Real Estate',
      're.hero.h1b': 'Service',
      're.hero.desc': 'A Izamo colabora com a Rawson (Observatory) para oferecer soluções de alojamento e serviços imobiliários de alta qualidade na Cidade do Cabo — desde alojamento temporário até investimento em propriedades residenciais.',
      're.rawson.badge': 'Em parceria com Rawson (Observatory)',
      're.rawson.text': 'A Izamo colabora com a Rawson (Observatory) como parte do seu compromisso em oferecer soluções de alojamento e serviços imobiliários de alta qualidade na Cidade do Cabo. Esta relação estratégica permite à Izamo ligar os seus clientes a uma ampla seleção de propriedades residenciais.',
      're.options.title': 'Escolha o Serviço',
      're.options.subtitle': 'Selecione a opção que melhor se adapta às suas necessidades',
      're.opt1.title': 'Alojamento de Curta Duração',
      're.opt1.desc': 'A Izamo oferece soluções de alojamento de curta duração flexíveis e totalmente geridas, concebidas para profissionais, viajantes em trabalho, estudantes e visitantes na Cidade do Cabo.',
      're.opt1.btn': 'Solicitar Agora',
      're.opt2.title': 'Alojamento de Longa Duração',
      're.opt2.desc': 'A Izamo fornece soluções de alojamento de longa duração totalmente geridas. Tratamos de todo o processo para que o cliente evite a complexidade de lidar diretamente com proprietários, agentes e contratos.',
      're.opt2.btn': 'Solicitar Agora',
      're.opt3.title': 'Venda de Propriedades',
      're.opt3.desc': 'A Izamo acompanha clientes que procuram adquirir imóveis na Cidade do Cabo, seja para habitação própria ou investimento. Um processo simples, transparente e eficiente.',
      're.opt3.btn': 'Solicitar Agora',
      're.gallery.title': 'Galeria de Propriedades',
      're.gallery.subtitle': 'Cidade do Cabo — Western Cape, África do Sul',
      're.gallery.note': '* Imagens ilustrativas. Propriedades disponíveis sujeitas a disponibilidade.',
      're.form.st.title': 'Alojamento de Curta Duração',
      're.form.lt.title': 'Alojamento de Longa Duração',
      're.form.sl.title': 'Venda de Propriedades',
      'form.fullname': 'Nome Completo *',
      'form.dob': 'Data de Nascimento *',
      'form.email': 'E-mail *',
      'form.phone': 'Telefone *',
      'form.country': 'País de Origem *',
      'form.city': 'Cidade / Província *',
      'form.destination': 'Destino em Cape Town *',
      'form.duration.short': 'Duração do Arrendamento *',
      'form.duration.long': 'Período do Arrendamento *',
      'form.startdate': 'Data de Início *',
      'form.spacetype': 'Tipo de Espaço *',
      'form.objective': 'Objetivo da Compra *',
      'form.zone': 'Zona em Cape Town *',
      'form.budget': 'Orçamento Estimativo *',
      'form.period': 'Período Estimado *',
      'form.proptype': 'Tipo de Propriedade *',
      'form.btn.wa': 'Solicitar Serviço via WhatsApp',
      // ---- Tourism Page ----
      'tourism.hero.span': 'Tourism',
      'tourism.hero.title': 'Services',
      'tourism.hero.desc': 'Explore a África do Sul com a Izamo. Oferecemos experiências turísticas personalizadas incluindo passeios guiados, transporte, alojamento e assistência de viagem.',
      'tourism.hero.btn': 'Fale Connosco no WhatsApp',
      'tourism.services.title': 'Tourism Services',
      'tourism.services.subtitle': 'O que oferecemos',
      'tourism.s1.title': 'Passeios Turísticos',
      'tourism.s1.desc': 'Descubra as maravilhas de Cape Town com os nossos guias locais experientes. Oferecemos City Tour, Cape Peninsula Tour, Winery Tour, Safari Aquila, Cape Agulhas Tour e muito mais.',
      'tourism.s1.btn': 'Ver Todos os Passeios',
      'tourism.s2.title': 'Transporte',
      'tourism.s2.desc': 'Serviço de transporte seguro e confortável em toda a África do Sul. Desde o aeroporto até ao seu destino, temos a solução certa para si.',
      'tourism.s2.btn': 'Solicitar',
      'tourism.s3.title': 'Guias Locais',
      'tourism.s3.desc': 'Os nossos guias locais são profissionais certificados com profundo conhecimento da história, cultura e geografia da África do Sul. Disponíveis em Português e Inglês.',
      'tourism.s3.btn': 'Solicitar',
      'tourism.s4.title': 'Assistência de Viagem',
      'tourism.s4.desc': 'Apoio completo antes, durante e após a sua viagem à África do Sul. Ajudamos com documentação, vistos, reservas e suporte 24h durante a sua estadia.',
      'tourism.s4.btn': 'Solicitar',
      'tourism.featured.title': 'Passeios em Destaque',
      'tourism.featured.subtitle': 'Os mais escolhidos pelos nossos clientes',
      'tourism.cta.title': 'Pronto para Explorar a África do Sul?',
      'tourism.cta.subtitle': 'Entre em contacto connosco agora e planeia a tua próxima aventura com a Izamo.',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services Catalog',
      'nav.contact': 'Contact',
      
      // Hero Section
      'hero.title': 'Explore the Wonders of Cape Town with Izamo',
      'hero.subtitle': 'Discover the beauty and culture of South Africa with our exclusive tours',
      'hero.cta': 'Book Your Tour',
      'hero.accommodation': 'Accommodation',
      'hero.tourism': 'Tourism',
      'hero.transport': 'Transport',
      'hero.documentation': 'Documentation',
      
      // About Section
      'about.title': 'About Us',
      'about.subtitle': 'Meet Izamo',
      'about.heading': 'Your journey to South Africa starts here',
      'about.description': 'Our goal is to make your experience in South Africa easier and safer, offering specialized support in accommodation, tourism, transport and documentation.',
      'about.bullet1': 'Whether for leisure travel, studies or a new life opportunity',
      'about.bullet2': 'We are here to help you achieve your dream',
      'about.bullet3': 'Personalized services for each need',
      'about.bullet4': 'Reliable partner network throughout South Africa',
      'about.final': 'With years of market experience, Izamo has established itself as the best option for those seeking to settle in South Africa with peace of mind and security.',
      
      // Features Section
      'features.title': 'Why choose Izamo?',
      'features.experience.title': 'Experience and Reliability',
      'features.experience.desc': 'Years of experience helping people establish themselves in South Africa',
      'features.personal.title': 'Personalized Service',
      'features.personal.desc': 'Each client is unique and deserves a tailored solution',
      'features.partners.title': 'Partner Network',
      'features.partners.desc': 'We work with the best institutions and suppliers to ensure quality and security',
      
      // Services Section
      'services.title': 'Our Tours',
      'services.subtitle': 'Discover the Wonders of Cape Town',
      'services.citytour.title': 'CITY TOUR',
      'services.citytour.duration': 'Half Day (7am – 1pm)',
      'services.citytour.price': 'From R 3,000',
      'services.citytour.highlight': 'Highlight: Table Mountain',
      'services.citytour.btn': 'View Details',
      'services.peninsula.title': 'CAPE PENINSULA TOUR',
      'services.peninsula.duration': 'Full Day (7am – 6pm)',
      'services.peninsula.price': 'From R 5,000',
      'services.peninsula.highlight': 'Highlight: Cape of Good Hope & Penguins (Boulders Beach)',
      'services.peninsula.btn': 'View Details',
      'services.winery.title': 'WINERY TOUR',
      'services.winery.duration': 'Full Day (8am – 5pm)',
      'services.winery.price': 'From R 5,000',
      'services.winery.highlight': 'Highlight: Stellenbosch & Franschhoek',
      'services.winery.btn': 'View Details',
      'services.safari.title': 'SAFARI AQUILA',
      'services.safari.duration': 'Full Day (5am – 6pm)',
      'services.safari.price': 'Price on request (per km)',
      'services.safari.highlight': 'Highlight: Wildlife Safari',
      'services.safari.btn': 'View Details',
      'services.extra.title': 'EXTRA PACKAGE',
      'services.extra.duration': 'Half Day',
      'services.extra.price': 'From R 3,000',
      'services.extra.highlight': 'Highlight: Constantia Winery & Kirstenbosch Garden',
      'services.extra.btn': 'View Details',
      'services.vip.title': 'VIP / PRIVATE TOUR',
      'services.vip.duration': 'Full Day',
      'services.vip.price': 'From R 5,000',
      'services.vip.highlight': 'Highlight: Exclusive experience with private guide',
      'services.vip.btn': 'View Details',
      'services.agulhas.title': 'CAPE AGULHAS TOUR',
      'services.agulhas.duration': 'Full Day',
      'services.agulhas.price': 'Price on request',
      'services.agulhas.highlight': 'Highlight: Southernmost point of Africa – meeting of the oceans',
      'services.agulhas.btn': 'View Details',
      
      // Tour Details Page
      'tour.visited': 'Visited places',
      'tour.info': 'Information',
      'tour.reserve': 'Book Now',
      'tour.back': 'Back Home',
      
      // CTA Section
      'cta.title': 'Ready to start your journey?',
      'cta.subtitle': 'Contact us today and discover how we can transform your experience in South Africa!',
      'cta.btn': 'Contact Us',
      
      // Portfolio Section
      'portfolio.title': 'Destinations',
      'portfolio.subtitle': 'Main Destinations in South Africa',
      'portfolio.all': 'All',
      'portfolio.capetown': 'Cape Town',
      'portfolio.joburg': 'Johannesburg',
      'portfolio.durban': 'Durban',
      'portfolio.capetown.desc': 'Table Mountain',
      'portfolio.joburg.desc': 'Financial Center',
      'portfolio.durban.desc': 'Paradise Beaches',
      'portfolio.capetown.wineries': 'Wineries',
      'portfolio.joburg.soweto': 'Soweto',
      'portfolio.durban.nightlife': 'Nightlife',
      'portfolio.more': 'More Details',
      
      // Events Section
      'events.title': 'Events',
      'events.subtitle': 'Our Upcoming Events',
      'events.study.title': 'Study Fair in South Africa',
      'events.study.date': 'Friday, November 12, 2023',
      'events.study.desc': 'Come and discover the best study opportunities in South Africa with representatives from the main universities.',
      'events.workshop.title': 'Documentation Workshop',
      'events.workshop.date': 'Saturday, November 20, 2023',
      'events.workshop.desc': 'Learn everything about the documents needed to travel, study or work in South Africa.',
      
      // FAQ Section
      'faq.title': 'FAQ',
      'faq.subtitle': 'Frequently Asked Questions',
      'faq.q1': 'What documents are needed to travel to South Africa?',
      'faq.a1': 'To travel to South Africa as a tourist, you will need a passport valid for at least 6 months, visa (when required), proof of accommodation, return ticket and proof of financial resources. For study or work, additional specific documents are required.',
      'faq.q2': 'How can I find safe accommodation in South Africa?',
      'faq.a2': 'Izamo offers a complete accommodation search service, considering your preferred location, budget and specific needs. We only work with properties in safe areas and with reliable owners.',
      'faq.q3': 'How long does it take to obtain a student visa?',
      'faq.a3': 'The student visa process normally takes 6 to 8 weeks after submitting all required documents. We recommend starting the process at least 3 months in advance to avoid setbacks.',
      'faq.q4': 'What are the best cities for students in South Africa?',
      'faq.a4': 'The most popular cities for students are Cape Town (UCT, UWC), Johannesburg (Wits, UJ), Pretoria (UP, TUT), Stellenbosch (SU) and Durban (UKZN). Each offers specific advantages in terms of quality of life, cost and academic specializations.',
      'faq.q5': 'Does Izamo offer support after arrival in South Africa?',
      'faq.a5': 'Yes, we offer complete support from trip planning to your stay in South Africa. Our services include airport transfer, city orientation, help with opening bank accounts, police registration (when required) and ongoing support throughout your stay.',
      
      // Contact Section
      'contact.title': 'Contact',
      'contact.subtitle': 'Contact Us',
      'contact.location.title': 'Location',
      'contact.location': 'Cape Town, South Africa',
      'contact.email.title': 'Email',
      'contact.phone.title': 'Phones',
      'contact.cta.title': 'Ready to start your journey?',
      'contact.cta.subtitle': 'Contact us through any of the channels above',
      
      // Footer
      'footer.phones': 'Phones:',
      'footer.useful': 'Useful Links',
      'footer.knowmore': 'Learn More',
             'footer.ourtours': 'Our Tours',
       'footer.citytour': 'City Tour',
       'footer.peninsula': 'Cape Peninsula Tour',
       'footer.winery': 'Winery Tour',
       'footer.safari': 'Safari Aquila',
       'footer.extra': 'Extra Package',
       'footer.vip': 'VIP / Private Tour',
       'footer.agulhas': 'Cape Agulhas Tour',
      'footer.privacy.title': 'Privacy Policy',
      'footer.privacy.link': 'Privacy Policy',
      'footer.terms.title': 'Terms and Conditions',
      'footer.terms.link': 'Terms and Conditions',
      'footer.copyright': 'All rights reserved',

      // ---- Partners Section (homepage) ----
      'partners.title': 'Izamo Partners',
      'partners.subtitle': 'Who Walks With Us',
      'partners.badge': 'Official Real Estate Partner',
      'partners.name': 'Rawson (Observatory)',
      'partners.desc1': 'Izamo collaborates with Rawson (Observatory) as part of its commitment to providing high-quality accommodation and real estate services in Cape Town.',
      'partners.desc2': 'This strategic relationship allows Izamo to connect its clients with a wide selection of residential properties, whether for long-term accommodation or property investment.',
      'partners.desc3': 'The result is a straightforward, reliable and professional experience for clients seeking accommodation or real estate opportunities in Cape Town.',
      'partners.tag1': 'Real Estate',
      'partners.tag3': 'Strategic Partner',
      'partners.btn': 'View Real Estate Services',
      'footer.developed': 'Developed by',
      // ---- Real Estate Page ----
      'nav.realestate': 'Real Estate Service',
      'nav.tourism': 'Tourism',
      're.hero.h1a': 'Real Estate',
      're.hero.h1b': 'Service',
      're.hero.desc': 'Izamo collaborates with Rawson (Observatory) to offer high-quality accommodation and real estate services in Cape Town — from temporary stays to residential property investment.',
      're.rawson.badge': 'In partnership with Rawson (Observatory)',
      're.rawson.text': 'Izamo collaborates with Rawson (Observatory) as part of its commitment to providing high-quality accommodation and real estate services in Cape Town. This strategic relationship connects Izamo clients with a wide selection of residential properties.',
      're.options.title': 'Choose Your Service',
      're.options.subtitle': 'Select the option that best suits your needs',
      're.opt1.title': 'Short-Term Accommodation',
      're.opt1.desc': 'Izamo offers flexible, fully managed short-term accommodation solutions designed for professionals, business travellers, students and visitors in Cape Town.',
      're.opt1.btn': 'Request Now',
      're.opt2.title': 'Long-Term Accommodation',
      're.opt2.desc': 'Izamo provides fully managed long-term accommodation solutions. We handle the entire process so clients avoid dealing directly with landlords, agents and lease contracts.',
      're.opt2.btn': 'Request Now',
      're.opt3.title': 'Property Sales',
      're.opt3.desc': 'Izamo supports clients looking to acquire property in Cape Town, whether for own use or investment. A straightforward, transparent and efficient process.',
      're.opt3.btn': 'Request Now',
      're.gallery.title': 'Property Gallery',
      're.gallery.subtitle': 'Cape Town — Western Cape, South Africa',
      're.gallery.note': '* Illustrative images. Available properties subject to availability.',
      're.form.st.title': 'Short-Term Accommodation',
      're.form.lt.title': 'Long-Term Accommodation',
      're.form.sl.title': 'Property Sales',
      'form.fullname': 'Full Name *',
      'form.dob': 'Date of Birth *',
      'form.email': 'E-mail *',
      'form.phone': 'Phone *',
      'form.country': 'Country of Origin *',
      'form.city': 'City / Province *',
      'form.destination': 'Destination in Cape Town *',
      'form.duration.short': 'Rental Duration *',
      'form.duration.long': 'Rental Period *',
      'form.startdate': 'Start Date *',
      'form.spacetype': 'Space Type *',
      'form.objective': 'Purchase Objective *',
      'form.zone': 'Zone in Cape Town *',
      'form.budget': 'Estimated Budget *',
      'form.period': 'Estimated Period *',
      'form.proptype': 'Property Type *',
      'form.btn.wa': 'Request Service via WhatsApp',
      // ---- Tourism Page ----
      'tourism.hero.span': 'Tourism',
      'tourism.hero.title': 'Services',
      'tourism.hero.desc': 'Explore South Africa with Izamo. We offer personalized tourism experiences including guided tours, transport, accommodation and travel assistance.',
      'tourism.hero.btn': 'Contact Us on WhatsApp',
      'tourism.services.title': 'Tourism Services',
      'tourism.services.subtitle': 'What we offer',
      'tourism.s1.title': 'Sightseeing Tours',
      'tourism.s1.desc': 'Discover the wonders of Cape Town with our experienced local guides. We offer City Tour, Cape Peninsula Tour, Winery Tour, Safari Aquila, Cape Agulhas Tour and more.',
      'tourism.s1.btn': 'View All Tours',
      'tourism.s2.title': 'Transport',
      'tourism.s2.desc': 'Safe and comfortable transport service throughout South Africa. From the airport to your destination, we have the right solution for you.',
      'tourism.s2.btn': 'Request',
      'tourism.s3.title': 'Local Guides',
      'tourism.s3.desc': 'Our local guides are certified professionals with deep knowledge of the history, culture and geography of South Africa. Available in Portuguese and English.',
      'tourism.s3.btn': 'Request',
      'tourism.s4.title': 'Travel Assistance',
      'tourism.s4.desc': 'Complete support before, during and after your trip to South Africa. We help with documentation, visas, bookings and 24h support during your stay.',
      'tourism.s4.btn': 'Request',
      'tourism.featured.title': 'Featured Tours',
      'tourism.featured.subtitle': 'Most chosen by our clients',
      'tourism.cta.title': 'Ready to Explore South Africa?',
      'tourism.cta.subtitle': 'Contact us now and plan your next adventure with Izamo.',
    }
  };

  // ── Core helpers ─────────────────────────────────────────
  function getSavedLang() {
    try { return localStorage.getItem('site_lang') || 'pt'; } catch(e) { return 'pt'; }
  }

  function saveLang(lang) {
    try { localStorage.setItem('site_lang', lang); } catch(e) {}
  }

  function applyTranslations(lang) {
    var dict = izoTranslations[lang] || izoTranslations['pt'];
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    var label = document.getElementById('current-lang-label');
    if (label) label.textContent = lang.toUpperCase();
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-br');
  }

  function setupSwitcher() {
    document.querySelectorAll('.language-switcher [data-lang]').forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        var lang = item.getAttribute('data-lang');
        saveLang(lang);
        applyTranslations(lang);
        // Close mobile nav if open
        var navbar = document.getElementById('navbar');
        if (navbar && navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile');
          var toggle = document.querySelector('.mobile-nav-toggle');
          if (toggle) {
            toggle.classList.add('bi-list');
            toggle.classList.remove('bi-x');
          }
        }
      });
    });
  }

  // ── Init ─────────────────────────────────────────────────
  // Run as soon as DOM is ready (works before window.load)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyTranslations(getSavedLang());
      setupSwitcher();
    });
  } else {
    // DOM already ready
    applyTranslations(getSavedLang());
    setupSwitcher();
  }

  // Also re-apply on full load to catch any late-rendered elements
  window.addEventListener('load', function() {
    applyTranslations(getSavedLang());
  });

  // Expose for external use if needed
  window.izoTranslate = {
    apply: applyTranslations,
    getLang: getSavedLang,
    setLang: function(lang) { saveLang(lang); applyTranslations(lang); }
  };

})();