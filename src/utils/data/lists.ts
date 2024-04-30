import { ProductList, InfoList } from 'definitions/models';

export const lists: { [key: string]: ProductList | InfoList } = {
  'list->desserts': {
    id: 'list->desserts',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [
      'listItem->product->desserts->homemade-sweets-from-tejeda-2',
      'listItem->product->desserts->our-chef-s-suggested-sweet-6',
      'listItem->product->desserts->cold-berry-soup-with-yogurt-7'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->desserts'],
    displayInfo: {
      es: {
        title: 'Postres',
        slug: 'postres'
      },
      en: {
        title: 'Desserts',
        slug: 'desserts'
      },
      de: {
        title: 'Nachspeisen',
        slug: 'nachspeisen'
      },
      nb: {
        title: 'Desserter',
        slug: 'desserter'
      },
      da: {
        title: 'Desserter',
        slug: 'desserter'
      },
      sv: {
        title: 'Efterrätter',
        slug: 'efterratter'
      },
      fr: {
        title: 'Desserts',
        slug: 'desserts'
      },
      nl: {
        title: 'Desserts',
        slug: 'desserts'
      }
    },
    items: [
      'listItem->product->desserts->our-creamy-cheesecake-1',
      'listItem->product->desserts->brownie-with-home-made-vanilla-ice-cream-8',
      'listItem->product->desserts->trompe-l-oeil-ferrero-rocher-3',
      'listItem->product->desserts->banana-ice-cream-4',
      'listItem->product->desserts->homemade-ice-cream-5',
      'listItem->product->desserts->santiago-cake-with-turron-nougat-ice-cream-9'
    ]
  } as ProductList,
  'list->meals->to-share-or-to-snack-1': {
    id: 'list->meals->to-share-or-to-snack-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->starters'],
    displayInfo: {
      es: {
        title: 'Para Compartir o Picar 1',
        slug: 'para-compartir-o-picar'
      },
      en: {
        title: 'To share or to snack 1',
        slug: 'to-share-or-to-snack'
      },
      de: {
        title: 'Zum Teilen Oder Knabbern 1',
        slug: 'vorspeisen'
      },
      nb: {
        title: 'Til og Dele Eller Små Plukke 1',
        slug: 'forretter'
      },
      da: {
        title: 'Til at Dele Eller Plukke Med 1',
        slug: 'forretter'
      },
      sv: {
        title: 'Förrätter att dela 1',
        slug: 'forratter-att-dela'
      },
      fr: {
        title: 'À Partager ou à Picorer 1',
        slug: 'a-partager-ou-a-picorer'
      },
      nl: {
        title: 'Om te Delen of Happen 1',
        slug: 'om-te-delen-of-happen'
      }
    },
    items: [
      'listItem->product->meals->artisan-garlic-bread-from-ingenio-1',
      'listItem->product->meals->artisan-bread-from-ingenio-with-canarian-sauces-2',
      'listItem->product->meals->canarian-cheese-platter-3',
      'listItem->product->meals->eggplant-chips-with-palm-honey-and-sesame-7',
      'listItem->product->meals->bao-buns-8',
      'listItem->product->meals->grilled-canarian-smoked-goat-cheese-10',
      'listItem->product->meals->nachos-with-guacamole-cheddar-cheese-and-pico-de-gallo-sauce-12'
    ]
  } as ProductList,
  'list->meals->to-share-or-to-snack-2': {
    id: 'list->meals->to-share-or-to-snack-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->meals->cubes-of-suckling-pig-roasted-at-low-temperature-and-confitted-11',
      'listItem->product->meals->the-chef-s-appetizer-13'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->starters'],
    displayInfo: {
      es: {
        title: 'Para Compartir o Picar 2',
        slug: 'para-compartir-o-picar'
      },
      en: {
        title: 'To share or to snack 2',
        slug: 'to-share-or-to-snack'
      },
      de: {
        title: 'Zum Teilen Oder Knabbern 2',
        slug: 'vorspeisen'
      },
      nb: {
        title: 'Til og Dele Eller Små Plukke 2',
        slug: 'forretter'
      },
      da: {
        title: 'Til at Dele Eller Plukke Med 2',
        slug: 'forretter'
      },
      sv: {
        title: 'Förrätter att dela 2',
        slug: 'forratter-att-dela'
      },
      fr: {
        title: 'À Partager ou à Picorer 2',
        slug: 'a-partager-ou-a-picorer'
      },
      nl: {
        title: 'Om te Delen of Happen 2',
        slug: 'om-te-delen-of-happen'
      }
    },
    items: [
      'listItem->product->meals->by-rocio-prawns-in-sizzling-garlic-oil-4',
      'listItem->product->meals->iberian-ham-5',
      'listItem->product->meals->canarian-wrinkled-potatoes-6',
      'listItem->product->meals->kataifi-skewer-9',
      'listItem->product->meals->pulled-pork-tacos-14'
    ]
  } as ProductList,
  'list->meals->something-fresh': {
    id: 'list->meals->something-fresh',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: ['listItem->product->meals->smoked-salmon-salad-2'],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->salads'],
    displayInfo: {
      es: {
        title: 'Algo Fresco',
        slug: 'algo-fresco'
      },
      en: {
        title: 'Cool Dishes',
        slug: 'cool-dishes'
      },
      de: {
        title: 'Etwas Frisches',
        slug: 'etwas-frisches'
      },
      nb: {
        title: 'Noe Friskt',
        slug: 'noe-friskt'
      },
      da: {
        title: 'Lidt Frisk Til Ganen',
        slug: 'lidt-frisk-til-ganen'
      },
      sv: {
        title: 'Något Fräscht',
        slug: 'nagot-frascht'
      },
      fr: {
        title: 'Quelque Chose de Frais',
        slug: 'quelque-chose-de-frais'
      },
      nl: {
        title: 'Verfrissend',
        slug: 'verfrissend'
      }
    },
    items: [
      'listItem->product->meals->som-tam-salad-1',
      'listItem->product->meals->piquillo-peppers-salmorejo-5',
      'listItem->product->meals->canarian-beetroot-carpaccio-3',
      'listItem->product->meals->by-rocio-poke-boll-caesar-4'
    ]
  } as ProductList,
  'list->meals->spoon-dishes': {
    id: 'list->meals->spoon-dishes',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [
      'listItem->product->meals->sauteed-chickpeas-1',
      'listItem->product->meals->cream-of-courgette-soup-2',
      'listItem->product->meals->mango-gazpacho-3',
      'listItem->product->meals->soup-of-the-day-4'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->spoon-dishes'],
    displayInfo: {
      es: {
        title: 'Cuchara de la Tierra',
        slug: 'cuchara-de-la-tierra'
      },
      en: {
        title: 'Soups and Stews',
        slug: 'soups-and-stews'
      },
      de: {
        title: 'Löffelgerichte aus Örtlichen Gefilden',
        slug: 'loffelgerichteaus-ortlichen-gefilden'
      },
      nb: {
        title: 'Jordens Skje',
        slug: 'jordens-skje'
      },
      da: {
        title: 'Lokale Supper',
        slug: 'lokale-supper'
      },
      sv: {
        title: 'Jordens Sked',
        slug: 'jordens-sked'
      },
      fr: {
        title: 'À la Cuillère',
        slug: 'a-la-cuillere'
      },
      nl: {
        title: 'Van het Land',
        slug: 'van-het-land'
      }
    },
    items: [
      'listItem->product->meals->fried-chickpeas-5',
      'listItem->product->meals->our-chef-s-gazpacho-6'
    ]
  } as ProductList,
  'list->meals->sea-and-mountains-1': {
    id: 'list->meals->sea-and-mountains-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->meals->tuna-in-tomato-with-fried-egg-yolk-1',
      'listItem->product->meals->cod-fillet-2',
      'listItem->product->meals->nigiris-of-smoked-sardines-4',
      'listItem->product->meals->seafood-pasta-8'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->sea-and-mountains'],
    displayInfo: {
      es: {
        title: 'Mar y Montaña 1',
        slug: 'mar-y-montana'
      },
      en: {
        title: 'Surf & Turf',
        slug: 'surf-turf'
      },
      de: {
        title: 'Berge und Meer 1',
        slug: 'berge-und-meer'
      },
      nb: {
        title: 'Hav og Fjell 1',
        slug: 'hav-og-fjell'
      },
      da: {
        title: 'Hav og Bjerge 1',
        slug: 'hav-og-bjerge'
      },
      sv: {
        title: 'Hav och Berg 1',
        slug: 'hav-och-berg'
      },
      fr: {
        title: 'Mer et Montagne 1',
        slug: 'mer-et-montagne'
      },
      nl: {
        title: 'Uit de Zee en de Bergen 1',
        slug: 'uit-de-zee-en-de-bergen'
      }
    },
    items: [
      'listItem->product->meals->norwegian-marinated-herring-6',
      'listItem->product->meals->fish-and-crab-balls-16',
      'listItem->product->meals->aquanaria-sea-bass-3',
      'listItem->product->meals->fresh-fish-of-the-day-and-its-garnish-9',
      'listItem->product->meals->our-fried-squid-with-garnish-10'
    ]
  } as ProductList,
  'list->meals->sea-and-mountains-2': {
    id: 'list->meals->sea-and-mountains-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->meals->tuna-in-tomato-with-fried-egg-yolk-1',
      'listItem->product->meals->nigiris-of-smoked-sardines-4',
      'listItem->product->meals->carved-angus-ribeye-7'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->sea-and-mountains'],
    displayInfo: {
      es: {
        title: 'Mar y Montaña 2',
        slug: 'mar-y-montana'
      },
      en: {
        title: 'Surf & Turf 2',
        slug: 'surf-turf'
      },
      de: {
        title: 'Berge und Meer 2',
        slug: 'berge-und-meer'
      },
      nb: {
        title: 'Hav og Fjell 2',
        slug: 'hav-og-fjell'
      },
      da: {
        title: 'Hav og Bjerge 2',
        slug: 'hav-og-bjerge'
      },
      sv: {
        title: 'Hav och Berg 2',
        slug: 'hav-och-berg'
      },
      fr: {
        title: 'Mer et Montagne 2',
        slug: 'mer-et-montagne'
      },
      nl: {
        title: 'Uit de Zee en de Bergen 2',
        slug: 'uit-de-zee-en-de-bergen'
      }
    },
    items: [
      'listItem->product->meals->gratinated-iberian-secret-11',
      'listItem->product->meals->by-rocio-style-red-curry-masala-12',
      'listItem->product->meals->rack-of-lamb-5',
      'listItem->product->meals->mexican-iberian-pork-burger-13',
      'listItem->product->meals->angus-beef-burger-14',
      'listItem->product->meals->vegan-hamburger-15'
    ]
  } as ProductList,
  'list->meals->fittings': {
    id: 'list->meals->fittings',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: true,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->fittings'],
    displayInfo: {
      es: {
        extraInfo: '(lleva un suplemento - 2,50 €)',
        title: 'Guarniciones',
        slug: 'guarniciones'
      },
      en: {
        extraInfo: '(carry a surcharge - 2,50 €)',
        title: 'Garnishes or Side Dishes',
        slug: 'garnishes-or-side-dishes'
      },
      de: {
        extraInfo: '(gegen Aufpreis - 2,50 €)',
        title: 'Beilagen',
        slug: 'beilagen'
      },
      nb: {
        extraInfo: '(supplement i pris - 2,50 €)',
        title: 'Garnityrer',
        slug: 'garnityrer'
      },
      da: {
        extraInfo: '(mod ekstra betaling - 2,50 €)',
        title: 'Garniture',
        slug: 'garniture'
      },
      sv: {
        extraInfo: '(bär ett tillägg - 2,50 €)',
        title: 'Garnering',
        slug: 'garnering'
      },
      fr: {
        extraInfo: '(avec supplément - 2,50 €)',
        title: 'Accompagnements',
        slug: 'accompagnements'
      },
      nl: {
        extraInfo: '(Met toeslag - 2,50 €)',
        title: 'Bijgerechten',
        slug: 'bijgerechten'
      }
    },
    items: [
      'listItem->product->meals->with-the-hands->fittings->chips-1',
      'listItem->product->meals->with-the-hands->fittings->wrinkled-potatoes-2',
      'listItem->product->meals->with-the-hands->fittings->sweet-potato-fries-3',
      'listItem->product->meals->with-the-hands->fittings->salad-4',
      'listItem->product->meals->with-the-hands->fittings->basmati-rice-5',
      'listItem->product->meals->with-the-hands->fittings->ratatouille-6'
    ]
  } as ProductList,
  'list->meals->our-chef-s-suggestions': {
    id: 'list->meals->',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->meals->our-chef-s-suggestions->angus-steak-tartar-5',
      'listItem->product->meals->our-chef-s-suggestions->betanzos-t-bone-cutlet-6'
    ],
    editable: false,
    maxItems: 10,
    categories: [],
    displayInfo: {
      es: {
        title: 'Sugerencias de nuestro Chef',
        slug: 'Sugerencias de nuestro Chef'
      },
      en: {
        title: `Our Chef's Suggestions`,
        slug: 'our-chef-s-suggestions'
      },
      de: {
        title: 'Empfehlungen Unseres Küchenchefs',
        slug: 'empfehlungen-unseres-kuchenchefs'
      },
      nb: {
        title: 'Kokkens Anbefaling',
        slug: 'kokkens-anbefaling'
      },
      da: {
        title: 'Vores Chefkok Anbefaler',
        slug: 'vores-chefkok-anbefaler'
      },
      sv: {
        title: 'Rekommendation Från Vår Kock',
        slug: 'rekommendation-fran-var-kock'
      },
      fr: {
        title: 'Suggestion de Notre Chef',
        slug: 'suggestion-de-notre-chef'
      },
      nl: {
        title: 'Suggestie Van de Chef',
        slug: 'suggestie-van-de-chef'
      }
    },
    items: [
      'listItem->product->meals->our-chef-s-suggestions->mixed-paella-1',
      'listItem->product->meals->our-chef-s-suggestions->fish-and-shellfish-paella-2',
      'listItem->product->meals->our-chef-s-suggestions->meat-paella-with-truffle-sauce-3',
      'listItem->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tartar-4',
      'listItem->product->meals->our-chef-s-suggestions->aged-beef-steak-tartar-8',
      'listItem->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tataki-7'
    ]
  } as ProductList,
  'list->meals->fresh-pasta': {
    id: 'list->meals->fresh-pasta',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: [],
    displayInfo: {
      es: {
        title: 'Pasta Fresca',
        slug: 'pasta-fresca'
      },
      en: {
        title: 'Fresh Pasta',
        slug: 'fresh-pasta'
      },
      de: {
        title: 'Frische Pasta',
        slug: 'frische-pasta'
      },
      nb: {
        title: 'Fersk Pasta',
        slug: 'fersk-pasta'
      },
      da: {
        title: 'Frisk Pasta',
        slug: 'frisk-pasta'
      },
      sv: {
        title: 'Färsk Pasta',
        slug: 'farsk-pasta'
      },
      fr: {
        title: 'Pâtes Fraîches',
        slug: 'pâtes-fraîches'
      },
      nl: {
        title: 'Verse Pasta',
        slug: 'verse-pasta'
      }
    },
    items: [
      'listItem->product->meals->fresh-pasta->seafood-tagliolini-1',
      'listItem->product->meals->fresh-pasta->tagliolini-bolognaise-2',
      'listItem->product->meals->fresh-pasta->tagliolini-carbonara-3'
    ]
  } as ProductList,
  'list->meals->prime-cut-meats': {
    id: 'list->meals->prime-cut-meats',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: [],
    displayInfo: {
      es: {
        title: 'Cortes Carnes Premium',
        slug: 'cortes-carnes-premium'
      },
      en: {
        title: 'Prime Cut Meats',
        slug: 'prime-cut-meats'
      },
      de: {
        title: 'Premiumschnitte Fleisch',
        slug: 'premiumschnitte-fleisch'
      },
      nb: {
        title: 'Stykker fra Premium Kjøtt',
        slug: 'stykker-fra-premium-kjott'
      },
      da: {
        title: 'Premium Kød',
        slug: 'premium-kod'
      },
      sv: {
        title: 'Styckat Premiumkött',
        slug: 'styckat-premiumkott'
      },
      fr: {
        title: 'Pièces de Viande Premium',
        slug: 'pieces-de-viande-premium'
      },
      nl: {
        title: 'Premium Stukken Vlees',
        slug: 'premium-stukken-vlees'
      }
    },
    items: [
      'listItem->product->meals->prime-cut-meats->betanzos-sliced-strip-steak-with-the-chef-s-garnis-1',
      'listItem->product->meals->prime-cut-meats->veal-tomahawk-2',
      'listItem->product->meals->prime-cut-meats->txoguitxu-beef-entrecote-3',
      'listItem->product->meals->prime-cut-meats->txoguitxu-t-bone-steak-4'
    ]
  } as ProductList,
  'list->meals->childrens': {
    id: 'list->meals->childrens',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->meals->short-title',
    selectableItems: [
      'listItem->product->meals->childrens->grilled-fish-with-side-dishes-2',
      'listItem->product->meals->childrens->ham-and-cheese-omelette-6'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->childrens'],
    displayInfo: {
      es: {
        title: 'Menú Infantil',
        slug: 'menu-infantil'
      },
      en: {
        title: `Children's Menu`,
        slug: 'children-s-menu'
      },
      de: {
        title: 'Kindermenü',
        slug: 'kindermenu'
      },
      nb: {
        title: 'Meny for de Små',
        slug: 'meny-for-de-sma'
      },
      da: {
        title: 'Børnemenu',
        slug: 'bornemenu'
      },
      sv: {
        title: 'Meny för Barnen',
        slug: 'meny-for-barnen'
      },
      fr: {
        title: 'Menu Enfant',
        slug: 'menu-enfant'
      },
      nl: {
        title: 'Kindermenu',
        slug: 'kindermenu'
      }
    },
    items: [
      'listItem->product->meals->childrens->spaghetti-with-tomato-and-grated-cheese-1',
      'listItem->product->meals->childrens->grilled-or-breaded-chicken-breast-7',
      'listItem->product->meals->childrens->hamburger-with-tomato-and-cheese-3',
      'listItem->product->meals->childrens->pizza-4',
      'listItem->product->meals->childrens->nuggets-with-french-fries-5'
    ]
  } as ProductList,
  'list->drinks->refreshments': {
    id: 'list->drinks->refreshments',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->refreshments->pepsi-light-2',
      'listItem->product->drinks->refreshments->orange-juice-11',
      'listItem->product->drinks->refreshments->multifruit-juice-12',
      'listItem->product->drinks->refreshments->tomato-juice-15'
    ],
    editable: false,
    maxItems: 20,
    listItemsForCol: 10,
    categories: ['category->drinks->refreshments'],
    displayInfo: {
      es: {
        title: 'Refrescos',
        slug: 'refrescos'
      },
      en: {
        title: 'Refreshments',
        slug: 'refreshments'
      },
      de: {
        title: 'Erfrischungen',
        slug: 'erfrischungen'
      },
      nb: {
        title: 'Forfriskninger',
        slug: 'forfriskninger'
      },
      da: {
        title: 'Forfriskninger',
        slug: 'forfriskninger'
      },
      sv: {
        title: 'Förfriskningar',
        slug: 'forfriskningar'
      },
      fr: {
        title: 'Rafraîchissements',
        slug: 'rafraichissements'
      },
      nl: {
        title: 'Verfrissingen',
        slug: 'verfrissingen'
      }
    },
    items: [
      'listItem->product->drinks->refreshments->pepsi-1',
      'listItem->product->drinks->refreshments->pepsi-max-3',
      'listItem->product->drinks->refreshments->schweppes-orange-4',
      'listItem->product->drinks->refreshments->schweppes-lemon-5',
      'listItem->product->drinks->refreshments->seven-up-6',
      'listItem->product->drinks->refreshments->appletiser-7',
      'listItem->product->drinks->refreshments->tonic-8',
      'listItem->product->drinks->refreshments->soda-jug-18',
      'listItem->product->drinks->refreshments->lipton-tea-9',
      'listItem->product->drinks->refreshments->peach-juice-10',
      'listItem->product->drinks->refreshments->apple-juice-13',
      'listItem->product->drinks->refreshments->pear-pineapple-juice-14',
      'listItem->product->drinks->refreshments->mineral-water-16',
      'listItem->product->drinks->refreshments->soda-water-17',
      'listItem->product->drinks->refreshments->natural-orange-juice-19',
      'listItem->product->drinks->refreshments->perrier-20'
    ]
  } as ProductList,
  'list->drinks->beers': {
    id: 'list->drinks->beers',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->beers->1906-reserva-especial-5',
      'listItem->product->drinks->beers->judas-9',
      'listItem->product->drinks->beers->mort-subite-10',
      'listItem->product->drinks->beers->peroni-12'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->drinks->beers'],
    displayInfo: {
      es: {
        title: 'Cervezas',
        slug: 'cervezas'
      },
      en: {
        title: 'Beers',
        slug: 'beers'
      },
      de: {
        title: 'Biere',
        slug: 'biere'
      },
      nb: {
        title: 'Øl',
        slug: 'ol'
      },
      da: {
        title: 'Øl',
        slug: 'ol'
      },
      sv: {
        title: 'Öl',
        slug: 'ol'
      },
      fr: {
        title: 'Bières',
        slug: 'bieres'
      },
      nl: {
        title: 'Bieren',
        slug: 'bieren'
      }
    },
    items: [
      'listItem->product->drinks->beers->beer-cane-1',
      'listItem->product->drinks->beers->beer-jar-2',
      'listItem->product->drinks->beers->cruzcampo-especial-3',
      'listItem->product->drinks->beers->el-aguila-sin-filtrar-4',
      'listItem->product->drinks->beers->coronita-6',
      'listItem->product->drinks->beers->desperados-7',
      'listItem->product->drinks->beers->heineken-8',
      'listItem->product->drinks->beers->paulaner-11',
      'listItem->product->drinks->beers->raddler-13',
      'listItem->product->drinks->beers->18-70-14',
      'listItem->product->drinks->beers->sin-gluten-15'
    ]
  } as ProductList,
  'list->drinks->coffee-shop': {
    id: 'list->drinks->coffee-shop',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->drinks',
    selectableItems: [],
    editable: false,
    maxItems: 10,
    categories: ['category->meals->coffee-shop'],
    displayInfo: {
      es: {
        title: 'Cafetería',
        slug: 'cafeteria'
      },
      en: {
        title: 'Coffee Shop',
        slug: 'coffee-shop'
      },
      de: {
        title: 'Café',
        slug: 'cafe'
      },
      nb: {
        title: 'Kaffebutikk',
        slug: 'kaffebutikk'
      },
      da: {
        title: 'Kaffebar',
        slug: 'kaffebar'
      },
      sv: {
        title: 'Kafé',
        slug: 'kafe'
      },
      fr: {
        title: 'Café',
        slug: 'cafe'
      },
      nl: {
        title: 'Cafetaria',
        slug: 'cafetaria'
      }
    },
    items: [
      'listItem->product->drinks->coffee-shop->black-coffe-or-expresso-1',
      'listItem->product->drinks->coffee-shop->cut-coffee-2',
      'listItem->product->drinks->coffee-shop->coffee-with-milk-3',
      'listItem->product->drinks->coffee-shop->coffee-with-condensed-milk-4',
      'listItem->product->drinks->coffee-shop->cola-cao-5',
      'listItem->product->drinks->coffee-shop->cappuccino-6',
      'listItem->product->drinks->coffee-shop->irish-coffee-7',
      'listItem->product->drinks->coffee-shop->french-coffee-8',
      'listItem->product->drinks->coffee-shop->infusion-9'
    ]
  } as ProductList,
  'list->drinks->rums': {
    id: 'list->drinks->rums',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    selectableItems: ['listItem->product->drinks->rums->artemi-6'],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->rums'],
    displayInfo: {
      es: {
        title: 'Rones',
        slug: 'rones'
      },
      en: {
        title: 'Rums',
        slug: 'rums'
      },
      de: {
        title: 'Rum',
        slug: 'rum'
      },
      nb: {
        title: 'Rom',
        slug: 'rom'
      },
      da: {
        title: 'Rom',
        slug: 'rom'
      },
      sv: {
        title: 'Rum',
        slug: 'rum'
      },
      fr: {
        title: 'Rhums',
        slug: 'rhums'
      },
      nl: {
        title: 'Rum',
        slug: 'rum'
      }
    },
    items: [
      'listItem->product->drinks->rums->arehucas-1',
      'listItem->product->drinks->rums->bacardy-2',
      'listItem->product->drinks->rums->matusalem-3',
      'listItem->product->drinks->rums->zacapa-4',
      'listItem->product->drinks->rums->house-honey-rum-5',
      'listItem->product->drinks->rums->shot-7',
      'listItem->product->drinks->rums->havana-club-3-8',
      'listItem->product->drinks->rums->havana-club-7-9',
      'listItem->product->drinks->rums->flor-de-cana-7-10',
      'listItem->product->drinks->rums->diplomatico-11'
    ]
  } as ProductList,
  'list->drinks->whiskies': {
    id: 'list->drinks->whiskies',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->whiskies->tullamore-dew-1',
      'listItem->product->drinks->whiskies->house-whisky-6',
      'listItem->product->drinks->whiskies->ballantines-8',
      'listItem->product->drinks->whiskies->chivas-regal-12-10',
      'listItem->product->drinks->whiskies->jack-daniels-12'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->whiskies'],
    displayInfo: {
      es: {
        title: 'Whiskies',
        slug: 'whiskies'
      },
      en: {
        title: 'Whiskeys',
        slug: 'whiskeys'
      },
      de: {
        title: 'Whiskys',
        slug: 'whiskys'
      },
      nb: {
        title: 'Whisky',
        slug: 'whisky'
      },
      da: {
        title: 'Whisky',
        slug: 'whisky'
      },
      sv: {
        title: 'Whisky',
        slug: 'whisky'
      },
      fr: {
        title: 'Whiskies',
        slug: 'whiskies'
      },
      nl: {
        title: 'Whisky',
        slug: 'whisky'
      }
    },
    items: [
      'listItem->product->drinks->whiskies->red-label-2',
      'listItem->product->drinks->whiskies->black-label-3',
      'listItem->product->drinks->whiskies->lagavulin-16-5',
      'listItem->product->drinks->whiskies->chanceler-9',
      'listItem->product->drinks->whiskies->j-and-b-11',
      'listItem->product->drinks->whiskies->dalwhinnie-13',
      'listItem->product->drinks->whiskies->100-pipers-7',
      'listItem->product->drinks->whiskies->jhon-haig-4'
    ]
  } as ProductList,
  'list->drinks->gins': {
    id: 'list->drinks->gins',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->gins'],
    displayInfo: {
      es: {
        title: 'Ginebras',
        slug: 'ginebras'
      },
      en: {
        title: 'Gins',
        slug: 'gins'
      },
      de: {
        title: 'Gins',
        slug: 'gins'
      },
      nb: {
        title: 'Gins',
        slug: 'gins'
      },
      da: {
        title: 'Gins',
        slug: 'gins'
      },
      sv: {
        title: 'Gins',
        slug: 'gins'
      },
      fr: {
        title: 'Gins',
        slug: 'gins'
      },
      nl: {
        title: 'Gin',
        slug: 'gin'
      }
    },
    items: [
      'listItem->product->drinks->gins->gordons-1',
      'listItem->product->drinks->gins->beefeater-2',
      'listItem->product->drinks->gins->bombay-sapphire-3',
      'listItem->product->drinks->gins->hendricks-4',
      'listItem->product->drinks->gins->tanqueray-5',
      'listItem->product->drinks->gins->martin-millers-6',
      'listItem->product->drinks->gins->bulldog-7',
      'listItem->product->drinks->gins->gvine-8',
      'listItem->product->drinks->gins->house-gin-9',
      'listItem->product->drinks->gins->macaronesian-10',
      'listItem->product->drinks->gins->royal-kingston-11'
    ]
  } as ProductList,
  'list->drinks->cognac-and-brandy': {
    id: 'list->drinks->cognac-and-brandy',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->meals->short-title',
    selectableItems: [
      'listItem->product->drinks->cognac-and-brandy->gran-duque-de-alba-3',
      'listItem->product->drinks->cognac-and-brandy->pedro-3-4',
      'listItem->product->drinks->cognac-and-brandy->alma-de-magno-7',
      'listItem->product->drinks->cognac-and-brandy->carlos-3-10',
      'listItem->product->drinks->cognac-and-brandy->remy-martin-vsop-11',
      'listItem->product->drinks->cognac-and-brandy->torres-5-12'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->cognac-and-brandy'],
    displayInfo: {
      es: {
        title: 'Coñac y Brandy',
        slug: 'cognac'
      },
      en: {
        title: 'Cognac and Brandy',
        slug: 'cognac-and-brandy'
      },
      de: {
        title: 'Cognac und Brandy',
        slug: 'cognac-und-brandy'
      },
      nb: {
        title: 'Cognac og konjakk',
        slug: 'cognac-og-konjakk'
      },
      da: {
        title: 'Cognac og brandy',
        slug: 'cognac-og-brandy'
      },
      sv: {
        title: 'Cognac och konjak',
        slug: 'cognac-och-konjak'
      },
      fr: {
        title: 'Cognac et eau-de-vie',
        slug: 'cognac-et-eau-de-vie'
      },
      nl: {
        title: 'Cognac en Brandy',
        slug: 'cognac-en-brandy'
      }
    },
    items: [
      'listItem->product->drinks->cognac-and-brandy->veterano-1',
      'listItem->product->drinks->cognac-and-brandy->carlos-1-2',
      'listItem->product->drinks->cognac-and-brandy->magno-5',
      'listItem->product->drinks->cognac-and-brandy->103-etiqueta-blanca-6',
      'listItem->product->drinks->cognac-and-brandy->brandy-local-8',
      'listItem->product->drinks->cognac-and-brandy->cardenal-de-mendoza-9'
    ]
  } as ProductList,
  'list->drinks->vodkas': {
    id: 'list->drinks->vodkas',
    type: 'product',
    active: true,
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    defaultImg: 'image->list->aside-700-350-default',
    mainImg: 'image->list->aside-700-350-vodka',
    selectableItems: [
      'listItem->product->drinks->vodkas->absolut-2',
      'listItem->product->drinks->vodkas->aniuska-3'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->drinks->vodkas'],
    displayInfo: {
      es: {
        title: 'Vodkas',
        slug: 'vodkas'
      },
      en: {
        title: 'Vodkas',
        slug: 'vodkas'
      },
      de: {
        title: 'Wodkas',
        slug: 'wodkas'
      },
      nb: {
        title: 'Vodkaer',
        slug: 'vodkaer'
      },
      da: {
        title: 'Vodkaer',
        slug: 'vodkaer'
      },
      sv: {
        title: 'Vodka',
        slug: 'vodka'
      },
      fr: {
        title: 'Vodkas',
        slug: 'vodkas'
      },
      nl: {
        title: 'Wodka',
        slug: 'wodka'
      }
    },
    items: [
      'listItem->product->drinks->vodkas->smirnoff-red-1',
      'listItem->product->drinks->vodkas->moskovskaya-4',
      'listItem->product->drinks->vodkas->house-vodka-5'
    ]
  } as ProductList,
  'list->drinks->ciders': {
    id: 'list->drinks->ciders',
    type: 'product',
    active: true,
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    defaultImg: 'image->list->aside-700-350-default',
    mainImg: 'image->list->aside-700-350-cider',
    selectableItems: ['listItem->product->drinks->ciders->strongbow-2'],
    editable: false,
    maxItems: 12,
    categories: ['category->drinks->ciders'],
    displayInfo: {
      es: {
        title: 'Sidras',
        slug: 'sidras'
      },
      en: {
        title: 'Ciders',
        slug: 'ciders'
      },
      de: {
        title: 'Apfelwein',
        slug: 'apfelwein'
      },
      nb: {
        title: 'Cider',
        slug: 'cider'
      },
      da: {
        title: 'Cider',
        slug: 'cider'
      },
      sv: {
        title: 'Cider',
        slug: 'cider'
      },
      fr: {
        title: 'Cidres',
        slug: 'cidres'
      },
      nl: {
        title: 'Cider',
        slug: 'cider'
      }
    },
    items: [
      'listItem->product->drinks->ciders->ladron-de-manzanas-1',
      'listItem->product->drinks->ciders->nupebbert-3'
    ]
  } as ProductList,
  'list->drinks->appetizers': {
    id: 'list->drinks->appetizers',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->drinks',
    selectableItems: ['listItem->product->drinks->appetizers->pernod-8'],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->appetizers'],
    displayInfo: {
      es: {
        title: 'Aperitivos',
        slug: 'aperitivos'
      },
      en: {
        title: 'Appetizers',
        slug: 'appetizers'
      },
      de: {
        title: 'Vorspeisen',
        slug: 'Vorspeisen'
      },
      nb: {
        title: 'Forretter',
        slug: 'forretter'
      },
      da: {
        title: 'Forretter',
        slug: 'forretter'
      },
      sv: {
        title: 'Förrätter',
        slug: 'forratter'
      },
      fr: {
        title: 'Apéritifs',
        slug: 'aperitifs'
      },
      nl: {
        title: 'Voorgerechten',
        slug: 'voorgerechten'
      }
    },
    items: [
      'listItem->product->drinks->appetizers->campari-1',
      'listItem->product->drinks->appetizers->tio-pepe-2',
      'listItem->product->drinks->appetizers->aperol-spritz-3',
      'listItem->product->drinks->appetizers->hugo-spritz-9',
      'listItem->product->drinks->appetizers->martini-bianco-4',
      'listItem->product->drinks->appetizers->martini-dry-5',
      'listItem->product->drinks->appetizers->martini-rosso-6',
      'listItem->product->drinks->appetizers->oporto-7'
    ]
  } as ProductList,
  'list->drinks->liqueurs': {
    id: 'list->drinks->liqueurs',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->liqueurs->gammel-dansk-2',
      'listItem->product->drinks->liqueurs->benedictine-15',
      'listItem->product->drinks->liqueurs->cynar-16',
      'listItem->product->drinks->liqueurs->grand-marnier-cordon-jaune-18',
      'listItem->product->drinks->liqueurs->grand-marnier-cordon-rouge-19',
      'listItem->product->drinks->liqueurs->galliano-20',
      'listItem->product->drinks->liqueurs->marie-brizard-24',
      'listItem->product->drinks->liqueurs->ricard-26',
      'listItem->product->drinks->liqueurs->peppermint-27'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->liqueurs'],
    displayInfo: {
      es: {
        title: 'Licores',
        slug: 'licores'
      },
      en: {
        title: 'Liqueurs',
        slug: 'liqueurs'
      },
      de: {
        title: 'Spirituosen',
        slug: 'spirituosen'
      },
      nb: {
        title: 'Brennevin',
        slug: 'brennevin'
      },
      da: {
        title: 'Spiritus',
        slug: 'spiritus'
      },
      sv: {
        title: 'Sprit',
        slug: 'sprit'
      },
      fr: {
        title: 'Esprits',
        slug: 'esprits'
      },
      nl: {
        title: 'Geesten',
        slug: 'geesten'
      }
    },
    items: [
      'listItem->product->drinks->liqueurs->aquavit-gammel-opland-1',
      'listItem->product->drinks->liqueurs->jagermeister-3',
      'listItem->product->drinks->liqueurs->fernet-branca-4',
      'listItem->product->drinks->liqueurs->baileys-5',
      'listItem->product->drinks->liqueurs->cointreau-6',
      'listItem->product->drinks->liqueurs->frangelico-7',
      'listItem->product->drinks->liqueurs->limoncello-8',
      'listItem->product->drinks->liqueurs->drambuie-9',
      'listItem->product->drinks->liqueurs->triple-seco-10',
      'listItem->product->drinks->liqueurs->malibu-11',
      'listItem->product->drinks->liqueurs->linie-aquavit-12',
      'listItem->product->drinks->liqueurs->archers-peach-schnapps-13',
      'listItem->product->drinks->liqueurs->banana-liqueur-14',
      'listItem->product->drinks->liqueurs->tequila-17',
      'listItem->product->drinks->liqueurs->grappa-21',
      'listItem->product->drinks->liqueurs->licor-43-22',
      'listItem->product->drinks->liqueurs->herbal-liquor-23',
      'listItem->product->drinks->liqueurs->ramazzotti-25',
      'listItem->product->drinks->liqueurs->sambuca-28',
      'listItem->product->drinks->liqueurs->tia-maria-29',
      'listItem->product->drinks->liqueurs->amaretto-30'
    ]
  } as ProductList,
  'list->drinks->cocktails': {
    id: 'list->drinks->cocktails',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->cocktails->caipirihnha-6',
      'listItem->product->drinks->cocktails->cosmopolitan-3'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->cocktails'],
    displayInfo: {
      es: {
        title: 'Cócteles',
        slug: 'cocteles'
      },
      en: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      de: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      nb: {
        title: 'Cocktailer',
        slug: 'cocktailer'
      },
      da: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      sv: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      fr: {
        title: 'Cocktails',
        slug: 'cocktails'
      },
      nl: {
        title: 'Cocktails',
        slug: 'cocktails'
      }
    },
    items: [
      'listItem->product->drinks->cocktails->margarita-1',
      'listItem->product->drinks->cocktails->moscow-mule-2',
      'listItem->product->drinks->cocktails->mojito-4',
      'listItem->product->drinks->cocktails->pina-colada-5',
      'listItem->product->drinks->cocktails->long-island-ice-tea-7'
    ]
  } as ProductList,
  'list->drinks->smoothies-1': {
    id: 'list->drinks->smoothies-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->smoothies->canarian-kiss-2',
      'listItem->product->drinks->smoothies->mango-heaven-3',
      'listItem->product->drinks->smoothies->green-machine-5'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->drinks->smoothies'],
    displayInfo: {
      es: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      en: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      de: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      nb: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      da: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      sv: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      fr: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      nl: {
        title: 'Smoothies',
        slug: 'smoothies'
      }
    },
    items: [
      'listItem->product->drinks->smoothies->berry-burst-1',
      'listItem->product->drinks->smoothies->strawberry-split-4',
      'listItem->product->drinks->smoothies->tropical-colada-6'
    ]
  } as ProductList,
  'list->drinks->smoothies-2': {
    id: 'list->drinks->smoothies-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->drinks',
    selectableItems: [
      'listItem->product->drinks->smoothies->canarian-kiss-2',
      'listItem->product->drinks->smoothies->mango-heaven-3',
      'listItem->product->drinks->smoothies->green-machine-5'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->drinks->smoothies'],
    displayInfo: {
      es: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      en: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      de: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      nb: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      da: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      sv: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      fr: {
        title: 'Smoothies',
        slug: 'smoothies'
      },
      nl: {
        title: 'Smoothies',
        slug: 'smoothies'
      }
    },
    items: [
      'listItem->product->drinks->smoothies->berry-burst-1',
      'listItem->product->drinks->smoothies->strawberry-split-4',
      'listItem->product->drinks->smoothies->tropical-colada-6'
    ]
  } as ProductList,
  'list->wines->red-wines-1': {
    id: 'list->wines->red-wines-1',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->red-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Tintos',
        slug: 'tintos'
      },
      en: {
        title: 'Red Wines',
        slug: 'red-wines'
      },
      de: {
        title: 'Rotweine',
        slug: 'rotweine'
      },
      nb: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      da: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      sv: {
        title: 'Röda viner',
        slug: 'roda-viner'
      },
      fr: {
        title: 'Vins rouges',
        slug: 'vins-rouges'
      },
      nl: {
        title: 'Rode wijnen',
        slug: 'rode-wijnen'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'listItem->product->wines->wine-from-the-house-1',
      'listItem->product->wines->carmelo-rodero-9-meses-24',
      'listItem->product->wines->tierra-fundida-4',
      'listItem->product->wines->ostatu-7',
      'listItem->product->wines->venta-las-vacas-35',
      'listItem->product->wines->dominio-basconcillos-finca-de-altura-36',
      'listItem->product->wines->la-partio-37',
      'listItem->product->wines->taberner-38'
    ]
  } as ProductList,
  'list->wines->red-wines-2': {
    id: 'list->wines->red-wines-2',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->red-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Tintos',
        slug: 'tintos'
      },
      en: {
        title: 'Red Wines',
        slug: 'red-wines'
      },
      de: {
        title: 'Rotweine',
        slug: 'rotweine'
      },
      nb: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      da: {
        title: 'Røde viner',
        slug: 'rode-viner'
      },
      sv: {
        title: 'Röda viner',
        slug: 'roda-viner'
      },
      fr: {
        title: 'Vins rouges',
        slug: 'vins-rouges'
      },
      nl: {
        title: 'Rode wijnen',
        slug: 'rode-wijnen'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'listItem->product->wines->almirez-39',
      'listItem->product->wines->marques-de-murrieta-reserva-40',
      'listItem->product->wines->ahari-41',
      'listItem->product->wines->puntido-42',
      'listItem->product->wines->numanthia-43',
      'listItem->product->wines->finca-de-la-habanera-44',
      'listItem->product->wines->fincas-de-ganuza-45',
      'listItem->product->wines->abadia-retuerta-pago-valdebellon-46'
    ]
  } as ProductList,
  'list->wines->white-wines': {
    id: 'list->wines->white-wines',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->wines->rubicon-10',
      'listItem->product->wines->godelia-godello-14',
      'listItem->product->wines->limite-norte-24'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->white-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Blancos',
        slug: 'vinos-blancos'
      },
      en: {
        title: 'White Wines',
        slug: 'white-wines'
      },
      de: {
        title: 'Weißweine',
        slug: 'weibweine'
      },
      nb: {
        title: 'Hvite vine',
        slug: 'hvite-vine'
      },
      da: {
        title: 'Hvide vine',
        slug: 'hvide-vine'
      },
      sv: {
        title: 'Vita viner',
        slug: 'vita-viner'
      },
      fr: {
        title: 'Vins blancs',
        slug: 'vins-blancs'
      },
      nl: {
        title: 'Witte wijnen',
        slug: 'witte-wijnen'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'listItem->product->wines->wine-from-the-house-9',
      'listItem->product->wines->la-mareta-seco-26',
      'listItem->product->wines->palestra-27',
      'listItem->product->wines->valdesil-28',
      'listItem->product->wines->paco-and-lola-11',
      'listItem->product->wines->paisaje-de-las-islas-12',
      'listItem->product->wines->tajinaste-13',
      'listItem->product->wines->chivite-coleccion-125-29',
      'listItem->product->wines->tameran-30',
      'listItem->product->wines->belondrade-quinta-apolonia-15',
      'listItem->product->wines->chivite-legardeta-25'
    ]
  } as ProductList,
  'list->wines->rose-wines': {
    id: 'list->wines->rose-wines',
    type: 'product',
    active: true,
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->default',
    defaultImg: 'image->list->aside-700-250-default',
    mainImg: 'image->list->aside-700-250-rose-wine',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->rose-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Rosados',
        slug: 'vinos-rosados'
      },
      en: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      de: {
        title: 'Roséweine',
        slug: 'roseweine'
      },
      nb: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      da: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      sv: {
        title: 'Rosé Wines',
        slug: 'rose-wines'
      },
      fr: {
        title: 'Vins rosés',
        slug: 'vins-roses'
      },
      nl: {
        title: 'Rosé wijnen',
        slug: 'rose-wijnen'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'listItem->product->wines->wine-from-the-house-16',
      'listItem->product->wines->ochoa-lagrima-rosa-17',
      'listItem->product->wines->chivite-las-fincas-18',
      'listItem->product->wines->rubicon-31',
      'listItem->product->wines->magali-32'
    ]
  } as ProductList,
  'list->wines->sweet-wines': {
    id: 'list->wines->sweet-wines',
    type: 'product',
    active: true,
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->default',
    defaultImg: 'image->list->aside-700-250-default',
    mainImg: 'image->list->aside-700-250-sweet-wine',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->sweet-wines'],
    displayInfo: {
      es: {
        title: 'Vinos Dulces',
        slug: 'vinos-duces'
      },
      en: {
        title: 'Sweet Wines',
        slug: 'sweet-wines'
      },
      de: {
        title: 'Süße Weine',
        slug: 'sube-weine'
      },
      nb: {
        title: 'Søte viner',
        slug: 'sote-viner'
      },
      da: {
        title: 'Søde vine',
        slug: 'sode-vine'
      },
      sv: {
        title: 'Söta viner',
        slug: 'sota-viner'
      },
      fr: {
        title: 'Vins doux',
        slug: 'vins-doux'
      },
      nl: {
        title: 'Zoete wijnen',
        slug: 'zoete-wijnen'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: ['listItem->product->wines->don-px-2018-19']
  } as ProductList,
  'list->wines->sangrias-and-champagnes': {
    id: 'list->wines->sangrias-and-champagnes',
    type: 'product',
    active: true,
    sortable: true,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: true,
    template: 'template->list->default',
    defaultImg: 'image->list->aside-700-250-default',
    mainImg: 'image->list->aside-700-250-sangrias-and-champagnes',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->sangrias-and-champagnes'],
    displayInfo: {
      es: {
        title: 'Sangrías y Champagnes',
        slug: 'sangrias-y-champagnes'
      },
      en: {
        title: 'Sangrias and Champagnes',
        slug: 'sangrias-and-champagnes'
      },
      de: {
        title: 'Sangrías und Champagner',
        slug: 'sangrias-und-champagner'
      },
      nb: {
        title: 'Sangrías og Champagnes',
        slug: 'sangrias-og-champagnes'
      },
      da: {
        title: 'Sangrías og Champagnes',
        slug: 'sangrias-og-champagnes'
      },
      sv: {
        title: 'Sangrías och champagner',
        slug: 'sangrias-och-champagner'
      },
      fr: {
        title: 'Sangrias et champagnes',
        slug: 'sangrias-et-champagnes'
      },
      nl: {
        title: 'Sangrías en champagnes',
        slug: 'sangrias-en-champagnes'
      }
    },
    hasVariants: true,
    variants: 'variant->bottle-capacity',
    items: [
      'listItem->product->wines->raventos-i-blanc-de-nit-20',
      'listItem->product->wines->raventos-de-nit-rose-21',
      'listItem->product->wines->taittinger-brut-reserve-22',
      'listItem->product->wines->picolo-codorniu-33',
      'listItem->product->wines->sangria-23',
      'listItem->product->wines->sangria-champagne-34'
    ]
  } as ProductList,
  'list->info->allergens': {
    id: 'list->info->allergens',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->meals->smoked-salmon-salad-2',
      'listItem->product->meals->seafood-pasta-8',
      'listItem->product->meals->artisan-loaf-sandwich-with-squid-1',
      'listItem->product->meals->homemade-bread-with-black-pork-in-lard-2',
      'listItem->product->meals->homemade-bread-with-chicken-3',
      'listItem->product->meals->homemade-bread-with-chorizo-from-teror-4',
      'listItem->product->desserts->cold-berry-soup-with-yogurt-7',
      'listItem->product->meals->sauteed-chickpeas-1',
      'listItem->product->meals->mango-gazpacho-3',
      'listItem->product->meals->carved-angus-ribeye-7',
      'listItem->product->meals->angus-beef-burger-9',
      'listItem->product->meals->our-chef-s-suggestions->angus-steak-tartar-5',
      'listItem->product->meals->childrens->ham-and-cheese-omelette-6',
      'listItem->product->meals->cubes-of-suckling-pig-roasted-at-low-temperature-and-confitted-11',
      'listItem->product->desserts->homemade-sweets-from-tejeda-2'
    ],
    editable: false,
    maxItems: 50,
    categories: [],
    displayInfo: {
      es: {
        title: 'Alergénicos',
        slug: 'comidas-alergenicos'
      },
      en: {
        title: 'Allergens',
        slug: 'meals-allergens'
      },
      de: {
        title: 'Allergene',
        slug: 'allergene'
      },
      nb: {
        title: 'Allergener',
        slug: 'allergener'
      },
      da: {
        title: 'Allergener',
        slug: 'allergener'
      },
      sv: {
        title: 'Allergener',
        slug: 'allergener'
      },
      fr: {
        title: 'Allergènes',
        slug: 'allergenes'
      },
      nl: {
        title: 'Allergenen',
        slug: 'allergenen'
      }
    },
    items: [
      'listItem->product->meals->artisan-garlic-bread-from-ingenio-1',
      'listItem->product->meals->artisan-bread-from-ingenio-with-canarian-sauces-2',
      'listItem->product->meals->canarian-cheese-platter-3',
      'listItem->product->meals->by-rocio-prawns-in-sizzling-garlic-oil-4',
      'listItem->product->meals->iberian-ham-5',
      'listItem->product->meals->eggplant-chips-with-palm-honey-and-sesame-7',
      'listItem->product->meals->bao-buns-8',
      'listItem->product->meals->kataifi-skewer-9',
      'listItem->product->meals->grilled-canarian-smoked-goat-cheese-10',
      'listItem->product->meals->pulled-pork-tacos-14',
      'listItem->product->meals->nachos-with-guacamole-cheddar-cheese-and-pico-de-gallo-sauce-12',
      'listItem->product->meals->som-tam-salad-1',
      'listItem->product->meals->canarian-beetroot-carpaccio-3',
      'listItem->product->meals->by-rocio-poke-boll-caesar-4',
      'listItem->product->meals->piquillo-peppers-salmorejo-5',
      'listItem->product->meals->fried-chickpeas-5',
      'listItem->product->meals->prime-cut-meats->betanzos-sliced-strip-steak-with-the-chef-s-garnis-1',
      'listItem->product->meals->fresh-pasta->seafood-tagliolini-1',
      'listItem->product->meals->fresh-pasta->tagliolini-bolognaise-2',
      'listItem->product->meals->fresh-pasta->tagliolini-carbonara-3',
      'listItem->product->meals->norwegian-marinated-herring-6',
      'listItem->product->meals->cod-fillet-2',
      'listItem->product->meals->aquanaria-sea-bass-3',
      'listItem->product->meals->fresh-fish-of-the-day-and-its-garnish-9',
      'listItem->product->meals->our-fried-squid-with-garnish-10',
      'listItem->product->meals->gratinated-iberian-secret-11',
      'listItem->product->meals->by-rocio-style-red-curry-masala-12',
      'listItem->product->meals->mexican-iberian-pork-burger-13',
      'listItem->product->meals->fish-and-crab-balls-16',
      'listItem->product->meals->our-chef-s-suggestions->mixed-paella-1',
      'listItem->product->meals->our-chef-s-suggestions->fish-and-shellfish-paella-2',
      'listItem->product->meals->our-chef-s-suggestions->meat-paella-with-truffle-sauce-3',
      'listItem->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tartar-4',
      'listItem->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tataki-7',
      'listItem->product->meals->our-chef-s-suggestions->aged-beef-steak-tartar-8',
      'listItem->product->meals->mexican-iberian-pork-burger-8',
      'listItem->product->meals->childrens->spaghetti-with-tomato-and-grated-cheese-1',
      'listItem->product->meals->childrens->hamburger-with-tomato-and-cheese-3',
      'listItem->product->meals->childrens->nuggets-with-french-fries-5',
      'listItem->product->meals->childrens->grilled-or-breaded-chicken-breast-7',
      'listItem->product->meals->childrens->pizza-4',
      'listItem->product->desserts->our-creamy-cheesecake-1',
      'listItem->product->desserts->trompe-l-oeil-ferrero-rocher-3',
      'listItem->product->desserts->banana-ice-cream-4',
      'listItem->product->desserts->homemade-ice-cream-5',
      'listItem->product->desserts->brownie-with-home-made-vanilla-ice-cream-8',
      'listItem->product->desserts->santiago-cake-with-turron-nougat-ice-cream-9'
    ]
  } as ProductList,
  'list->info->gallery': {
    id: 'list->info->gallery',
    type: 'product',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showTitle: false,
    showExtraInfo: false,
    showDescription: false,
    template: 'template->list->default',
    selectableItems: [
      'listItem->product->meals->artisan-garlic-bread-from-ingenio-1',
      'listItem->product->meals->artisan-bread-from-ingenio-with-canarian-sauces-2',
      'listItem->product->meals->canarian-cheese-platter-3',
      'listItem->product->meals->by-rocio-prawns-in-sizzling-garlic-oil-4',
      'listItem->product->meals->iberian-ham-5',
      'listItem->product->meals->canarian-wrinkled-potatoes-6',
      'listItem->product->meals->eggplant-chips-with-palm-honey-and-sesame-7',
      'listItem->product->meals->bao-buns-8',
      'listItem->product->meals->kataifi-skewer-9',
      'listItem->product->meals->herreno-cheese-10',
      'listItem->product->meals->cubes-of-suckling-pig-roasted-at-low-temperature-and-confitted-11',
      'listItem->product->meals->nachos-with-guacamole-cheddar-cheese-and-pico-de-gallo-sauce-12',
      'listItem->product->meals->smoked-salmon-salad-2',
      'listItem->product->meals->canarian-beetroot-carpaccio-3',
      'listItem->product->meals->by-rocio-poke-boll-caesar-4',
      'listItem->product->meals->sauteed-chickpeas-1',
      'listItem->product->meals->mango-gazpacho-3',
      'listItem->product->meals->seafood-pasta-8',
      'listItem->product->meals->fresh-fish-of-the-day-and-its-garnish-9',
      'listItem->product->meals->our-fried-squid-with-garnish-10',
      'listItem->product->meals->gratinated-iberian-secret-11',
      'listItem->product->meals->by-rocio-style-red-curry-masala-12',
      'listItem->product->meals->carved-angus-ribeye-7',
      'listItem->product->meals->cod-fillet-2',
      'listItem->product->meals->our-chef-s-suggestions->mixed-paella-1',
      'listItem->product->meals->our-chef-s-suggestions->fish-and-shellfish-paella-2',
      'listItem->product->meals->our-chef-s-suggestions->meat-paella-with-truffle-sauce-3',
      'listItem->product->meals->our-chef-s-suggestions->angus-steak-tartar-5',
      'listItem->product->meals->our-chef-s-suggestions->betanzos-t-bone-cutlet-6',
      'listItem->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tataki-7',
      'listItem->product->meals->artisan-loaf-sandwich-with-squid-1',
      'listItem->product->meals->homemade-bread-with-black-pork-in-lard-2',
      'listItem->product->meals->homemade-bread-with-chicken-3',
      'listItem->product->meals->homemade-bread-with-chorizo-from-teror-4',
      'listItem->product->meals->mexican-iberian-pork-burger-8',
      'listItem->product->meals->angus-beef-burger-9',
      'listItem->product->meals->childrens->spaghetti-with-tomato-and-grated-cheese-1',
      'listItem->product->meals->childrens->ham-and-cheese-omelette-6',
      'listItem->product->meals->childrens->hamburger-with-tomato-and-cheese-3',
      'listItem->product->meals->childrens->pizza-4',
      'listItem->product->desserts->our-creamy-cheesecake-1',
      'listItem->product->desserts->homemade-sweets-from-tejeda-2',
      'listItem->product->desserts->trompe-l-oeil-ferrero-rocher-3',
      'listItem->product->desserts->banana-ice-cream-4',
      'listItem->product->desserts->homemade-ice-cream-5'
    ],
    editable: false,
    maxItems: 50,
    categories: [],
    displayInfo: {
      es: {
        title: 'Galería',
        slug: 'galeria'
      },
      en: {
        title: 'Gallery',
        slug: 'gallery'
      },
      de: {
        title: 'Galerie',
        slug: 'galerie'
      },
      nb: {
        title: 'Galleri',
        slug: 'galleri'
      },
      da: {
        title: 'Galleri',
        slug: 'galleri'
      },
      sv: {
        title: 'Galleri',
        slug: 'galleri'
      },
      fr: {
        title: 'Galerie',
        slug: 'galerie'
      },
      nl: {
        title: 'Galerij',
        slug: 'galerij'
      }
    },
    items: [
      'listItem->product->meals->norwegian-marinated-herring-6',
      'listItem->product->meals->aquanaria-sea-bass-3',
      'listItem->product->meals->rack-of-lamb-5',
      'listItem->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tartar-4',
      'listItem->product->meals->som-tam-salad-1'
    ]
  } as ProductList,
  'list->info->information': {
    id: 'list->info->information',
    type: 'info',
    active: true,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: ['listItem->info->information-5'],
    editable: false,
    maxItems: 12,
    categories: ['category->info->information'],
    displayInfo: {
      es: {
        title: 'Información',
        slug: 'informacion'
      },
      en: {
        title: 'Information',
        slug: 'information'
      },
      de: {
        title: 'Information',
        slug: 'information'
      },
      nb: {
        title: 'Informasjon',
        slug: 'informasjon'
      },
      da: {
        title: 'Information',
        slug: 'information'
      },
      sv: {
        title: 'Information',
        slug: 'information'
      },
      fr: {
        title: 'Informations',
        slug: 'informations'
      },
      nl: {
        title: 'Informatie',
        slug: 'informatie'
      }
    },
    items: [
      'listItem->info->information-1',
      'listItem->info->information-2',
      'listItem->info->information-3',
      'listItem->info->information-4',
      'listItem->info->information-6'
    ]
  } as InfoList
};
