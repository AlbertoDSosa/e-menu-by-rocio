import { Info, Menu, Product } from 'definitions/models';

export const items: { [key: string]: Info | Product | Menu } = {
  ///// meals->starters->
  'item->product->meals->kataifi-skewer-9': {
    id: 'item->product->meals->kataifi-skewer-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->egg-9',
      'allergenic->crustaceans-2',
      'allergenic->fish-1'
    ],
    selectableAllergens: [
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Brocheta de Kataifi de Langostino y melón, mayonesa kimchi',
        slug: 'brocheta-de-kataifi'
      },
      en: {
        description: '',
        title: 'King Prawn Kaitifi Skewer and Melon with Kimchi Mayonnaise',
        slug: 'kaitifi-skewer'
      },
      de: {
        description: '',
        title: 'Garnelenspieß in Kataifi-Teig, Melone und Kimchi-Mayonnaise',
        slug: 'garnelenspiesbs-in-kataifi-teig'
      },
      nb: {
        description: '',
        title: 'Kataifi spyd av reke og melon, kimchi majones',
        slug: 'kataifi-spyd'
      },
      da: {
        description: '',
        title: 'Kataifi-spyd med stor reje og melon, kimchi-mayonnaise',
        slug: 'kataifi-spyd'
      },
      sv: {
        description: '',
        title: 'Kataifi spett av räkor och melon, kimchi majonnäs',
        slug: 'kataifi-spett'
      },
      fr: {
        description: '',
        title:
          'Brochette de crevettes et melon au kataifi croustillant, mayonnaise au kimchi',
        slug: 'brochette-kataifi'
      },
      nl: {
        description: '',
        title: 'Gamba in kataifideeg, meloen en kimchimayonaise op spie',
        slug: 'gamba-in-kataifideeg'
      }
    },
    price: { amount: '13.50' },
    number: '9'
  } as Product,
  'item->product->meals->cubes-of-suckling-pig-roasted-at-low-temperature-and-confitted-11': {
    id:
      'item->product->meals->cubes-of-suckling-pig-roasted-at-low-temperature-and-confitted-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->egg-9',
      'allergenic->fish-1'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Tacos de Cochinillo a baja temperatura confitado (3 unidades)',
        slug: 'tacos-de-cochinillo-a-baja-temperatura-confitado'
      },
      en: {
        description: '',
        title:
          'Cubes of Suckling Pig, roasted at low temperature and confitted (3 pieces)',
        slug: 'cubes-of-suckling-pig-roasted-at-low-temperature-and-confitted'
      },
      de: {
        description: '',
        title:
          'Häppchen vom Spanferkel bei niedriger Temperatur confiert (3 Stück)',
        slug: 'happchen-vom-spanferkel-bei-niedriger-temperatur-confiert'
      },
      nb: {
        description: '',
        title: 'Stykker av konfitert pattegris (3 enheter)',
        slug: 'stykker-av-konfitert-pattegris'
      },
      da: {
        description: '',
        title: 'Tacos med pattegris konfiteret ved lav temperatur (3 stk.)',
        slug: 'tacos-med-pattegris-konfiteret-ved-lav-temperatur'
      },
      sv: {
        description: '',
        title: 'Bitar av konfiterad kulting (3 enheter)',
        slug: 'bitar-av-konfiterad-kulting'
      },
      fr: {
        description: '',
        title: 'Pavés de cochon de lait confit à basse température (3 unités)',
        slug: 'paves-de-cochon-de-lait-confit-a-basse-temperature'
      },
      nl: {
        description: '',
        title:
          'Tacos met gekonfijt speenvarken bereid op lage temperatuur (3 stuks)',
        slug: 'tacos-met-gekonfijt-speenvarken-bereid-op-lage-temperatuur'
      }
    },
    price: { amount: '10.95' },
    number: '11'
  } as Product,
  'item->product->meals->the-chef-s-appetizer-13': {
    id: 'item->product->meals->the-chef-s-appetizer-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '* Los alérgenos dependen del plato',
        title: 'Aperitivo chef',
        slug: 'aperitivo-chef'
      },
      en: {
        description: '* Allergens depend on the dish',
        title: `The Chef's Appetizer`,
        slug: 'the-chef-s-appetizer'
      },
      de: {
        description: '* Allergene hängen vom Gericht ab',
        title: 'Aperitif des Küchenchefs',
        slug: 'aperitif-des-kuchenchefs'
      },
      nb: {
        description: '* Allergener avhenger av retten',
        title: 'Kokkens aperitiff',
        slug: 'kokkens-aperitiff'
      },
      da: {
        description: '* Allergener afhænger af retten',
        title: 'Chefkokkens aperitif',
        slug: 'chefkokkens-aperitif'
      },
      sv: {
        description: '* Allergener beror på maträtten',
        title: 'Kockens aperitif',
        slug: 'kockens-aperitif'
      },
      fr: {
        description: '* Les allergènes dépendent du plat',
        title: 'Apéritifs du chef',
        slug: 'aperitifs-du-chef'
      },
      nl: {
        description: '* Allergenen zijn afhankelijk van het gerecht',
        title: 'Borrelhap van de chef',
        slug: 'borrelhap-van-de-chef'
      }
    },
    price: { amount: '12.00' },
    number: '13'
  } as Product,

  ///// meals->salads->
  'item->product->meals->smoked-salmon-salad-2': {
    id: 'item->product->meals->smoked-salmon-salad-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->smoked-salmon-salad-1',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->sulphites-5',
      'allergenic->nuts-7',
      'allergenic->soya-12',
      'allergenic->celery-14'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->moluscs-13'
    ],
    displayInfo: {
      es: {
        description:
          '(manzana roja, rábano, nueces y tallos de apio tierno) vinagreta y reducción de balsámico',
        title: 'Ensalada de Salmón Ahumado',
        slug: 'ensalada-de-salmon-ahumado'
      },
      en: {
        description:
          '(Red Apple, Radish, Walnuts and Tender Celery Stalks) Vinaigrette and Balsamic Reduction',
        title: 'Smoked salmon salad',
        slug: 'smoked-salmon-salad'
      },
      de: {
        description:
          '(Rote Äpfel, Radieschen, Nüsse und Stangensellerie) an Vinaigrette und Balsamico-Reduktion ',
        title: 'Salat mit Räucherlachs',
        slug: 'salat-mi-raucherlachs'
      },
      nb: {
        description:
          '(rødt eple, reddik, nøtter og selleristengler) vinaigrette og balsamico reduksjon',
        title: 'Røkt laksesalat',
        slug: 'rokt-laksesalat'
      },
      da: {
        description:
          '(røde æbler, radisser, valnødder og sprøde selleristænger) med vinaigrette og balsamikumreduktion',
        title: 'Salat med røget laks',
        slug: 'salat-med-roget-laks'
      },
      sv: {
        description:
          '(rött äpple, rädisa, nötter och selleristammar) vinägrett och reducerad balsamvinäger',
        title: 'Rökt laxsallad',
        slug: 'rokt-laxsallad'
      },
      fr: {
        description:
          '(pomme rouge, radis, noix et branches de céleri tendre), vinaigrette et réduction de vinaigre balsamique',
        title: 'Salade de saumon fumé',
        slug: 'salade-de-saumon-fume'
      },
      nl: {
        description:
          '(rode appel, radijs, noten en bleekselderij) vinaigrette en een vleugje balsamico',
        title: 'Salade gerookte zalm',
        slug: 'salade-gerookte-zalm'
      }
    },
    price: { amount: '10.50' },
    number: '2'
  } as Product,

  //// meals->spoon-dishes->
  'item->product->meals->sauteed-chickpeas-1': {
    id: 'item->product->meals->sauteed-chickpeas-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->nuts-7'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Garbanzos Salteados con Morcilla, Pimiento del Piquillo y Piñones salteados',
        slug: 'garbanzos-salteados'
      },
      en: {
        description: '',
        title:
          'Sautéed Chickpeas with Black Pudding, Piquillo Peppers and Sautéed Pine-nuts',
        slug: 'sauteed-chickpeas'
      },
      de: {
        description: '',
        title:
          'Sautierte Kichererbsen mit Blutwurst, Piquillo-Paprika und gerösteten Pinienkernen',
        slug: 'sautierte-kichererbsen'
      },
      nb: {
        description: '',
        title:
          'Sauterte kikerter med blodpudding, piquillo paprika og sauterte pinjekjerner',
        slug: 'sauterte-kikerter'
      },
      da: {
        description: '',
        title:
          'Sauterede kikærter med blodpølse, små røde peberfrugter og ristede pinjekerner',
        slug: 'sauterede-kikaerter'
      },
      sv: {
        description: '',
        title:
          'Sauterade kikärter med blodpudding, piquillopeppar och sauterade pinjenötter',
        slug: 'sauterade-kikarter'
      },
      fr: {
        description: '',
        title:
          'Pois chiches sautés au boudin, poivrons piquillo et pignons sautés',
        slug: 'pois-chiches-sautes'
      },
      nl: {
        description: '',
        title:
          'Gebakken kikkererwten met bloedworst, Piquillo-peper en gebakken pijnboompitten',
        slug: 'gebakken-kikkererwten'
      }
    },
    price: { amount: '9.75' },
    number: '1'
  } as Product,
  'item->product->meals->cream-of-courgette-soup-2': {
    id: 'item->product->meals->cream-of-courgette-soup-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Crema de Calabacín con Picatostes, Crema Blanca y Nevada de Curry',
        slug: 'crema-de-calabacin'
      },
      en: {
        description: '',
        title: 'Cream of courgette soup with croutons, cream, and curry foam',
        slug: 'cream-of-courgette-soup'
      },
      de: {
        description: '',
        title: 'Zucchini-Cremesuppe mit Croutons, Sahne und Curryschaum',
        slug: 'zucchini-cremesuppe'
      },
      nb: {
        description: '',
        title:
          'Kremet Gresskarsuppe med Hardbrødstykker, Hvit Krem og Ett Snøflak av Karry',
        slug: 'kremet-gresskarsuppe'
      },
      da: {
        description: '',
        title:
          'Kremet Gresskarsuppe med Hårdebrødstykker, Hvid Krem og ett Snæv af Carry',
        slug: 'kremet-gresskarsuppe'
      },
      sv: {
        description: '',
        title: 'Grädde av zucchini med krutonger, Vit grädde och curry ',
        slug: 'gradde-av-zucchini'
      },
      fr: {
        description: '',
        title:
          'Crème de courgettes aux croutons avec de la crème blanche et des copeaux de curry.',
        slug: 'creme-de-courgettes'
      },
      nl: {
        description: '',
        title: 'Courgetteroom met croutons, witte room en kerrie Sneeuwval',
        slug: 'courgetteroom'
      }
    },
    price: { amount: '6.75' },
    number: '2'
  } as Product,
  'item->product->meals->mango-gazpacho-3': {
    id: 'item->product->meals->mango-gazpacho-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Gazpacho de mangos de Mogán y su guarnición',
        slug: 'gazpacho-de-mangos'
      },
      en: {
        description: '',
        title: 'Mogan Mango Gazpacho with its Garnish',
        slug: 'mogan-mango-gazpacho'
      },
      de: {
        description: '',
        title: 'Gazpacho von der Mango aus Mogán und ihre Beilagen',
        slug: 'gazpacho-von-der-mango'
      },
      nb: {
        description: '',
        title: 'Gazpacho av mango fra Mogán og dens garnityr (kald suppe)',
        slug: 'garzacho-av-mango'
      },
      da: {
        description: '',
        title: 'Gazpacho med mangofrugter fra Mogan og garniture',
        slug: 'gazpacho-med-mangofrugter'
      },
      sv: {
        description: '',
        title: 'Gazpacho av mango från Mogán och dess garnering',
        slug: 'gazpacho-av-mango'
      },
      fr: {
        description: '',
        title: `Gaspacho de mangues Mogán (commune de l'île) et son accompagnement`,
        slug: 'gazpacho-de-mangues'
      },
      nl: {
        description: '',
        title: 'Mangogazpacho uit Mogan (Gran Canaria) met garnering',
        slug: 'mangogazpacho-uit-mogan'
      }
    },
    price: { amount: '6.90' },
    number: '3'
  } as Product,
  'item->product->meals->soup-of-the-day-4': {
    id: 'item->product->meals->soup-of-the-day-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '* Los alérgenos dependen del plato',
        title: 'Cuchara del día',
        slug: 'cuchara-del-dia'
      },
      en: {
        description: '* Allergens depending on the dish',
        title: 'Soup of the Day',
        slug: 'soup-of-the-day'
      },
      de: {
        description: '* Allergene je nach gericht',
        title: 'Eintopf des Tages',
        slug: 'eintopf-des-tages'
      },
      nb: {
        description: '* Alergener avhenger av ingrediensene',
        title: 'Dagens skje',
        slug: 'dagens-skje'
      },
      da: {
        description: '* Allergener alt efter typen af suppe',
        title: 'Dagens suppe',
        slug: 'dagens-suppe'
      },
      sv: {
        description: '* Allergen beror på olika ingredienser',
        title: 'Dagens sked',
        slug: 'dagens-sked'
      },
      fr: {
        description: '* Allergènes à consulter',
        title: 'Le plat du jour',
        slug: 'le-plat-du-jour'
      },
      nl: {
        description: '* Allergenen afhankelijk van gerecht',
        title: 'Gerecht van de dag',
        slug: 'gerecht-van-de-dag'
      }
    },
    price: { amount: '6.75' },
    number: '4'
  } as Product,

  //// meals->sea-and-mountains->
  'item->product->meals->tuna-in-tomato-with-fried-egg-yolk-1': {
    id: 'item->product->meals->tuna-in-tomato-with-fried-egg-yolk-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->fish-1',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Atún en tomate con yema frita',
        slug: 'atun-en-tomate-con-yema-frita'
      },
      en: {
        description: '',
        title: 'Tuna in tomato with fried egg yolk',
        slug: 'tuna-in-tomato-with-fried-egg-yolk'
      },
      de: {
        description: '',
        title: 'Thunfisch in Tomate mit gebratenem Eigelb',
        slug: 'thunfisch-in-tomate-mit-gebratenem-eigelb'
      },
      nb: {
        description: '',
        title: 'Tunfisk i tomat med stekt eggeplomme',
        slug: 'tunfisk-i-tomat-med-stekt-eggeplomme'
      },
      da: {
        description: '',
        title: 'Tunfisk i tomat med stægt æggeplomme',
        slug: 'tunfisk-i-tomat-med-stægt-æggeplomme'
      },
      sv: {
        description: '',
        title: 'Tonfisk med tomat och stekt äggula',
        slug: 'tonfisk-med-tomat-och-stekt-aggula'
      },
      fr: {
        description: '',
        title: 'Thon à la tomate avec jaune d’œuf frite',
        slug: 'thon-a-la-tomate-avec-jaune-d-œuf-frite'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '11.50' },
    number: '1'
  } as Product,
  'item->product->meals->cod-fillet-2': {
    id: 'item->product->meals->cod-fillet-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->bacalao-1',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->fish-1', 'allergenic->dairy-products-10'],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Lomo de Bacalao sobre base de puré de papa violeta y salsa pil-pil',
        slug: 'lomo-de-bacalao'
      },
      en: {
        description: '',
        title: 'Cod Loin on a bed of Purple Potato Purée and Pil-pil Sauce',
        slug: 'cod-fillet'
      },
      de: {
        description: '',
        title:
          'Rückensteak vom Kabeljau an einem Bett von der violetten Kartoffel und Pil-Pil-Sauce',
        slug: 'ruckensteak-vom-kabeljau'
      },
      nb: {
        description: '',
        title: 'Torskeloin servert med lilla potetmos og med pil-pil saus',
        slug: 'torskeloin-servert'
      },
      da: {
        description: '',
        title:
          'Torskefilet på grøntsagspure med blå kartofler og pil-pil-sauce',
        slug: 'tosrkefilet'
      },
      sv: {
        description: '',
        title: 'Torskfilé baserad på violett potatismos och pil-pilsås',
        slug: 'tosrkefile'
      },
      fr: {
        description: '',
        title:
          'Filet de cabillaud sur fond de purée de papa violeta (vitelottes des îles Canaries) et sauce pil-pil',
        slug: 'filet-de-cabillaud'
      },
      nl: {
        description: '',
        title:
          'Kabeljauwlende op een bedje van truffelaardappelpuree en pil-pil saus',
        slug: 'kabeljauwlende'
      }
    },
    price: { amount: '15.75' },
    number: '2'
  } as Product,
  'item->product->meals->aquanaria-sea-bass-3': {
    id: 'item->product->meals->aquanaria-sea-bass-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->lubina-1',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->nuts-7',
      'allergenic->sulphites-5'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Lubina Aquanaria sobre base de mangos, aguacate y anacardos, tomate cherry amarillo laminado y salsa Bilbaína',
        slug: 'lubina-aquanaria'
      },
      en: {
        description: '',
        title:
          'AAquanaria Seabass on a bed of Mango, Avocado, Cashews, sliced Yellow Cherry Tomato and Bilbaina Sauce',
        slug: 'aquanaria-sea-bass'
      },
      de: {
        description: '',
        title:
          'Aquanaria-Seebarsch an einem Bett aus Mango, Avocado und Cashewkernen, in Scheiben geschnittenen gelben Kirschtomaten in bilbainischer Sauce',
        slug: 'aquanaria-seebarsch'
      },
      nb: {
        description: '',
        title:
          'Havsabbor fra Aquanaria servert med mango, avokado og cashewnøtter, skiver av gul cherrytomat og Bilbao-saus',
        slug: 'havsabbor-fra-aquanaria'
      },
      da: {
        description: '',
        title:
          'Aquanaria-havbars på en bund af mangofrugt, avocado og  cashew-nødder, gule cherry-tomater i skiver og bilbainsk sauce',
        slug: 'aquanaria-havbars'
      },
      sv: {
        description: '',
        title:
          'Havsabborre från Aquanaria baserad på mango, avokado och cashewnötter, skivan gul körsbärstomat och Bilbaosås',
        slug: 'havsabborre-fran-aquanaria'
      },
      fr: {
        description: '',
        title:
          'Lubina Aquanaria (petit bar) sur un fond de mangues, avocat et noix de cajou, tomates cerises jaunes en lamelle et sauce bilbaína (sauce typique de la région de Bilbao)',
        slug: 'lubina-aquanaria'
      },
      nl: {
        description: '',
        title:
          'Zeebaars op een bedje van mango, avocado en cashewnoten, laagjes gele cherrytomaatjes en saus uit Bilbao',
        slug: 'zeebaars'
      }
    },
    price: { amount: '18.95' },
    number: '3'
  } as Product,
  'item->product->meals->nigiris-of-smoked-sardines-4': {
    id: 'item->product->meals->nigiris-of-smoked-sardines-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->fish-1'],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Nigiris de sardina ahumada, salmón ahumado o atún rojo. (4 unidades)',
        slug: 'nigiris-de-sardina-ahumada'
      },
      en: {
        description: '',
        title:
          'Nigiris of smoked sardines, smoked salmon, or red tuna (4 pieces)',
        slug: 'nigiris-of-smoked-sardines'
      },
      de: {
        description: '',
        title:
          'Nigiris aus geräucherten Sardinen, geräuchertem Lachs oder rotem Thunfisch (4 St.)',
        slug: 'nigiris-aus-geräucherten-sardinen'
      },
      nb: {
        description: '',
        title: 'Sardin nigiris røket, røket laks eller rød tunfisk',
        slug: 'sardin-nigiris-roket'
      },
      da: {
        description: '',
        title: 'Sardin nigiris røget, røget laks eller rød tunfisk',
        slug: 'sardin-nigiris-roget'
      },
      sv: {
        description: '',
        title:
          'Nigiris ( rökt sardin eller rökt lax eller röd tonfisk ) (fyra enheter)',
        slug: 'nigiris'
      },
      fr: {
        description: '',
        title:
          'Nigiri à la sardine fumée, au saumon fumé ou au thon rouge (4 unités)',
        slug: 'nigiri-a-la-sardine-fumee'
      },
      nl: {
        description: '',
        title:
          'Gerookte sardine nigiri, gerookte zalm of rode tonijn. (4 stuks)',
        slug: 'gerookte-sardine-nigiri'
      }
    },
    price: { amount: '11.50' },
    number: '4'
  } as Product,
  'item->product->meals->rack-of-lamb-5': {
    id: 'item->product->meals->rack-of-lamb-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->cordero-1',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Carre de cordero a baja temperatura, base de  crema de zanahorias, salsa de su jugo al tomillo y crujiente de jamón',
        slug: 'carre-de-cordero'
      },
      en: {
        description: '',
        title:
          'Low-temperature roasted Rack of Lamb on a bed of creamed Carrots, Thyme Gravy and crispy Ham',
        slug: 'rack-of-lamb'
      },
      de: {
        description: '',
        title:
          'Lammkarree auf niedriger Tempreratur gegart, auf einem Bett aus Möhrencreme, Sauce aus dem eigenen Bratensaft mit Thymian und Knusprigem vom Schinken',
        slug: 'lammkarree-auf-niedriger-tempreratur-gegart'
      },
      nb: {
        description: '',
        title:
          'Lammecarre tilberedt ved lav temperatur servert på en seng av gulrotkrem, sjysaus med timian og sprøstekt skinke',
        slug: 'konfitert-lammecarre'
      },
      da: {
        description: '',
        title:
          'Lammekrone tilberedt ved lav temperatur, bund af gulerodscreme, i egen sovs med timian og ristede skinkestykker',
        slug: 'lammekrone-tilberedt-ved-lav-temperatur'
      },
      sv: {
        description: '',
        title:
          'Lammkarré tillagad i låg temperatur som serveras på en bädd av morotskräm, skysås med timjan och knaprig  skinka',
        slug: 'konfiterad-lammcarre'
      },
      fr: {
        description: '',
        title:
          'Carré d’agneau cuisiné à basse température, purée de carrotes onctueuse, jus de cuisson au thym et croustillant de jambom',
        slug: 'carre-d-agneau'
      },
      nl: {
        description: '',
        title:
          'Lamsschouder bereid op lage temperatuur, basis van wortelcrème, tijmjus en krokante ham',
        slug: 'lamsvlees-en-schapenvlees-bereid-op-lage-temperatuur'
      }
    },
    price: { amount: '22.50' },
    number: '5'
  } as Product,
  'item->product->meals->norwegian-marinated-herring-6': {
    id: 'item->product->meals->norwegian-marinated-herring-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->arenque-1',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->egg-9',
      'allergenic->gluten-3',
      'allergenic->dairy-products-10'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '(disponible entre los meses de octubre a marzo)',
        title: 'Arenque Marinado Noruego',
        slug: 'arenque-marinado-noruego'
      },
      en: {
        description: '(available from October through March)',
        title: 'Norwegian Marinated Herring',
        slug: 'norwegian-marinated-herring'
      },
      de: {
        description: '(erhältlich in den Monaten Oktober bis März)',
        title: 'Marinierter norwegischer Hering',
        slug: 'marinierter-norwegischer-hering'
      },
      nb: {
        description: '(tilgjengelig mellom oktober og mars)',
        title: 'Norsk Marinert sild',
        slug: 'norsk-marinert-sild'
      },
      da: {
        description: '(fås i månederne fra oktober til marts)',
        title: 'Norsk marineret sild',
        slug: 'norsk-marineret-sild'
      },
      sv: {
        description: '(tillgänglig mellan oktober och mars)',
        title: 'Norsk marinerad sill',
        slug: 'norsk-marinerad-sill'
      },
      fr: {
        description: '(disponible d’octobre à mars)',
        title: 'Hareng mariné norvégien',
        slug: 'hareng-marine-norvegien'
      },
      nl: {
        description: '(beschikbaar tussen oktober en maart)',
        title: 'Noorse gemarineerde haring',
        slug: 'noorse-gemarineerde-haring'
      }
    },
    price: { amount: '13.50' },
    number: '6'
  } as Product,
  'item->product->meals->carved-angus-ribeye-7': {
    id: 'item->product->meals->carved-angus-ribeye-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->egg-9', 'allergenic->dairy-products-10'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Trinchado Lomo alto de Angus con torre de papa, escalibada y salsa Bearnesa',
        slug: 'trinchado-lomo-alto'
      },
      en: {
        description: '',
        title:
          'Carved Angus Ribeye with a Tower of Potatoes, Escalivada smoked Vegetables and Béarnaise Sauce',
        slug: 'carved-angus-ribeye'
      },
      de: {
        description: '',
        title:
          'Tranchierter Hochrücken vom Angusrind mit Kartoffelturm, Escalivada und Sauce Bearnaise ',
        slug: 'tranchierter-hochrucken-vom-angusrind'
      },
      nb: {
        description: '',
        title:
          'Transjert høyrygg av Angusfe med potettårn, Grillede og syltede paprika og bearnaise saus',
        slug: 'transjert-hoyrygg-av-angusfe'
      },
      da: {
        description: '',
        title:
          'Udskåret Angus-højreb, kartoffeltårn, ovnbagte grøntsager og bearnaisesovs',
        slug: 'udskaret-angus-hojreb'
      },
      sv: {
        description: '',
        title: 'Hugga länden Angus med béarnaisesås och chips',
        slug: 'hugga-landen-angus'
      },
      fr: {
        description: '',
        title: 'Entrecôte d’Angus à la béarnaise et pommes paille.',
        slug: 'entrecote-d-angus'
      },
      nl: {
        description: '',
        title:
          'Trancherad Angus nötkött högrygg med potatistorn, grillade och syltade paprika och bearnaisesås',
        slug: 'trancherad-angus-notkott-hogrygg'
      }
    },
    price: { amount: '19.50' },
    number: '7'
  } as Product,
  'item->product->meals->seafood-pasta-8': {
    id: 'item->product->meals->seafood-pasta-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->moluscs-13'
    ],
    selectableAllergens: [
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description:
          'A elegir también (Linguini boloñesa -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Pasta fresca de frutos del Mar (Linguini)',
        slug: 'pasta-fresca-de-frutos-del-mar'
      },
      en: {
        description:
          'To choose also (Linguini bolognese -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Seafood Pasta (Linguini)',
        slug: 'seafood-pasta'
      },
      de: {
        description:
          'Auch zur Auswahl (Linguini bolognese -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Pasta mit Meeresfrüchten (Linguini)',
        slug: 'pasta-mit-meeresfruchten'
      },
      nb: {
        description:
          'Å velge også (Linguini bolognese -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Sjømatpasta (Linguini)',
        slug: 'sjomatpasta'
      },
      da: {
        description:
          'At vælge også (Linguini bolognese -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Pasta med havets frugter (Linguini)',
        slug: 'pasta-med-havets-frugter'
      },
      sv: {
        description:
          'Att välja också (Linguini bolognese -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Skaldjurspasta (Linguini)',
        slug: 'skaldjurspasta'
      },
      fr: {
        description:
          'A choisir aussi (Linguini bolognaise -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Pâtes aux fruits de mer (Linguini)',
        slug: 'pates-aux-fruits-de-mer'
      },
      nl: {
        description:
          'Om ook te kiezen (Linguini bolognese -> 8,25€, Linguini carbonara -> 9,90€)',
        title: 'Pasta met zeevruchten (Linguini)',
        slug: 'pasta-met-zeevruchten'
      }
    },
    price: { amount: '13.95' },
    number: '8'
  } as Product,
  'item->product->meals->fresh-fish-of-the-day-and-its-garnish-9': {
    id: 'item->product->meals->fresh-fish-of-the-day-and-its-garnish-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->fish-1', 'allergenic->sulphites-5'],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Pescado fresco del día con su guarnición',
        slug: 'pescado-fresco-del-dia-con-su-guarnicion'
      },
      en: {
        description: '',
        title: 'Fresh Fish of the Day and its Garnish',
        slug: 'fresh-fish-of-the-day-and-its-garnish'
      },
      de: {
        description: '',
        title: 'Frischer Fisch des Tages mit seinen Beilagen',
        slug: 'frischer-fisch-des-tages-mit-seinen-beilagen'
      },
      nb: {
        description: '',
        title: 'Dagens ferske fisk med garnityr',
        slug: 'dagens-ferske-fisk-med-garnityr'
      },
      da: {
        description: '',
        title: 'Dagens friske fisk med garniture',
        slug: 'dagens-friske-fisk-med-garniture'
      },
      sv: {
        description: '',
        title: 'Dagens färska fisk med sin garnering',
        slug: 'dagens-farska-fisk-med-sin-garnering'
      },
      fr: {
        description: '',
        title: 'Poisson pêché du jour et son accompagnement',
        slug: 'poisson-peche-du-jour-et-son-accompagnement'
      },
      nl: {
        description: '',
        title: 'Verse vis van de dag met garnering',
        slug: 'verse-vis-van-de-dag-met-garnering'
      }
    },
    price: { amount: '20.95' },
    number: '9'
  } as Product,
  'item->product->meals->our-fried-squid-with-garnish-10': {
    id: 'item->product->meals->our-fried-squid-with-garnish-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->moluscs-13'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Nuestros calamares fritos con su guarnición',
        slug: 'nuestros-calamares-fritos-con-su-guarnicion'
      },
      en: {
        description: '',
        title: 'Our Fried Squid with Garnish',
        slug: 'our-fried-squid-with-garnish'
      },
      de: {
        description: '',
        title: 'Unsere frittierten Tintenfische mit ihrer Beilage',
        slug: 'unsere-frittierten-tintenfische-mit-ihrer-beilage'
      },
      nb: {
        description: '',
        title: 'Vår stekte akkar med sin garnityr',
        slug: 'var-stekte-akkar-med-sin-garnityr'
      },
      da: {
        description: '',
        title: 'Vores friturestegte blæksprutter med garniture',
        slug: 'vores-friturestegte-blaeksprutter-med-garniture'
      },
      sv: {
        description: '',
        title: 'Vår stekta bläckfisk med sin garnering',
        slug: 'var-stekta-bläckfisk-med-sin-garnering'
      },
      fr: {
        description: '',
        title: 'Calamar frit et son accompagnement',
        slug: 'calamar-frit-et-son-accompagnement'
      },
      nl: {
        description: '',
        title: 'Onze gefrituurde calamares met garnering',
        slug: 'onze-gefrituurde-calamares-met-garnering'
      }
    },
    price: { amount: '16.75' },
    number: '10'
  } as Product,
  'item->product->meals->gratinated-iberian-secret-11': {
    id: 'item->product->meals->gratinated-iberian-secret-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->dairy-products-10'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Secreto ibérico con graten al horno y salsa de pera al pimentón de la vera',
        slug: 'secreto-iberico'
      },
      en: {
        description: '',
        title:
          'Gratinated Iberian Secret Pork Fillet and Pear Sauce with de la Vera Paprika',
        slug: 'gratinated-iberian-secret'
      },
      de: {
        description: '',
        title:
          'Verstecktes Filet vom iberischen Schwein mit Gratin und Birnensauce mit de la Vera Paprika',
        slug: 'verstecktes-filet-vom-iberischen-schwein'
      },
      nb: {
        description: '',
        title:
          'Iberisk ribbetverrstykke (uten ben) med bakt grateng og pæresaus med paprika «de la vera»',
        slug: 'iberisk-ribbetverrstykke'
      },
      da: {
        description: '',
        title:
          'Ovnstegt iberisk secreto (svinebrystkød) med gratin og pæresovs med spansk paprika ',
        slug: 'ovnstegt-iberisk-secreto'
      },
      sv: {
        description: '',
        title:
          'Iberisk revben tvärstycke  med gratäng och päronsås med paprika ”de la vera”',
        slug: 'iberisk-revben-tvarstycke'
      },
      fr: {
        description: '',
        title:
          'Secreto de porc ibérique accompagné d’un gratin de poire au piment doux A.O.C. de la Vera',
        slug: 'secreto-de-porc-iberique'
      },
      nl: {
        description: '',
        title:
          'Iberico Secreto met gratin uit de oven en perensaus met paprikapoeder',
        slug: 'iberico-secreto-met-gratin'
      }
    },
    price: { amount: '20.50' },
    number: '11'
  } as Product,
  'item->product->meals->by-rocio-style-red-curry-masala-12': {
    id: 'item->product->meals->by-rocio-style-red-curry-masala-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->nuts-7',
      'allergenic->soya-12'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->gluten-3',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Mix curry masala rojo estilo By Rocio (pollo y gamba servido con Arroz Basmati)',
        slug: 'mix-curry-masala-rojo-estilo-by-rocio'
      },
      en: {
        description: '',
        title:
          'By Rocio style Red Curry Masala (Chicken and Prawns served with Basmati Rice)',
        slug: 'by-rocio-style-red-curry-masala'
      },
      de: {
        description: '',
        title:
          'Mix vom roten Curry Masala nach Art By Rocio (Hähnchen und Garnelen serviert mit Basmatireis)',
        slug: 'mix-vom-roten-curry-masala-nach-art-by-rocio'
      },
      nb: {
        description: '',
        title:
          'By Rocios Rød masala curry mix (kylling og reker servert med Basmati ris)',
        slug: 'by-rocios-rod-masala-curry-mix'
      },
      da: {
        description: '',
        title:
          'Blandet rød masala karryret á la By Rocio (kylling og rejer serveret med Basmati-ris)',
        slug: 'blandet-rod-masala-karryret-a-la-by-rocio'
      },
      sv: {
        description: '',
        title:
          'By Rocios stil röd masala curry mix (kyckling och räkor serveras med Basmati ris)',
        slug: 'by-rocios-stil-röd-masala-curry-mix'
      },
      fr: {
        description: '',
        title:
          'Mix curry masala rouge By Rocio (poulet et crevettes servis avec du riz basmati)',
        slug: 'mix-curry-masala-rouge-by-rocio'
      },
      nl: {
        description: '',
        title:
          'Rode curry Masala mix By Rocio (kip en gamba’s geserveerd met Basmatirijst)',
        slug: 'rode-curry-masala-mix-by-rocio'
      }
    },
    price: { amount: '17.90' },
    number: '12'
  } as Product,
  'item->product->meals->fish-and-crab-balls-13': {
    id: 'item->product->meals->fish-and-crab-balls-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3'
    ],
    selectableAllergens: [
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Albondigas "chilicrab" de pescado y cangrejo servido con arroz basmati',
        slug: 'albondigas-de-pescado-y-cangrejo'
      },
      en: {
        description: '',
        title: 'Chilicrab Fish and Crab Balls served with Basmati Rice',
        slug: 'fish-and-crab-balls'
      },
      de: {
        description: '',
        title:
          '"Chilicrab-Bällchen" vom Fisch und Krebs serviert mit Basmati-Reis',
        slug: 'chilicrab-ballchen-vom-fisch-und-krebs'
      },
      nb: {
        description: '',
        title:
          'Boller av "chilicrab" tilberedt av fisk og krabbe, servert med basmatiris',
        slug: 'boller-av-tilberedt-av-fisk-og-krabbe'
      },
      da: {
        description: '',
        title: '"Chilicrab"-fiske- og krabbekødsfrikadeller med basmati-ris',
        slug: 'fiske-og-krabbekodsfrikadeller'
      },
      sv: {
        description: '',
        title: '"Chilicrab"-fisk- och krabbköttsfrikadeller med basmati-ris',
        slug: ''
      },
      fr: {
        description: '',
        title: 'fisk-och-krabbkottsfrikadeller',
        slug: ''
      },
      nl: {
        description: '',
        title:
          'Boulettes "chilicrab" de crabe et de poisson servies avec du riz basmati',
        slug: 'boulettes-de-crabe-et-de-poisson'
      }
    },
    price: { amount: '12.00' },
    number: '13'
  } as Product,

  //// desserts->
  'item->product->desserts->our-creamy-cheesecake-1': {
    id: 'item->product->desserts->our-creamy-cheesecake-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Nuestra tarta de queso cremosa al horno',
        slug: 'tarta-de-queso'
      },
      en: {
        description: '',
        title: 'Our Creamy Baked Cheesecake',
        slug: 'our-creamy-cheesecake'
      },
      de: {
        description: '',
        title: 'Unsere cremige Käsetorte aus dem Backofen',
        slug: 'unser-cremiger-kasekuchen'
      },
      nb: {
        description: '',
        title: 'Vår kremete bakte ostekake',
        slug: 'var-egen-ostekake'
      },
      da: {
        description: '',
        title: 'Vår krämiga bakade cheesecake',
        slug: 'vores egen ostekage'
      },
      sv: {
        description: '',
        title: 'Bakad Artescheesecake',
        slug: 'bakad-artescheesecake'
      },
      fr: {
        description: '',
        title: 'Notre tarta de queso (cheese cake), crémeux et cuit au four',
        slug: 'tarte-cremeuse-au-fromage'
      },
      nl: {
        description: '',
        title: 'Onze romige cheesecake uit de oven',
        slug: 'onze-romige-cheesecake-uit-de-oven'
      }
    },
    price: { amount: '7.50' },
    number: '1'
  } as Product,
  'item->product->desserts->homemade-sweets-from-tejeda-2': {
    id: 'item->product->desserts->homemade-sweets-from-tejeda-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Selección de dulces Artesanos Tejeda',
        slug: 'dulces-artesanos-tejeda'
      },
      en: {
        description: '',
        title: 'Selection of homemade sweets from Tejeda',
        slug: 'homemade-sweets-from-tejeda'
      },
      de: {
        description: '',
        title: 'Auswahl an hausgemachten Süßspeisen aus Tejeda',
        slug: 'hausgemachten-susspeisen-aus-tejeda'
      },
      nb: {
        description: '',
        title: 'Velg fra forskjellige hjemmelagde søtsaker fra tejeda',
        slug: 'forskjellige-hjemmelagde-sotsaker-fra-tejeda'
      },
      da: {
        description: '',
        title: 'Vælg fra forskjellige hjemmelavede sødesager fra tejeda',
        slug: 'forskjellige-hjemmelavede-sodesager-fra-tejeda'
      },
      sv: {
        description: '',
        title: 'Varierande handgjorda kakor från Tejeda',
        slug: 'handgjorda-kakor-fran-tejeda'
      },
      fr: {
        description: '',
        title: 'Assortiment de pâtisseries artisanales de Tejeda',
        slug: 'patisseries-artisanales-de-tejeda'
      },
      nl: {
        description: '',
        title: 'Selectie van zoetigheden uit Tejeda (Gran Canaria)',
        slug: 'selectie-van-zoetigheden-uit-tejeda'
      }
    },
    price: { amount: '6.50' },
    number: '2'
  } as Product,
  'item->product->desserts->trompe-l-oeil-ferrero-rocher-3': {
    id: 'item->product->desserts->trompe-l-oeil-ferrero-rocher-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->peanuts-6',
      'allergenic->nuts-7'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Trampantojo de Ferrero Rocher',
        slug: 'trampantojo-de-ferrero-rocher'
      },
      en: {
        description: ``,
        title: `Ferrero Rocher Trompe l'oeil `,
        slug: 'trompe-l-oeil-ferrero-rocher'
      },
      de: {
        description: ``,
        title: `Trompe-l’œil vom Ferrero Rocher`,
        slug: 'trompe-l-oeil-ferrero-rocher'
      },
      nb: {
        description: '',
        title: 'Optisk ilusjon av Ferrero Rocher',
        slug: 'fristelser-fra-ferrero-rocher'
      },
      da: {
        description: '',
        title: 'Trompe-l´æil Ferrero Rocher',
        slug: 'fristelser-fra-ferrero-rocher'
      },
      sv: {
        description: ``,
        title: `Optisk illusion av Ferrero Rocher`,
        slug: 'trompe-l-oeil-ferrero-rocher'
      },
      fr: {
        description: ``,
        title: `Trompe l’œil de Ferrero Rocher`,
        slug: 'trompe-l-oeil-ferrero-rocher'
      },
      nl: {
        description: '',
        title:
          'Trompe l’oeil van Ferrero Rocher (Dessert dat op het eerste zicht lijkt op een groentestoofpot)',
        slug: 'trompe-l-oeil-van-ferrero-rocher'
      }
    },
    price: { amount: '6.95' },
    number: '3'
  } as Product,
  'item->product->desserts->banana-ice-cream-4': {
    id: 'item->product->desserts->banana-ice-cream-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->nuts-7'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Helado de Plátano, mini suspiros y bienmesabe',
        slug: 'helado-de-platano'
      },
      en: {
        description: '',
        title:
          'Banana Ice-cream, mini Sighs (Baked Meringue) and Bienmesabe Almond Paste',
        slug: 'banana-ice-cream'
      },
      de: {
        description: '',
        title: 'Bananeneis, Miniwindbäckerei und Bienmesabe-Mandelcreme',
        slug: 'bananeneis'
      },
      nb: {
        description: '',
        title: 'Bananis, mini marengs og bienmesabe (kanarisk mandelsaus)',
        slug: 'bananis'
      },
      da: {
        description: '',
        title: 'Bananis, små marengskys og bienmesabe-mandelkage',
        slug: 'bananis'
      },
      sv: {
        description: '',
        title: 'Bananglass, mini maräng och bienmesabe (kanarisk mandelsås)',
        slug: 'bananglass'
      },
      fr: {
        description: '',
        title:
          'Glace à la banane, petites meringues et bienmesabe (dessert typique des îles Canaries)',
        slug: 'glace-a-la-banane'
      },
      nl: {
        description: '',
        title:
          'Bananenijs, minischuimpjes en bienmesabe (Canarische amandelsaus)',
        slug: 'bananenijs'
      }
    },
    price: { amount: '6.50' },
    number: '4'
  } as Product,
  'item->product->desserts->homemade-ice-cream-5': {
    id: 'item->product->desserts->homemade-ice-cream-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->dairy-products-10'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Helado Artesano Italiano',
        slug: 'helados-artesanos'
      },
      en: {
        description: '',
        title: 'Italian Artisan Ice-cream',
        slug: 'homemade-ice-cream'
      },
      de: {
        description: '',
        title: 'Hausgemachtes italienisches Eis ',
        slug: 'hausgemachtes-eis'
      },
      nb: {
        description: '',
        title: 'Italiensk hjemmelaget is',
        slug: 'artisan-ice-cream'
      },
      da: {
        description: '',
        title: 'Hjemmelavet is',
        slug: 'artisan-ice-cream'
      },
      sv: {
        description: '',
        title: 'Italiensk hantverksglass ',
        slug: 'handgjord-glass'
      },
      fr: {
        description: '',
        title: 'Crème glacée artisanale italienne',
        slug: 'glace-artisanale'
      },
      nl: {
        description: '',
        title: 'Ambachtelijk Italiaans ijs',
        slug: 'ambachtelijk-italiaans-ijs'
      }
    },
    price: { amount: '5.50' },
    number: '5'
  } as Product,
  'item->product->desserts->our-chef-s-suggested-sweet-6': {
    id: 'item->product->desserts->our-chef-s-suggested-sweet-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Sugerencia dulce del chef',
        slug: 'sugerencia-dulce-del-chef'
      },
      en: {
        description: '',
        title: `Our Chef's suggested Sweet`,
        slug: 'our-chef-s-suggested-sweet'
      },
      de: {
        description: '',
        title: 'Süße Empfehlung des Küchenchefs',
        slug: 'sube-empfehlung-des-küchenchefs'
      },
      nb: {
        description: '',
        title: 'Søtt forslag fra kokken',
        slug: 'sott-forslag-fra-kokken'
      },
      da: {
        description: '',
        title: 'Chefkokkens dessertforslag',
        slug: 'chefkokkens-dessertforslag'
      },
      sv: {
        description: '',
        title: 'Sött förslag från kocken',
        slug: 'sott-förslag-från-kocken'
      },
      fr: {
        description: '',
        title: 'Suggestion sucrée du chef',
        slug: 'suggestion-sucrée-du-chef'
      },
      nl: {
        description: '',
        title: 'Zoete suggestie van de chef',
        slug: 'zoete-suggestie-van-de-chef'
      }
    },
    price: { amount: '7.00' },
    number: '6'
  } as Product,
  'item->product->desserts->cold-berry-soup-with-yogurt-7': {
    id: 'item->product->desserts->cold-berry-soup-with-yogurt-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->dairy-products-10'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Sopa fría de frutos del bosque con yogurt, servido con frutos rojos y chocolate blanco.',
        slug: 'sopa-fria-de-frutos-del-bosque-con-yogurt'
      },
      en: {
        description: '',
        title:
          'Cold Berry Soup with Yogurt, served with Red Fruit and White Chocolate',
        slug: 'cold-berry-soup-with-yogurt'
      },
      de: {
        description: '',
        title:
          'Kalte Waldfrüchtesuppe mit Joghurt, serviert mit roten Früchten und weißer Schokolade',
        slug: 'kalte-waldfrüchtesuppe-mit-joghurt'
      },
      nb: {
        description: '',
        title:
          'Kald bærsuppe med yoghurt, servert med røde bær og hvit sjokolade.',
        slug: 'kald-baersuppe-med-yoghurt'
      },
      da: {
        description: '',
        title:
          'Kald bærsuppe med yoghurt, servert med røde bær og hvit sjokolade.',
        slug: 'kald-baersuppe-med-yoghurt'
      },
      sv: {
        description: '',
        title:
          'Kall bärsoppa med yoghurt, serverad med röda bär och vit choklad.',
        slug: 'kall-barsoppa-med-yoghurt'
      },
      fr: {
        description: '',
        title:
          'Soupe froide aux fruits des bois et yaourt, accompagnée de fruits rouges et chocolat blanc',
        slug: 'soupe-froide-aux-fruits-des-bois-et-yaourt'
      },
      nl: {
        description: '',
        title:
          'Koude bessensoep met yoghurt, geserveerd met rode vruchten en witte chocolade.',
        slug: 'koude-bessensoep-met-yoghurt'
      }
    },
    price: { amount: '7.00' },
    number: '7'
  } as Product,

  //// meals->our-chef-s-suggestions->
  'item->product->meals->our-chef-s-suggestions->mixed-paella-1': {
    id: 'item->product->meals->our-chef-s-suggestions->mixed-paella-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->moluscs-13',
      'allergenic->crustaceans-2'
    ],
    selectableAllergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '* Precio por persona',
        title: 'Paella Mixta (mínimo para dos personas)',
        slug: 'paella-mixta'
      },
      en: {
        description: '* Price per person',
        title: 'Mixed Paella (for minimum two persons)',
        slug: 'mixed-paella'
      },
      de: {
        description: '* Preis pro person',
        title: 'Gemischte Paella (mind.für zwei personen)',
        slug: 'gemischte-paella'
      },
      nb: {
        description: '* Pris per person',
        title: 'Blandet Paella (min. for to personer)',
        slug: 'blandet-paella'
      },
      da: {
        description: '* Pris pr person',
        title: 'Blandet Paella (mindst til to personer)',
        slug: 'blandet-paella'
      },
      sv: {
        description: '* Pris per person',
        title: 'Blandad Paella (minst för två personer)',
        slug: 'blandad-paella'
      },
      fr: {
        description: '* Prix par personne',
        title: 'Paella Mixte (min. pour deux personnes) ',
        slug: 'paella-mixte'
      },
      nl: {
        description: '* Prijs per persoon',
        title: 'Paella Mixta (min.voor twee personen)',
        slug: 'paella-mixta'
      }
    },
    price: { amount: '13.50' },
    number: '1'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->fish-and-shellfish-paella-2': {
    id:
      'item->product->meals->our-chef-s-suggestions->fish-and-shellfish-paella-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->moluscs-13',
      'allergenic->crustaceans-2'
    ],
    selectableAllergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '* Precio por persona',
        title: 'Paella de Pescado y Marisco (Mínimo para dos personas)',
        slug: 'paella-de-pescado-y-marisco'
      },
      en: {
        description: '* Price per person',
        title: 'Fish and Shellfish Paella (for minimum two persons)',
        slug: 'fish-and-shellfish-paella'
      },
      de: {
        description: '* Preis pro person',
        title: 'Fisch-und Meeresfrüchtepaella (mind für zwei personen)',
        slug: 'fisch-und-meeresfrüchtepaella'
      },
      nb: {
        description: '* Pris per person',
        title: 'Fisk og Sjømat Paella (min. for to personer)',
        slug: 'fisk-og-sjomat-paella'
      },
      da: {
        description: '* Pris pr person',
        title: 'Paella med Fisk og Skaldyr (mindst til to personer)',
        slug: 'paella-med-fisk-og-skaldyr'
      },
      sv: {
        description: '* Pris per person',
        title: 'Fisk och Skaldjur Paella (minst för två personer)',
        slug: 'fisk-och-skaldjur-paella'
      },
      fr: {
        description: '* Prix par personne',
        title: 'Paella au Poisson et Fruits de Mer (min. pour deux personnes) ',
        slug: 'paella-au-poisson-et-fruits-de-mer'
      },
      nl: {
        description: '* Prijs per persoon',
        title: 'Paella met Vis en Zeevruchten (min. voor twee personen)',
        slug: 'paella-met-vis-en-zeevruchten'
      }
    },
    price: { amount: '16.90' },
    number: '2'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->meat-paella-with-truffle-sauce-3': {
    id:
      'item->product->meals->-our-chef-s-suggestions>meat-paella-with-truffle-sauce-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '* Precio por persona',
        title: 'Paella Carne con Salsa de Trufa (Mínimo para dos personas)',
        slug: 'paella-carne-con-salsa-de-trufa'
      },
      en: {
        description: '* Price per person',
        title: 'Meat Paella with Truffle Sauce (for minimum two persons)',
        slug: 'meat-paella-with-truffle-sauce'
      },
      de: {
        description: '* Preis pro person',
        title: 'Fleischpaella mit Trüffelsauce (mind für zwei personen)',
        slug: 'fleischpaella-mit-truffelsauce'
      },
      nb: {
        description: '* Pris per person',
        title: 'Kjøttpaella med Trøffelsaus (min. for to personer)',
        slug: 'kjottpaella-med-troffelsaus'
      },
      da: {
        description: '* Pris pr person',
        title: 'Paella med Kød og Trøffelsovs (mindst til to personer)',
        slug: 'paella-med-kod-og-trøffelsovs'
      },
      sv: {
        description: '* Pris per person',
        title: 'Kött Paella med Tryffelsås (Minst för två personer)',
        slug: 'kott-paella-med-tryffelsas'
      },
      fr: {
        description: '* Prix par personne',
        title:
          'Paella à la Viande et Sauce à la Truffe (min. pour deux personnes)',
        slug: 'paella-a-la-viande-et-sauce-a-la-truffe'
      },
      nl: {
        description: '* Prijs per persoon',
        title: 'Paella met Vlees en Truffelsaus (min. voor twee personen)',
        slug: 'paella-met-vlees-en-truffelsaus'
      }
    },
    allergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    selectableAllergens: [
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11'
    ],
    price: { amount: '16.90' },
    number: '3'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tartar-4': {
    id:
      'item->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tartar-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->tuna-tartar-1',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title:
          'Tartar de atún Rojo Fuentes (Según temporada) sobre pan de brioche "rock and roll) y mayonesa de wasabi',
        slug: 'tartar-de-atun-rojo'
      },
      en: {
        description: '',
        title:
          'Mogán Red Tuna Tartar (when in season) on a "Rock & Roll" Brioche and Wasabi Mayonnaise',
        slug: 'red-tuna-tartar'
      },
      de: {
        description: '',
        title:
          'Tartar vom Roten Thunfisch (Mogán, je nach saison) auf Briochebrot "ROCK AND ROLL" und Wasabi-Mayonnaise',
        slug: 'tartar-vom-roten-thunfisch'
      },
      nb: {
        description: '',
        title:
          'Tartar av Rød Tunfisk fra Mogán (avhengig av sesong) servert på briochebrød "ROCK AND ROLL" og wasabimajones',
        slug: 'rod-tunfisktartar'
      },
      da: {
        description: '',
        title:
          'Tartar med Rød Tun fra Mogán (alt efter sæson) på biroche-brød "ROCK AND ROLL" og wasabi-mayonaisse',
        slug: 'tartar-med-rod-tun'
      },
      sv: {
        description: '',
        title:
          'Tartar av Röd Tonfisk Från Mogán (Beroende på Säsong) serveras på brioche-bröd "ROCK AND ROLL" och wasabimajonnäs',
        slug: 'rod-tonfisktartar'
      },
      fr: {
        description: '',
        title:
          'Tartare de Thon Rouge (Mogán, en saison) sur pain brioché rock and roll et mayonnaise au wasabi',
        slug: 'tartare-de-thon-rouge'
      },
      nl: {
        description: '',
        title:
          'Rodetonijntartaar van Mogán (seizoensgebonden) op briochebrood "ROCK AND ROLL" en wasabimayonaise',
        slug: 'rodetonijntartaar'
      }
    },
    allergens: [
      'allergenic->fish-1',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->soya-12'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '18.00' },
    number: '4'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->angus-steak-tartar-5': {
    id: 'item->product->meals->our-chef-s-suggestions->angus-steak-tartar-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Steak Tartar de Angus',
        slug: 'steak-tartar-de-angus'
      },
      en: {
        description: '',
        title: 'Angus Steak Tartar',
        slug: 'angus-steak-tartar'
      },
      de: {
        description: '',
        title: 'Steak Tartar vom Angus',
        slug: 'steak-tartar-vom-angus'
      },
      nb: {
        description: '',
        title: 'Biff Tartar av Angusfe',
        slug: 'biff-tartar-av-angusfe'
      },
      da: {
        description: '',
        title: 'Tartar med Angusoksekød',
        slug: 'tartar-med-angusoksekod'
      },
      sv: {
        description: '',
        title: 'Angus Nötkött Råbiff',
        slug: 'angus-notkott-rabiff'
      },
      fr: {
        description: '',
        title: 'Steak Tartare de Bœuf Angus',
        slug: 'steak-tartare-de-boeuf-angus'
      },
      nl: {
        description: '',
        title: 'Angus Steaktartaar',
        slug: 'angus-steaktartaar'
      }
    },
    allergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sesame-8',
      'allergenic->soya-12'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '18.00' },
    number: '5'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->betanzos-t-bone-cutlet-6': {
    id:
      'item->product->meals->our-chef-s-suggestions->betanzos-t-bone-cutlet-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->chuleton-1',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Chuletón de Betanzos (300 gr)',
        slug: 'chuleton-de-betanzos'
      },
      en: {
        description: '',
        title: 'Betanzos T-Bone Cutlet (300 gr)',
        slug: 'betanzos-t-bone-cutlet'
      },
      de: {
        description: '',
        title: 'T-Bone-Steak von Betanzos (300 g)',
        slug: 't-bone-steak-von-betanzos'
      },
      nb: {
        description: '',
        title: 'Betanzosfe Ribeye (300 gr)',
        slug: 'betanzosfe-ribeye'
      },
      da: {
        description: '',
        title: 'Entrecote fra Betanzo (Galicien, 300 gr)',
        slug: 'entrecote fra betanzo'
      },
      sv: {
        description: '',
        title: 'Betanzos Nötkött Ribeye (300 gr) ',
        slug: 'betanzos-notkott-ribeye'
      },
      fr: {
        description: '',
        title: 'Côte de Bœuf de Betanzos (300 gr) ',
        slug: 'cote-de-boeuf-de-betanzos'
      },
      nl: {
        description: '',
        title: 'Ribeye uit Betanzos (Spanje, 300 gr)',
        slug: 'ribeye-uit-betanzos'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '25.00' },
    number: '6'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tataki-7': {
    id:
      'item->product->meals->our-chef-s-suggestions->fuentes-red-tuna-tataki-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Tataki de Atún Rojo Fuentes (Según temporada)',
        slug: 'tataki-de-atun-rojo'
      },
      en: {
        description: '',
        title: 'Red Tuna Tataki (when in season)',
        slug: 'red-tuna-tataki'
      },
      de: {
        description: '',
        title: 'Tataki vom Roten Thunfisch (je nach saison)',
        slug: 'tataki-vom-roten-thunfisch'
      },
      nb: {
        description: '',
        title: 'Tataki av Rød Tunfisk (avhengig av sesong)',
        slug: 'tataki-av-rod-tunfisk'
      },
      da: {
        description: '',
        title: 'Tataki med Rød Tun (Alt efter sæsonen)',
        slug: 'tataki-med-rod-tun'
      },
      sv: {
        description: '',
        title: 'Tataki av Röd Tonfisk (Enligt säsong)',
        slug: 'tataki-av-rod-tonfisk'
      },
      fr: {
        description: '',
        title: 'Tataki de Thon Rouge (en saison)',
        slug: 'tataki-de-thon-rouge'
      },
      nl: {
        description: '',
        title: 'Rodetonijntataki (seizoensgebonden)',
        slug: 'rodetonijntataki'
      }
    },
    allergens: [
      'allergenic->fish-1',
      'allergenic->sesame-8',
      'allergenic->soya-12'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '22.50' },
    number: '7'
  } as Product,
  'item->product->meals->our-chef-s-suggestions->aged-beef-steak-tartar-8': {
    id:
      'item->product->meals->our-chef-s-suggestions->aged-beef-steak-tartar-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Steak Tartar de carne madurada',
        slug: 'steak-tartar-de-carne-madurada'
      },
      en: {
        description: '',
        title: 'Aged-Beef Steak Tartar',
        slug: 'aged-beef-steak-tartar'
      },
      de: {
        description: '',
        title: 'Steak Tartar vom gereiften Fleisch',
        slug: 'steak-tartar-vom-gereiften-fleisch'
      },
      nb: {
        description: '',
        title: 'Biff Tartar av Mørnet Kjøtt',
        slug: 'biff-tartar-av-mornet-kjott'
      },
      da: {
        description: '',
        title: 'Tartar-Steak med modnet kød',
        slug: 'tartar-steak-med-modnet-kød'
      },
      sv: {
        description: '',
        title: 'Biff-Tartar av mognadslagrat kött',
        slug: 'biff-tartar-av-mognadslagrat-kott'
      },
      fr: {
        description: '',
        title: 'Steak Tartare de viande longue maturation',
        slug: 'steak-tartare-de-viande-longue-maturation'
      },
      nl: {
        description: '',
        title: 'Steaktartaar van Gerijpt Vlees',
        slug: 'steaktartaar-van-gerijpt-vlees'
      }
    },
    allergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sesame-8',
      'allergenic->soya-12'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '20.50' },
    number: '8'
  } as Product,

  //// meals->breakfasts->
  'item->product->meals->breakfasts->toast-with-tomato-puree-and-serrano-cured-ham-1': {
    id:
      'item->product->meals->breakfasts->toast-with-tomato-puree-and-serrano-cured-ham-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Tostada con Tumaca y Jamón',
        slug: 'tostada-con-tumaca-y-jamon'
      },
      en: {
        description: '',
        title: 'Toast with Tomato puree and Serrano Cured Ham',
        slug: 'toast-with-tomato-puree-and-serrano-cured-ham'
      },
      de: {
        description: '',
        title: 'Röstbrot mit Tomate und Rohschinken',
        slug: 'rostbrot-mit-tomate-und-rohschinken'
      },
      nb: {
        description: '',
        title: 'Toast med tomatpurè og serranoskinke',
        slug: 'toast-med-tomatpurè-og-serranoskinke'
      },
      da: {
        description: '',
        title: 'Toast med tomatpure og skinke',
        slug: 'toast-med-tomatpure-og-skinke'
      },
      sv: {
        description: '',
        title: 'Toast med tomatpuré och serranoskinke',
        slug: 'toast-med-tomatpure-och-serranoskinke'
      },
      fr: {
        description: '',
        title: 'Pain Grillé avec tomate purée et jambon cru',
        slug: 'pain-grille-avec-tomate-puree-et-jambon-cru'
      },
      nl: {
        description: '',
        title: 'Toast met tomatenpuree en serranoham',
        slug: 'toast-met-tomatenpuree-en-serranoham'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '6.00' },
    number: '1'
  } as Product,
  'item->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-guacamole-and-cherry-tomatoes-2': {
    id:
      'item->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-guacamole-and-cherry-tomatoes-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Tostada con queso Philadelfia, guacamole y cherrys',
        slug: 'tostada-con-queso-philadelfia-guacamole-y-cherrys'
      },
      en: {
        description: '',
        title:
          'Toast with Philadelphia Cream Cheese, Guacamole and Cherry Tomatoes',
        slug:
          'toast-with-philadelphia-cream-cheese-guacamole-and-cherry-tomatoes'
      },
      de: {
        description: '',
        title: 'Toast mit Philadelphia Cremekäse, Guacamole, Cherrytomate',
        slug: 'toast-mit-philadelphia-cremekase-guacamole-cherrytomate'
      },
      nb: {
        description: '',
        title: 'Toast med Philadelphiaost, Guacamole og cherrytomate',
        slug: 'toast-med-philadelphiaost-guacamole-og-cherrytomate'
      },
      da: {
        description: '',
        title: 'Toast med Philadelphiaost, Guacamole og kirsebaertomat',
        slug: 'toast-med-philadelphiaost-guacamole-og-kirsebaertomat'
      },
      sv: {
        description: '',
        title: 'Toast med Philadelphiaost, Guacamole och cherrytomate',
        slug: 'toast-med-philadelphiaost-guacamole-och-cherrytomate'
      },
      fr: {
        description: '',
        title:
          'Pain Grillé au fromage Philadelphia, Guacamole et tomates cerises',
        slug: 'pain-grille-au-fromage-philadelphia-guacamole-et-tomates-cerises'
      },
      nl: {
        description: '',
        title: 'Toast met Philadelphia kaas, Guacamole en cherry-tomaten',
        slug: 'toast-met-philadelphia-kaas-guacamole-en-cherry-tomaten'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '6.50' },
    number: '2'
  } as Product,
  'item->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-rocket-lettuce-and-smoked-salmon-3': {
    id:
      'item->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-rocket-lettuce-and-smoked-salmon-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->dummy->default-gallery-',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Tostada con queso philadelfia , rúcula y salmón',
        slug: 'tostada-con-queso-philadelfia-rucula-y-salmon'
      },
      en: {
        description: '',
        title:
          'Toast with Philadelphia Cream Cheese, Rocket Lettuce and Smoked Salmon',
        slug:
          'toast-with-philadelphia-cream-cheese-rocket-lettuce-and-smoked-salmon'
      },
      de: {
        description: '',
        title: 'Toast mit Philadelphia Cremekäse, Arugula und Lachs',
        slug: 'toast-mit-philadelphia-cremekase-arugula-und-lachs'
      },
      nb: {
        description: '',
        title: 'Toast med Philadelphiaost, arugula og laks',
        slug: 'toast-med-philadelphiaost-arugula-og-laks'
      },
      da: {
        description: '',
        title: 'Toast med Philadelphiaost, salatsennep og laks',
        slug: 'toast-med-philadelphiaost-salatsennep-og-laks'
      },
      sv: {
        description: '',
        title: 'Toast med Philadelphiaost, arugula och lax',
        slug: 'toast-med-philadelphiaost-arugula-och-lax'
      },
      fr: {
        description: '',
        title: 'Pain Grillé au fromage Philadelphia, roquette et saumon fumé',
        slug: 'pain-grille-au-fromage-philadelphia-roquette-et-saumon-fume'
      },
      nl: {
        description: '',
        title: 'Toast met Philadelphia kaas, rucola en zalm',
        slug: 'toast-met-philadelphia-kaas-rucola-en-zalm'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '7.50' },
    number: '3'
  } as Product,
  'item->product->meals->breakfasts->yoghurt-with-muesli-fresh-fruit-and-honey-4': {
    id:
      'item->product->meals->breakfasts->yoghurt-with-muesli-fresh-fruit-and-honey-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Yoghurt con muesli, fruta fresca y miel',
        slug: 'yoghurt-con-muesli-fruta-fresca-y-miel'
      },
      en: {
        description: '',
        title: 'Yoghurt with Muesli, fresh Fruit and Honey',
        slug: 'yoghurt-with-muesli-fresh-fruit-and-honey'
      },
      de: {
        description: '',
        title: 'Joghurt mit Müsli, frischen Früchten und Honig',
        slug: 'joghurt-mit-musli-frischen-fruchten-und-honig'
      },
      nb: {
        description: '',
        title: 'Yoghurt med müsli, fersk frukt og honning',
        slug: 'yoghurt-med-musli-fersk-frukt-og-honning'
      },
      da: {
        description: '',
        title: 'Yoghurt med müsli, frisk frugt og honning',
        slug: 'yoghurt-med-musli-frisk-frugt-og-honning'
      },
      sv: {
        description: '',
        title: 'Yoghurt med müsli, färsk frukt och honung',
        slug: 'yoghurt-med-musli-farsk-frukt-och-honung'
      },
      fr: {
        description: '',
        title: 'Yaourt au muesli, fruits frais et miel',
        slug: 'yaourt-au-muesli-fruits-frais-et-miel'
      },
      nl: {
        description: '',
        title: 'Yogurt met muesli, vers fruit en honing',
        slug: 'yogurt-met-muesli-vers-fruit-en-honing'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '4,95' },
    number: '4'
  } as Product,
  'item->product->meals->breakfasts->scrambled-eggs-with-ham-5': {
    id: 'item->product->meals->breakfasts->scrambled-eggs-with-ham-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '',
        title: 'Huevos revueltos con jamón',
        slug: 'huevos-revueltos-con-jamon'
      },
      en: {
        description: '',
        title: 'Scrambled eggs with Ham',
        slug: 'scrambled-eggs-with-ham'
      },
      de: {
        description: '',
        title: 'Rühreier mit Schinken',
        slug: 'ruhreier-mit-schinken'
      },
      nb: {
        description: '',
        title: 'Eggrøre med skinke',
        slug: 'eggrore-med-skinke'
      },
      da: {
        description: '',
        title: 'Røræg med skinke',
        slug: 'roraeg-med-skinke'
      },
      sv: {
        description: '',
        title: 'Äggröra med skinka',
        slug: 'aggrora-med-skinka'
      },
      fr: {
        description: '',
        title: 'Oeufs brouillés au jambon',
        slug: 'oeufs-brouilles-au-jambon'
      },
      nl: {
        description: '',
        title: 'Roerei met ham',
        slug: 'roerei-met-ham'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '8.50' },
    number: '5'
  } as Product,
  'item->product->meals->breakfasts->english-breakfast-6': {
    id: 'item->product->meals->breakfasts->english-breakfast-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    displayInfo: {
      es: {
        description: '(huevo frito, judias, bacon y salchicha y tomate)',
        title: 'Desayuno Inglés',
        slug: 'desayuno-ingles'
      },
      en: {
        description: '(Fried Egg, Beans, Bacon, Sausage and Tomato)',
        title: 'English Breakfast',
        slug: 'english-breakfast'
      },
      de: {
        description: '(Spiegeleier, Bohnen, Speck, Würst und Tomate)',
        title: 'Englisches Frühstück',
        slug: 'englisches-fruhstuck'
      },
      nb: {
        description:
          '(stekte egg, bønner i tomatsaus med bacon, pølse og tomat)',
        title: 'Engelsk frokost',
        slug: 'engelsk-frokost'
      },
      da: {
        description: '(spejlæg, bønnerne, bacon, pølse og tomat)',
        title: 'Engelsk morgenmad',
        slug: 'engelsk-morgenmad'
      },
      sv: {
        description:
          '(stekt ägg, vita bönor i tomatsås, bacon, korv och tomat)',
        title: 'Engelsk Frukost',
        slug: 'engelsk-frukost'
      },
      fr: {
        description:
          '(oeuf au plats, Haricots à la tomate, bacon et saucisse et tomate)',
        title: 'Petit déjeuner Anglais',
        slug: 'petit-dejeuner-anglais'
      },
      nl: {
        description:
          '(gebakken ei, witte bonen in tomatensaus, spek, worstjes en tomaat)',
        title: 'Engels ontbijt',
        slug: 'engels-ontbijt'
      }
    },
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    price: { amount: '8.50' },
    number: '6'
  } as Product,

  ///// meals->sandwich->
  'item->product->meals->artisan-loaf-sandwich-with-squid-1': {
    id: 'item->product->meals->artisan-loaf-sandwich-with-squid-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->egg-9',
      'allergenic->moluscs-13'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Bocata artesano de calamares con mayonesa del chef y brotes.',
        slug: 'bocata-artesano-de-calamares'
      },
      en: {
        description: '',
        title: `Artisan Loaf Sandwich with Squid and the Chef's Mayonnaise and Sprouts`,
        slug: 'artisan-loaf-sandwich-with-squid'
      },
      de: {
        description: '',
        title:
          'Handgemachtes Brötchen mit Tintenfisch, Mayonnaise des Küchenchefs und Sprossen',
        slug: 'hausgemachtes-brotchen-mit-tintenfisch'
      },
      nb: {
        description: '',
        title: 'Blekksprutsandwich med kokkens majones og spirer',
        slug: 'blekksprutsandwich-med-kokkens'
      },
      da: {
        description: '',
        title:
          'Hjemmelavet sandwich med blæksprutter og chefkokkens mayonnaise og nye grøntsagsskud',
        slug: 'hjemmelavet-sandwich-med-blaeksprutter'
      },
      sv: {
        description: '',
        title: 'Hantverkarens smörgås med kockens majonnäs och groddar',
        slug: 'hantverkarens-smorgas-med-kockens'
      },
      fr: {
        description: '',
        title:
          'Sandwich artisanal aux calamars avec mayonnaise du chef et jeunes pousses',
        slug: 'sandwich-artisanal-aux-calamars'
      },
      nl: {
        description: '',
        title:
          'Ambachtelijk broodje met calamares, mayonaise van de chef en kiemgroenten',
        slug: 'ambachtelijk-broodje-met-calamares'
      }
    },
    price: { amount: '9.50' },
    number: '1'
  } as Product,
  'item->product->meals->homemade-bread-with-black-pork-in-lard-2': {
    id: 'item->product->meals->homemade-bread-with-black-pork-in-lard-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    selectableAllergens: [
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Bocata artesano de cochino negro en manteca, tartufado, y queso canario rallado',
        slug: 'bocata-artesano-de-cochino-negro-en-manteca'
      },
      en: {
        description: '',
        title:
          'Artisan Loaf Sandwich of larded, truffelled Black Pork and grated Canarian (Goat) Cheese',
        slug:
          'artisan-loaf-sandwich-of-larded-truffelled-black-pork-and-grated-canarian-goat-cheese'
      },
      de: {
        description: '',
        title:
          'Handgemachtes Brötchen vom getrüffelten schwarzen Schwein in Schmalz und kanarischem geriebenen Käse',
        slug:
          'handgemachtes-brotchen-vom-getruffelten-schwarzen-schwein-in-schmalz-und-kanarischem-geriebenen-kase'
      },
      nb: {
        description: '',
        title:
          'Sandwich av iberisk svartgris i smør, trøfler og revet kanarisk ost',
        slug: 'sandwich-av-iberisk-svartgris-i-smor'
      },
      da: {
        description: '',
        title:
          'Hjemmelavet sandwich med sortfodspattegris i svinefedt, trøffel og revet kanarisk ost',
        slug: 'hjemmelavet-sandwich-med-sortfodspattegris-i-svinefedt'
      },
      sv: {
        description: '',
        title:
          'Hantverkarens smörgås av iberisk svartgris i smör, tryffel och riven kanarisk ost',
        slug: 'hantverkarens-smorgas-av-iberisk-svartgris-i-smor'
      },
      fr: {
        description: '',
        title:
          'Sandwich artisanal de porc noir au beurre, tartufata (sauce aux truffes)  et fromage râpé des Canaries',
        slug: 'sandwich-artisanal-de-porc-noir-au-beurre'
      },
      nl: {
        description: '',
        title:
          'Ambachtelijk broodje met zwart varkensvlees in boter, met truffel en Canarische geraspte kaas',
        slug: 'ambachtelijk-broodje-met-zwart-varkensvlees-in-boter'
      }
    },
    price: { amount: '6.75' },
    number: '2'
  } as Product,
  'item->product->meals->homemade-bread-with-chicken-3': {
    id: 'item->product->meals->homemade-bread-with-chicken-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->mustard-4'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: 'Tomate, Rúcula, Cebolla Frita, Salsa de Miel y Mostaza',
        title: 'Bocata Artesano de Pollo de Corral (Rast Hanout)',
        slug: 'bocata-artesano-de-pollo-de-corral'
      },
      en: {
        description:
          'Tomato, Rocket Lettuce, fried Onion, Honey and Mustard Sauce',
        title: 'Artisan Loaf Sandwich of free-range Chicken Ras el Hanout',
        slug: 'artisan-loaf-sandwich-of-free-range-chicken-ras-el-hanout'
      },
      de: {
        description:
          'Tomate, Rucola, frittierten Zwiebeln und Honig-Senf-Sauce',
        title: 'Handgemachtes Brötchen vom Freilandhuhn ( Ras el Hanout )',
        slug: 'handgemachtes-brotchen-vom-freilandhuhn'
      },
      nb: {
        description: 'tomat, rucula, stekt løk, honningsaus og sennep',
        title: 'Sandwich av frittgående kylling (Ras el Hanout)',
        slug: 'handverker-frittgaende-kyllingsandwich'
      },
      da: {
        description: 'tomat, rucula, stegte løg, honning- og sennupsdressing',
        title: 'Hjemmelavet sandwich med friluftskylling (Rast Hanout)',
        slug: 'handvaerker-fritgaende-kyllingesandwich'
      },
      sv: {
        description: 'tomat, rucula, stekt lök, honungssås och senap',
        title: 'Hantverkarens smörgås av frittlöpande kyckling (Ras el Hanout)',
        slug: 'hantverksbrodsmorgas-med-frittgaende-kyckling'
      },
      fr: {
        description: 'tomate, roquette, oignon frit, sauce miel et moutarde',
        title: 'Sandwich au poulet fermier (Ras el Hanout)',
        slug: 'sandwich-au-poulet-fermier'
      },
      nl: {
        description: 'tomaat, rucola, gebakken ui en honing-mosterdsaus',
        title:
          'Ambachtelijk broodje met scharrelkip in Ras el Hanout (Marokkaans kruidenmengsel)',
        slug: 'ambachtelijk-broodje-met-scharrelkip'
      }
    },
    price: { amount: '9.50' },
    number: '3'
  } as Product,
  'item->product->meals->homemade-bread-with-chorizo-from-teror-4': {
    id: 'item->product->meals->homemade-bread-with-chorizo-from-teror-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->dairy-products-10'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Pan Artesano con chorizo de Teror, queso semi y mojo cilantro',
        slug: 'pan-artesano-con-chorizo-de-teror'
      },
      en: {
        description: '',
        title:
          'Artisan Loaf Sandwich with Teror Chorizo Spread, semi-cured Goat Cheese and Cilantro Mojo Sauce',
        slug: 'artisan-loaf-sandwich-with-teror-chorizo-spread'
      },
      de: {
        description: '',
        title:
          'Handgemachtes Brötchen mit Chorizowurst aus Teror, halbharter Köse und Koriandermojo',
        slug: 'hausgemachtes-brot-mit-chorizo-aus-teror'
      },
      nb: {
        description: '',
        title:
          'Håndverksbrød med chorizo fra Teror, halvlagret ost og koriander mojo',
        slug: 'hjemmelagd-brod-med-chorizo-polse-fra-teror'
      },
      da: {
        description: '',
        title:
          'Hjemmelavet brød med chorizo-pølse fra Teror, mellemlagret ost og mojo-sovs med koriander',
        slug: 'hjemmelaved-brod-med-chorizo-polse-fra-teror'
      },
      sv: {
        description: '',
        title:
          'Hantverksbröd med  chorizo från Teror, halvlagrad ost och koriandermojo',
        slug: 'hantverksbrodsmorgas-med-chorizo-fran-teror'
      },
      fr: {
        description: '',
        title:
          'Pain artisanal au chorizo de Teror (commune de l’île), fromage semi-affiné et mojo à la coriandre (sauce typique des îles Canaries)',
        slug: 'pain-artisanal-au-chorizo-de-teror'
      },
      nl: {
        description: '',
        title:
          'Ambachtelijk broodje met chorizo uit Teror (Gran Canaria), jongbelegen kaas en Mojo met koriander (Canarische saus)',
        slug: 'ambachtelijk-broodje-met-chorizo-uit-teror'
      }
    },
    price: { amount: '6.00' },
    number: '4'
  } as Product,
  'item->product->meals->new-york-sandwich-5': {
    id: 'item->product->meals->new-york-sandwich-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->dairy-products-10',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description:
          'Bocata de New York (Pastrami plancha, queso, mostaza, chukrut ) salsa rusa.',
        title:
          'Bocata de New York (Pastrami plancha, queso, mostaza, chukrut ) salsa rusa',
        slug: 'bocata-de-new-york'
      },
      en: {
        description:
          'New York sandwich (grilled pastrami, cheese, mustard, sauerkraut, Russian sauce)',
        title:
          'New York sandwich (grilled pastrami, cheese, mustard, sauerkraut, Russian sauce)',
        slug: 'new-york-sandwich'
      },
      de: {
        description:
          'New York Sandwich (gegrillte Pastrami, Käse, Senf, Sauerkraut, russische Sauce)',
        title:
          'New York Sandwich (gegrillte Pastrami, Käse, Senf, Sauerkraut, russische Sauce)',
        slug: 'new-york-sandwich'
      },
      nb: {
        description:
          'Hjemmelagd brød New York (Pastramiskinke, ost, sennep,surkål, rusisk saus)',
        title:
          'Hjemmelagd brød New York (Pastramiskinke, ost, sennep,surkål, rusisk saus)',
        slug: 'hjemmelagd-brod-new-york'
      },
      da: {
        description:
          'Hjemmelaved Brød New York (Pastramiskinke, Ost, Sennep, Surkål Rusisk Saus)',
        title:
          'Hjemmelaved Brød New York (Pastramiskinke, Ost, Sennep, Surkål Rusisk Saus)',
        slug: 'hjemmelaved-brod-new-york'
      },
      sv: {
        description:
          'Hantverksbrödsmörgås New York (Grillad pastrami, ost, senap, chukrut) rysk sås',
        title:
          'Hantverksbrödsmörgås New York (Grillad pastrami, ost, senap, chukrut) rysk sås',
        slug: 'hantverksbrodsmorgas-new-york'
      },
      fr: {
        description:
          'Sandwich New York (au pastrami, fromage, choucroute, moutarde et sauce russe)',
        title:
          'Sandwich New York (au pastrami, fromage, choucroute, moutarde et sauce russe)',
        slug: 'sandwich-new-york-au-pastrami'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '7.50' },
    number: '5'
  } as Product,
  'item->product->meals->hamburger-with-chicken-6': {
    id: 'item->product->meals->hamburger-with-chicken-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->dairy-products-10',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Hamburguesa pollo corral, queso semiduro, su ensalada, salsa remolada',
        slug: 'hamburguesa-pollo-corral'
      },
      en: {
        description: '',
        title:
          'Hamburger with chicken, medium-aged cheese, salad, and Tartar sauce',
        slug: 'hamburger-with-chicken'
      },
      de: {
        description: '',
        title:
          'Hamburger mit Hähnchenfleisch, mittelaltem Käse, Salat und Remouladensoße',
        slug: 'hamburger-mit-hahnchenfleisch'
      },
      nb: {
        description: '',
        title: 'Kyllingehambuger mellomlagret ost, salat, remulade',
        slug: 'kyllingehambuger-mellomlagret-ost'
      },
      da: {
        description: '',
        title: 'Kyllingehambuger Mellomlagred Ost, Salat, Remulade',
        slug: 'kyllingehambuger-mellomlagred-ost'
      },
      sv: {
        description: '',
        title:
          'Frittgående kycklingburger, halvhård ost, sallad, remoulade sås',
        slug: 'frittgaende-kycklingburger'
      },
      fr: {
        description: '',
        title:
          'Hamburger de poulet fermier, fromage demi-affiné, salade et sauce rémoulade',
        slug: 'hamburger-de-poulet-fermier'
      },
      nl: {
        description: '',
        title: 'Scharrelkipburger, halfharde kaas, jouw salade, remoladasaus',
        slug: 'scharrelkipburger-halfharde-kaas-jouw-salade-remoladasaus'
      }
    },
    price: { amount: '9.50' },
    number: '6'
  } as Product,
  'item->product->meals->beef-burger-7': {
    id: 'item->product->meals->beef-burger-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->egg-9'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Hamburguesa carne, bacon, queso, su ensalada y salsa rusa',
        slug: 'hamburguesa-carne'
      },
      en: {
        description: '',
        title: 'Beef burger, bacon, cheese, salad, and Russian sauce',
        slug: 'beef-burger'
      },
      de: {
        description: '',
        title: 'Rindfleisch-Burger, Bacon, Käse, Salat und russische Soße',
        slug: 'rindfleisch-burger'
      },
      nb: {
        description: '',
        title: 'Hambuger, bacon, ost, salat og rusisk saus.',
        slug: 'hambuger'
      },
      da: {
        description: '',
        title: 'Hambuger, bacon, ost, salad og rusisk sovs',
        slug: 'hambuger'
      },
      sv: {
        description: '',
        title: 'Biffburgare, bacon, ost, sallad och rysk sås ',
        slug: 'biffburgare'
      },
      fr: {
        description: '',
        title: 'Hamburger de viande, bacon et fromage, salade et sauce russe',
        slug: 'hamburger-de-viande'
      },
      nl: {
        description: '',
        title: 'Vleesburger, bacon, kaas, jouw salade en Russische saus',
        slug: 'vleesburger-bacon-kaas-jouw-salade-en-russische-saus'
      }
    },
    price: { amount: '10.95' },
    number: '7'
  } as Product,

  //// meals->childrens->
  'item->product->meals->childrens->grilled-fish-with-side-dishes-2': {
    id: 'item->product->meals->childrens->grilled-fish-with-side-dishes-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->fish-1'],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Pescado a la Plancha con Guarnición del Chef',
        slug: 'pescado-a-la-plancha-con-guarnicion-del-chef'
      },
      en: {
        description: '',
        title: 'Grilled fish with side dishes',
        slug: 'grilled-fish-with-side-dishes'
      },
      de: {
        description: '',
        title: 'Gegrillter fisch mit beilagen',
        slug: 'gegrillter-fisch-mit-beilagen'
      },
      nb: {
        description: '',
        title: 'Grillet Fisk med sjefkokkens tilbehør',
        slug: 'grillet-fisk-med-sjefkokkens-tilbehor'
      },
      da: {
        description: '',
        title: 'Grilled fisk med chefkokkens tilbehør',
        slug: 'grilled-fisk-med-chefkokkens-tilbehor'
      },
      sv: {
        description: '',
        title: 'Grillad fisk med kockgarnering',
        slug: 'grillad-fisk-med-kockgarnering'
      },
      fr: {
        description: '',
        title: 'Poisson grillé avec la garniture du chef',
        slug: 'poisson-grille-avec-la-garniture-du-chef'
      },
      nl: {
        description: '',
        title: 'Gegrilde vis met garnituur van de chef',
        slug: 'gegrilde-vis-met-garnituur-van-de-chef'
      }
    },
    price: { amount: '5.50' },
    number: '38'
  } as Product,
  'item->product->meals->childrens->ham-and-cheese-omelette-6': {
    id: 'item->product->meals->childrens->ham-and-cheese-omelette-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->gluten-3',
      'allergenic->egg-9',
      'allergenic->dairy-products-10'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Tortilla de jamón y queso con su guarnición',
        slug: 'tortilla-de-jamon-y-queso'
      },
      en: {
        description: '',
        title: 'Ham and Cheese Omelette',
        slug: 'ham-and-cheese-omelette'
      },
      de: {
        description: '',
        title: 'Schinken-Käse-Omelett',
        slug: 'schinken-kase-omelett'
      },
      nb: {
        description: '',
        title: 'Omelett med ost og skinke',
        slug: 'omelett-med-ost-og-skinke'
      },
      da: {
        description: '',
        title: 'Omelet med skinke og ost',
        slug: 'omelet-med-skinke-og-ost'
      },
      sv: {
        description: '',
        title: 'Skinka och ostomelett',
        slug: 'skinka-och-ostomelett'
      },
      fr: {
        description: '',
        title: 'Omelette jambon et fromage',
        slug: 'omelette-jambon-et-fromage'
      },
      nl: {
        description: '',
        title: 'Ham-kaastortilla',
        slug: 'ham-kaastortilla'
      }
    },
    price: { amount: '8.50' },
    number: '4'
  } as Product,

  ///// product->extra-menu
  'item->product->meals->extra-menu->-1': {
    id: 'item->product->meals->extra-menu->-1',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasVariants: false,
    hasAllergens: true,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '1'
  } as Product,
  'item->product->meals->extra-menu->-2': {
    id: 'item->product->meals->extra-menu->-2',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '2'
  } as Product,
  'item->product->meals->extra-menu->-3': {
    id: 'item->product->meals->extra-menu->-3',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '3'
  } as Product,
  'item->product->meals->extra-menu->-4': {
    id: 'item->product->meals->extra-menu->-4',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '4'
  } as Product,
  'item->product->meals->extra-menu->-5': {
    id: 'item->product->meals->extra-menu->-5',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '5'
  } as Product,
  'item->product->meals->extra-menu->-6': {
    id: 'item->product->meals->extra-menu->-6',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '6'
  } as Product,
  'item->product->meals->extra-menu->-7': {
    id: 'item->product->meals->extra-menu->-7',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '7'
  } as Product,
  'item->product->meals->extra-menu->-8': {
    id: 'item->product->meals->extra-menu->-8',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '8'
  } as Product,
  'item->product->meals->extra-menu->-9': {
    id: 'item->product->meals->extra-menu->-9',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '9'
  } as Product,
  'item->product->meals->extra-menu->-10': {
    id: 'item->product->meals->extra-menu->-10',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '10'
  } as Product,
  'item->product->meals->extra-menu->-11': {
    id: 'item->product->meals->extra-menu->-11',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: true,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '11'
  } as Product,
  'item->product->meals->extra-menu->-12': {
    id: 'item->product->meals->extra-menu->-12',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '12'
  } as Product,
  'item->product->meals->extra-menu->-13': {
    id: 'item->product->meals->extra-menu->-13',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '13'
  } as Product,
  'item->product->meals->extra-menu->-14': {
    id: 'item->product->meals->extra-menu->-14',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '14'
  } as Product,
  'item->product->meals->extra-menu->-15': {
    id: 'item->product->meals->extra-menu->-15',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '15'
  } as Product,
  'item->product->meals->extra-menu->-16': {
    id: 'item->product->meals->extra-menu->-16',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '16'
  } as Product,
  'item->product->meals->extra-menu->-17': {
    id: 'item->product->meals->extra-menu->-17',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '17'
  } as Product,
  'item->product->meals->extra-menu->-18': {
    id: 'item->product->meals->extra-menu->-18',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '18'
  } as Product,
  'item->product->meals->extra-menu->-19': {
    id: 'item->product->meals->extra-menu->-19',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '19'
  } as Product,
  'item->product->meals->extra-menu->-20': {
    id: 'item->product->meals->extra-menu->-20',
    type: 'product',
    images: [],
    mainImg: '',
    defaultImg: '',
    active: true,
    hasAllergens: true,
    hasVariants: false,
    allergens: [],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->dairy-products-10',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: '',
        slug: ''
      },
      en: {
        description: '',
        title: '',
        slug: ''
      },
      de: {
        description: '',
        title: '',
        slug: ''
      },
      nb: {
        description: '',
        title: '',
        slug: ''
      },
      da: {
        description: '',
        title: '',
        slug: ''
      },
      sv: {
        description: '',
        title: '',
        slug: ''
      },
      fr: {
        description: '',
        title: '',
        slug: ''
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    price: { amount: '0.00' },
    number: '20'
  } as Product,

  ///// info->sanitary-measures->
  'item->info->sanitary-measures->1': {
    id: 'item->info->sanitary-measures->1',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-1',
    displayInfo: {
      es: {
        description: 'Esperar a ser atendidos por el personal del local',
        title: 'Medida 1',
        slug: 'medida-1'
      },
      en: {
        description: 'Wait to be attended by the local staff',
        title: 'Measure 1',
        slug: 'measure-1'
      },
      de: {
        description: 'Warten Sie, bis das lokale Personal anwesend ist',
        title: 'Maßnahmen 1',
        slug: 'masnahmen-1'
      },
      nb: {
        description: 'Vent på å bli deltatt av det lokale personalet',
        title: 'Måler 1',
        slug: 'maler-1'
      },
      da: {
        description: 'Vent på at blive overværet af det lokale personale',
        title: 'Foranstaltninger 1',
        slug: 'foranstaltninger-1'
      },
      sv: {
        description: 'Vänta på att den lokala personalen deltar',
        title: 'Åtgärder 1',
        slug: 'atgarder-1'
      },
      fr: {
        description: `Attendez d'être assisté par le personnel local`,
        title: 'Mesures 1',
        slug: 'measures-1'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '1'
  } as Info,
  'item->info->sanitary-measures->2': {
    id: 'item->info->sanitary-measures->2',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-2',
    displayInfo: {
      es: {
        description: 'Respete el aforo y espere su turno',
        title: 'Medida 2',
        slug: 'medida-2'
      },
      en: {
        description: 'Respect the capacity and wait your turn',
        title: 'Measure 2',
        slug: 'measure-2'
      },
      de: {
        description:
          'Respektieren Sie die Kapazität und warten Sie, bis Sie an der Reihe sind',
        title: 'Maßnahmen 2',
        slug: 'masnahmen-2'
      },
      nb: {
        description: 'Respekter kapasiteten og vent på din tur',
        title: 'Måler 2',
        slug: 'maler-2'
      },
      da: {
        description: 'Respekter kapaciteten og vent på din tur',
        title: 'Foranstaltninger 2',
        slug: 'foranstaltninger-2'
      },
      sv: {
        description: 'Respektera kapaciteten och vänta på din tur',
        title: 'Åtgärder 2',
        slug: 'atgarder-2'
      },
      fr: {
        description: 'Respectez la capacité et attendez votre tour',
        title: 'Mesures 2',
        slug: 'measures-2'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '2'
  } as Info,
  'item->info->sanitary-measures->3': {
    id: 'item->info->sanitary-measures->3',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-3',
    displayInfo: {
      es: {
        description:
          'Use gel hidroalcohólico para desinfectar las manos al entrar y al salir',
        title: 'Medida 3',
        slug: 'medida-3'
      },
      en: {
        description:
          'Use hydroalcoholic gel to disinfect hands when entering and leaving',
        title: 'Measure 3',
        slug: 'measure-3'
      },
      de: {
        description:
          'Verwenden Sie hydroalkoholisches Gel, um die Hände beim Betreten und Verlassen zu desinfizieren',
        title: 'Maßnahmen 3',
        slug: 'masnahmen-3'
      },
      nb: {
        description:
          'Bruk hydroalkoholisk gel for å desinfisere hender når du går inn og ut',
        title: 'Måler 3',
        slug: 'maler-3'
      },
      da: {
        description:
          'Brug hydroalkoholisk gel til at desinficere hænder, når du går ind og ud',
        title: 'Foranstaltninger 3',
        slug: 'foranstaltninger-3'
      },
      sv: {
        description:
          'Använd hydroalkoholisk gel för att desinficera händerna när du går in och ut',
        title: 'Åtgärder 3',
        slug: 'atgarder-3'
      },
      fr: {
        description: `Utiliser du gel hydroalcoolique pour se désinfecter les mains à l'entrée et à la sortie`,
        title: 'Mesures 3',
        slug: 'measures-3'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '3'
  } as Info,
  'item->info->sanitary-measures->4': {
    id: 'item->info->sanitary-measures->4',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-4',
    displayInfo: {
      es: {
        description: 'Mantenga la distancia de seguridad en todo momento',
        title: 'Medida 4',
        slug: 'medida-4'
      },
      en: {
        description: 'Maintain a safe distance at all times',
        title: 'Measure 4',
        slug: 'measure-4'
      },
      de: {
        description: 'Halten Sie immer einen sicheren Abstand',
        title: 'Maßnahmen 4',
        slug: 'masnahmen-4'
      },
      nb: {
        description: 'Hold trygg avstand til enhver tid ',
        title: 'Måler 4',
        slug: 'maler-4'
      },
      da: {
        description: 'Hold altid en sikker afstand',
        title: 'Foranstaltninger 4',
        slug: 'foranstaltninger-4'
      },
      sv: {
        description: 'Håll alltid ett säkert avstånd',
        title: 'Åtgärder 4',
        slug: 'atgarder-4'
      },
      fr: {
        description: 'Maintenir une distance de sécurité en tout temps',
        title: 'Mesures 4',
        slug: 'measures-4'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '4'
  } as Info,
  'item->info->sanitary-measures->5': {
    id: 'item->info->sanitary-measures->5',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-5',
    displayInfo: {
      es: {
        description: 'Se recomienda el uso de la mascarilla fuera de la mesa',
        title: 'Medida 5',
        slug: 'medida-5'
      },
      en: {
        description: 'The use of the mask off the table is recommended',
        title: 'Measure 5',
        slug: 'measure-5'
      },
      de: {
        description: 'Die Verwendung der Maske vom Tisch wird empfohlen',
        title: 'Maßnahmen 5',
        slug: 'masnahmen-5'
      },
      nb: {
        description: 'Det anbefales å bruke masken utenfor bordet',
        title: 'Måler 5',
        slug: 'maler-5'
      },
      da: {
        description: 'Det anbefales at bruge masken fra bordet',
        title: 'Foranstaltninger 5',
        slug: 'foranstaltninger-5'
      },
      sv: {
        description: 'Användning av masken utanför bordet rekommenderas',
        title: 'Åtgärder 5',
        slug: 'atgarder-5'
      },
      fr: {
        description: `L'utilisation du masque hors de la table est recommandée`,
        title: 'Mesures 5',
        slug: 'measures-5'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '5'
  } as Info,
  'item->info->sanitary-measures->6': {
    id: 'item->info->sanitary-measures->6',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-6',
    displayInfo: {
      es: {
        description: 'Está prohibido fumar en todo el local',
        title: 'Medida 6',
        slug: 'medida-6'
      },
      en: {
        description: 'Smoking is prohibited throughout the premises',
        title: 'Measure 6',
        slug: 'measure-6'
      },
      de: {
        description: 'Rauchen ist auf dem gesamten Gelände verboten',
        title: 'Maßnahmen 6',
        slug: 'masnahmen-6'
      },
      nb: {
        description: 'Røyking er forbudt i hele lokalet',
        title: 'Måler 6',
        slug: 'maler-6'
      },
      da: {
        description: 'Rygning er forbudt i hele lokalerne',
        title: 'Foranstaltninger 6',
        slug: 'foranstaltninger-6'
      },
      sv: {
        description: 'Rökning är förbjuden i hela lokalen',
        title: 'Åtgärder 6',
        slug: 'atgarder-6'
      },
      fr: {
        description: `Il est interdit de fumer dans tout l'établissement`,
        title: 'Mesures 6',
        slug: 'measures-6'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '6'
  } as Info,
  'item->info->sanitary-measures->7': {
    id: 'item->info->sanitary-measures->7',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-7',
    displayInfo: {
      es: {
        description:
          'Evitar movilizar el equipamiento del local, se encarga el personal',
        title: 'Medida 7',
        slug: 'medida-7'
      },
      en: {
        description:
          'Avoid mobilizing the equipment of the premises, the staff is in charge',
        title: 'Measure 7',
        slug: 'measure-7'
      },
      de: {
        description:
          'Vermeiden Sie die Mobilisierung der Einrichtungen der Räumlichkeiten, das Personal ist verantwortlich',
        title: 'Maßnahmen 7',
        slug: 'masnahmen-7'
      },
      nb: {
        description:
          'Unngå å mobilisere utstyret i lokalene, personalet har ansvaret',
        title: 'Måler 7',
        slug: 'maler-7'
      },
      da: {
        description:
          'Undgå at mobilisere lokalernes udstyr, personalet har ansvaret',
        title: 'Foranstaltninger 7',
        slug: 'foranstaltninger-7'
      },
      sv: {
        description:
          'Undvik att mobilisera lokalernas utrustning, personalen har ansvaret',
        title: 'Åtgärder 7',
        slug: 'atgarder-7'
      },
      fr: {
        description:
          'Eviter de mobiliser les équipements des locaux, le personnel est en charge',
        title: 'Mesures 7',
        slug: 'measures-7'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '7'
  } as Info,
  'item->info->sanitary-measures->8': {
    id: 'item->info->sanitary-measures->8',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-8',
    displayInfo: {
      es: {
        description: 'Evitar compartir platos, cubiertos y cualquier utensilio',
        title: 'Medida 8',
        slug: 'medida-8'
      },
      en: {
        description: 'Avoid sharing plates, cutlery and any utensils',
        title: 'Measure 8',
        slug: 'measure-8'
      },
      de: {
        description:
          'Vermeiden Sie das Teilen von Tellern, Besteck und Utensilien',
        title: 'Maßnahmen 8',
        slug: 'masnahmen-8'
      },
      nb: {
        description: 'Unngå å dele tallerkener, bestikk og redskaper',
        title: 'Måler 8',
        slug: 'maler-8'
      },
      da: {
        description: 'Undgå at dele tallerkener, bestik og redskaber',
        title: 'Foranstaltninger 8',
        slug: 'foranstaltninger-8'
      },
      sv: {
        description:
          'Undvik att dela tallrikar, bestick och eventuella redskap',
        title: 'Åtgärder 8',
        slug: 'atgarder-8'
      },
      fr: {
        description:
          'Évitez de partager des assiettes, des couverts et des ustensiles',
        title: 'Mesures 8',
        slug: 'measures-8'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '8'
  } as Info,
  'item->info->sanitary-measures->9': {
    id: 'item->info->sanitary-measures->9',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-9',
    displayInfo: {
      es: {
        description: 'Evite tocarse la cara con las manos',
        title: 'Medida 9',
        slug: 'medida-9'
      },
      en: {
        description: 'Avoid touching your face with your hands',
        title: 'Measure 9',
        slug: 'measure-9'
      },
      de: {
        description: 'Vermeide es, dein Gesicht mit den Händen zu berühren',
        title: 'Maßnahmen 9',
        slug: 'masnahmen-9'
      },
      nb: {
        description: 'Unngå å berøre ansiktet med hendene',
        title: 'Måler 9',
        slug: 'maler-9'
      },
      da: {
        description: 'Undgå at røre dit ansigt med dine hænder',
        title: 'Foranstaltninger 9',
        slug: 'foranstaltninger-9'
      },
      sv: {
        description: 'Undvik att röra vid ansiktet med händerna',
        title: 'Åtgärder 9',
        slug: 'atgarder-9'
      },
      fr: {
        description: 'Évitez de toucher votre visage avec vos mains',
        title: 'Mesures 9',
        slug: 'measures-9'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '9'
  } as Info,
  'item->info->sanitary-measures->10': {
    id: 'item->info->sanitary-measures->10',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-10',
    displayInfo: {
      es: {
        description: 'Evitar moverse por el local excepto para ir al baño',
        title: 'Medida 10',
        slug: 'medida-10'
      },
      en: {
        description:
          'Avoid moving around the premises except to go to the bathroom',
        title: 'Measure 10',
        slug: 'measure-10'
      },
      de: {
        description:
          'Vermeiden Sie es, sich auf dem Gelände zu bewegen, außer um auf die Toilette zu gehen',
        title: 'Maßnahmen 10',
        slug: 'masnahmen-10'
      },
      nb: {
        description:
          'Unngå å bevege deg rundt i lokalene bortsett fra å gå på do',
        title: 'Måler 10',
        slug: 'maler-10'
      },
      da: {
        description:
          'Undgå at bevæge dig rundt i lokalerne undtagen for at gå på toilettet',
        title: 'Foranstaltninger 10',
        slug: 'foranstaltninger-10'
      },
      sv: {
        description:
          'Undvik att flytta runt i lokalerna förutom att gå på toaletten',
        title: 'Åtgärder 10',
        slug: 'atgarder-10'
      },
      fr: {
        description:
          'Évitez de vous déplacer dans les locaux sauf pour aller aux toilettes',
        title: 'Mesures 10',
        slug: 'measures-10'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '10'
  } as Info,
  'item->info->sanitary-measures->11': {
    id: 'item->info->sanitary-measures->11',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-11',
    displayInfo: {
      es: {
        description: 'Recomendamos el uso de pago telemático',
        title: 'Medida 11',
        slug: 'medida-11'
      },
      en: {
        description: 'We recommend the use of telematic payment',
        title: 'Measure 11',
        slug: 'measure-11'
      },
      de: {
        description: 'Wir empfehlen die Verwendung von Telematikzahlung',
        title: 'Maßnahmen 11',
        slug: 'masnahmen-11'
      },
      nb: {
        description: 'Vi anbefaler bruk av telematikkbetaling',
        title: 'Måler 11',
        slug: 'maler-11'
      },
      da: {
        description: 'Vi anbefaler brug af telematikbetaling',
        title: 'Foranstaltninger 11',
        slug: 'foranstaltninger-11'
      },
      sv: {
        description: 'Vi rekommenderar användning av telematikbetalning',
        title: 'Åtgärder 11',
        slug: 'atgarder-11'
      },
      fr: {
        description: `Nous recommandons l'utilisation du paiement télématique`,
        title: 'Mesures 11',
        slug: 'measures-11'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '11'
  } as Info,
  'item->info->sanitary-measures->12': {
    id: 'item->info->sanitary-measures->12',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-sanitary-measures-12',
    displayInfo: {
      es: {
        description: 'Por favor, mantenga el local limpio con el papeleras',
        title: 'Medida 12',
        slug: 'medida-12'
      },
      en: {
        description: 'Please keep the premises clean with the bins',
        title: 'Measure 12',
        slug: 'measure-12'
      },
      de: {
        description:
          'Bitte halten Sie die Räumlichkeiten mit den Mülleimern sauber',
        title: 'Maßnahmen 12',
        slug: 'masnahmen-12'
      },
      nb: {
        description: 'Vennligst hold lokalene rene med søppelbøttene',
        title: 'Måler 12',
        slug: 'maler-12'
      },
      da: {
        description: 'Hold venligst lokalerne rene med skraldespandene',
        title: 'Foranstaltninger 12',
        slug: 'foranstaltninger-12'
      },
      sv: {
        description: 'Vänligen håll lokalerna rena med soporna',
        title: 'Åtgärder 12',
        slug: 'atgarder-12'
      },
      fr: {
        description: 'Merci de garder les lieux propres avec les poubelles',
        title: 'Mesures 12',
        slug: 'measures-12'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '12'
  } as Info,

  ///// menu->
  'item->menu->info->sanitary-measures': {
    id: 'item->menu->info->sanitary-measures',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->covid-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Medidas Sanitarias',
        slug: 'medidas-sanitarias'
      },
      en: {
        title: 'Sanitary measures',
        slug: 'sanitary-measures'
      },
      de: {
        title: 'Hygienemaßnahmen',
        slug: 'hygienemassnahmen'
      },
      nb: {
        title: 'Sanitære tiltak',
        slug: 'sanitaere-tiltak'
      },
      da: {
        title: 'Sanitære foranstaltninger',
        slug: 'sanitaere-foranstaltninger'
      },
      sv: {
        title: 'Sanitära åtgärder',
        slug: 'sanitara-atgarder'
      },
      fr: {
        title: 'Mesures sanitaires',
        slug: 'mesures-sanitaires'
      },
      nl: {
        title: 'Sanitaire maatregelen',
        slug: 'sanitaire-maatregelen'
      }
    }
  } as Menu,
  'item->menu->meals->snacks-and-brunch': {
    id: 'item->menu->meals->snacks-and-brunch',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->snack-and-brunch-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Snacks and Brunch',
        slug: 'snacks-and-brunch'
      },
      en: {
        title: 'Snacks and Brunch',
        slug: 'snacks-and-brunch'
      },
      de: {
        title: 'Snacks und Brunch',
        slug: 'snacks-und-brunch'
      },
      nb: {
        title: 'Snacks og Brunsj',
        slug: 'snacks-og-brunsj'
      },
      da: {
        title: 'Snacks og Brunch',
        slug: 'snacks-og-brunch'
      },
      sv: {
        title: 'Snacks och Brunch',
        slug: 'Snacks och Brunch'
      },
      fr: {
        title: 'Collations et brunch',
        slug: 'collations-et-brunch'
      },
      nl: {
        title: 'Snacks and Brunch',
        slug: 'snacks-and-brunch'
      }
    }
  } as Menu,
  'item->menu->meals->breakfasts': {
    id: 'item->menu->meals->breakfasts',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->children-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Desayunos',
        slug: 'desayunos'
      },
      en: {
        title: 'Breakfasts',
        slug: 'breakfasts'
      },
      de: {
        title: 'Frühstück',
        slug: 'fruhstuck'
      },
      nb: {
        title: 'Frokoster',
        slug: 'frokoster'
      },
      da: {
        title: 'Morgenmad',
        slug: 'morgenmad'
      },
      sv: {
        title: 'Frukostar',
        slug: 'frukostar'
      },
      fr: {
        title: 'Petits déjeuners',
        slug: 'petits-dejeuners'
      },
      nl: {
        title: 'Ontbijten',
        slug: 'ontbijten'
      }
    }
  } as Menu,
  'item->menu->meals->sandwich': {
    id: 'item->menu->meals->sandwich',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->hands-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Con las Manos',
        slug: 'con-las-manos'
      },
      en: {
        title: 'Hand-eaten Foods',
        slug: 'hand-eaten-foods'
      },
      de: {
        title: 'Mit Den Händen',
        slug: 'Mit Den Handen'
      },
      nb: {
        title: 'Med Hendene',
        slug: 'med-hendene'
      },
      da: {
        title: 'Til at Spise med Fingrene',
        slug: 'til-at-spise-med-fingrene'
      },
      sv: {
        title: 'Med Händerna',
        slug: 'med-handerna'
      },
      fr: {
        title: 'Avec Les Mains',
        slug: 'avec-les-mains'
      },
      nl: {
        title: 'Zonder Bestek',
        slug: 'zonder-bestek'
      }
    }
  } as Menu,
  'item->menu->meals->extra-menu': {
    id: 'item->menu->meals->extra-menu',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: '',
    active: false,
    displayInfo: {
      es: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      en: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      de: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      nb: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      da: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      sv: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      fr: {
        title: 'Extra menu',
        slug: 'extra-menu'
      },
      nl: {
        title: 'Extra menu',
        slug: 'extra-menu'
      }
    }
  } as Menu
};
