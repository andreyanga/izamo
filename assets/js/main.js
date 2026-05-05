/**
* Template Name: Gp
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  if (typeof Swiper !== 'undefined') new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  }); // end clients-slider

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = (typeof GLightbox !== 'undefined') ? GLightbox({
    selector: '.portfolio-lightbox'
  }) : null;

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  if (typeof Swiper !== 'undefined') new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  window.addEventListener('load', () => {
    // Translation applied by translate.js (izoTranslate in translate.js)


    // Build Portfolio dynamically (first 4 images per tour)
    const portfolioRoot = document.getElementById('portfolio-dynamic');
    if (portfolioRoot) {
      const lang = (window.izoTranslate ? window.izoTranslate.getLang() : 'pt');
      const TOURS = {
        citytour: {
          titleKey: 'services.citytour.title',
          folder: 'assets/img/CITY_TOUR',
          images: [
            'CASTEL_OF_GOOD_HOPE_1.jpg','DISTRICT_SIX_MUSEUM_1.jpg',
            'TABLE_MOUNTAIN_1.jpg','WATER_FRONT_1.jpg'
          ]
        },
        peninsula: {
          titleKey: 'services.peninsula.title',
          folder: 'assets/img/CAPE_PENINSULA_TOUR',
          images: [
            'BANTRY_BAY_1.jpg','CAMPS_BAY_1.jpg','CAPE_OF_GOOD_HOPE_1.jpg','SEA_POINT_1.jpg'
          ]
        },
        winery: {
          titleKey: 'services.winery.title',
          folder: 'assets/img/WINERY_TOUR',
          images: ['FRANSCHHOEK_1.jpg','FRANSCHHOEK_2.jpg','STELLENBOSCH_1.jpg','STELLENBOSCH_2.jpg']
        },
        safari: {
          titleKey: 'services.safari.title',
          folder: 'assets/img/SAFARI_AQUILA',
          images: ['SAFARI_AQUILA_1.jpg','SAFARI_AQUILA_2.jpg','SAFARI_AQUILA_3.jpg','SAFARI_AQUILA_4.jpg']
        },
        extra: {
          titleKey: 'services.extra.title',
          folder: 'assets/img/EXTRA_PACKAGE',
          images: ['CONSTANTIA_1.jpg','CONSTANTIA_2.jpg','KIRSTENBOSCH_1.jpg','KIRSTENBOSCH_2.jpg']
        },
        vip: {
          titleKey: 'services.vip.title',
          folder: 'assets/img/VIPTOUR_PRIVATETOUR',
          images: ['VIP_1.jpg','VIP_2.jpg','VIP_3.jpg']
        },
        agulhas: {
          titleKey: 'services.agulhas.title',
          folder: 'assets/img/CAPE_AGULHAS_TOUR',
          images: ['CAPE_AGULHAS_1.jpg','CAPE_AGULHAS_2.jpg','CAPE_AGULHAS_3.jpg']
        }
      };

      const dict = translations[lang] || translations.en;
      const buildCard = (key, cfg) => {
        const filterClass = `filter-${key}`;
        return cfg.images.slice(0, 4).map((img) => {
          const title = dict[cfg.titleKey] || key;
          const href = `${cfg.folder}/${img}`;
          return `
          <div class="col-lg-4 col-md-6 portfolio-item ${filterClass}">
            <div class="portfolio-wrap">
              <img src="${href}" class="img-fluid" alt="${title}">
              <div class="portfolio-info">
                <h4>${title}</h4>
                <div class="portfolio-links">
                  <a href="${href}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${title}"><i class="bx bx-plus"></i></a>
                  <a href="tour-details.html?tour=${key}" title="${title}"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>`;
        }).join('');
      };

      portfolioRoot.innerHTML = [
        buildCard('citytour', TOURS.citytour),
        buildCard('peninsula', TOURS.peninsula),
        buildCard('winery', TOURS.winery),
        buildCard('safari', TOURS.safari),
        buildCard('extra', TOURS.extra),
        buildCard('vip', TOURS.vip),
        buildCard('agulhas', TOURS.agulhas)
      ].join('');

      // Init Isotope on dynamic content
      let portfolioIsotope = new Isotope(portfolioRoot, { itemSelector: '.portfolio-item' });

      // Bind filters
      const portfolioFilters = select('#portfolio-flters li', true);
      portfolioFilters.forEach(function(el) {
        el.addEventListener('click', function(e) {
          e.preventDefault();
          portfolioFilters.forEach((f) => f.classList.remove('filter-active'));
          this.classList.add('filter-active');
          const filter = this.getAttribute('data-filter');
          portfolioIsotope.arrange({ filter });
          portfolioIsotope.on('arrangeComplete', function() { AOS.refresh(); });
        });
      });

      // Re-init GLightbox and AOS after injecting
      GLightbox({ selector: '.portfolio-lightbox' });
      AOS.refresh();
    }
  });

})()

// ============================================================
// REAL ESTATE — Form helpers, WhatsApp integration
// ============================================================
(function() {
  "use strict";

  var countryData = {
    "Angola": ["Luanda","Benguela","Huambo","Lobito","Malanje","Cabinda","Namibe","Lubango","Uige","Soyo"],
    "Africa do Sul": ["Cape Town","Johannesburg","Durban","Pretoria","Port Elizabeth","Bloemfontein","East London","Nelspruit","Polokwane","Kimberley"],
    "Mocambique": ["Maputo","Matola","Beira","Nampula","Chimoio","Nacala","Quelimane","Tete","Lichinga","Pemba"],
    "Brasil": ["Sao Paulo","Rio de Janeiro","Belo Horizonte","Salvador","Fortaleza","Curitiba","Manaus","Recife","Porto Alegre","Belem"],
    "Portugal": ["Lisboa","Porto","Braga","Coimbra","Funchal","Aveiro","Setubal","Faro","Evora","Leiria"],
    "Cabo Verde": ["Praia","Mindelo","Santa Maria","Assomada","Pedra Badejo","Sao Filipe","Porto Novo","Ribeira Grande","Tarrafal"],
    "Namibia": ["Windhoek","Walvis Bay","Swakopmund","Rundu","Oshakati","Katima Mulilo","Luderitz","Mariental"],
    "Zimbabwe": ["Harare","Bulawayo","Chitungwiza","Mutare","Gweru","Kwekwe","Kadoma","Masvingo"],
    "Estados Unidos": ["Nova York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","Miami"],
    "Reino Unido": ["Londres","Manchester","Birmingham","Glasgow","Liverpool","Bristol","Sheffield","Leeds","Edinburgh","Newcastle"],
    "Franca": ["Paris","Marselha","Lyon","Toulouse","Nice","Nantes","Strasbourg","Montpellier","Bordeaux","Lille"],
    "Outro": ["Outra cidade"]
  };

  var propertyTypes = [
    "Guest House","Quarto Suite","Studio",
    "Apartamento/Casa de 1 quarto","Apartamento/Casa de 2 quartos",
    "Apartamento/Casa de 3 quartos","Apartamento/Casa de 4 quartos",
    "Apartamento/Casa de mais de 4 quartos",
    "Vivenda de 1 quarto","Vivenda de 2 quartos","Vivenda de 3 quartos",
    "Vivenda de 4 quartos","Vivenda de mais de 4 quartos"
  ];

  function populateCountries() {
    ['st-country','lt-country','sl-country'].forEach(function(id) {
      var sel = document.getElementById(id);
      if (!sel) return;
      Object.keys(countryData).forEach(function(c) {
        var opt = document.createElement('option');
        opt.value = c; opt.textContent = c;
        sel.appendChild(opt);
      });
    });
  }

  window.updateCities = function(countryId, cityId) {
    var country = document.getElementById(countryId).value;
    var citySelect = document.getElementById(cityId);
    citySelect.innerHTML = '';
    var def = document.createElement('option');
    def.value = ''; def.textContent = 'Selecione a cidade...';
    citySelect.appendChild(def);
    if (country && countryData[country]) {
      countryData[country].forEach(function(c) {
        var opt = document.createElement('option');
        opt.value = c; opt.textContent = c;
        citySelect.appendChild(opt);
      });
    }
  };

  function buildPropGrid(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    propertyTypes.forEach(function(p) {
      var label = document.createElement('label');
      label.className = 'prop-option';
      label.innerHTML = '<input type="radio" name="' + containerId + '" value="' + p + '"><i class="bx bx-home"></i> ' + p;
      label.addEventListener('click', function() {
        container.querySelectorAll('.prop-option').forEach(function(el) { el.classList.remove('selected'); });
        label.classList.add('selected');
      });
      container.appendChild(label);
    });
  }

  window.showForm = function(type) {
    ['short-term','long-term','sale'].forEach(function(t) {
      var el = document.getElementById('form-' + t);
      if (el) el.style.display = 'none';
    });
    var formEl = document.getElementById('form-' + type);
    if (formEl) {
      formEl.style.display = 'block';
      setTimeout(function() { formEl.scrollIntoView({behavior:'smooth', block:'start'}); }, 100);
    }
  };

  function getVal(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function getSelectedProp(gridId) {
    var sel = document.querySelector('#' + gridId + ' .prop-option.selected');
    return sel ? sel.querySelector('input').value : '';
  }

  function validateField(val, name) {
    if (!val || val === '') {
      alert('Por favor, preencha o campo: ' + name);
      return false;
    }
    return true;
  }

  window.sendWhatsApp = function(type) {
    var waNum = '27607835013';
    var msg = '';

    if (type === 'short-term') {
      var name    = getVal('st-name');
      var dob     = getVal('st-dob');
      var email   = getVal('st-email');
      var phone   = getVal('st-phone');
      var country = getVal('st-country');
      var city    = getVal('st-city');
      var dest    = getVal('st-destination');
      var dur     = getVal('st-duration');
      var start   = getVal('st-start');
      var prop    = getSelectedProp('st-prop-grid');

      if (!validateField(name,'Nome Completo')) return;
      if (!validateField(email,'E-mail')) return;
      if (!validateField(phone,'Telefone')) return;
      if (!validateField(country,'Pais')) return;
      if (!validateField(dest,'Destino em Cape Town')) return;
      if (!validateField(dur,'Duracao')) return;
      if (!validateField(prop,'Tipo de Espaco')) return;

      msg = 'PEDIDO DE ALOJAMENTO - CURTA DURACAO\n'
          + '------------------------------------\n\n'
          + 'DADOS PESSOAIS\n'
          + 'Nome: ' + name + '\n'
          + 'Data de Nascimento: ' + dob + '\n'
          + 'E-mail: ' + email + '\n'
          + 'Telefone: ' + phone + '\n\n'
          + 'LOCALIZACAO DE ORIGEM\n'
          + 'Pais: ' + country + '\n'
          + 'Cidade: ' + city + '\n\n'
          + 'DESTINO\n'
          + 'Bairro em Cape Town: ' + dest + '\n\n'
          + 'DETALHES DA RESERVA\n'
          + 'Periodo: ' + dur + '\n'
          + 'Data de Inicio: ' + start + '\n'
          + 'Tipo de Espaco: ' + prop + '\n\n'
          + 'Enviado pelo website da Izamo';

    } else if (type === 'long-term') {
      var name    = getVal('lt-name');
      var dob     = getVal('lt-dob');
      var email   = getVal('lt-email');
      var phone   = getVal('lt-phone');
      var country = getVal('lt-country');
      var city    = getVal('lt-city');
      var dest    = getVal('lt-destination');
      var dur     = getVal('lt-duration');
      var start   = getVal('lt-start');
      var prop    = getSelectedProp('lt-prop-grid');

      if (!validateField(name,'Nome Completo')) return;
      if (!validateField(email,'E-mail')) return;
      if (!validateField(phone,'Telefone')) return;
      if (!validateField(country,'Pais')) return;
      if (!validateField(dest,'Destino em Cape Town')) return;
      if (!validateField(dur,'Periodo')) return;
      if (!validateField(prop,'Tipo de Espaco')) return;

      msg = 'PEDIDO DE ALOJAMENTO - LONGA DURACAO\n'
          + '-------------------------------------\n\n'
          + 'DADOS PESSOAIS\n'
          + 'Nome: ' + name + '\n'
          + 'Data de Nascimento: ' + dob + '\n'
          + 'E-mail: ' + email + '\n'
          + 'Telefone: ' + phone + '\n\n'
          + 'LOCALIZACAO DE ORIGEM\n'
          + 'Pais: ' + country + '\n'
          + 'Cidade: ' + city + '\n\n'
          + 'DESTINO\n'
          + 'Bairro em Cape Town: ' + dest + '\n\n'
          + 'DETALHES DA RESERVA\n'
          + 'Periodo: ' + dur + '\n'
          + 'Data de Inicio: ' + start + '\n'
          + 'Tipo de Espaco: ' + prop + '\n\n'
          + 'Enviado pelo website da Izamo';

    } else if (type === 'sale') {
      var name      = getVal('sl-name');
      var dob       = getVal('sl-dob');
      var email     = getVal('sl-email');
      var phone     = getVal('sl-phone');
      var country   = getVal('sl-country');
      var city      = getVal('sl-city');
      var objective = getVal('sl-objective');
      var zone      = getVal('sl-zone');
      var budget    = getVal('sl-budget');
      var dur       = getVal('sl-duration');
      var start     = getVal('sl-start');
      var prop      = getSelectedProp('sl-prop-grid');

      if (!validateField(name,'Nome Completo')) return;
      if (!validateField(email,'E-mail')) return;
      if (!validateField(phone,'Telefone')) return;
      if (!validateField(country,'Pais')) return;
      if (!validateField(objective,'Objetivo')) return;
      if (!validateField(prop,'Tipo de Propriedade')) return;

      msg = 'PEDIDO DE COMPRA DE PROPRIEDADE\n'
          + '--------------------------------\n\n'
          + 'DADOS PESSOAIS\n'
          + 'Nome: ' + name + '\n'
          + 'Data de Nascimento: ' + dob + '\n'
          + 'E-mail: ' + email + '\n'
          + 'Telefone: ' + phone + '\n\n'
          + 'LOCALIZACAO DE ORIGEM\n'
          + 'Pais: ' + country + '\n'
          + 'Cidade: ' + city + '\n\n'
          + 'DETALHES DA COMPRA\n'
          + 'Objetivo: ' + objective + '\n'
          + 'Tipo de Propriedade: ' + prop + '\n'
          + 'Zona em Cape Town: ' + zone + '\n'
          + 'Orcamento Estimativo: ' + budget + '\n'
          + 'Periodo Estimado: ' + dur + '\n'
          + 'Data de Inicio: ' + start + '\n\n'
          + 'Enviado pelo website da Izamo';
    }

    if (!msg) return;
    window.open('https://wa.me/' + waNum + '?text=' + encodeURIComponent(msg), '_blank');
  };

  // Run immediately — scripts are at bottom of body so DOM is already ready
  // window.load may have already fired; call directly instead
  function initForms() {
    if (!document.getElementById('form-short-term')) return;
    populateCountries();
    buildPropGrid('st-prop-grid');
    buildPropGrid('lt-prop-grid');
    buildPropGrid('sl-prop-grid');
  }

  // Try immediately, fallback to DOMContentLoaded, fallback to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForms);
  } else {
    initForms(); // DOM already ready
  }

})();