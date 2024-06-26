import { Info, Menu, Product } from 'definitions/models';

export const items: { [key: string]: Info | Product | Menu } = {
  ///// meals->starters->
  'item->product->meals->artisan-garlic-bread-from-ingenio-1': {
    id: 'item->product->meals->artisan-garlic-bread-from-ingenio-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
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
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->egg-9'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Pan artesano de Ingenio con ajo',
        slug: 'pan-artesano-de-ingenio-con-ajo'
      },
      en: {
        description: '',
        title: 'Artisan Garlic Bread from Ingenio',
        slug: 'artisan-garlic-bread-from-ingenio'
      },
      de: {
        description: '',
        title: 'Handgemachtes Brot aus Ingenio mit Knoblauch',
        slug: 'handgemachtes-brot-aus-ingenio-mit-knoblauch'
      },
      nb: {
        description: '',
        title: 'Håndverksbrød fra Ingenio med hvitløk',
        slug: 'handverksbrod-fra-ingenio-med-hvitlok'
      },
      da: {
        description: '',
        title: 'Hjemmelavet hvidløgsbrød fra Ingenio',
        slug: 'hjemmelavet-hvidlogsbrod-fra-ingenio'
      },
      sv: {
        description: '',
        title: 'Hantverksbröd från Ingenio med vitlök',
        slug: 'hantverksbrod-fran-ingenio-med-vitlok'
      },
      fr: {
        description: '',
        title: 'Pain artisanal à l’ail d’Ingenio (commune de l’île)',
        slug: 'pain-artisanal-a-l-ail-d-ingenio'
      },
      nl: {
        description: '',
        title: 'Ambachtelijk brood uit Ingenio (Gran Canaria) met knoflook',
        slug: 'ambachtelijk-brood-uit-ingenio-met-knoflook'
      }
    },
    price: { amount: '3.90' },
    number: '1'
  } as Product,
  'item->product->meals->artisan-bread-from-ingenio-with-canarian-sauces-2': {
    id:
      'item->product->meals->artisan-bread-from-ingenio-with-canarian-sauces-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->nuts-7'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Pan Artesano de Ingenio con Salsas Canarias',
        slug: 'pan-artesano-de-ingenio-con-salsas-canarias'
      },
      en: {
        description: '',
        title: 'Artisan Bread from Ingenio with Canarian Sauces',
        slug: 'artisan-bread-from-ingenio-with-canarian-sauces'
      },
      de: {
        description: '',
        title: 'Handgemachtes Brot aus Ingenio mit kanarischen Saucen',
        slug: 'Handgemachtes Brot aus Ingenio mit kanarischen Saucen'
      },
      nb: {
        description: '',
        title: 'Håndverksbrød fra Ingenio med kanariske sauser',
        slug: 'handverksbrød-fra-ingenio-med-kanariske-sauser'
      },
      da: {
        description: '',
        title: 'Hjemmelavet brød fra Ingenio med kanariske dressinger',
        slug: 'hjemmelavet-brod-fra-ingenio-med-kanariske-dressinger'
      },
      sv: {
        description: '',
        title: 'Hantverksbröd från Ingenio med kanariska såser',
        slug: 'hantverksbrod-fran-ingenio-med-kanariska-saser'
      },
      fr: {
        description: '',
        title:
          'Pain artisanal d’Ingenio (commune de l’île) accompagné de sauces des Canaries',
        slug:
          'pain-artisanal-d-ingenio-commune-de-l-ile-accompagne-de-sauces-des-canaries'
      },
      nl: {
        description: '',
        title:
          'Ambachtelijk brood uit Ingenio (Gran Canaria) met Canarische sauzen',
        slug:
          'ambachtelijk-brood-uit-ingenio-gran-canaria-met-canarische-sauzen'
      }
    },
    price: { amount: '3.90' },
    number: '2'
  } as Product,
  'item->product->meals->canarian-cheese-platter-3': {
    id: 'item->product->meals->canarian-cheese-platter-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    allergens: [
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->nuts-7'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Tabla de quesos Canarios',
        slug: 'tabla-de-quesos-canarios'
      },
      en: {
        description: '',
        title: 'Canarian Cheese Platter',
        slug: 'canarian-cheese-platter'
      },
      de: {
        description: '',
        title: 'Kanarische Käseplatte',
        slug: 'kanarische-käseplatte'
      },
      nb: {
        description: '',
        title: 'Kanarisk ostebrett',
        slug: 'kanarisk-ostebrett'
      },
      da: {
        description: '',
        title: 'Fad med oste fra Kanarieøerne',
        slug: 'fad-med-oste-fra-kanarieoerne'
      },
      sv: {
        description: '',
        title: 'Kanariska ostbrädan',
        slug: 'kanariska-ostbradan'
      },
      fr: {
        description: '',
        title: 'Assiette de fromages des Canaries',
        slug: 'assiette-de-fromages-des-canaries'
      },
      nl: {
        description: '',
        title: 'Plank met Canarische kazen',
        slug: 'plank-met-canarische-kazen'
      }
    },
    price: { amount: '17.50' },
    number: '3'
  } as Product,
  'item->product->meals->by-rocio-prawns-in-sizzling-garlic-oil-4': {
    id: 'item->product->meals->by-rocio-prawns-in-sizzling-garlic-oil-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    selectableAllergens: [
      'allergenic->fish-1',
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
    allergens: ['allergenic->crustaceans-2'],
    displayInfo: {
      es: {
        description: '',
        title: 'Gambas al ajillo By Rocio',
        slug: 'gambas-al-ajillo-by-rocio'
      },
      en: {
        description: '',
        title: 'By Rocio Prawns in sizzling Garlic Oil',
        slug: 'by-rocio-prawns-in-sizzling-garlic-oil'
      },
      de: {
        description: '',
        title: 'Garnelen in Knoblauchöl by Rocio',
        slug: 'Garnelen in Knoblauchöl by Rocio'
      },
      nb: {
        description: '',
        title: 'Hvitløksreker by Rocio',
        slug: 'hvitloksreker'
      },
      da: {
        description: '',
        title: 'Hvidløgsrejer by Rocio',
        slug: 'hvidlogsrejer'
      },
      sv: {
        description: '',
        title: 'Vitlöksräkor By Rocio',
        slug: 'vitloksrakor-by-rocio'
      },
      fr: {
        description: '',
        title: 'Crevettes à l’ail by Rocio',
        slug: 'crevettes-a-l-ail-by-rocio'
      },
      nl: {
        description: '',
        title: 'Gambas al ajillo by Rocio (Gamba’s in de look)',
        slug: 'gambas-al-ajillo-by-rocio-gamba-s-in-de-look'
      }
    },
    price: { amount: '11.95' },
    number: '4'
  } as Product,
  'item->product->meals->iberian-ham-5': {
    id: 'item->product->meals->iberian-ham-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
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
    allergens: ['allergenic->gluten-3'],
    displayInfo: {
      es: {
        description: '',
        title: 'Jamón Ibérico 5J con picos artesanos y tomate rallado',
        slug: 'jamon-iberico'
      },
      en: {
        description: '',
        title: 'Iberian Ham 5J with homemade bread sticks and grated tomato',
        slug: 'iberian-ham'
      },
      de: {
        description: '',
        title:
          'Iberischer Schinken 5J mit handgemachten Knabberstangen und geriebenen Tomaten',
        slug: 'iberischer-schinken'
      },
      nb: {
        description: '',
        title: 'Iberisk skinke 5J med minikavring og revet tomat',
        slug: 'serrano-skinke'
      },
      da: {
        description: '',
        title:
          'Iberisk sortfodsskinke 5J med luksus picos-brødhapser og revet tomat',
        slug: 'serrano-skinke'
      },
      sv: {
        description: '',
        title: 'Iberisk skinka 5J med hantverkskavring och riven tomat',
        slug: 'iberisk-skinka'
      },
      fr: {
        description: '',
        title:
          'Jambon ibérique 5J accompagné de petits pains artisanaux et de tomate râpée',
        slug: 'jambon-iberique'
      },
      nl: {
        description: '',
        title: 'Ibericoham 5J met ambachtelijke dipstokjes en geraspte tomaat',
        slug: 'Ibericoham'
      }
    },
    price: { amount: '22.90' },
    number: '5'
  } as Product,
  'item->product->meals->canarian-wrinkled-potatoes-6': {
    id: 'item->product->meals->canarian-wrinkled-potatoes-6',
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
          'Papas arrugadas de la tierra con Mojo de pimiento asado y Mojo verde cítrico',
        slug: 'papas-arrugadas-de-la-tierra'
      },
      en: {
        description: '',
        title:
          'Canarian Wrinkled Potatoes with Roast Pepper Mojo and Green Citrus Mojo',
        slug: 'canarian-wrinkled-potatoes'
      },
      de: {
        description: '',
        title:
          'Heimische Papas Arrugadas (Runzelkartoffeln) mit einer Mojosauce aus gebratenen Paprika und grünem Zitronenmojo',
        slug: 'heimische-papas-arrugadas'
      },
      nb: {
        description: '',
        title:
          'Kanariske rynkepoteter med mojo av grillet paprika og grønn sitrusmojo',
        slug: 'kanariske-rynkepoteter'
      },
      da: {
        description: '',
        title:
          'Papas arrugadas (saltkogte lokale kartofler med skræl) med mojo-dressing med stegt peberfrugt og grøn mojo-citrusdressing',
        slug: 'papas-arrugadas'
      },
      sv: {
        description: '',
        title:
          'Skrynklig potatis från Kanarien med rostad paprikamojo och citrusgrön mojo (Kanariska såsar)',
        slug: 'skrynklig-potatis'
      },
      fr: {
        description: '',
        title:
          'Papas arrugadas (pommes de terre cuites au sel) accompagné d’un mojo aux poivrons rôtis et d’un mojo vert aux agrumes (sauces typiques des îles Canaries)',
        slug: 'papas-arrugadas'
      },
      nl: {
        description: '',
        title:
          'Papas arrugadas van het land met Mojo verde (Canarisch aardappelgerecht met pittige, Canarische saus met citroensmaak)',
        slug: 'papas-arrugadas'
      }
    },
    price: { amount: '6.50' },
    number: '6'
  } as Product,
  'item->product->meals->eggplant-chips-with-palm-honey-and-sesame-7': {
    id: 'item->product->meals->eggplant-chips-with-palm-honey-and-sesame-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->sesame-8'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->nuts-7',
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
        title: 'Chips de Berenjena con Miel de Palma y Sésamo',
        slug: 'chips-de-berenjena'
      },
      en: {
        description: '',
        title: 'Eggplant Chips with Palm Honey and Sesame',
        slug: 'eggplant-chips-with-palm-honey-and-sesame'
      },
      de: {
        description: '',
        title: 'Chips von der Aubergine mit Palmenhonig und Sesam',
        slug: 'chips-von-der-aubergine-mit-palmenhonig-und-sesam'
      },
      nb: {
        description: '',
        title: 'Aubergine chips med palmehonning og sesam',
        slug: 'aubergine-chips'
      },
      da: {
        description: '',
        title: 'Aubergine-chips med palmehonning og sesamfrø',
        slug: 'aubergine-chips'
      },
      sv: {
        description: '',
        title: 'Auberginechips med palmhonung och sesam',
        slug: 'auberginechips'
      },
      fr: {
        description: '',
        title: 'Chips d’aubergines au miel de palme et sésame',
        slug: 'chips-d-aubergine'
      },
      nl: {
        description: '',
        title: 'Auberginechips met honing uit Palma en sesam',
        slug: 'auberginechips'
      }
    },
    price: { amount: '12.00' },
    number: '7'
  } as Product,
  'item->product->meals->bao-buns-8': {
    id: 'item->product->meals->bao-buns-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->dairy-products-10',
      'allergenic->egg-9',
      'allergenic->moluscs-13',
      'allergenic->fish-1'
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
          'A elegir (Pollo con salsa thai, crujiente de puerros y sus brotes), (cordero con su propio jugo en hierba huerto y crujiente de bacón con brotes)',
        title: 'Pan Bao (3 unidades)',
        slug: 'pan-bao'
      },
      en: {
        description:
          'Choose between Chicken with Thai Sauce, Leek Crisps and Sprouts or Lamb in its own gravy with Mint and Crispy Bacon with Sprouts',
        title: 'Pan Bao (3 pieces)',
        slug: 'bao-buns'
      },
      de: {
        description:
          'Wahlweise (Hähnchen mit Thai-Sauce, Knusprigem vom Lauch und Sprossen), (Lamm im eigenen Saft mit Minze und knusprigem Speck mit Sprossen) ',
        title: 'Bao Buns (3 Stück)',
        slug: 'bao-buns'
      },
      nb: {
        description:
          'Valg (Kylling med thailandsk saus, knasende purre og spirer), (lam med sjysaus i sitronmelisse og sprø bacon samt spirer)',
        title: 'Baobrød (3 enheter)',
        slug: 'bao-brod'
      },
      da: {
        description:
          'Valgmuligheder (kylling med thai-sovs  sprødstegte porrer og nye grøntsagsskud), (lam i egen sovs med krydderurter og sprød bacon med nye grøntsagsskud) ',
        title: 'Bao-brød (3 stk.)',
        slug: 'pan-bao-brød'
      },
      sv: {
        description:
          'Välj (Kyckling med thailändsk sås, krispig purjolök och  groddar), (lamm med skysås i grönmynta och krispigt bacon såväl som groddar)',
        title: 'Baobröd (3 enhet)',
        slug: 'baobrod'
      },
      fr: {
        description:
          'Au choix (Poulet sauce thaï, croustillant de poireaux et jeunes pousses), agneau dans son jus de cuisson aux herbes du potager, bacon croustillant et jeunes pousses)',
        title: 'Pain Bao (3 unités)',
        slug: 'pain-bao'
      },
      nl: {
        description:
          'keuze: kip in Thaise saus met krokante prei en kiemgroenten; lam in kruidenjus met knapperige bacon en kiemgroenten ',
        title: 'Broodje bapao (3 stuks)',
        slug: 'Broodje-bapao'
      }
    },
    price: { amount: '13.50' },
    number: '8'
  } as Product,
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
  'item->product->meals->grilled-canarian-smoked-goat-cheese-10': {
    id: 'item->product->meals->grilled-canarian-smoked-goat-cheese-10',
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
        title: 'Queso canario ahumado a la plancha con mermelada de la casa',
        slug: 'queso-canario'
      },
      en: {
        description: '',
        title: 'Grilled Canarian smoked Goat Cheese with home-made Marmelade',
        slug: 'grilled-canarian-smoked-goat-cheese'
      },
      de: {
        description: '',
        title: 'Kanarischer Räucherkäse gegrillt mit hausgemachter Marmelade',
        slug: 'kanarischer-kase'
      },
      nb: {
        description: '',
        title: 'Røkt kanarisk ost, stekt med husets syltetøy',
        slug: 'kanarisk-ost'
      },
      da: {
        description: '',
        title: 'Grillstegt kanarisk rygeost med husets marmelade',
        slug: 'grillstegt-kanarisk-rygeost'
      },
      sv: {
        description: '',
        title: 'Grillad rökt kanarisk ost med husets marmelad',
        slug: 'kanarisk-ost'
      },
      fr: {
        description: '',
        title:
          'Fromage fumé des Canaries, grillé et accompagné d’une confiture maison',
        slug: 'fromage-des-canaries'
      },
      nl: {
        description: '',
        title: 'Gerookte Canarische gegrilde kaas met huisgemaakte marmelade',
        slug: 'gegrilde-kaas-canarische'
      }
    },
    price: { amount: '10.25' },
    number: '10'
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
  'item->product->meals->nachos-with-guacamole-cheddar-cheese-and-pico-de-gallo-sauce-12': {
    id:
      'item->product->meals->nachos-with-guacamole-cheddar-cheese-and-pico-de-gallo-sauce-12',
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
        title: 'Nachos con guacamole, queso Cheddar y pico de gallo',
        slug: 'nachos-con-guacamole-queso-cheddar-y-pico-de-gallo'
      },
      en: {
        description: '',
        title: 'Nachos with Guacamole, Cheddar Cheese and Pico de Gallo Sauce',
        slug: 'nachos-with-guacamole-cheddar-cheese-and-pico-de-gallo-sauce'
      },
      de: {
        description: '',
        title: 'Nachos mit Guacamole, Cheddar und Pico de Gallo',
        slug: 'nachos-mit-guacamole-cheddar-und-pico-de-gallo'
      },
      nb: {
        description: '',
        title: 'Nachos med guacamole, Cheddar ost og "pico de gallo"',
        slug: 'nachos-med-guacamole-cheddar-ost-og-pico-de-gallo'
      },
      da: {
        description: '',
        title: 'Nachos med guacamole, cheddar-ost og pico-de-gallo-tomatsalat',
        slug: 'nachos-med-guacamole-cheddar-ost-og-pico-de-gallo-tomatsalat'
      },
      sv: {
        description: '',
        title: 'Nachos med Guacamole, Cheddarost och "Pico de gallo"',
        slug: 'nachos-med-guacamole-cheddarost-och-pico-de-gallo'
      },
      fr: {
        description: '',
        title:
          'Nachos accompagnés de guacamole, de fromage cheddar et d’une sauce pico de gallo (sauce mexicaine)',
        slug:
          'nachos-accompagnes-de-guacamole-de-fromage-cheddar-et-d-une-sauce-pico-de-gallo'
      },
      nl: {
        description: '',
        title:
          'Nachos met guacamole, Cheddar en pico de gallo (Mexicaanse saus)',
        slug: 'nachos-met-guacamole-cheddar-en-pico-de-gallo'
      }
    },
    price: { amount: '10.95' },
    number: '12'
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
  'item->product->meals->pulled-pork-tacos-14': {
    id: 'item->product->meals->pulled-pork-tacos-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->egg-9'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
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
        title:
          'Tacos de cerdo ("pulled pork") a baja temperatura confitado (3 unidades)',
        slug: 'tacos-de-cerdo'
      },
      en: {
        description: '',
        title:
          'Pulled Pork Tacos, roasted at low temperature and confitted (3 pieces)',
        slug: 'pulled-pork-tacos'
      },
      de: {
        description: '',
        title:
          'Häppchen vom Schwein („Pulled Pork“) Tacos bei niedriger Temperatur confiert (3 Stück)',
        slug: 'happchen-vom-schwein-tacos'
      },
      nb: {
        description: '',
        title: 'Tacos av pulled pork, konfitert på lav temperatur (3 stk.)',
        slug: 'tacos-av-pulled-pork'
      },
      da: {
        description: '',
        title: 'Tacos med "pulled pork" konfiteret ved lav temperatur (3 stk.)',
        slug: 'tacos-med-pulled-pork'
      },
      sv: {
        description: '',
        title:
          'Tacos av "pulled pork" Konfiterade på låg temperatur (3 stycken)',
        slug: 'tacos-av-pulled-pork'
      },
      fr: {
        description: '',
        title:
          'Tacos de cochon ("pulled pork") confit à basse température (3 morceaux)',
        slug: 'tacos-de-cochon'
      },
      nl: {
        description: '',
        title:
          'Tacos av gekonfijt varkensvlees bereid op lage temperatuur (3 stuks)',
        slug: 'tacos-av-gekonfijt-varkensvlees-bereid'
      }
    },
    price: { amount: '12.50' },
    number: '13'
  } as Product,

  ///// meals->salads->
  'item->product->meals->som-tam-salad-1': {
    id: 'item->product->meals->som-tam-salad-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: 'image->item->product->som-tam-salad-1',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->crustaceans-2',
      'allergenic->fish-1',
      'allergenic->peanuts-6'
    ],
    selectableAllergens: [
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
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
        description:
          '(Papaya verde, judías verdes, tomate cherry, gambas cocidas, manises) y salsa destilada de pescado',
        title: 'Ensalada Som Tam',
        slug: 'ensalada-som-tam'
      },
      en: {
        description:
          '(Green Papaya, Cherry Tomato, Boiled Prawns, Peanuts) and Distilled Fish Sauce',
        title: 'Som Tam Salad',
        slug: 'som-tam-salad'
      },
      de: {
        description:
          '(Grüne Papaya, Kirschtomaten, gekochte Garnelen, Erdnüsse) destillierte Fischsauce',
        title: 'Salat Som Tam',
        slug: 'salat-som-tam'
      },
      nb: {
        description:
          '(grønn papaya, cherry tomat, kokte reker, peanøtter)  med destillert fiskesaus',
        title: 'Som Tam Salat ',
        slug: 'som-tam-salat'
      },
      da: {
        description:
          '(grøn papaya, cherrytomat, kogte rejer, jordnødder) med destilleret fiskesauce',
        title: 'Som Tam-salat',
        slug: 'som-tam-salat'
      },
      sv: {
        description:
          '(Grön Papaya, Körsbärstomat, Kokta räkor, Jordnötter) Destillerad fisksås',
        title: 'Som Tam Salad',
        slug: 'som-tam-salad'
      },
      fr: {
        description:
          '(papaye verte, tomate cerise, crevettes cuites, manises) et sauce de poisson distillée',
        title: 'Salade Som Tam',
        slug: 'salade-som-tam'
      },
      nl: {
        description:
          '(Groene papaya, cherrytomaat, gebakken gamba’s, pinda’s) met vissaus',
        title: 'Som Tam Salade',
        slug: 'som-tam-salade'
      }
    },
    price: { amount: '10.50' },
    number: '1'
  } as Product,
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
  'item->product->meals->canarian-beetroot-carpaccio-3': {
    id: 'item->product->meals->canarian-beetroot-carpaccio-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->mustard-4',
      'allergenic->nuts-7',
      'allergenic->dairy-products-10'
    ],
    selectableAllergens: [
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->celery-14',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
      'allergenic->sesame-8',
      'allergenic->egg-9',
      'allergenic->lupins-11',
      'allergenic->soya-12',
      'allergenic->moluscs-13'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Carpaccio de remolacha Canaria con salsa de yogur al curry, almendras picadas, sus brotes y vinagreta de fruta de la pasión',
        slug: 'carpaccio-de-remolacha-canaria'
      },
      en: {
        description: '',
        title:
          'Canarian Beet Carpaccio with Curry Yogurt Sauce, chopped Almonds, Sprouts and Passion Fruit Vinaigrette',
        slug: 'canarian-beetroot-carpaccio'
      },
      de: {
        description: '',
        title:
          'Carpaccio von der kanarischen roten Beete an einer Joghurt-Curry-Sauce, gehackten Mandeln, Sprossen und einer Vinaigrette aus Passionsfrucht',
        slug: 'carpaccio-von-der-kanarischen-roten-beete'
      },
      nb: {
        description: '',
        title:
          'Kanarisk rødbetecarpaccio med karriyoghurt saus, hakkede mandler, spirer og pasjonsfrukt vinaigrette',
        slug: 'kanarisk-rodbetecarpaccio'
      },
      da: {
        description: '',
        title:
          'Carpaccio med kanarisk roe og karryyoghurtsovs, hakkede mandler, nye grøntsagsskud og vinaigrette med passionsfrugt',
        slug: 'carpaccio-med-kanarisk-roe'
      },
      sv: {
        description: '',
        title:
          'Kanarisk rödbetskarpaccio med curryyoghurtsås, hackade mandlar, deras groddar och passionsfruktvinägrett pasión',
        slug: 'kanarisk-rodbetskarpaccio'
      },
      fr: {
        description: '',
        title:
          'Carpaccio de betterave des Canaries accompagné de sauce au yaourt au curry, amandes effilées, jeunes pousses et vinaigrette aux fruits de la passion',
        slug: 'carpaccio-de-betterave-des-canaries'
      },
      nl: {
        description: '',
        title:
          'Canarische bietencarpaccio met kerrie-yoghurtsaus, gehakte amandelen, kiemgroenten en passievruchtvinaigrette',
        slug: 'canarische-bietencarpaccio'
      }
    },
    price: { amount: '9.50' },
    number: '3'
  } as Product,
  'item->product->meals->by-rocio-poke-boll-caesar-4': {
    id: 'item->product->meals->by-rocio-poke-boll-caesar-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->mustard-4',
      'allergenic->egg-9',
      'allergenic->dairy-products-10'
    ],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
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
        title: 'Poke Bowl-Cesar By Rocio',
        slug: 'poke-bowl-cesar-by-rocio'
      },
      en: {
        description: '',
        title: 'By Rocio Poke Boll Caesar',
        slug: 'by-rocio-poke-boll-caesar'
      },
      de: {
        description: '',
        title: 'Poke Bowl Caesar By Rocio',
        slug: 'poke-bowl-caesar-by-rocio'
      },
      nb: {
        description: '',
        title: 'Poke Bowl-Cesar By Rocio',
        slug: 'poke-bowl-cesar-by-rocio'
      },
      da: {
        description: '',
        title: 'Poke Bowl-cæsarsalat By Rocio',
        slug: 'poke-bowl-caesarsalat-by-rocio'
      },
      sv: {
        description: '',
        title: 'Poke Bowl-Cesar By Rocio',
        slug: 'poke-bowl-cesar-by-rocio'
      },
      fr: {
        description: '',
        title: 'Poke Bowl-César By Rocio',
        slug: 'poke-bowl-cesar-by-rocio'
      },
      nl: {
        description: '',
        title: 'Caeser-Poke Bowl By Rocio',
        slug: 'caeser-poke-bowl-by-rocio'
      }
    },
    price: { amount: '11.50' },
    number: '4'
  } as Product,
  'item->product->meals->piquillo-peppers-salmorejo-5': {
    id: 'item->product->meals->piquillo-peppers-salmorejo-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: [
      'allergenic->fish-1',
      'allergenic->sulphites-5',
      'allergenic->nuts-7',
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
      'allergenic->soya-12',
      'allergenic->moluscs-13'
    ],
    displayInfo: {
      es: {
        description: '',
        title:
          'Salmorejo de pimiento de piquillo con burrata inyectada de pesto, tartar de tomate y aceite de cebollino',
        slug: 'salmorejo-de-pimiento'
      },
      en: {
        description: '',
        title:
          'Piquillo Peppers Salmorejo with Burrata injected with Pesto, Tomato Tartar and Chive Oil',
        slug: 'piquillo-peppers-salmorejo'
      },
      de: {
        description: '',
        title:
          'Salmorejo von der Piquillo-Paprika mit Burrata eingespritzt mit Pesto, Tartar von der Tomate und Schnittlauchöl',
        slug: 'salmorejo-von-der-piquillo-paprika'
      },
      nb: {
        description: '',
        title:
          'Salmorejo (kald suppe) av Piquillo-paprika med burrataost fyllt med pesto, tomattartar og gressløkolje',
        slug: 'salmorejo-kald-suppe-av-piquillo-paprika'
      },
      da: {
        description: '',
        title:
          'Kold tomatcreme Salmorejo med fyldte peberfrugter med burrata-friskost og pesto, tomattartar og purløgsolie',
        slug: 'kold-tomatcreme-salmorejo'
      },
      sv: {
        description: '',
        title:
          'Salmorejo (kall soppa) med Piquillo-paprika och burrata-ost fylld med pesto, tomattartar och gräslöksolja',
        slug: 'salmorejo-kall-soppa-med-piquillo-paprika'
      },
      fr: {
        description: '',
        title:
          'Salmorejo de poivrons du Piquillo et burrata avec injection de pesto, tartare de tomates et huile de ciboulette',
        slug: 'salmorejo-de-poivrons-du-piquillo'
      },
      nl: {
        description: '',
        title:
          'Salmorejo koude soep van pompoenpeper met burrata, met pesto, tomatentartaar en bieslookolie',
        slug: 'salmorejo-koude-soep-van-pompoenpeper'
      }
    },
    price: { amount: '14.00' },
    number: '5'
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
  'item->product->meals->fried-chickpeas-5': {
    id: 'item->product->meals->fried-chickpeas-5',
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
        title: 'Garbanzos fritos al curry con berenjena (vegano) ',
        slug: 'garbanzos-fritos'
      },
      en: {
        description: '',
        title: 'Fried Chickpeas with Curry and Eggplant (Vegan)',
        slug: 'fried-chickpeas'
      },
      de: {
        description: '',
        title: 'Frittierte Kichererbsen mit Curry und Auberginen (vegan)',
        slug: 'frittierte-kichererbsen'
      },
      nb: {
        description: '',
        title: 'Kikerter fritert i karry med auberginer (vegansk)',
        slug: 'Kikerter fritert'
      },
      da: {
        description: '',
        title: 'Sauterede karrykikærter med aubergine (vegansk ret)',
        slug: 'sauterede-karrykikaerter'
      },
      sv: {
        description: '',
        title: 'Kikärter friterade i curry med auberginer (vegansk rätt)',
        slug: 'kikarter-friterade'
      },
      fr: {
        description: '',
        title: 'Pois chiches sautés au curry, aubergines (vegan)',
        slug: 'pois-chiches-sautes'
      },
      nl: {
        description: '',
        title: 'In kerrie gebakken kikkererwten met aubergine (vegan)',
        slug: 'in-kerrie-gebakken-kikkererwten'
      }
    },
    price: { amount: '11.50' },
    number: '5'
  } as Product,
  'item->product->meals->our-chef-s-gazpacho-6': {
    id: 'item->product->meals->our-chef-s-gazpacho-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->egg-9'],
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
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Gazpacho del Chef y su guarnición',
        slug: 'gazpacho-del-chef'
      },
      en: {
        description: '',
        title: `Our Chef's Gazpacho with its Garnish`,
        slug: 'our-chef-s-gazpacho'
      },
      de: {
        description: '',
        title: 'Gazpacho nach Art des Küchenchefs und ihre Beilagen',
        slug: 'gazpacho-nach-art-des-kuchenchefs'
      },
      nb: {
        description: '',
        title: 'Kokkens gazpacho (kald suppe) med garnityr',
        slug: 'kokkens-gazpacho'
      },
      da: {
        description: '',
        title: 'Chefkokkens gazpacho med garniture',
        slug: 'chefkokkens-gazpacho'
      },
      sv: {
        description: '',
        title: 'Kockens gazpacho (kall soppa) med garnityr',
        slug: 'kockens-gazpacho'
      },
      fr: {
        description: '',
        title: 'Gaspacho du Chef et son accompagnement',
        slug: 'gaspacho-du-chef'
      },
      nl: {
        description: '',
        title: `Chef's gazpacho en zijn garnituur`,
        slug: 'chef-s-gazpacho'
      }
    },
    price: { amount: '6.90' },
    number: '6'
  } as Product,

  //// meals->prime-cut-meats->
  'item->product->meals->prime-cut-meats->betanzos-sliced-strip-steak-with-the-chef-s-garnis-1': {
    id:
      'item->product->meals->prime-cut-meats->betanzos-sliced-strip-steak-with-the-chef-s-garnis-1',
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
        title: 'Trinchado Lomo bajo de Betanzos con guarnición del Chef',
        slug: 'trinchado-lomo-bajo-de-betanzos'
      },
      en: {
        description: '',
        title: `Betanzos sliced Strip Steak with the Chef's Garnish`,
        slug: 'betanzos-sliced-strip-steak-with-the-chef-s-garnis'
      },
      de: {
        description: '',
        title:
          'Tranchierter Hochrücken aus Betanzos mit Beilagen des Küchenchefs',
        slug: 'tranchierter-hochrucken-aus-betanzos'
      },
      nb: {
        description: '',
        title: 'Transjert ytrefilet fra Betanzos med kokkens garnityr',
        slug: 'transjert-ytrefilet-fra-betanzos'
      },
      da: {
        description: '',
        title: 'Betanzos kalvekødsslag med chefkokkens garniture',
        slug: 'betanzos-kalvekodsslag'
      },
      sv: {
        description: '',
        title: 'Ytterfilé från Betanzos med kockens garnityr',
        slug: 'ytterfile-fran-betanzos'
      },
      fr: {
        description: '',
        title: 'Émincé de filet de boeuf de Betanzos et accompagnement du Chef',
        slug: 'emince-de-filet-de-boeuf-de-betanzos'
      },
      nl: {
        description: '',
        title: 'Gesneden Betanzos lendenbiefstuk met garnituur van de Chef',
        slug: 'gesneden-betanzos-lendenbiefstuk'
      }
    },
    price: { amount: '20.50' },
    number: '1'
  } as Product,
  'item->product->meals->prime-cut-meats->veal-tomahawk-2': {
    id: 'item->product->meals->prime-cut-meats->veal-tomahawk-2',
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
        title: 'Tomahawk de ternera rosada (por encargo, min. 2 pers)',
        slug: 'tomahawk-de-ternera-rosada'
      },
      en: {
        description: '',
        title: 'Veal Tomahawk (Order in advance.  Minimum 2 persons)',
        slug: 'veal-tomahawk'
      },
      de: {
        description: '',
        title:
          'Tomahawk vom rosa Kalbfleisch (auf Vorbestellung, mindestens 2 Personen)',
        slug: 'tomahawk-vom-rosa-kalbfleisch'
      },
      nb: {
        description: '',
        title: 'Tomahawk fra ungdyr (på bestilling, min. 2 pers.)',
        slug: 'tomahawk-fra-ungdyr'
      },
      da: {
        description: '',
        title: 'Kalvekøds-tomahawk (efter bestilling, 2 per. Min.)',
        slug: 'kalvekods-tomahawk'
      },
      sv: {
        description: '',
        title: 'Tomahawk av kalvkött (på beställning, min. 2 pers.)',
        slug: 'tomahawk-av-kalvkott'
      },
      fr: {
        description: '',
        title: 'Tomahawk de veau rosé (sur commande, min. 2 pers)',
        slug: 'tomahawk-de-veau-rose'
      },
      nl: {
        description: '',
        title: 'Tomahawk met rosé kalfsvlees (op aanvraag, min. 2 personen)',
        slug: 'tomahawk-met-rose-kalfsvlees'
      }
    },
    price: { amount: '70.00' },
    number: '2'
  } as Product,
  'item->product->meals->prime-cut-meats->txoguitxu-beef-entrecote-3': {
    id: 'item->product->meals->prime-cut-meats->txoguitxu-beef-entrecote-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
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
        title: 'Entrecot de vaca Txoguitxu',
        slug: 'entrecot-de-vaca-txoguitxu'
      },
      en: {
        description: '',
        title: 'Txoguitxu Beef Entrecôte',
        slug: 'txoguitxu-beef-entrecote'
      },
      de: {
        description: '',
        title: 'Entrecôte von Txoguitxu-Rind',
        slug: 'entrecôte-von-txoguitxu-rind'
      },
      nb: {
        description: '',
        title: 'Entrecot av storfe fra Txoguitxu',
        slug: 'entrecot-av-storfe-fra-txoguitxu'
      },
      da: {
        description: '',
        title: 'Txoguitxu entrecote',
        slug: 'txoguitxu-entrecote'
      },
      sv: {
        description: '',
        title: 'Entrecôte av oxkött från Txoguitxu',
        slug: 'entrecote-av-oxkott-fran-txoguitxu'
      },
      fr: {
        description: '',
        title: 'Entrecôte de bœuf Txoguitxu',
        slug: 'entrecote-de-boeuf-txoguitxu'
      },
      nl: {
        description: '',
        title: 'Txoguitxu runderentrecote',
        slug: 'txoguitxu-runderentrecote'
      }
    },
    price: { amount: '18.75' },
    number: '3'
  } as Product,
  'item->product->meals->prime-cut-meats->txoguitxu-t-bone-steak-4': {
    id: 'item->product->meals->prime-cut-meats->txoguitxu-t-bone-steak-4',
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
        title: 'T-bone de vaca Txoguitxu',
        slug: 't-bone-de-vaca-txoguitxu'
      },
      en: {
        description: '',
        title: 'Txoguitxu T-Bone Steak',
        slug: 'txoguitxu-t-bone-steak'
      },
      de: {
        description: '',
        title: 'T-Bone-Steak von Txoguitxu-Rind',
        slug: 't-bone-steak-von-txoguitxu-rind'
      },
      nb: {
        description: '',
        title: 'T-bone av storfe fra Txoguitxu',
        slug: 't-bone-av-storfe-fra-txoguitxu'
      },
      da: {
        description: '',
        title: 'Txoguitxu T-bonesteak',
        slug: 'txoguitxu-t-bonesteak'
      },
      sv: {
        description: '',
        title: 'T-bone av oxkött Txoguitxu',
        slug: 't-bone-av-oxkött-txoguitxu'
      },
      fr: {
        description: '',
        title: 'T-bone de bœuf Txoguitxu',
        slug: 't-bone-de-bœuf-txoguitxu'
      },
      nl: {
        description: '',
        title: 'Txoguitxu rundvlees T-bone',
        slug: 'txoguitxu-rundvlees-t-bone'
      }
    },
    price: { amount: '38.50' },
    number: '4'
  } as Product,

  //// meals->fresh-pasta->
  'item->product->meals->fresh-pasta->seafood-tagliolini-1': {
    id: 'item->product->meals->fresh-pasta->seafood-tagliolini-1',
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
        description: '',
        title: 'Tagliolini de frutos del Mar',
        slug: 'tagliolini-de-frutos-del-mar'
      },
      en: {
        description: '',
        title: 'Seafood Tagliolini',
        slug: 'seafood-tagliolini'
      },
      de: {
        description: '',
        title: 'Tagliolini mit Meeresfrüchten',
        slug: 'tagliolini-mit-meeresfruchten'
      },
      nb: {
        description: '',
        title: 'Tagliolini-pasta med sjømat',
        slug: 'tagliolini-pasta-med-sjomat'
      },
      da: {
        description: '',
        title: 'Tagliolini Pasta med havets frugter',
        slug: 'tagliolini-pasta-med-havets-frugter'
      },
      sv: {
        description: '',
        title: 'Tagliolini-pasta med havets frukter',
        slug: 'tagliolini-pasta-med-havets-frukter'
      },
      fr: {
        description: '',
        title: 'Tagliolini aux fruits de mer',
        slug: 'tagliolini-aux-fruits-de-mer'
      },
      nl: {
        description: '',
        title: 'Tagliolini met zeevruchten',
        slug: 'tagliolini-met-zeevruchten'
      }
    },
    price: { amount: '13.95' },
    number: '1'
  } as Product,
  'item->product->meals->fresh-pasta->tagliolini-bolognaise-2': {
    id: 'item->product->meals->fresh-pasta->tagliolini-bolognaise-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: false,
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
        description: '',
        title: 'Tagliolini Boloñesa',
        slug: 'tagliolini-bolonesa'
      },
      en: {
        description: '',
        title: 'Tagliolini  Bolognaise',
        slug: 'tagliolini-bolognaise'
      },
      de: {
        description: '',
        title: 'Tagliolini Bolognese',
        slug: 'tagliolini-bolognese'
      },
      nb: {
        description: '',
        title: 'Tagliolini med bolognese',
        slug: 'tagliolini-med-bolognese'
      },
      da: {
        description: '',
        title: 'Tagliolini med kødsovs',
        slug: 'tagliolini-med-kodsovs'
      },
      sv: {
        description: '',
        title: 'Tagliolini med bolognese',
        slug: 'tagliolini-med-bolognese'
      },
      fr: {
        description: '',
        title: 'Tagliolini Bolognese',
        slug: 'tagliolini-bolognese'
      },
      nl: {
        description: '',
        title: 'Tagliolini bolognese',
        slug: 'tagliolini-bolognese'
      }
    },
    price: { amount: '9.50' },
    number: '2'
  } as Product,
  'item->product->meals->fresh-pasta->tagliolini-carbonara-3': {
    id: 'item->product->meals->fresh-pasta->tagliolini-carbonara-3',
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
        description: '',
        title: 'Tagliolini Carbonara',
        slug: 'tagliolini-carbonara'
      },
      en: {
        description: '',
        title: 'Tagliolini Carbonara',
        slug: 'tagliolini-carbonara'
      },
      de: {
        description: '',
        title: 'Tagliolini Carbonara',
        slug: 'tagliolini-carbonara'
      },
      nb: {
        description: '',
        title: 'Tagliolini med carbonarasaus',
        slug: 'tagliolini-med-carbonarasaus'
      },
      da: {
        description: '',
        title: 'Tagliolini med carbonara',
        slug: 'tagliolini-med-carbonara'
      },
      sv: {
        description: '',
        title: 'Tagliolini med carbonarasås',
        slug: 'tagliolini-med-carbonarasas'
      },
      fr: {
        description: '',
        title: 'Tagliolini Carbonara',
        slug: 'tagliolini-carbonara'
      },
      nl: {
        description: '',
        title: 'Tagliolini Carbonara',
        slug: 'tagliolini-carbonara'
      }
    },
    price: { amount: '9.50' },
    number: '3'
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
  'item->product->meals->mexican-iberian-pork-burger-8': {
    id: 'item->product->meals->mexican-iberian-pork-burger-8',
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
        title:
          'Hamburguesa mexicana de carne cochino Ibérico, queso Cheddar, mayonesa de kimchi, guacamole y cebolla morada frita',
        slug: 'hamburguesa-mexicana-carne-cochino-iberico'
      },
      en: {
        description: '',
        title:
          'Mexican Iberian Pork Hamburger, Cheddar Cheese, Kimchi Mayonnaise, Guacamole and fried Red Onion',
        slug: 'mexican-iberian-pork-burger'
      },
      de: {
        description: '',
        title:
          'Mexikanischer Hamburger vom iberischen Schwein, Cheddar, Kimchi-Mayonnaise, Guacamole und frittierten roten Zwiebeln',
        slug: 'mexikanischer-hamburger-vom-iberischen-schwein'
      },
      nb: {
        description: '',
        title:
          'Meksikansk burger av iberisk svinekjøtt, cheddarost, kimchimajones, guacamole og stekt rød løk',
        slug: 'meksikansk-burger-av-iberisk-svinekjott'
      },
      da: {
        description: '',
        title:
          'Mexikansk hamburger med iberisk pattegrisekød, cheddarost, kimchi-mayonaisse, guacamole og stegte rødløg',
        slug: 'mexikansk-hamburger-med-iberisk-pattegrisekod'
      },
      sv: {
        description: '',
        title:
          'Mexikansk hamburgare av iberiskt griskött, cheddarost, kimchimajonnäs, guacamole och stekt röd lök',
        slug: 'mexikansk-burger-av-iberisk-griskott-chipotlemajonnas'
      },
      fr: {
        description: '',
        title:
          'Burger mexicain à la viande de porc ibérique, fromage Cheddar, mayonnaise au kimchi, guacamole et oignon rouge frit',
        slug: 'burger-mexicain-a-la-viande-de-porc-iberique'
      },
      nl: {
        description: '',
        title:
          'Mexicaanse hamburger met iberico-varkensvlees, Cheddar kaas, kimchi mayonaise, guacamole en gebakken rode ui',
        slug: 'Mexicaanse hamburger met iberico-varkensvlees'
      }
    },
    price: { amount: '13.95' },
    number: '8'
  } as Product,
  'item->product->meals->angus-beef-burger-9': {
    id: 'item->product->meals->angus-beef-burger-9',
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
        title:
          'Hamburguesa de carne de Angus, beicon, queso, su ensalada  y mayonesa de kimchi',
        slug: 'hamburguesa-carne-angus'
      },
      en: {
        description: '',
        title:
          'Angus Beef Hamburger, Bacon, Cheese, Salad and Kimchi Mayonnaise',
        slug: 'angus-beef-burger'
      },
      de: {
        description: '',
        title:
          'Hamburger vom Angusrind, Speck, Käse, Salat und Kimchi-Mayonnaise',
        slug: 'hamburger-vom-angusrind'
      },
      nb: {
        description: '',
        title: 'Angus biffburger, bacon, ost, salat og kimchimajones.',
        slug: 'angus-biffburger'
      },
      da: {
        description: '',
        title:
          'Hamburger med Angus-oksekød, bacon, ost, salat og  kimchi-mayonaisse',
        slug: 'hamburger-med-angus-oksekod'
      },
      sv: {
        description: '',
        title: 'Angus biffburgar, bacon,ost, sallad och kimchimajonnäs',
        slug: 'angus-biffburgar'
      },
      fr: {
        description: '',
        title:
          'Burger de bœuf Angus, bacon, fromage, salade et mayonnaise au kimchi',
        slug: 'burger-de-boeuf-angus'
      },
      nl: {
        description: '',
        title: 'Hamburger met Angusvlees, bacon, kaas, sla en kimchi mayonaise',
        slug: 'hamburger-met-angusvlees'
      }
    },
    price: { amount: '12.95' },
    number: '9'
  } as Product,
  'item->product->meals->vegan-hamburger-10': {
    id: 'item->product->meals->vegan-hamburger-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
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
        title: 'Hamburguesa vegana con su ensalada y mayonesa trufada',
        slug: 'hamburguesa-vegana'
      },
      en: {
        description: '',
        title: 'Vegan Hamburger with a Salad and Truffled Mayonnaise  ',
        slug: 'vegan-hamburger'
      },
      de: {
        description: '',
        title: 'Vegansk hamburger med salat og trøffelmajones ',
        slug: 'vegansk-hamburger'
      },
      nb: {
        description: '',
        title: 'Vegansk hamburger med salat og trøffelmajones ',
        slug: 'vegansk-hamburger'
      },
      da: {
        description: '',
        title: 'Vegansk hamburger med salat og trøffelmayonaisse',
        slug: 'vegansk-hamburger'
      },
      sv: {
        description: '',
        title: 'Vegansk hamburgare med sallad och tryffelmajonnäs',
        slug: 'vegansk-hamburgare'
      },
      fr: {
        description: '',
        title: 'Burger vegan avec salade et mayonnaise aux truffes',
        slug: 'burger-vegan'
      },
      nl: {
        description: '',
        title: 'Veganistische burger met salade en truffelmayonaise',
        slug: 'veganistische-burger'
      }
    },
    price: { amount: '10.00' },
    number: '9'
  } as Product,

  //// meals->fittings->
  'item->product->meals->fittings->chips-1': {
    id: 'item->product->meals->fittings->chips-1',
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
        title: 'Papas fritas',
        slug: 'papa-frita'
      },
      en: {
        description: '',
        title: 'Chips',
        slug: 'chips'
      },
      de: {
        description: '',
        title: 'Pommes frites',
        slug: 'pommes-frites'
      },
      nb: {
        description: '',
        title: 'Pommes frites',
        slug: 'pommes-frites'
      },
      da: {
        description: '',
        title: 'Pommes frites',
        slug: 'pommes-frites'
      },
      sv: {
        description: '',
        title: 'Pommes frites',
        slug: 'pommes-frites'
      },
      fr: {
        description: '',
        title: 'Papas Fritas (frites)',
        slug: 'frites'
      },
      nl: {
        description: '',
        title: 'Frieten',
        slug: 'frieten'
      }
    },
    price: { amount: '2.50' },
    number: '1'
  } as Product,
  'item->product->meals->fittings->wrinkled-potatoes-2': {
    id: 'item->product->meals->fittings->wrinkled-potatoes-2',
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
        description: 'Papas arrugadas',
        title: 'Papas arrugadas',
        slug: 'papa-arrugadas'
      },
      en: {
        description: '',
        title: 'Canarian Wrinkled Potatoes',
        slug: 'wrinkled-potatoes'
      },
      de: {
        description: '',
        title: 'Papas Arrugadas (Kanarische Runzelkartoffeln mit Salz)',
        slug: 'kanarische-runzelkartoffeln'
      },
      nb: {
        description: '',
        title: 'Rynkepoteter',
        slug: 'rynkepoteter'
      },
      da: {
        description: '',
        title: 'Kanariske kartofler med skræl',
        slug: 'kanariske-kartofler-med-skrael'
      },
      sv: {
        description: '',
        title: 'Skrynklig potatis',
        slug: 'skrynklig-potatis'
      },
      fr: {
        description: '',
        title: 'Papas arrugadas (pommes de terre cuites au sel)',
        slug: 'pommes-de-terre-cuites-au-sel'
      },
      nl: {
        description: '',
        title: 'Papas arrugadas (Canarisch aardappelgerecht)',
        slug: 'canarisch-aardappelgerecht'
      }
    },
    price: { amount: '2.50' },
    number: '2'
  } as Product,
  'item->product->meals->fittings->sweet-potato-fries-3': {
    id: 'item->product->meals->fittings->sweet-potato-fries-3',
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
        title: 'Batata frita',
        slug: 'batata-frita'
      },
      en: {
        description: '',
        title: 'Fried Sweet Potato',
        slug: 'sweet-potato-fries'
      },
      de: {
        description: '',
        title: 'Frittierte Süßkartoffeln',
        slug: 'Subkartoffel-pommes'
      },
      nb: {
        description: '',
        title: 'Pommes frites av søtpotet',
        slug: 'sotpotet-frites'
      },
      da: {
        description: '',
        title: 'Friturestegt sød kartoffel',
        slug: 'sod-kartoffle-frites'
      },
      sv: {
        description: '',
        title: 'Sötpotatis pommes frites',
        slug: 'stekt-sotpotatis'
      },
      fr: {
        description: '',
        title: 'Patate douce frite',
        slug: 'patate-douce-frite'
      },
      nl: {
        description: '',
        title: 'Zoete-aardappelfrieten',
        slug: 'zoete-aardappelfrieten'
      }
    },
    price: { amount: '2.50' },
    number: '3'
  } as Product,
  'item->product->meals->fittings->salad-4': {
    id: 'item->product->meals->fittings->salad-4',
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
        title: 'Buque de ensalada',
        slug: 'buque-de-ensalada'
      },
      en: {
        description: '',
        title: 'Salad Bouquet',
        slug: 'salad'
      },
      de: {
        description: '',
        title: 'Salatbouquet',
        slug: 'salatbouquet'
      },
      nb: {
        description: '',
        title: 'Salatbukett',
        slug: 'salatbukett'
      },
      da: {
        description: '',
        title: 'Salatbåd',
        slug: 'salatbad'
      },
      sv: {
        description: '',
        title: 'Sallads bukett',
        slug: 'sallads-bukett'
      },
      fr: {
        description: '',
        title: 'Bouquet de salade',
        slug: 'bouquet-de-salade'
      },
      nl: {
        description: '',
        title: 'Saladeboeket',
        slug: 'saladeboeket'
      }
    },
    price: { amount: '2.50' },
    number: '4'
  } as Product,
  'item->product->meals->fittings->basmati-rice-5': {
    id: 'item->product->meals->fittings->basmati-rice-5',
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
        title: 'Arroz basmati',
        slug: 'arroz-basmati'
      },
      en: {
        description: '',
        title: 'Basmati Rice',
        slug: 'basmati-rice'
      },
      de: {
        description: '',
        title: 'Basmatireis',
        slug: 'basmatireis'
      },
      nb: {
        description: '',
        title: 'Basmati ris',
        slug: 'basmati-ris'
      },
      da: {
        description: '',
        title: 'Basmati-ris',
        slug: 'basmati-ris'
      },
      sv: {
        description: '',
        title: 'Basmati ris',
        slug: 'basmati-ris'
      },
      fr: {
        description: '',
        title: 'Riz basmati',
        slug: 'riz-basmati'
      },
      nl: {
        description: '',
        title: 'Basmatirijst',
        slug: 'basmatirijst'
      }
    },
    price: { amount: '2.50' },
    number: '5'
  } as Product,
  'item->product->meals->fittings->ratatouille-6': {
    id: 'item->product->meals->fittings->ratatouille-6',
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
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      en: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      de: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      nb: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      da: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      sv: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      fr: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      },
      nl: {
        description: '',
        title: 'Ratatouille',
        slug: 'ratatouille'
      }
    },
    price: { amount: '2.50' },
    number: '6'
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
  'item->product->desserts->brownie-with-home-made-vanilla-ice-cream-8': {
    id: 'item->product->desserts->brownie-with-home-made-vanilla-ice-cream-8',
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
        title: 'Brownie con helado artesano de vainilla',
        slug: 'brownie-con-helado-artesano-de-vainilla'
      },
      en: {
        description: '',
        title: 'Brownie with home-made Vanilla Ice-Cream',
        slug: 'brownie-with-home-made-vanilla-ice-cream'
      },
      de: {
        description: '',
        title: 'Brownie mit hausgemachtem Vanille-Eis',
        slug: 'brownie-mit-hausgemachtem-vanille-eis'
      },
      nb: {
        description: '',
        title: 'Brownie med hjemmelavet vanilleis',
        slug: 'brownie-med-hjemmelavet-vanilleis'
      },
      da: {
        description: '',
        title: 'Brownie med hjemmelavet vanilleis',
        slug: 'brownie-med-hjemmelavet-vanilleis'
      },
      sv: {
        description: '',
        title: 'Brownie med hemlagad vaniljeglass',
        slug: 'brownie-med-hemlagad-vaniljeglass'
      },
      fr: {
        description: '',
        title: `Brownie accompagné d'une glace à la vanille de fabrication artisanale`,
        slug:
          'brownie-accompagne-d-une-glace-a-la-vanille-de-fabrication-artisanale'
      },
      nl: {
        description: '',
        title: 'Brownie met huisgemaakt vanille ijs',
        slug: 'brownie-met-huisgemaakt-vanille-ijs'
      }
    },
    price: { amount: '6.50' },
    number: '8'
  } as Product,
  'item->product->desserts->santiago-cake-with-turron-nougat-ice-cream-9': {
    id: 'item->product->desserts->santiago-cake-with-turron-nougat-ice-cream-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->dairy-products-10', 'allergenic->nuts-7'],
    selectableAllergens: [
      'allergenic->fish-1',
      'allergenic->crustaceans-2',
      'allergenic->gluten-3',
      'allergenic->mustard-4',
      'allergenic->sulphites-5',
      'allergenic->peanuts-6',
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
        title: 'Tarta de Santiago con helado de turrón',
        slug: 'tarta-de-santiago-con-helado-de-turron'
      },
      en: {
        description: '',
        title: 'Santiago Cake with Turron Nougat Ice-cream',
        slug: 'santiago-cake-with-turron-nougat-ice-cream'
      },
      de: {
        description: '',
        title: 'Santiago-Torte mit Nugateis',
        slug: 'santiago-torte-mit-nugateis'
      },
      nb: {
        description: '',
        title: 'Tarta de Santiago (mandelkake) med mandel- og honningis',
        slug: 'mandelkake'
      },
      da: {
        description: '',
        title: 'Santiago-mandelkage med turrón-mandelkonfektis',
        slug: 'santiago-mandelkage'
      },
      sv: {
        description: '',
        title: 'Tarta de Santiago (mandelkaka) med turrón-mandelglass',
        slug: 'mandelkaka'
      },
      fr: {
        description: '',
        title:
          'Tarta de Santiago (gâteau fondant aux amandes) et glace au turrón (nougat)',
        slug: 'gateau-fondant-aux-amandes'
      },
      nl: {
        description: '',
        title: 'Santiago cake met noga ijs',
        slug: 'santiago-cake-met-noga-ijs'
      }
    },
    price: { amount: '6.50' },
    number: '9'
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

  //// meals->childrens->
  'item->product->meals->childrens->spaghetti-with-tomato-and-grated-cheese-1': {
    id:
      'item->product->meals->childrens->spaghetti-with-tomato-and-grated-cheese-1',
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
        title: 'Spaguetis con tomate y queso rallado',
        slug: 'spaguetis-con-tomate-y-queso-rallado'
      },
      en: {
        description: '',
        title: 'Spaghetti with Tomato Sauce and grated Cheese',
        slug: 'spaghetti-with-tomato-sauce-and-grated-cheese'
      },
      de: {
        description: '',
        title: 'Spaghetti mit Tomatensauce und geriebenem Käse',
        slug: 'spaghetti-mit-tomate-und-geriebenem-kase'
      },
      nb: {
        description: '',
        title: 'Spaghetti med tomatsaus og revet ost',
        slug: 'spaghetti-med-tomatsaus-og-revet-ost'
      },
      da: {
        description: '',
        title: 'Spaghetti med tomatsovs og revet ost',
        slug: 'spaghetti-med-tomatsovs-og-revet-ost'
      },
      sv: {
        description: '',
        title: 'Spaghetti med tomat och riven ost',
        slug: 'spagetti-med-tomat-och-riven-ost'
      },
      fr: {
        description: '',
        title: 'Spaghetti à la tomate et fromage râpé.',
        slug: 'spaghettis-a-la-tomate-et-fromage-rape'
      },
      nl: {
        description: '',
        title: 'Spaghetti met tomaat en geraspte kaas',
        slug: 'spaghetti-met-tomaat-en-geraspte-kaas'
      }
    },
    price: { amount: '7.50' },
    number: '1'
  } as Product,
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
  'item->product->meals->childrens->hamburger-with-tomato-and-cheese-3': {
    id: 'item->product->meals->childrens->hamburger-with-tomato-and-cheese-3',
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
        title: 'Hamburguesa con tomate y queso',
        slug: 'hamburguesa-con-tomate-y-queso'
      },
      en: {
        description: '',
        title: 'Hamburger with Tomato and Cheese',
        slug: 'hamburger-with-tomato-and-cheese'
      },
      de: {
        description: '',
        title: 'Hamburger mit Tomate und Käse',
        slug: 'hamburger-mit-tomate-und-kase'
      },
      nb: {
        description: '',
        title: 'Hambuger med tomat og ost',
        slug: 'hambuger-med-tomat-og-ost'
      },
      da: {
        description: '',
        title: 'Hambuger med tomat og ost',
        slug: 'hambuger-med-tomat-og-ost'
      },
      sv: {
        description: '',
        title: 'Hamburgare med tomat och ost',
        slug: 'hamburgare-med-tomat-och-ost'
      },
      fr: {
        description: '',
        title: 'Burger à la tomate et au fromage',
        slug: 'burger-a-la-tomate-et-au-fromage'
      },
      nl: {
        description: '',
        title: 'Hamburger met tomaat en kaas',
        slug: 'hamburger-met-tomaat-en-kaas'
      }
    },
    price: { amount: '8.50' },
    number: '3'
  } as Product,
  'item->product->meals->childrens->pizza-4': {
    id: 'item->product->meals->childrens->pizza-4',
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
        title: 'Pizza',
        slug: 'pizza'
      },
      en: {
        description: '',
        title: 'Pizza',
        slug: 'pizza'
      },
      de: {
        description: '',
        title: 'Pizza',
        slug: 'pizza'
      },
      nb: {
        description: '',
        title: 'Pizza',
        slug: 'pizza'
      },
      da: {
        description: '',
        title: 'Pizza',
        slug: 'pizza'
      },
      sv: {
        description: '',
        title: 'Margarita pizza',
        slug: 'margarita-pizza'
      },
      fr: {
        description: '',
        title: 'Pizza',
        slug: 'pizza'
      },
      nl: {
        description: '',
        title: 'Pizza',
        slug: 'pizza'
      }
    },
    price: { amount: '9.50' },
    number: '4'
  } as Product,
  'item->product->meals->childrens->nuggets-with-french-fries-5': {
    id: 'item->product->meals->childrens->nuggets-with-french-fries-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->egg-9'],
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
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Nuggets con papas fritas',
        slug: 'nuggets-con-papas-fritas'
      },
      en: {
        description: '',
        title: 'Nuggets with French fries',
        slug: 'nuggets-with-french-fries'
      },
      de: {
        description: '',
        title: 'Nuggets mit pommes frites',
        slug: 'nuggets-mit-pommes-frites'
      },
      nb: {
        description: '',
        title: 'Nuggets med pommes frites',
        slug: 'nuggets-med-pommes-frites'
      },
      da: {
        description: '',
        title: 'Nuggets med pommes frites',
        slug: 'nuggets-med-pommes-frites'
      },
      sv: {
        description: '',
        title: 'Nuggets med pommes frites',
        slug: 'nuggets-med-pommes-frites'
      },
      fr: {
        description: '',
        title: 'Nuggets frites',
        slug: 'nuggets-frites'
      },
      nl: {
        description: '',
        title: 'Nuggets met frietjes',
        slug: 'nuggets-met-frietjes'
      }
    },
    price: { amount: '8.75' },
    number: '4'
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
  'item->product->meals->childrens->grilled-or-breaded-chicken-breast-7': {
    id: 'item->product->meals->childrens->grilled-or-breaded-chicken-breast-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->product->default-1',
    mainImg: '',
    hasAllergens: true,
    hasVariants: false,
    allergens: ['allergenic->gluten-3', 'allergenic->egg-9'],
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
      'allergenic->moluscs-13',
      'allergenic->celery-14'
    ],
    displayInfo: {
      es: {
        description: '',
        title: 'Pechuga de pollo a la plancha o empanada',
        slug: 'pechuga-de-pollo-a-la-plancha-o-empanada'
      },
      en: {
        description: '',
        title: 'Grilled or Breaded Chicken Breast',
        slug: 'grilled-or-breaded-chicken-breast'
      },
      de: {
        description: '',
        title: 'Hühnerbrust gegrillt oder paniert',
        slug: 'huhnerbrust-gegrillt-oder-paniert'
      },
      nb: {
        description: '',
        title: 'Stekt eller panert kyllingbryst',
        slug: 'stekt-eller-panert-kyllingbryst'
      },
      da: {
        description: '',
        title: 'Kyllingebryst med tomat og ost',
        slug: 'kyllingebryst-med-tomat-og-ost'
      },
      sv: {
        description: '',
        title: 'Stekt eller panerat kycklingbröst',
        slug: 'stekt-eller-panerat-kycklingbrost'
      },
      fr: {
        description: '',
        title: 'Filet de poulet grillé ou pané',
        slug: 'filet-de-poulet-grille-ou-pane'
      },
      nl: {
        description: '',
        title: 'Gegrilde of gepaneerde kipfilet',
        slug: 'gegrilde-of-gepaneerde-kipfilet'
      }
    },
    price: { amount: '8.50' },
    number: '7'
  } as Product,

  ///// drinks->refreshments->
  'item->product->drinks->refreshments->pepsi-1': {
    id: 'item->product->drinks->refreshments->pepsi-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      en: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      de: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      nb: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      da: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      sv: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      fr: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      },
      nl: {
        description: '',
        title: 'Pepsi',
        slug: 'pepsi'
      }
    },
    price: { amount: '2.25' },
    number: '1'
  } as Product,
  'item->product->drinks->refreshments->pepsi-light-2': {
    id: 'item->product->drinks->refreshments->pepsi-light-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      en: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      de: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      nb: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      da: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      sv: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      fr: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      },
      nl: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-light'
      }
    },
    price: { amount: '2.25' },
    number: '2'
  } as Product,
  'item->product->drinks->refreshments->pepsi-max-3': {
    id: 'item->product->drinks->refreshments->pepsi-max-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      },
      en: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      },
      de: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      },
      nb: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      },
      da: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      },
      sv: {
        description: '',
        title: 'Pepsi Light',
        slug: 'pepsi-max'
      },
      fr: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      },
      nl: {
        description: '',
        title: 'Pepsi Max',
        slug: 'pepsi-max'
      }
    },
    price: { amount: '2.25' },
    number: '3'
  } as Product,
  'item->product->drinks->refreshments->schweppes-orange-4': {
    id: 'item->product->drinks->refreshments->schweppes-orange-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Schweppes Naranja',
        slug: 'schweppes-naranja'
      },
      en: {
        description: '',
        title: 'Schweppes Orange',
        slug: 'schweppes-orange'
      },
      de: {
        description: '',
        title: 'Schweppes Orange',
        slug: 'schweppes-orange'
      },
      nb: {
        description: '',
        title: 'Schweppes Oransje',
        slug: 'schweppes-oransje'
      },
      da: {
        description: '',
        title: 'Schweppes Orange',
        slug: 'schweppes-orange'
      },
      sv: {
        description: '',
        title: 'Schweppes Orange',
        slug: 'schweppes-orange'
      },
      fr: {
        description: '',
        title: 'Schweppes Orange',
        slug: 'schweppes-orange'
      },
      nl: {
        description: '',
        title: 'Schweppes Oranje',
        slug: 'schweppes-oranje'
      }
    },
    price: { amount: '2.25' },
    number: '4'
  } as Product,
  'item->product->drinks->refreshments->schweppes-lemon-5': {
    id: 'item->product->drinks->refreshments->schweppes-lemon-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Schweppes Limón',
        slug: 'schweppes-naranja'
      },
      en: {
        description: '',
        title: 'Schweppes Lemon',
        slug: 'schweppes-lemon'
      },
      de: {
        description: '',
        title: 'Schweppes Zitrone',
        slug: 'schweppes-zitrone'
      },
      nb: {
        description: '',
        title: 'Schweppes Sitron',
        slug: 'schweppes-sitron'
      },
      da: {
        description: '',
        title: 'Schweppes Citron',
        slug: 'schweppes-citron'
      },
      sv: {
        description: '',
        title: 'Schweppes Citron',
        slug: 'schweppes-citron'
      },
      fr: {
        description: '',
        title: 'Schweppes Citron',
        slug: 'schweppes-citron'
      },
      nl: {
        description: '',
        title: 'Schweppes Citroen',
        slug: 'schweppes-citroen'
      }
    },
    price: { amount: '2.25' },
    number: '5'
  } as Product,
  'item->product->drinks->refreshments->seven-up-6': {
    id: 'item->product->drinks->refreshments->seven-up-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      en: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      de: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      nb: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      da: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      sv: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      fr: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      },
      nl: {
        description: '',
        title: 'Seven Up',
        slug: 'seven-up'
      }
    },
    price: { amount: '2.25' },
    number: '6'
  } as Product,
  'item->product->drinks->refreshments->appletiser-7': {
    id: 'item->product->drinks->refreshments->appletiser-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      en: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      de: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      nb: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      da: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      sv: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      fr: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      },
      nl: {
        description: '',
        title: 'Appletiser',
        slug: 'appletiser'
      }
    },
    price: { amount: '2.50' },
    number: '7'
  } as Product,
  'item->product->drinks->refreshments->tonic-8': {
    id: 'item->product->drinks->refreshments->tonic-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Normal y Pink)',
        title: 'Tónica',
        slug: 'tonica'
      },
      en: {
        description: '(Normal and Pink)',
        title: 'Tonic',
        slug: 'tonic'
      },
      de: {
        description: '(Normal und Pink)',
        title: 'Tonic',
        slug: 'tonic'
      },
      nb: {
        description: '(Normal og Pink)',
        title: 'Tonic',
        slug: 'tonic'
      },
      da: {
        description: '(Normal og Pink)',
        title: 'Tonic',
        slug: 'tonic'
      },
      sv: {
        description: '(Normal och Pink)',
        title: 'Tonic',
        slug: 'tonic'
      },
      fr: {
        description: '(Normal et Pink)',
        title: 'Tonique',
        slug: 'tonique'
      },
      nl: {
        description: '(Normaal en Roze)',
        title: 'Tonic',
        slug: 'tonic'
      }
    },
    price: { amount: '2.40' },
    number: '8'
  } as Product,
  'item->product->drinks->refreshments->lipton-tea-9': {
    id: 'item->product->drinks->refreshments->lipton-tea-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      en: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      de: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      nb: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      da: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      sv: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      fr: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      },
      nl: {
        description: '',
        title: 'Lipton Tea',
        slug: 'lipton-tea'
      }
    },
    price: { amount: '2.40' },
    number: '9'
  } as Product,
  'item->product->drinks->refreshments->peach-juice-10': {
    id: 'item->product->drinks->refreshments->peach-juice-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo de Melocotón',
        slug: 'zumo-de-melocoton'
      },
      en: {
        description: '',
        title: 'Peach juice',
        slug: 'peach-juice'
      },
      de: {
        description: '',
        title: 'Pfirsichsaft',
        slug: 'pfirsichsaft'
      },
      nb: {
        description: '',
        title: 'Ferskenjuice',
        slug: 'ferskenjuice'
      },
      da: {
        description: '',
        title: 'Ferskenesaft',
        slug: 'ferskenesaft'
      },
      sv: {
        description: '',
        title: 'Persikajuice',
        slug: 'persikajuice'
      },
      fr: {
        description: '',
        title: 'Jus de pêche',
        slug: 'jus-de-peche'
      },
      nl: {
        description: '',
        title: 'Perziksap',
        slug: 'perziksap'
      }
    },
    price: { amount: '2.75' },
    number: '10'
  } as Product,
  'item->product->drinks->refreshments->orange-juice-11': {
    id: 'item->product->drinks->refreshments->orange-juice-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo de Naranja',
        slug: 'zumo-de'
      },
      en: {
        description: '',
        title: 'Orange Juice',
        slug: 'orange-juice'
      },
      de: {
        description: '',
        title: 'Orangensaft',
        slug: 'orangensaft'
      },
      nb: {
        description: '',
        title: 'Appelsinjuice',
        slug: 'appelsinjuice'
      },
      da: {
        description: '',
        title: 'Appelsinjuice',
        slug: 'appelsinjuice'
      },
      sv: {
        description: '',
        title: 'Apelsinjuice',
        slug: 'apelsinjuice'
      },
      fr: {
        description: ``,
        title: `Du jus d'orange`,
        slug: 'du-jus-d-orange'
      },
      nl: {
        description: '',
        title: 'Sinaasappelsap',
        slug: 'sinaasappelsap'
      }
    },
    price: { amount: '2.75' },
    number: '11'
  } as Product,
  'item->product->drinks->refreshments->multifruit-juice-12': {
    id: 'item->product->drinks->refreshments->multifruit-juice-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo Multifrutas',
        slug: 'zumo-multifrutas'
      },
      en: {
        description: '',
        title: 'Multifruit Juice',
        slug: 'multifruit-juice'
      },
      de: {
        description: '',
        title: 'Mehrfruchtsaft',
        slug: 'mehrfruchtsaft'
      },
      nb: {
        description: '',
        title: 'Multifruktjuice',
        slug: 'multifruktjuice'
      },
      da: {
        description: '',
        title: 'Multifrugtsaft',
        slug: 'multifrugtsaft'
      },
      sv: {
        description: '',
        title: 'Multifruktjuice',
        slug: 'multifruktjuice'
      },
      fr: {
        description: '',
        title: 'Jus Multifruits',
        slug: 'jus-multifruits'
      },
      nl: {
        description: '',
        title: 'Multivruchtensap',
        slug: 'multivruchtensap'
      }
    },
    price: { amount: '2.75' },
    number: '12'
  } as Product,
  'item->product->drinks->refreshments->apple-juice-13': {
    id: 'item->product->drinks->refreshments->apple-juice-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo de Manzana',
        slug: 'zumo-de-manzana'
      },
      en: {
        description: '',
        title: 'Apple juice',
        slug: 'apple-juice'
      },
      de: {
        description: '',
        title: 'Apfelsaft',
        slug: 'apfelsaft'
      },
      nb: {
        description: '',
        title: 'Eplejuice',
        slug: 'eplejuice'
      },
      da: {
        description: '',
        title: 'Æblejuice',
        slug: 'aeblejuice'
      },
      sv: {
        description: '',
        title: 'Äppeljuice',
        slug: 'appeljuice'
      },
      fr: {
        description: '',
        title: 'Jus de pomme',
        slug: 'jus-de-pomme'
      },
      nl: {
        description: '',
        title: 'Appelsap',
        slug: 'appelsap'
      }
    },
    price: { amount: '2.75' },
    number: '13'
  } as Product,
  'item->product->drinks->refreshments->pear-pineapple-juice-14': {
    id: 'item->product->drinks->refreshments->pear-pineapple-juice-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo de Pera-Piña',
        slug: 'zumo-de-pera-pina'
      },
      en: {
        description: '',
        title: 'Pear-Pineapple Juice',
        slug: 'pear-pineapple-juice'
      },
      de: {
        description: '',
        title: 'Birnen-Ananas-Saft',
        slug: 'birnen-ananas-saft'
      },
      nb: {
        description: '',
        title: 'Pære-ananasjuice',
        slug: 'paere-ananasjuice'
      },
      da: {
        description: '',
        title: '',
        slug: 'paron-ananasjuice'
      },
      sv: {
        description: '',
        title: 'Päron-ananasjuice',
        slug: 'paron-ananasjuice'
      },
      fr: {
        description: '',
        title: 'Jus Poire-Ananas',
        slug: 'jus-poire-ananas'
      },
      nl: {
        description: '',
        title: 'Peer-Ananassap',
        slug: 'peer-ananassap'
      }
    },
    price: { amount: '2.75' },
    number: '14'
  } as Product,
  'item->product->drinks->refreshments->tomato-juice-15': {
    id: 'item->product->drinks->refreshments->tomato-juice-15',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo de Tomate',
        slug: 'zumo-de-tomate'
      },
      en: {
        description: '',
        title: 'Tomato juice',
        slug: 'tomato-juice'
      },
      de: {
        description: '',
        title: 'Tomatensaft',
        slug: 'tomatensaft'
      },
      nb: {
        description: '',
        title: 'Tomat juice',
        slug: 'tomat-juice'
      },
      da: {
        description: '',
        title: 'Tomat juice',
        slug: 'tomat-juice'
      },
      sv: {
        description: '',
        title: 'Tomat juice',
        slug: 'tomat-juice'
      },
      fr: {
        description: '',
        title: 'Jus de tomate',
        slug: 'jus-de-tomate'
      },
      nl: {
        description: '',
        title: 'Tomatensap',
        slug: 'tomatensap'
      }
    },
    price: { amount: '2.75' },
    number: '15'
  } as Product,
  'item->product->drinks->refreshments->mineral-water-16': {
    id: 'item->product->drinks->refreshments->mineral-water-16',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Agua mineral',
        slug: 'agua-mineral'
      },
      en: {
        description: '',
        title: 'Mineral Water',
        slug: 'mineral-water'
      },
      de: {
        description: '',
        title: 'Wasser',
        slug: 'wasser'
      },
      nb: {
        description: '',
        title: 'Mineralvann',
        slug: 'mineralvann'
      },
      da: {
        description: '',
        title: 'Mineralvand',
        slug: 'mineralvand'
      },
      sv: {
        description: '',
        title: 'Mineral vatten',
        slug: 'mineral-vatten'
      },
      fr: {
        description: '',
        title: 'Eau minérale',
        slug: 'eau-minerale'
      },
      nl: {
        description: '',
        title: 'Water',
        slug: 'water'
      }
    },
    price: { amount: '1.60' },
    number: '16'
  } as Product,
  'item->product->drinks->refreshments->soda-water-17': {
    id: 'item->product->drinks->refreshments->soda-water-17',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Agua con Gas',
        slug: 'agua-con-gas'
      },
      en: {
        description: '',
        title: 'Soda water',
        slug: 'soda-water'
      },
      de: {
        description: '',
        title: 'Mineralwasser',
        slug: 'mineralwasser'
      },
      nb: {
        description: '',
        title: 'Sprudlevann',
        slug: 'sprudlevann'
      },
      da: {
        description: '',
        title: 'Sodavand',
        slug: 'sodavand'
      },
      sv: {
        description: '',
        title: 'Kolsyrat vatten',
        slug: 'kolsyrat-vatten'
      },
      fr: {
        description: '',
        title: 'Eau gazeuse',
        slug: 'eau-gazeuse'
      },
      nl: {
        description: '',
        title: 'Mineraalwater',
        slug: 'mineraalwater'
      }
    },
    price: { amount: '2.00' },
    number: '17'
  } as Product,
  'item->product->drinks->refreshments->soda-jug-18': {
    id: 'item->product->drinks->refreshments->soda-jug-18',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Jarra de Refresco',
        slug: 'jarra-de-refresco'
      },
      en: {
        description: '',
        title: 'Soda Jug',
        slug: 'soda-jug'
      },
      de: {
        description: '',
        title: 'Limonade',
        slug: 'limonade'
      },
      nb: {
        description: '',
        title: 'Bruskanne',
        slug: 'bruskanne'
      },
      da: {
        description: '',
        title: 'Sodakande',
        slug: 'sodakande'
      },
      sv: {
        description: '',
        title: 'Soda kanna',
        slug: 'soda-kanna'
      },
      fr: {
        description: '',
        title: 'Pot à soda',
        slug: 'pot-a-soda'
      },
      nl: {
        description: '',
        title: 'Frisdrankkan',
        slug: 'frisdrankkan'
      }
    },
    price: { amount: '3.50' },
    number: '18'
  } as Product,
  'item->product->drinks->refreshments->natural-orange-juice-19': {
    id: 'item->product->drinks->refreshments->natural-orange-juice-19',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zumo de naranja natural',
        slug: 'zumo-de-naranja-natural'
      },
      en: {
        description: '',
        title: 'Natural orange juice',
        slug: 'natural-orange-juice'
      },
      de: {
        description: '',
        title: 'Natürlicher Orangensaft',
        slug: 'naturlicher-orangensaft'
      },
      nb: {
        description: '',
        title: 'Naturlig appelsinjuice',
        slug: 'naturlig-appelsinjuice'
      },
      da: {
        description: '',
        title: 'Naturlig appelsinjuice',
        slug: 'naturlig-appelsinjuice'
      },
      sv: {
        description: '',
        title: 'Naturlig apelsinjuice',
        slug: 'naturlig-apelsinjuice'
      },
      fr: {
        description: '',
        title: `Jus d'orange naturel`,
        slug: 'jus-d-orange-naturel'
      },
      nl: {
        description: '',
        title: 'Natuurlijk sinaasappelsap',
        slug: 'natuurlijk-sinaasappelsap'
      }
    },
    price: { amount: '3.50' },
    number: '19'
  } as Product,
  'item->product->drinks->refreshments->perrier-20': {
    id: 'item->product->drinks->refreshments->perrier-20',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pierrer',
        slug: 'pierrer'
      },
      en: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      },
      de: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      },
      nb: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      },
      da: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      },
      sv: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      },
      fr: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      },
      nl: {
        description: '',
        title: 'Perrier',
        slug: 'perrier'
      }
    },
    price: { amount: '2.50' },
    number: '20'
  } as Product,

  ///// drinks->coffee-shop->
  'item->product->drinks->coffee-shop->black-coffe-or-expresso-1': {
    id: 'item->product->drinks->coffee-shop->black-coffe-or-expresso-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Café solo o expresso',
        slug: 'expresso'
      },
      en: {
        description: '',
        title: 'Black coffe or expresso',
        slug: 'black-coffe-or-expresso'
      },
      de: {
        description: '',
        title: 'Schwarzer Kaffee oder Espresso',
        slug: 'schwarzer-kaffee-oder-espresso'
      },
      nb: {
        description: '',
        title: 'Svart kaffe eller espresso',
        slug: 'svart-kaffe-eller-espresso'
      },
      da: {
        description: '',
        title: 'Sort kaffe eller espresso',
        slug: 'sort-kaffe-eller-espresso'
      },
      sv: {
        description: '',
        title: 'Svart kaffe eller espresso',
        slug: 'svart-kaffe-eller-espresso'
      },
      fr: {
        description: '',
        title: 'Café noir ou expresso',
        slug: 'cafe-noir-ou-expresso'
      },
      nl: {
        description: '',
        title: 'Alleen koffie of espresso',
        slug: 'alleen-koffie-of-espresso'
      }
    },
    price: { amount: '1.40' },
    number: '1'
  } as Product,
  'item->product->drinks->coffee-shop->cut-coffee-2': {
    id: 'item->product->drinks->coffee-shop->cut-coffee-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Café cortado',
        slug: 'cafe-cortado'
      },
      en: {
        description: '',
        title: 'Cut coffee',
        slug: 'cut-coffee'
      },
      de: {
        description: '',
        title: 'Kaffee schneiden',
        slug: 'kaffee-schneiden'
      },
      nb: {
        description: '',
        title: 'Kutt kaffe',
        slug: 'kutt-kaffe'
      },
      da: {
        description: '',
        title: 'Skær kaffe',
        slug: 'skaer-kaffe'
      },
      sv: {
        description: '',
        title: 'Skär kaffe',
        slug: 'skar-kaffe'
      },
      fr: {
        description: '',
        title: 'Café noisette',
        slug: 'cafe-noisette'
      },
      nl: {
        description: '',
        title: 'Koffie snijden',
        slug: 'koffie-snijden'
      }
    },
    price: { amount: '1.40' },
    number: '2'
  } as Product,
  'item->product->drinks->coffee-shop->coffee-with-milk-3': {
    id: 'item->product->drinks->coffee-shop->coffee-with-milk-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Café con leche',
        slug: 'cafe-con-leche'
      },
      en: {
        description: '',
        title: 'Coffee with milk',
        slug: 'coffee-with-milk'
      },
      de: {
        description: '',
        title: 'Kaffee mit Milch',
        slug: 'kaffee-mit-milch'
      },
      nb: {
        description: '',
        title: 'Kaffe med melk',
        slug: 'kaffe-med-melk'
      },
      da: {
        description: '',
        title: 'Kaffe med mælk',
        slug: 'kaffe-med-maelk'
      },
      sv: {
        description: '',
        title: 'Kaffe med mjölk',
        slug: 'kaffe-med-mjolk'
      },
      fr: {
        description: '',
        title: 'Café au lait',
        slug: 'cafe-au-lait'
      },
      nl: {
        description: '',
        title: 'Koffie met melk',
        slug: 'koffie-met-melk'
      }
    },
    price: { amount: '2.00' },
    number: '3'
  } as Product,
  'item->product->drinks->coffee-shop->coffee-with-condensed-milk-4': {
    id: 'item->product->drinks->coffee-shop->coffee-with-condensed-milk-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Café con leche condensada',
        slug: 'cafe-con-leche-condensada'
      },
      en: {
        description: '',
        title: 'Coffee with condensed milk',
        slug: 'coffee-with-condensed-milk'
      },
      de: {
        description: '',
        title: 'Kaffee mit Kondensmilch',
        slug: 'kaffee-mit-kondensmilch'
      },
      nb: {
        description: '',
        title: 'Kaffe med kondensert melk',
        slug: 'kaffe-med-kondensert-melk'
      },
      da: {
        description: '',
        title: 'Kaffe med kondenseret mælk',
        slug: 'kaffe-med-kondenseret-maelk'
      },
      sv: {
        description: '',
        title: 'Kaffe med kondenserad mjölk',
        slug: 'kaffe-med-kondenserad-mjolk'
      },
      fr: {
        description: '',
        title: 'Café au lait concentré',
        slug: 'cafe-au-lait-concentre'
      },
      nl: {
        description: '',
        title: 'Koffie met gecondenseerde melk',
        slug: 'koffie-met-gecondenseerde-melk'
      }
    },
    price: { amount: '1.40' },
    number: '4'
  } as Product,
  'item->product->drinks->coffee-shop->cola-cao-5': {
    id: 'item->product->drinks->coffee-shop->cola-cao-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      en: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      de: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      nb: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      da: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      sv: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      fr: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      },
      nl: {
        description: '',
        title: 'Cola-Cao',
        slug: 'cola-cao'
      }
    },
    price: { amount: '2.00' },
    number: '5'
  } as Product,
  'item->product->drinks->coffee-shop->cappuccino-6': {
    id: 'item->product->drinks->coffee-shop->cappuccino-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Capuchinno',
        slug: 'capuchinno'
      },
      en: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      },
      de: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      },
      nb: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      },
      da: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      },
      sv: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      },
      fr: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      },
      nl: {
        description: '',
        title: 'Cappuccino',
        slug: 'cappuccino'
      }
    },
    price: { amount: '3.00' },
    number: '6'
  } as Product,
  'item->product->drinks->coffee-shop->irish-coffee-7': {
    id: 'item->product->drinks->coffee-shop->irish-coffee-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Café Irlandés',
        slug: 'cafe-irlandes'
      },
      en: {
        description: '',
        title: 'Irish coffee',
        slug: 'irish-coffee'
      },
      de: {
        description: '',
        title: 'Irischer Kaffee',
        slug: 'irischer-kaffee'
      },
      nb: {
        description: '',
        title: 'Irsk kaffe',
        slug: 'irsk-kaffe'
      },
      da: {
        description: '',
        title: 'Irsk kaffe',
        slug: 'irsk-kaffe'
      },
      sv: {
        description: '',
        title: 'Irish coffee',
        slug: 'irish-coffee'
      },
      fr: {
        description: '',
        title: 'Café Irlandais',
        slug: 'cafe-irlandais'
      },
      nl: {
        description: '',
        title: 'Ierse koffie',
        slug: 'ierse-koffie'
      }
    },
    price: { amount: '5.00' },
    number: '7'
  } as Product,
  'item->product->drinks->coffee-shop->french-coffee-8': {
    id: 'item->product->drinks->coffee-shop->french-coffee-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Café Francés',
        slug: 'cafe-frances'
      },
      en: {
        description: '',
        title: 'French coffee',
        slug: 'french-coffee'
      },
      de: {
        description: '',
        title: 'Französischer Kaffee',
        slug: 'franzosischer-kaffee'
      },
      nb: {
        description: '',
        title: 'Fransk kaffe',
        slug: 'fransk-kaffe'
      },
      da: {
        description: '',
        title: 'Fransk kaffe',
        slug: 'fransk-kaffe'
      },
      sv: {
        description: '',
        title: 'Franskt kaffe',
        slug: 'franskt-kaffe'
      },
      fr: {
        description: '',
        title: 'Café Français',
        slug: 'cafe-francais'
      },
      nl: {
        description: '',
        title: 'Franse koffie',
        slug: 'franse-koffie'
      }
    },
    price: { amount: '5.00' },
    number: '8'
  } as Product,
  'item->product->drinks->coffee-shop->infusion-9': {
    id: 'item->product->drinks->coffee-shop->infusion-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Infusión',
        slug: 'infusion'
      },
      en: {
        description: '',
        title: 'Infusion',
        slug: 'infusion'
      },
      de: {
        description: '',
        title: 'Infusion',
        slug: 'infusion'
      },
      nb: {
        description: '',
        title: 'Infusjon',
        slug: 'infusjon'
      },
      da: {
        description: '',
        title: 'Infusion',
        slug: 'infusion'
      },
      sv: {
        description: '',
        title: 'Infusion',
        slug: 'infusion'
      },
      fr: {
        description: '',
        title: 'Infusion',
        slug: 'infusion'
      },
      nl: {
        description: '',
        title: 'Infusie',
        slug: 'infusie'
      }
    },
    price: { amount: '2.00' },
    number: '9'
  } as Product,

  ///// drinks->beers->
  'item->product->drinks->beers->beer-cane-1': {
    id: 'item->product->drinks->beers->beer-cane-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Cruzcampo Especial)',
        title: 'Caña de Cerveza',
        slug: 'cana-de-cerveza'
      },
      en: {
        description: '(Cruzcampo Especial)',
        title: 'Beer Cane',
        slug: 'beer-cane'
      },
      de: {
        description: '(Cruzcampo Especial)',
        title: 'Bierstock',
        slug: 'bierstock'
      },
      nb: {
        description: '(Cruzcampo Especial)',
        title: 'Ølrør',
        slug: 'olror'
      },
      da: {
        description: '(Cruzcampo Especial)',
        title: 'Ølrør',
        slug: 'olror'
      },
      sv: {
        description: '(Cruzcampo Especial)',
        title: 'Ölrör',
        slug: 'olror'
      },
      fr: {
        description: '(Cruzcampo Especial)',
        title: 'Canne à Bière',
        slug: 'canne-a-biere'
      },
      nl: {
        description: '(Cruzcampo Especial)',
        title: 'Bierriet',
        slug: 'bierriet'
      }
    },
    price: { amount: '2.40' },
    number: '1'
  } as Product,
  'item->product->drinks->beers->beer-jar-2': {
    id: 'item->product->drinks->beers->beer-jar-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Cruzcampo Especial)',
        title: 'Jarra de Cerveza',
        slug: 'jarra-de-cerveza'
      },
      en: {
        description: '(Cruzcampo Especial)',
        title: 'Beer jar',
        slug: 'beer-jar'
      },
      de: {
        description: '(Cruzcampo Especial)',
        title: 'Bierglas',
        slug: 'bierglas'
      },
      nb: {
        description: '(Cruzcampo Especial)',
        title: 'Ølkrukke',
        slug: 'olkrukke'
      },
      da: {
        description: '(Cruzcampo Especial)',
        title: 'Ølkrukke',
        slug: 'olkrukke'
      },
      sv: {
        description: '(Cruzcampo Especial)',
        title: 'Ölburk',
        slug: 'olburk'
      },
      fr: {
        description: '(Cruzcampo Especial)',
        title: 'Carafe de bière',
        slug: 'carafe-de-biere'
      },
      nl: {
        description: '(Cruzcampo Especial)',
        title: 'Bierkruik',
        slug: 'bierkruik'
      }
    },
    price: { amount: '3.70' },
    number: '2'
  } as Product,
  'item->product->drinks->beers->cruzcampo-especial-3': {
    id: 'item->product->drinks->beers->cruzcampo-especial-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      en: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      de: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      nb: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      da: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      sv: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      fr: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      },
      nl: {
        description: '',
        title: 'Cruzcampo Especial',
        slug: 'cruzcampo-especial'
      }
    },
    price: { amount: '3.50' },
    number: '3'
  } as Product,
  'item->product->drinks->beers->el-aguila-sin-filtrar-4': {
    id: 'item->product->drinks->beers->el-aguila-sin-filtrar-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      en: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      de: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      nb: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      da: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      sv: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      fr: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      },
      nl: {
        description: '(Sin Filtrar Especial)',
        title: 'El Águila',
        slug: 'el-aguila-sin-filtrar'
      }
    },
    price: { amount: '3.50' },
    number: '4'
  } as Product,
  'item->product->drinks->beers->1906-reserva-especial-5': {
    id: 'item->product->drinks->beers->1906-reserva-especial-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      en: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      de: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      nb: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      da: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      sv: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      fr: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      },
      nl: {
        description: '(Reserva Especial)',
        title: '1906',
        slug: '1906-reserva-especial'
      }
    },
    price: { amount: '3.50' },
    number: '5'
  } as Product,
  'item->product->drinks->beers->coronita-6': {
    id: 'item->product->drinks->beers->coronita-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      en: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      de: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      nb: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      da: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      sv: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      fr: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      },
      nl: {
        description: '(Corona Extra)',
        title: 'Coronita',
        slug: 'coronita'
      }
    },
    price: { amount: '3.85' },
    number: '6'
  } as Product,
  'item->product->drinks->beers->desperados-7': {
    id: 'item->product->drinks->beers->desperados-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      en: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      de: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      nb: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      da: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      sv: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      fr: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      },
      nl: {
        description: 'Tequila Flavoured Beer',
        title: 'Desperados',
        slug: 'desperados'
      }
    },
    price: { amount: '3.50' },
    number: '7'
  } as Product,
  'item->product->drinks->beers->heineken-8': {
    id: 'item->product->drinks->beers->heineken-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      en: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      de: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      nb: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      da: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      sv: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      fr: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      },
      nl: {
        description: 'Pure Malt Lager',
        title: 'Heineken',
        slug: 'heineken'
      }
    },
    price: { amount: '2.75' },
    number: '8'
  } as Product,
  'item->product->drinks->beers->judas-9': {
    id: 'item->product->drinks->beers->judas-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      en: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      de: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      nb: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      da: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      sv: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      fr: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      },
      nl: {
        description: '',
        title: 'Judas',
        slug: 'judas'
      }
    },
    price: { amount: '4.00' },
    number: '9'
  } as Product,
  'item->product->drinks->beers->mort-subite-10': {
    id: 'item->product->drinks->beers->mort-subite-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      en: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      de: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      nb: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      da: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      sv: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      fr: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      },
      nl: {
        description: '',
        title: 'Mort Subite',
        slug: 'mort-subite'
      }
    },
    price: { amount: '4.00' },
    number: '10'
  } as Product,
  'item->product->drinks->beers->paulaner-11': {
    id: 'item->product->drinks->beers->paulaner-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      en: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      de: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      nb: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      da: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      sv: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      fr: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      },
      nl: {
        description: 'Weissbier',
        title: 'Paulaner',
        slug: 'paulaner'
      }
    },
    price: { amount: '4.00' },
    number: '11'
  } as Product,
  'item->product->drinks->beers->peroni-12': {
    id: 'item->product->drinks->beers->peroni-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      en: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      de: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      nb: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      da: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      sv: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      fr: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      },
      nl: {
        description: 'Nastro Azzurro',
        title: 'Peroni',
        slug: 'peroni'
      }
    },
    price: { amount: '3.85' },
    number: '12'
  } as Product,
  'item->product->drinks->beers->raddler-13': {
    id: 'item->product->drinks->beers->raddler-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      en: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      de: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      nb: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      da: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      sv: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      fr: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      },
      nl: {
        description: '',
        title: 'Raddler',
        slug: 'raddler'
      }
    },
    price: { amount: '3.50' },
    number: '13'
  } as Product,
  'item->product->drinks->beers->18-70-14': {
    id: 'item->product->drinks->beers->18-70-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      en: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      de: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      nb: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      da: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      sv: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      fr: {
        description: '',
        title: '18/70',
        slug: '18-70'
      },
      nl: {
        description: '',
        title: '18/70',
        slug: '18-70'
      }
    },
    price: { amount: '3.50' },
    number: '14'
  } as Product,
  'item->product->drinks->beers->sin-gluten-15': {
    id: 'item->product->drinks->beers->sin-gluten-15',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      en: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      de: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      nb: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      da: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      sv: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      fr: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      },
      nl: {
        description: '',
        title: 'Sin Gluten',
        slug: 'sin-gluten'
      }
    },
    price: { amount: '3.00' },
    number: '15'
  } as Product,

  ///// drinks->rums->
  'item->product->drinks->rums->arehucas-1': {
    id: 'item->product->drinks->rums->arehucas-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      en: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      de: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      nb: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      da: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      sv: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      fr: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      },
      nl: {
        description: '(Carta Oro - Carta Blanca)',
        title: 'Arehucas',
        slug: 'arehucas'
      }
    },
    price: { amount: '2.95' },
    number: '1'
  } as Product,
  'item->product->drinks->rums->bacardy-2': {
    id: 'item->product->drinks->rums->bacardy-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      en: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      de: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      nb: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      da: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      sv: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      fr: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      },
      nl: {
        description: '',
        title: 'Bacardi',
        slug: 'bacardi'
      }
    },
    price: { amount: '3.40' },
    number: '2'
  } as Product,
  'item->product->drinks->rums->matusalem-3': {
    id: 'item->product->drinks->rums->matusalem-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      en: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      de: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      nb: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      da: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      sv: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      fr: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      },
      nl: {
        description: '',
        title: 'Matusalem',
        slug: 'matusalem'
      }
    },
    price: { amount: '6.25' },
    number: '3'
  } as Product,
  'item->product->drinks->rums->zacapa-4': {
    id: 'item->product->drinks->rums->zacapa-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      en: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      de: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      nb: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      da: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      sv: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      fr: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      },
      nl: {
        description: '',
        title: 'Zacapa',
        slug: 'zacapa'
      }
    },
    price: { amount: '8.25' },
    number: '4'
  } as Product,
  'item->product->drinks->rums->house-honey-rum-5': {
    id: 'item->product->drinks->rums->house-honey-rum-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ron Miel de la Casa',
        slug: 'ron-miel-de-la-casa'
      },
      en: {
        description: '',
        title: 'House Honey Rum',
        slug: 'house-honey-rum'
      },
      de: {
        description: '',
        title: 'Haus Honig Rum',
        slug: 'haus-honig-rum'
      },
      nb: {
        description: '',
        title: 'House Honey Rum',
        slug: 'house-honey-rum'
      },
      da: {
        description: '',
        title: 'House Honey Rum',
        slug: 'house-honey-rum'
      },
      sv: {
        description: '',
        title: 'House Honey Rum',
        slug: 'house-honey-rum'
      },
      fr: {
        description: '',
        title: 'Rhum Miel Maison',
        slug: 'rhum-miel-maison'
      },
      nl: {
        description: '',
        title: 'Huis Honing Rum',
        slug: 'huis-honing-rum'
      }
    },
    price: { amount: '2.50' },
    number: '5'
  } as Product,
  'item->product->drinks->rums->artemi-6': {
    id: 'item->product->drinks->rums->artemi-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      },
      en: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      },
      de: {
        description: 'Artemi',
        title: 'Artemi',
        slug: 'artemi'
      },
      nb: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      },
      da: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      },
      sv: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      },
      fr: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      },
      nl: {
        description: '',
        title: 'Artemi',
        slug: 'artemi'
      }
    },
    price: { amount: '2.95' },
    number: '6'
  } as Product,
  'item->product->drinks->rums->shot-7': {
    id: 'item->product->drinks->rums->shot-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Chupito',
        slug: 'chupito'
      },
      en: {
        description: '',
        title: 'Shot',
        slug: 'shot'
      },
      de: {
        description: '',
        title: 'Schuss',
        slug: 'schuss'
      },
      nb: {
        description: '',
        title: 'Skudd',
        slug: 'skudd'
      },
      da: {
        description: '',
        title: 'Skud',
        slug: 'skud'
      },
      sv: {
        description: '',
        title: 'Skott',
        slug: 'skott'
      },
      fr: {
        description: '',
        title: 'Tirer',
        slug: 'tirer'
      },
      nl: {
        description: '',
        title: 'Schot',
        slug: 'schot'
      }
    },
    price: { amount: '2.25' },
    number: '7'
  } as Product,
  'item->product->drinks->rums->havana-club-3-8': {
    id: 'item->product->drinks->rums->havana-club-3-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      en: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      de: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      nb: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      da: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      sv: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      fr: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      },
      nl: {
        description: '',
        title: 'Havana Club 3',
        slug: 'havana-club-3'
      }
    },
    price: { amount: '3.40' },
    number: '8'
  } as Product,
  'item->product->drinks->rums->havana-club-7-9': {
    id: 'item->product->drinks->rums->havana-club-7-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      en: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      de: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      nb: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      da: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      sv: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      fr: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      },
      nl: {
        description: '',
        title: 'Havana Club 7',
        slug: 'havana-club-7'
      }
    },
    price: { amount: '4.60' },
    number: '9'
  } as Product,
  'item->product->drinks->rums->flor-de-cana-7-10': {
    id: 'item->product->drinks->rums->flor-de-cana-7-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      en: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      de: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      nb: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      da: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      sv: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      fr: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      },
      nl: {
        description: '(7 años)',
        title: 'Flor de Caña',
        slug: 'flor-de-cana-7'
      }
    },
    price: { amount: '5.50' },
    number: '10'
  } as Product,
  'item->product->drinks->rums->diplomatico-11': {
    id: 'item->product->drinks->rums->diplomatico-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      en: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      de: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      nb: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      da: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      sv: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      fr: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      },
      nl: {
        description: '',
        title: 'Diplomático',
        slug: 'diplomatico'
      }
    },
    price: { amount: '8.25' },
    number: '11'
  } as Product,

  ///// drinks->whiskies->
  'item->product->drinks->whiskies->tullamore-dew-1': {
    id: 'item->product->drinks->whiskies->tullamore-dew-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      en: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      de: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      nb: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      da: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      sv: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      fr: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      },
      nl: {
        description: '',
        title: 'Tullamore Dew',
        slug: 'tullamore-dew'
      }
    },
    price: { amount: '5.25' },
    number: '1'
  } as Product,
  'item->product->drinks->whiskies->red-label-2': {
    id: 'item->product->drinks->whiskies->red-label-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      en: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      de: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      nb: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      da: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      sv: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      fr: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      },
      nl: {
        description: '(Red Label)',
        title: 'Johnnie Walker',
        slug: 'red-label'
      }
    },
    price: { amount: '3.75' },
    number: '2'
  } as Product,
  'item->product->drinks->whiskies->black-label-3': {
    id: 'item->product->drinks->whiskies->black-label-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      en: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      de: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      nb: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      da: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      sv: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      fr: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      },
      nl: {
        description: '(Black Label)',
        title: 'Johnnie Walker',
        slug: 'black-label'
      }
    },
    price: { amount: '5.60' },
    number: '3'
  } as Product,
  'item->product->drinks->whiskies->jhon-haig-4': {
    id: 'item->product->drinks->whiskies->jhon-haig-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      en: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      de: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      nb: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      da: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      sv: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      fr: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      },
      nl: {
        description: '',
        title: 'Jhon Haig',
        slug: 'jhon-haig'
      }
    },
    price: { amount: '4.00' },
    number: '4'
  } as Product,
  'item->product->drinks->whiskies->lagavulin-16-5': {
    id: 'item->product->drinks->whiskies->lagavulin-16-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      en: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      de: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      nb: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      da: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      sv: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      fr: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      },
      nl: {
        description: '',
        title: 'Lagavulin 16',
        slug: 'lagavulin-16'
      }
    },
    price: { amount: '8.50' },
    number: '5'
  } as Product,
  'item->product->drinks->whiskies->house-whisky-6': {
    id: 'item->product->drinks->whiskies->house-whisky-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Whisky de la Casa',
        slug: 'whisky-de-la-casa'
      },
      en: {
        description: '',
        title: 'House Whisky',
        slug: 'house-whisky'
      },
      de: {
        description: '',
        title: 'Hauswhisky',
        slug: 'hauswhisky'
      },
      nb: {
        description: '',
        title: 'House Whisky',
        slug: 'house-whisky'
      },
      da: {
        description: '',
        title: 'House Whisky',
        slug: 'house-whisky'
      },
      sv: {
        description: '',
        title: 'House Whisky',
        slug: 'house-whisky'
      },
      fr: {
        description: '',
        title: 'Whisky Maison',
        slug: 'whisky-maison'
      },
      nl: {
        description: '',
        title: 'Huis Whisky',
        slug: 'huis-whisky'
      }
    },
    price: { amount: '4.75' },
    number: '6'
  } as Product,
  'item->product->drinks->whiskies->100-pipers-7': {
    id: 'item->product->drinks->whiskies->100-pipers-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      en: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      de: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      nb: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      da: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      sv: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      fr: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      },
      nl: {
        description: '',
        title: '100 Pipers',
        slug: '100-pipers'
      }
    },
    price: { amount: '4.00' },
    number: '7'
  } as Product,
  'item->product->drinks->whiskies->ballantines-8': {
    id: 'item->product->drinks->whiskies->ballantines-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      en: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      de: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      nb: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      da: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      sv: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      fr: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      },
      nl: {
        description: '',
        title: `Ballantine's`,
        slug: 'ballantines'
      }
    },
    price: { amount: '3.75' },
    number: '8'
  } as Product,
  'item->product->drinks->whiskies->chanceler-9': {
    id: 'item->product->drinks->whiskies->chanceler-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      en: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      de: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      nb: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      da: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      sv: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      fr: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      },
      nl: {
        description: '(Golden Label)',
        title: 'Chanceler',
        slug: 'chanceler'
      }
    },
    price: { amount: '4.75' },
    number: '9'
  } as Product,
  'item->product->drinks->whiskies->chivas-regal-12-10': {
    id: 'item->product->drinks->whiskies->chivas-regal-12-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      en: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      de: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      nb: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      da: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      sv: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      fr: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      },
      nl: {
        description: '',
        title: 'Chivas Regal 12',
        slug: 'chivas-regal-12'
      }
    },
    price: { amount: '5.60' },
    number: '10'
  } as Product,
  'item->product->drinks->whiskies->j-and-b-11': {
    id: 'item->product->drinks->whiskies->j-and-b-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      en: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      de: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      nb: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      da: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      sv: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      fr: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      },
      nl: {
        description: '',
        title: 'J&B',
        slug: 'j-and-b'
      }
    },
    price: { amount: '4.00' },
    number: '11'
  } as Product,
  'item->product->drinks->whiskies->jack-daniels-12': {
    id: 'item->product->drinks->whiskies->jack-daniels-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      en: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      de: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      nb: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      da: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      sv: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      fr: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      },
      nl: {
        description: 'Tennessee Whiskey',
        title: `Jack Daniel's`,
        slug: 'jack-daniels'
      }
    },
    price: { amount: '4.50' },
    number: '12'
  } as Product,
  'item->product->drinks->whiskies->dalwhinnie-13': {
    id: 'item->product->drinks->whiskies->dalwhinnie-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      en: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      de: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      nb: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      da: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      sv: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      fr: {
        description: 'Single Malt Scotch Whisky',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      },
      nl: {
        description: '',
        title: 'Dalwhinnie',
        slug: 'dalwhinnie'
      }
    },
    price: { amount: '7.50' },
    number: '13'
  } as Product,

  //// drinks->gins->
  'item->product->drinks->gins->gordons-1': {
    id: 'item->product->drinks->gins->gordons-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      en: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      de: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      nb: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      da: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      sv: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      fr: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      },
      nl: {
        description: '',
        title: `Gordon's`,
        slug: 'gordons'
      }
    },
    price: { amount: '3.75' },
    number: '1'
  } as Product,
  'item->product->drinks->gins->beefeater-2': {
    id: 'item->product->drinks->gins->beefeater-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      en: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      de: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      nb: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      da: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      sv: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      fr: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      },
      nl: {
        description: '',
        title: 'Beefeater',
        slug: 'beefeater'
      }
    },
    price: { amount: '3.25' },
    number: '2'
  } as Product,
  'item->product->drinks->gins->bombay-sapphire-3': {
    id: 'item->product->drinks->gins->bombay-sapphire-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      en: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      de: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      nb: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      da: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      sv: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      fr: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      },
      nl: {
        description: '',
        title: 'Bombay Sapphire',
        slug: 'bombay-sapphire'
      }
    },
    price: { amount: '4.50' },
    number: '3'
  } as Product,
  'item->product->drinks->gins->hendricks-4': {
    id: 'item->product->drinks->gins->hendricks-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      en: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      de: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      nb: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      da: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      sv: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      fr: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      },
      nl: {
        description: '',
        title: `Hendrick's`,
        slug: 'hendricks'
      }
    },
    price: { amount: '5.50' },
    number: '4'
  } as Product,
  'item->product->drinks->gins->tanqueray-5': {
    id: 'item->product->drinks->gins->tanqueray-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      en: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      de: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      nb: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      da: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      sv: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      fr: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      },
      nl: {
        description: '',
        title: 'Tanqueray',
        slug: 'tanqueray'
      }
    },
    price: { amount: '5.75' },
    number: '5'
  } as Product,
  'item->product->drinks->gins->martin-millers-6': {
    id: 'item->product->drinks->gins->martin-millers-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      en: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      de: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      nb: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      da: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      sv: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      fr: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      },
      nl: {
        description: '',
        title: `Martin Miller's`,
        slug: 'martin-millers'
      }
    },
    price: { amount: '5.75' },
    number: '6'
  } as Product,
  'item->product->drinks->gins->bulldog-7': {
    id: 'item->product->drinks->gins->bulldog-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      en: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      de: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      nb: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      da: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      sv: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      fr: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      },
      nl: {
        description: '',
        title: 'Bulldog',
        slug: 'bulldog'
      }
    },
    price: { amount: '6.75' },
    number: '7'
  } as Product,
  'item->product->drinks->gins->gvine-8': {
    id: 'item->product->drinks->gins->gvine-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      en: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      de: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      nb: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      da: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      sv: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      fr: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      },
      nl: {
        description: '',
        title: `G'Vine`,
        slug: 'gvine'
      }
    },
    price: { amount: '5.75' },
    number: '8'
  } as Product,
  'item->product->drinks->gins->house-gin-9': {
    id: 'item->product->drinks->gins->house-gin-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ginebra de la Casa',
        slug: 'ginebra-de-la-casa'
      },
      en: {
        description: '',
        title: 'House Gin',
        slug: 'house-gin'
      },
      de: {
        description: '',
        title: 'Haus Gin',
        slug: 'haus-gin'
      },
      nb: {
        description: '',
        title: 'House Gin',
        slug: 'house-gin'
      },
      da: {
        description: '',
        title: 'Hus Gin',
        slug: 'hus-gin'
      },
      sv: {
        description: '',
        title: 'House Gin',
        slug: 'house-gin'
      },
      fr: {
        description: '',
        title: 'Gin maison',
        slug: 'gin-maison'
      },
      nl: {
        description: '',
        title: 'Huis Gin',
        slug: 'huis-gin'
      }
    },
    price: { amount: '2.95' },
    number: '9'
  } as Product,
  'item->product->drinks->gins->macaronesian-10': {
    id: 'item->product->drinks->gins->macaronesian-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      en: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      de: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      nb: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      da: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      sv: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      fr: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      },
      nl: {
        description: '',
        title: 'Macaronesian',
        slug: 'macaronesian'
      }
    },
    price: { amount: '5.75' },
    number: '10'
  } as Product,
  'item->product->drinks->gins->royal-kingston-11': {
    id: 'item->product->drinks->gins->royal-kingston-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      en: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      de: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      nb: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      da: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      sv: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      fr: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      },
      nl: {
        description: '(Dry Gin)',
        title: 'Royal Kingston',
        slug: 'royal-kingston'
      }
    },
    price: { amount: '5.25' },
    number: '11'
  } as Product,

  ///// drinks->cognac-and-brandy->
  'item->product->drinks->cognac-and-brandy->veterano-1': {
    id: 'item->product->drinks->cognac-and-brandy->veterano-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      en: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      de: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      nb: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      da: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      sv: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      fr: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      },
      nl: {
        description: '',
        title: 'Veterano',
        slug: 'veterano'
      }
    },
    price: { amount: '4.75' },
    number: '1'
  } as Product,
  'item->product->drinks->cognac-and-brandy->carlos-1-2': {
    id: 'item->product->drinks->cognac-and-brandy->carlos-1-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      },
      en: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      },
      de: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      },
      nb: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      },
      da: {
        description: '',
        title: 'Carlos 1º',
        slug: 'carlos-1'
      },
      sv: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      },
      fr: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      },
      nl: {
        description: '',
        title: 'Carlos I',
        slug: 'carlos-1'
      }
    },
    price: { amount: '8.95' },
    number: '2'
  } as Product,
  'item->product->drinks->cognac-and-brandy->gran-duque-de-alba-3': {
    id: 'item->product->drinks->cognac-and-brandy->gran-duque-de-alba-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      en: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      de: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      nb: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      da: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      sv: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      fr: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      },
      nl: {
        description: '',
        title: 'Gran Duque de Alba',
        slug: 'gran-duque-de-alba'
      }
    },
    price: { amount: '8.95' },
    number: '3'
  } as Product,
  'item->product->drinks->cognac-and-brandy->pedro-3-4': {
    id: 'item->product->drinks->cognac-and-brandy->pedro-3-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      en: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      de: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      nb: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      da: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      sv: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      fr: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      },
      nl: {
        description: '',
        title: 'Pedro III',
        slug: 'pedro-3'
      }
    },
    price: { amount: '3.00' },
    number: '4'
  } as Product,
  'item->product->drinks->cognac-and-brandy->magno-5': {
    id: 'item->product->drinks->cognac-and-brandy->magno-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      en: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      de: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      nb: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      da: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      sv: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      fr: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      },
      nl: {
        description: '',
        title: 'Magno',
        slug: 'magno'
      }
    },
    price: { amount: '4.75' },
    number: '5'
  } as Product,
  'item->product->drinks->cognac-and-brandy->103-etiqueta-blanca-6': {
    id: 'item->product->drinks->cognac-and-brandy->103-etiqueta-blanca-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      en: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      de: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      nb: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      da: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      sv: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      fr: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      },
      nl: {
        description: '',
        title: '103 Etiqueta Blanca',
        slug: '103-etiqueta-blanca'
      }
    },
    price: { amount: '4.75' },
    number: '6'
  } as Product,
  'item->product->drinks->cognac-and-brandy->alma-de-magno-7': {
    id: 'item->product->drinks->cognac-and-brandy->alma-de-magno-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description:
          'Brandy Solera Gran Reserva con D.E. Brandy de Jerez. Envejecido hasta 5 años',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      en: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      de: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      nb: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      da: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      sv: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      fr: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      },
      nl: {
        description: '',
        title: 'Alma de Magno',
        slug: 'alma-de-magno'
      }
    },
    price: { amount: '6.80' },
    number: '7'
  } as Product,
  'item->product->drinks->cognac-and-brandy->brandy-local-8': {
    id: 'item->product->drinks->cognac-and-brandy->brandy-local-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      en: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      de: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      nb: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      da: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      sv: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      fr: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      },
      nl: {
        description: '',
        title: 'Brandy Local',
        slug: 'brandy-local'
      }
    },
    price: { amount: '4.00' },
    number: '8'
  } as Product,
  'item->product->drinks->cognac-and-brandy->cardenal-de-mendoza-9': {
    id: 'item->product->drinks->cognac-and-brandy->cardenal-de-mendoza-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Brandy de Solera Gran Reserva. Media de 15 años',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      en: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      de: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      nb: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      da: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      sv: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      fr: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      },
      nl: {
        description: '',
        title: 'Cardenal de Mendoza',
        slug: 'cardenal-de-mendoza'
      }
    },
    price: { amount: '6.80' },
    number: '9'
  } as Product,
  'item->product->drinks->cognac-and-brandy->carlos-3-10': {
    id: 'item->product->drinks->cognac-and-brandy->carlos-3-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      en: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      de: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      nb: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      da: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      sv: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      fr: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      },
      nl: {
        description: '',
        title: 'Carlos III',
        slug: 'carlos-3'
      }
    },
    price: { amount: '4.70' },
    number: '10'
  } as Product,
  'item->product->drinks->cognac-and-brandy->remy-martin-vsop-11': {
    id: 'item->product->drinks->cognac-and-brandy->remy-martin-vsop-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      en: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      de: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      nb: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      da: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      sv: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      fr: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      },
      nl: {
        description: '',
        title: 'Rémy Martin V.S.O.P',
        slug: 'remy-martin-vsop'
      }
    },
    price: { amount: '11.95' },
    number: '11'
  } as Product,
  'item->product->drinks->cognac-and-brandy->torres-5-12': {
    id: 'item->product->drinks->cognac-and-brandy->torres-5-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      en: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      de: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      nb: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      da: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      sv: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      fr: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      },
      nl: {
        description: 'Brandy Solera Imperial',
        title: 'Torres 5',
        slug: 'torres-5'
      }
    },
    price: { amount: '4.25' },
    number: '12'
  } as Product,

  ///// drinks->vodkas->
  'item->product->drinks->vodkas->smirnoff-red-1': {
    id: 'item->product->drinks->vodkas->smirnoff-red-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      en: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      de: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      nb: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      da: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      sv: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      fr: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      },
      nl: {
        description: '',
        title: 'Smirnoff Red',
        slug: 'smirnoff-red'
      }
    },
    price: { amount: '3.75' },
    number: '1'
  } as Product,
  'item->product->drinks->vodkas->absolut-2': {
    id: 'item->product->drinks->vodkas->absolut-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      en: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      de: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      nb: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      da: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      sv: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      fr: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      },
      nl: {
        description: '',
        title: 'Absolut',
        slug: 'absolut'
      }
    },
    price: { amount: '6.00' },
    number: '2'
  } as Product,
  'item->product->drinks->vodkas->aniuska-3': {
    id: 'item->product->drinks->vodkas->aniuska-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Vodka Caramelo)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      en: {
        description: '(Caramel Vodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      de: {
        description: '(Karamell Wodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      nb: {
        description: '(Karamell vodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      da: {
        description: '(Karamel vodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      sv: {
        description: '(Karamellvodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      fr: {
        description: '(Caramel Vodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      },
      nl: {
        description: '(Karamel Wodka)',
        title: 'Aniuska',
        slug: 'aniuska'
      }
    },
    price: { amount: '3.00' },
    number: '3'
  } as Product,
  'item->product->drinks->vodkas->moskovskaya-4': {
    id: 'item->product->drinks->vodkas->moskovskaya-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      en: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      de: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      nb: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      da: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      sv: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      fr: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      },
      nl: {
        description: '',
        title: 'Moskovskaya',
        slug: 'moskovskaya'
      }
    },
    price: { amount: '3.75' },
    number: '4'
  } as Product,
  'item->product->drinks->vodkas->house-vodka-5': {
    id: 'item->product->drinks->vodkas->house-vodka-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Vodka de la Casa',
        slug: 'vodka-de-la-casa'
      },
      en: {
        description: '',
        title: 'House Vodka',
        slug: 'house-vodka'
      },
      de: {
        description: '',
        title: 'Haus Wodka',
        slug: 'haus-wodka'
      },
      nb: {
        description: '',
        title: 'House Vodka',
        slug: 'house-vodka'
      },
      da: {
        description: '',
        title: 'House Vodka',
        slug: 'house-vodka'
      },
      sv: {
        description: '',
        title: 'House Vodka',
        slug: 'house-vodka'
      },
      fr: {
        description: '',
        title: 'Maison Vodka',
        slug: 'maison-vodka'
      },
      nl: {
        description: '',
        title: 'Huis Wodka',
        slug: 'huis-wodka'
      }
    },
    price: { amount: '3.00' },
    number: '5'
  } as Product,

  ///// drinks->ciders->
  'item->product->drinks->ciders->ladron-de-manzanas-1': {
    id: 'item->product->drinks->ciders->ladron-de-manzanas-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      en: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      de: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      nb: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      da: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      sv: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      fr: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      },
      nl: {
        description: '',
        title: 'Ladrón de Manzanas',
        slug: 'ladron-de-manzanas'
      }
    },
    price: { amount: '3.50' },
    number: '1'
  } as Product,
  'item->product->drinks->ciders->strongbow-2': {
    id: 'item->product->drinks->ciders->strongbow-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      en: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      de: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      nb: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      da: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      sv: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      fr: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      },
      nl: {
        description: '',
        title: 'Strongbow',
        slug: 'strongbow'
      }
    },
    price: { amount: '4.50' },
    number: '2'
  } as Product,
  'item->product->drinks->ciders->nupebbert-3': {
    id: 'item->product->drinks->ciders->nupebbert-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      en: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      de: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      nb: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      da: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      sv: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      fr: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      },
      nl: {
        description: '',
        title: 'Nupebbert',
        slug: 'nupebbert'
      }
    },
    price: { amount: '5.60' },
    number: '3'
  } as Product,

  ///// drinks->appetizers->
  'item->product->drinks->appetizers->campari-1': {
    id: 'item->product->drinks->appetizers->campari-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      en: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      de: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      nb: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      da: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      sv: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      fr: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      },
      nl: {
        description: '',
        title: 'Campari',
        slug: 'campari'
      }
    },
    price: { amount: '3.50' },
    number: '1'
  } as Product,
  'item->product->drinks->appetizers->tio-pepe-2': {
    id: 'item->product->drinks->appetizers->tio-pepe-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      en: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      de: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      nb: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      da: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      sv: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      fr: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      },
      nl: {
        description: '',
        title: 'Tio Pepe',
        slug: 'tio-pepe'
      }
    },
    price: { amount: '3.50' },
    number: '2'
  } as Product,
  'item->product->drinks->appetizers->aperol-spritz-3': {
    id: 'item->product->drinks->appetizers->aperol-spritz-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      en: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      de: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      nb: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      da: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      sv: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      fr: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      },
      nl: {
        description: '',
        title: 'Aperol Spritz',
        slug: 'aperol-spritz'
      }
    },
    price: { amount: '6.00' },
    number: '3'
  } as Product,
  'item->product->drinks->appetizers->martini-bianco-4': {
    id: 'item->product->drinks->appetizers->martini-bianco-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      en: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      de: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      nb: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      da: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      sv: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      fr: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      },
      nl: {
        description: '',
        title: 'Martini Bianco',
        slug: 'martini-bianco'
      }
    },
    price: { amount: '4.00' },
    number: '4'
  } as Product,
  'item->product->drinks->appetizers->martini-dry-5': {
    id: 'item->product->appetizers->drinks->martini-dry-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      en: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      de: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      nb: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      da: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      sv: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      fr: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      },
      nl: {
        description: '',
        title: 'Martini Dry',
        slug: 'martini-dry'
      }
    },
    price: { amount: '4.00' },
    number: '5'
  } as Product,
  'item->product->drinks->appetizers->martini-rosso-6': {
    id: 'item->product->drinks->appetizers->martini-rosso-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      en: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      de: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      nb: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      da: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      sv: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      fr: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      },
      nl: {
        description: '',
        title: 'Martini Rosso',
        slug: 'martini-rosso'
      }
    },
    price: { amount: '4.00' },
    number: '6'
  } as Product,
  'item->product->drinks->appetizers->oporto-7': {
    id: 'item->product->drinks->appetizers->oporto-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      en: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      de: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      nb: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      da: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      sv: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      fr: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      },
      nl: {
        description: '(Porto)',
        title: 'Oporto',
        slug: 'oporto'
      }
    },
    price: { amount: '4.00' },
    number: '7'
  } as Product,
  'item->product->drinks->appetizers->pernod-8': {
    id: 'item->product->drinks->appetizers->pernod-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      en: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      de: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      nb: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      da: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      sv: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      fr: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      },
      nl: {
        description: '',
        title: 'Pernod',
        slug: 'pernod'
      }
    },
    price: { amount: '4.85' },
    number: '8'
  } as Product,
  'item->product->drinks->appetizers->hugo-spritz-9': {
    id: 'item->product->drinks->appetizers->hugo-spritz-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      en: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      de: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      nb: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      da: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      sv: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      fr: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      },
      nl: {
        description: '',
        title: 'Hugo Spritz',
        slug: 'hugo-spritz'
      }
    },
    price: { amount: '6.00' },
    number: '9'
  } as Product,

  //// drinks->liqueurs->
  'item->product->drinks->liqueurs->aquavit-gammel-opland-1': {
    id: 'item->product->drinks->liqueurs->aquavit-gammel-opland-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      en: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      de: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      nb: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      da: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      sv: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      fr: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      },
      nl: {
        description: '',
        title: 'Gammel Opland Aquavit',
        slug: 'aquavit-gammel-opland'
      }
    },
    price: { amount: '5.70' },
    number: '1'
  } as Product,
  'item->product->drinks->liqueurs->gammel-dansk-2': {
    id: 'item->product->drinks->liqueurs->gammel-dansk-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      en: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      de: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      nb: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      da: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      sv: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      fr: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      },
      nl: {
        description: 'Bitter Dram',
        title: 'Gammel Dansk',
        slug: 'gammel-dansk'
      }
    },
    price: { amount: '3.50' },
    number: '2'
  } as Product,
  'item->product->drinks->liqueurs->jagermeister-3': {
    id: 'item->product->drinks->liqueurs->jagermeister-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      en: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      de: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      nb: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      da: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      sv: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      fr: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      },
      nl: {
        description: '',
        title: 'Jägermeister',
        slug: 'jagermeister'
      }
    },
    price: { amount: '4.60' },
    number: '3'
  } as Product,
  'item->product->drinks->liqueurs->fernet-branca-4': {
    id: 'item->product->drinks->liqueurs->fernet-branca-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      en: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      de: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      nb: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      da: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      sv: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      fr: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      },
      nl: {
        description: '',
        title: 'Fernet Branca',
        slug: 'fernet-branca'
      }
    },
    price: { amount: '4.50' },
    number: '4'
  } as Product,
  'item->product->drinks->liqueurs->baileys-5': {
    id: 'item->product->drinks->liqueurs->baileys-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      en: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      de: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      nb: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      da: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      sv: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      fr: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      },
      nl: {
        description: '',
        title: 'Baileys',
        slug: 'baileys'
      }
    },
    price: { amount: '4.95' },
    number: '5'
  } as Product,
  'item->product->drinks->liqueurs->cointreau-6': {
    id: 'item->product->drinks->liqueurs->cointreau-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      en: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      de: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      nb: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      da: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      sv: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      fr: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      },
      nl: {
        description: '',
        title: 'Cointreau',
        slug: 'cointreau'
      }
    },
    price: { amount: '4.95' },
    number: '6'
  } as Product,
  'item->product->drinks->liqueurs->frangelico-7': {
    id: 'item->product->drinks->liqueurs->frangelico-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      en: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      de: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      nb: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      da: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      sv: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      fr: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      },
      nl: {
        description: '',
        title: 'Frangelico',
        slug: 'frangelico'
      }
    },
    price: { amount: '4.95' },
    number: '7'
  } as Product,
  'item->product->drinks->liqueurs->limoncello-8': {
    id: 'item->product->drinks->liqueurs->limoncello-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      en: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      de: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      nb: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      da: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      sv: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      fr: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      },
      nl: {
        description: '(Sammarco)',
        title: 'Limoncello',
        slug: 'limoncello'
      }
    },
    price: { amount: '3.95' },
    number: '8'
  } as Product,
  'item->product->drinks->liqueurs->drambuie-9': {
    id: 'item->product->drinks->liqueurs->drambuie-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      en: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      de: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      nb: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      da: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      sv: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      fr: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      },
      nl: {
        description: '',
        title: 'Drambuie',
        slug: 'drambuie'
      }
    },
    price: { amount: '5.95' },
    number: '9'
  } as Product,
  'item->product->drinks->liqueurs->triple-seco-10': {
    id: 'item->product->drinks->liqueurs->triple-seco-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      en: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      de: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      nb: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      da: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      sv: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      fr: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      },
      nl: {
        description: '',
        title: 'Triple Seco',
        slug: 'triple-seco'
      }
    },
    price: { amount: '4.95' },
    number: '10'
  } as Product,
  'item->product->drinks->liqueurs->malibu-11': {
    id: 'item->product->drinks->liqueurs->malibu-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      en: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      de: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      nb: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      da: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      sv: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      fr: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      },
      nl: {
        description: '',
        title: 'Malibu',
        slug: 'malibu'
      }
    },
    price: { amount: '4.95' },
    number: '11'
  } as Product,
  'item->product->drinks->liqueurs->linie-aquavit-12': {
    id: 'item->product->drinks->liqueurs->linie-aquavit-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      en: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      de: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      nb: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      da: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      sv: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      fr: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      },
      nl: {
        description: '',
        title: 'Aalborg Aquavit',
        slug: 'linie-aquavit'
      }
    },
    price: { amount: '4.60' },
    number: '12'
  } as Product,
  'item->product->drinks->liqueurs->archers-peach-schnapps-13': {
    id: 'item->product->drinks->liqueurs->archers-peach-schnapps-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      en: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      de: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      nb: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      da: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      sv: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      fr: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      },
      nl: {
        description: '',
        title: 'Archers Peach Schnapps',
        slug: 'archers-peach-schnapps'
      }
    },
    price: { amount: '4.95' },
    number: '13'
  } as Product,
  'item->product->drinks->liqueurs->banana-liqueur-14': {
    id: 'item->product->drinks->liqueurs->banana-liqueur-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      en: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      de: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      nb: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      da: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      sv: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      fr: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      },
      nl: {
        description: '',
        title: 'Banana Liqueur',
        slug: 'banana-liqueur'
      }
    },
    price: { amount: '4.85' },
    number: '14'
  } as Product,
  'item->product->drinks->liqueurs->benedictine-15': {
    id: 'item->product->drinks->liqueurs->benedictine-15',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      en: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      de: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      nb: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      da: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      sv: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      fr: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      },
      nl: {
        description: '',
        title: 'Benedictine',
        slug: 'benedictine'
      }
    },
    price: { amount: '3.50' },
    number: '15'
  } as Product,
  'item->product->drinks->liqueurs->cynar-16': {
    id: 'item->product->drinks->liqueurs->cynar-16',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      en: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      de: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      nb: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      da: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      sv: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      fr: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      },
      nl: {
        description: '',
        title: 'Cynar',
        slug: 'cynar'
      }
    },
    price: { amount: '4.00' },
    number: '16'
  } as Product,
  'item->product->drinks->liqueurs->tequila-17': {
    id: 'item->product->drinks->liqueurs->tequila-17',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      en: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      de: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      nb: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      da: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      sv: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      fr: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      },
      nl: {
        description: '',
        title: 'Tequila',
        slug: 'tequila'
      }
    },
    price: { amount: '4.30' },
    number: '17'
  } as Product,
  'item->product->drinks->liqueurs->grand-marnier-cordon-jaune-18': {
    id: 'item->product->drinks->liqueurs->grand-marnier-cordon-jaune-18',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      en: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      de: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      nb: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      da: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      sv: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      fr: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      },
      nl: {
        description: '(Cordon Jaune)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-jaune'
      }
    },
    price: { amount: '5.50' },
    number: '18'
  } as Product,
  'item->product->drinks->liqueurs->grand-marnier-cordon-rouge-19': {
    id: 'item->product->drinks->liqueurs->grand-marnier-cordon-rouge-19',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      en: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      de: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      nb: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      da: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      sv: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      fr: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      },
      nl: {
        description: '(Cordon Rouge)',
        title: 'Grand Marnier',
        slug: 'grand-marnier-cordon-rouge'
      }
    },
    price: { amount: '5.95' },
    number: '19'
  } as Product,
  'item->product->drinks->liqueurs->galliano-20': {
    id: 'item->product->drinks->liqueurs->galliano-20',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      en: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      de: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      nb: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      da: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      sv: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      fr: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      },
      nl: {
        description: '',
        title: 'Galliano',
        slug: 'galliano'
      }
    },
    price: { amount: '4.95' },
    number: '20'
  } as Product,
  'item->product->drinks->liqueurs->grappa-21': {
    id: 'item->product->drinks->liqueurs->grappa-21',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      en: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      de: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      nb: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      da: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      sv: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      fr: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      },
      nl: {
        description: '',
        title: 'Grappa',
        slug: 'grappa'
      }
    },
    price: { amount: '4.95' },
    number: '21'
  } as Product,
  'item->product->drinks->liqueurs->licor-43-22': {
    id: 'item->product->drinks->liqueurs->licor-43-22',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      en: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      de: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      nb: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      da: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      sv: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      fr: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      },
      nl: {
        description: '',
        title: 'Licor 43',
        slug: 'licor-43'
      }
    },
    price: { amount: '4.95' },
    number: '22'
  } as Product,
  'item->product->drinks->liqueurs->herbal-liquor-23': {
    id: 'item->product->drinks->liqueurs->herbal-liquor-23',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Licor de Hierbas',
        slug: 'licor-de-hierbas'
      },
      en: {
        description: '',
        title: 'Herbal Liquor',
        slug: 'herbal-liquor'
      },
      de: {
        description: '',
        title: 'Kräuterlikör',
        slug: 'krauterlikor'
      },
      nb: {
        description: '',
        title: 'Urtesprit',
        slug: 'urtesprit'
      },
      da: {
        description: '',
        title: 'Urtesprit',
        slug: 'urtesprit'
      },
      sv: {
        description: '',
        title: 'Växtbaserad sprit',
        slug: 'vaxtbaserad-sprit'
      },
      fr: {
        description: '',
        title: 'Liqueur aux herbes',
        slug: 'liqueur-aux-herbes'
      },
      nl: {
        description: '',
        title: 'Kruidenlikeur',
        slug: 'kruidenlikeur'
      }
    },
    price: { amount: '4.95' },
    number: '23'
  } as Product,
  'item->product->drinks->liqueurs->marie-brizard-24': {
    id: 'item->product->drinks->liqueurs->marie-brizard-24',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      en: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      de: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      nb: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      da: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      sv: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      fr: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      },
      nl: {
        description: '',
        title: 'Marie Brizard',
        slug: 'marie-brizard'
      }
    },
    price: { amount: '4.50' },
    number: '24'
  } as Product,
  'item->product->drinks->liqueurs->ramazzotti-25': {
    id: 'item->product->drinks->liqueurs->ramazzotti-25',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      en: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      de: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      nb: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      da: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      sv: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      fr: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      },
      nl: {
        description: '',
        title: 'Ramazzotti',
        slug: 'ramazzotti'
      }
    },
    price: { amount: '4.95' },
    number: '25'
  } as Product,
  'item->product->drinks->liqueurs->ricard-26': {
    id: 'item->product->drinks->liqueurs->ricard-26',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      en: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      de: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      nb: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      da: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      sv: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      fr: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      },
      nl: {
        description: '',
        title: 'Ricard',
        slug: 'ricard'
      }
    },
    price: { amount: '4.00' },
    number: '26'
  } as Product,
  'item->product->drinks->liqueurs->peppermint-27': {
    id: 'item->product->drinks->liqueurs->peppermint-27',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      en: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      de: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      nb: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      da: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      sv: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      fr: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      },
      nl: {
        description: '',
        title: 'Peppermint',
        slug: 'peppermint'
      }
    },
    price: { amount: '3.25' },
    number: '27'
  } as Product,
  'item->product->drinks->liqueurs->sambuca-28': {
    id: 'item->product->drinks->liqueurs->sambuca-28',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      en: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      de: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      nb: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      da: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      sv: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      fr: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      },
      nl: {
        description: '',
        title: 'Sambuca',
        slug: 'sambuca'
      }
    },
    price: { amount: '4.95' },
    number: '28'
  } as Product,
  'item->product->drinks->liqueurs->tia-maria-29': {
    id: 'item->product->drinks->liqueurs->tia-maria-29',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      en: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      de: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      nb: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      da: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      sv: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      fr: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      },
      nl: {
        description: '',
        title: 'Tia Maria',
        slug: 'tia-maria'
      }
    },
    price: { amount: '4.90' },
    number: '29'
  } as Product,
  'item->product->drinks->liqueurs->amaretto-30': {
    id: 'item->product->drinks->liqueurs->amaretto-30',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      en: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      de: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      nb: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      da: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      sv: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      fr: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      },
      nl: {
        description: '',
        title: 'Amaretto',
        slug: 'amaretto'
      }
    },
    price: { amount: '4.95' },
    number: '30'
  } as Product,

  ///// drinks->cocktails->
  'item->product->drinks->cocktails->margarita-1': {
    id: 'item->product->drinks->cocktails->margarita-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      en: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      de: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      nb: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      da: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      sv: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      fr: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      },
      nl: {
        description: '',
        title: 'Margarita',
        slug: 'margarita'
      }
    },
    price: { amount: '6.00' },
    number: '1'
  } as Product,
  'item->product->drinks->cocktails->moscow-mule-2': {
    id: 'item->product->drinks->cocktails->moscow-mule-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Moscow Mule',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      en: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      de: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      nb: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      da: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      sv: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      fr: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      },
      nl: {
        description: '',
        title: 'Moscow Mule',
        slug: 'moscow-mule'
      }
    },
    price: { amount: '6.00' },
    number: '2'
  } as Product,
  'item->product->drinks->cocktails->cosmopolitan-3': {
    id: 'item->product->drinks->cocktails->cosmopolitan-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      en: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      de: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      nb: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      da: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      sv: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      fr: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      },
      nl: {
        description: '',
        title: 'Cosmopolitan',
        slug: 'cosmopolitan'
      }
    },
    price: { amount: '6.00' },
    number: '3'
  } as Product,
  'item->product->drinks->cocktails->mojito-4': {
    id: 'item->product->drinks->cocktails->mojito-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      en: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      de: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      nb: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      da: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      sv: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      fr: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      },
      nl: {
        description: '',
        title: 'Mojito',
        slug: 'mojito'
      }
    },
    price: { amount: '6.00' },
    number: '4'
  } as Product,
  'item->product->drinks->cocktails->pina-colada-5': {
    id: 'item->product->drinks->cocktails->pina-colada-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      en: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      de: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      nb: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      da: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      sv: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      fr: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      },
      nl: {
        description: '',
        title: 'Piña Colada',
        slug: 'pina-colada'
      }
    },
    price: { amount: '6.00' },
    number: '5'
  } as Product,
  'item->product->drinks->cocktails->caipirihnha-6': {
    id: 'item->product->drinks->cocktails->caipirihnha-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      en: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      de: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      nb: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      da: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      sv: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      fr: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      },
      nl: {
        description: '',
        title: 'Caipirinha',
        slug: 'caipirihnha'
      }
    },
    price: { amount: '6.00' },
    number: '6'
  } as Product,
  'item->product->drinks->cocktails->long-island-ice-tea-7': {
    id: 'item->product->drinks->cocktails->long-island-ice-tea-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      en: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      de: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      nb: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      da: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      sv: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      fr: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      },
      nl: {
        description: '',
        title: 'Long Island Ice Tea',
        slug: 'long-island-ice-tea'
      }
    },
    price: { amount: '6.00' },
    number: '7'
  } as Product,

  //// drinks->smoothies->
  'item->product->drinks->smoothies->berry-burst-1': {
    id: 'item->product->drinks->smoothies->berry-burst-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->product->250-2-smoothi-1',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Plátano, arándanos, frambuesa',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      en: {
        description: 'Banana, blueberries, raspberries',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      de: {
        description: 'Banane, Blaubeere, Himbeere',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      nb: {
        description: 'Banan, blåbær, bringebær',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      da: {
        description: 'Banan, blåbær, hindbær',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      sv: {
        description: 'Banan, blåbär, hallon',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      fr: {
        description: 'Banane, myrtilles, framboise',
        title: 'Berry Burst',
        slug: 'berry-burst'
      },
      nl: {
        description: 'Banaan, bosbessen, framboos',
        title: 'Berry Burst',
        slug: 'berry-burst'
      }
    },
    price: { amount: '4.25' },
    number: '1'
  } as Product,
  'item->product->drinks->smoothies->canarian-kiss-2': {
    id: 'item->product->drinks->smoothies->canarian-kiss-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Mango, fresa, melón amarillo, limón',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      en: {
        description: 'Mango, jordbær, gul melon, sitron',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      de: {
        description: 'Mango, Erdbeere, gelbe Melone, Zitrone',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      nb: {
        description: 'Mango, jordbær, gul melon, citron',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      da: {
        description: 'Mango, strawberry, yellow melon, lemon',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      sv: {
        description: 'Mango, jordgubbe, gul melon, citron',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      fr: {
        description: 'Mangue, fraise, melon jaune, citron',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      },
      nl: {
        description: 'Mango, aardbei, gele meloen, citroen',
        title: 'Canarian Kiss',
        slug: 'canarian-kiss'
      }
    },
    price: { amount: '4.25' },
    number: '2'
  } as Product,
  'item->product->drinks->smoothies->mango-heaven-3': {
    id: 'item->product->drinks->smoothies->mango-heaven-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Mango, piña, maracuyá, limón',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      en: {
        description: 'Mango, pineapple, passion fruit, lemon',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      de: {
        description: 'Mango, Ananas, Passionsfrucht, Zitrone',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      nb: {
        description: 'Mango, ananas, pasjonsfrukt, sitron',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      da: {
        description: 'Mango, ananas, passionsfrugt, citron',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      sv: {
        description: 'Mango, ananas, passionsfrukt, citron',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      fr: {
        description: 'Mangue, ananas, fruit de la passion, citron',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      },
      nl: {
        description: 'Mango, ananas, passievrucht, citroen',
        title: 'Mango Heaven',
        slug: 'mango-heaven'
      }
    },
    price: { amount: '4.25' },
    number: '3'
  } as Product,
  'item->product->drinks->smoothies->strawberry-split-4': {
    id: 'item->product->drinks->smoothies->strawberry-split-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->product->250-2-smoothi-4',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Fresa, platano, cereza , papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      en: {
        description: 'Strawberry, banana, cherry, papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      de: {
        description: 'Erdbeere, Banane, Kirsche, Papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      nb: {
        description: 'Jordbær, banan, kirsebær, papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      da: {
        description: 'Jordbær, banan, kirsebær, papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      sv: {
        description: 'Jordgubb, banan, körsbär, papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      fr: {
        description: 'Fraise, banane, cerise, papaye',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      },
      nl: {
        description: 'Aardbei, banaan, kers, papaya',
        title: 'Strawberry Split',
        slug: 'strawberry-split'
      }
    },
    price: { amount: '4.25' },
    number: '4'
  } as Product,
  'item->product->drinks->smoothies->green-machine-5': {
    id: 'item->product->drinks->smoothies->green-machine-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: '',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Brócili, plátano, espinacas, piña, apio *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      en: {
        description: 'Broccoli, banana, spinach, pineapple, celery *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      de: {
        description: 'Brokkoli, Banane, Spinat, Ananas, Sellerie *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      nb: {
        description: 'Brokkoli, Banane, Spinat, Ananas, Sellerie *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      da: {
        description: 'Brocilli, banan, spinat, ananas, selleri *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      sv: {
        description: 'Broccoli, banan, spenat, ananas, selleri *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      fr: {
        description: 'Brocoli, banane, épinards, ananas, céleri *',
        title: 'Green Machine',
        slug: 'green-machine'
      },
      nl: {
        description: 'Broccoli, banaan, spinazie, ananas, bleekselderij *',
        title: 'Green Machine',
        slug: 'green-machine'
      }
    },
    price: { amount: '4.25' },
    number: '5'
  } as Product,
  'item->product->drinks->smoothies->tropical-colada-6': {
    id: 'item->product->drinks->smoothies->tropical-colada-6',
    type: 'product',
    images: [],
    active: true,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->product->250-2-smoothi-6',
    hasAllergens: false,
    hasVariants: false,
    allergens: [],
    displayInfo: {
      es: {
        description: 'Piña, plátano, coco',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      en: {
        description: 'Pineapple, banana, coconut',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      de: {
        description: 'Ananas, Banane, Kokos',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      nb: {
        description: 'Ananas, banan, kokos',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      da: {
        description: 'Ananas, banan, kokosnød',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      sv: {
        description: 'Ananas, banan, kokos',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      fr: {
        description: 'Ananas, banane, noix de coco',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      },
      nl: {
        description: 'Ananas, banaan, kokos',
        title: 'Tropical Colada',
        slug: 'tropical-colada'
      }
    },
    price: { amount: '4.25' },
    number: '6'
  } as Product,

  ///// wines->
  'item->product->wines->wine-from-the-house-1': {
    id: 'item->product->wines->wine-from-the-house-1',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Vino de la casa',
        slug: 'vino-de-la-casa'
      },
      en: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Wine from the house',
        slug: 'wine-from-the-house'
      },
      de: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Wein aus dem Haus',
        slug: 'wein-aus-dem-haus'
      },
      nb: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Vin fra huset',
        slug: 'vin-fra-huset'
      },
      da: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Vin fra huset',
        slug: 'vin-fra-huset'
      },
      sv: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Vin från huset',
        slug: 'vin-fran-huset'
      },
      fr: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Vin de la maison',
        slug: 'vin-de-la-maison'
      },
      nl: {
        description: 'Tempranillo - D.O. Rioja',
        title: 'Kwam van huis',
        slug: 'kwam-van-huis'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '15.00'
      },
      'itemVariant->three-eighths': {
        amount: '8.50'
      },
      'itemVariant->cup': {
        amount: '3.50'
      }
    },
    price: { amount: '15.00' },
    number: '1'
  } as Product,
  'item->product->wines->erial-2': {
    id: 'item->product->wines->erial-2',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      en: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      de: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      nb: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      da: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      sv: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      fr: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      },
      nl: {
        description: 'Tempranillo - Ribera del Duero',
        title: 'Erial',
        slug: 'erial'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '19.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '19.50' },
    number: '2'
  } as Product,
  'item->product->wines->agala-1175-3': {
    id: 'item->product->wines->agala-1175-3',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      en: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      de: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      nb: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      da: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      sv: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      fr: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      },
      nl: {
        description:
          'D.O. Gran Canaria - Baboso Negro, Vijariego Negro, Tintilla',
        title: 'Agala Barrica Altitud 1175',
        slug: 'agala-1175'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '22.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '22.00' },
    number: '3'
  } as Product,
  'item->product->wines->tierra-fundida-4': {
    id: 'item->product->wines->tierra-fundida-4',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      en: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      de: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      nb: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      da: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      sv: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      fr: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      },
      nl: {
        description:
          'D.O. Tacoronte Acentejo - Listán negro, Negramoll y Castellana Negra',
        title: 'Tierra Fundida',
        slug: 'tierra-fundida'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '23.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '23.00' },
    number: '4'
  } as Product,
  'item->product->wines->rodriguez-de-vera-5': {
    id: 'item->product->wines->rodriguez-de-vera-5',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      en: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      de: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      nb: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      da: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      sv: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      fr: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      },
      nl: {
        description:
          'D.O.Almanza - Merlot, Cabernet Sauvignon, Syrah, Garnacha tintorera',
        title: 'Rodríguez de Vera',
        slug: 'rodriguez-de-vera'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '25.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '25.00' },
    number: '5'
  } as Product,
  'item->product->wines->vizcarra-15-meses-6': {
    id: 'item->product->wines->vizcarra-15-meses-6',
    type: 'product',
    images: [],
    active: false,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      en: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      de: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      nb: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      da: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      sv: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      fr: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      },
      nl: {
        description: 'Tinto Fino - Rivera del Duero',
        title: 'Vizcarra 15 meses',
        slug: 'vizcarra-15-meses'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '25.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '25.00' },
    number: '6'
  } as Product,
  'item->product->wines->ostatu-7': {
    id: 'item->product->wines->ostatu-7',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      en: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      de: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      nb: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      da: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      sv: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      fr: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      },
      nl: {
        description: '(Tempranillo y Graciano - D.O. Rioja)',
        title: 'Ostatu Selección',
        slug: 'ostatu'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '33.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '33.00' },
    number: '7'
  } as Product,
  'item->product->wines->artillero-8': {
    id: 'item->product->wines->artillero-8',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      en: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      de: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      nb: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      da: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      sv: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      fr: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      },
      nl: {
        description: 'Tempranillo - D.O.C Rioja',
        title: 'Artillero',
        slug: 'artillero'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '50.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '50.00' },
    number: '8'
  } as Product,
  'item->product->wines->carmelo-rodero-9-meses-24': {
    id: 'item->product->wines->carmelo-rodero-9-meses-24',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      en: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      de: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      nb: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      da: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      sv: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      fr: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      },
      nl: {
        description: 'D.O Rivera del Duero',
        title: 'Carmelo Rodero 9 Meses',
        slug: 'carmelo-rodero-9-meses'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '22.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '22.50' },
    number: '24'
  } as Product,
  'item->product->wines->wine-from-the-house-9': {
    id: 'item->product->wines->wine-from-the-house-9',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vino de la casa (Viña Sol)',
        slug: 'vino-de-la-casa'
      },
      en: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Wine from the house (Viña Sol)',
        slug: 'wine-from-the-house'
      },
      de: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Wein aus dem Haus (Viña Sol)',
        slug: 'wein-aus-dem-haus'
      },
      nb: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin fra huset (Viña Sol)',
        slug: 'vin-fra-huset'
      },
      da: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin fra huset (Viña Sol)',
        slug: 'vin-fra-huset'
      },
      sv: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin från huset (Viña Sol)',
        slug: 'vin-fran-huset'
      },
      fr: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin de la maison (Viña Sol)',
        slug: 'vin-de-la-maison'
      },
      nl: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Kwam van huis (Viña Sol)',
        slug: 'kwam-van-huis'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '15.50'
      },
      'itemVariant->three-eighths': {
        amount: '8.50'
      },
      'itemVariant->cup': {
        amount: '3.50'
      }
    },
    price: { amount: '15.00' },
    number: '9'
  } as Product,
  'item->product->wines->rubicon-10': {
    id: 'item->product->wines->rubicon-10',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      en: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      de: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      nb: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      da: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      sv: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      fr: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      nl: {
        description: 'Malvasía - D.O. Lanzarote',
        title: 'Rubicón',
        slug: 'rubicon'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '19.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '19.50' },
    number: '10'
  } as Product,
  'item->product->wines->paco-and-lola-11': {
    id: 'item->product->wines->paco-and-lola-11',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      },
      en: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      },
      de: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-&-lola'
      },
      nb: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      },
      da: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      },
      sv: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      },
      fr: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      },
      nl: {
        description: 'Albariño - D.O. Rías Baixas',
        title: 'Paco & Lola',
        slug: 'paco-and-lola'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '22.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '22.000' },
    number: '11'
  } as Product,
  'item->product->wines->paisaje-de-las-islas-12': {
    id: 'item->product->wines->paisaje-de-las-islas-12',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      en: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      de: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      nb: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      da: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      sv: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      fr: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      },
      nl: {
        description: 'Marmajuelo, Malvasía - D.O. Islas Canarias',
        title: 'Paisaje de las Islas',
        slug: 'paisaje-de-las-islas'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '25.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '25.00' },
    number: '12'
  } as Product,
  'item->product->wines->tajinaste-13': {
    id: 'item->product->wines->tajinaste-13',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      en: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      de: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      nb: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      da: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      sv: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      fr: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      },
      nl: {
        description:
          '95 % Listán Blanco, 5% Moscatel - D.O. Valle de La Orotava',
        title: 'Tajinaste',
        slug: 'tajinaste'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '24.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '24.00' },
    number: '13'
  } as Product,
  'item->product->wines->godelia-godello-14': {
    id: 'item->product->wines->godelia-godello-14',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      en: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      de: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      nb: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      da: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      sv: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      fr: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      },
      nl: {
        description: 'Godello - D.O. Bierzo',
        title: 'Godelia Godello',
        slug: 'godelia-godello'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '25.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '25.00' },
    number: '14'
  } as Product,
  'item->product->wines->belondrade-quinta-apolonia-15': {
    id: 'item->product->wines->belondrade-quinta-apolonia-15',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      en: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      de: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      nb: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      da: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      sv: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      fr: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      },
      nl: {
        description: 'Verdejo - D.O. Rueda',
        title: 'Belondrade y Lurton',
        slug: 'belondrade-quinta-apolonia'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '70.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '70.00' },
    number: '15'
  } as Product,
  'item->product->wines->wine-from-the-house-16': {
    id: 'item->product->wines->wine-from-the-house-16',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vino de la casa (De Casta)',
        slug: 'vino-de-la-casa'
      },
      en: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Wine from the house (De Casta)',
        slug: 'wine-from-the-house'
      },
      de: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Wein aus dem Haus (De Casta)',
        slug: 'wein-aus-dem-haus'
      },
      nb: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin fra huset (De Casta)',
        slug: 'vin-fra-huset'
      },
      da: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin fra huset (De Casta)',
        slug: 'vin-fra-huset'
      },
      sv: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin från huset (De Casta)',
        slug: 'vin-fran-huset'
      },
      fr: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Vin de la maison (De Casta)',
        slug: 'vin-de-la-maison'
      },
      nl: {
        description: 'D.O. Catalunya. Bodegas Torres',
        title: 'Kwam van huis (De Casta)',
        slug: 'Kwam van huis'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '15.00'
      },
      'itemVariant->three-eighths': {
        amount: '8.50'
      },
      'itemVariant->cup': {
        amount: '3.50'
      }
    },
    price: { amount: '15.00' },
    number: '16'
  } as Product,
  'item->product->wines->ochoa-lagrima-rosa-17': {
    id: 'item->product->wines->ochoa-lagrima-rosa-17',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      en: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      de: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      nb: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      da: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      sv: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      fr: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      },
      nl: {
        description: 'Garnacha, Cabernet Sauvignon y Merlot - D.O. Navarra',
        title: 'Ochoa Lágrima Rosa',
        slug: 'ochoa-lagrima-rosa'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '18.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '18.50' },
    number: '17'
  } as Product,
  'item->product->wines->chivite-las-fincas-18': {
    id: 'item->product->wines->chivite-las-fincas-18',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      en: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      de: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      nb: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      da: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      sv: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      fr: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      },
      nl: {
        description: 'Garnacha, Tempranillo - D.O. Navarra',
        title: 'Chivite Las Fincas',
        slug: 'chivite-las-fincas'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '19.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '19.50' },
    number: '18'
  } as Product,
  'item->product->wines->don-px-2018-19': {
    id: 'item->product->wines->don-px-2018-19',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      en: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      de: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      nb: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      da: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      sv: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      fr: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      },
      nl: {
        description: 'Pedro Ximenez - D.O. Montilla Moriles',
        title: 'Don Px 2018',
        slug: 'don-px-2018'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '35.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: '4.50'
      }
    },
    price: { amount: '35.00' },
    number: '19'
  } as Product,
  'item->product->wines->raventos-i-blanc-de-nit-20': {
    id: 'item->product->wines->raventos-i-blanc-de-nit-20',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      en: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      de: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      nb: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      da: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      sv: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      fr: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      },
      nl: {
        description: 'Raventós I Blanc De Nit',
        title: 'Raventós I Blanc De Nit',
        slug: 'raventos-i-blanc-de-nit'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '35.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '35.00' },
    number: '20'
  } as Product,
  'item->product->wines->raventos-de-nit-rose-21': {
    id: 'item->product->wines->raventos-de-nit-rose-21',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',

    displayInfo: {
      es: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      en: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      de: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      nb: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      da: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      sv: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      fr: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      },
      nl: {
        description: 'Raventós De Nit Rosé',
        title: 'Raventós De Nit Rosé',
        slug: 'raventos-de-nit-rose'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '35.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '35.00' },
    number: '21'
  } as Product,
  'item->product->wines->taittinger-brut-reserve-22': {
    id: 'item->product->wines->taittinger-brut-reserve-22',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',

    displayInfo: {
      es: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      en: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      de: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      nb: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      da: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      sv: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      fr: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      },
      nl: {
        description: 'Taittinger Brut Réserve',
        title: 'Taittinger Brut Réserve',
        slug: 'taittinger-brut-reserve'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '80.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '80.00' },
    number: '22'
  } as Product,
  'item->product->wines->sangria-23': {
    id: 'item->product->wines->sangria-23',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: 'Sangría',
        title: 'Sangría',
        slug: 'sangria'
      },
      en: {
        description: 'Sangria',
        title: 'Sangría',
        slug: 'sangria'
      },
      de: {
        description: 'Sangría',
        title: 'Sangría',
        slug: 'sangria'
      },
      nb: {
        description: 'Sangría',
        title: 'Sangría',
        slug: 'sangria'
      },
      da: {
        description: 'Sangría',
        title: 'Sangría',
        slug: 'sangria'
      },
      sv: {
        description: 'Sangría',
        title: 'Sangría',
        slug: 'sangria'
      },
      fr: {
        description: 'Sangria',
        title: 'Sangría',
        slug: 'sangria'
      },
      nl: {
        description: 'Sangría',
        title: 'Sangría',
        slug: 'sangria'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '16.95'
      },
      'itemVariant->three-eighths': {
        amount: '8.95'
      },
      'itemVariant->cup': {
        amount: '4.95'
      }
    },
    price: { amount: '16.95' },
    number: '23'
  } as Product,
  'item->product->wines->limite-norte-24': {
    id: 'item->product->wines->limite-norte-24',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      en: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      de: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      nb: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      da: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      sv: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      fr: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      nl: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '35.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '35.00' },
    number: '24'
  } as Product,
  'item->product->wines->chivite-legardeta-25': {
    id: 'item->product->wines->chivite-legardeta-25',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(D.O. Navarra - Chardonay)',
        title: 'Chivite Legardeta',
        slug: 'chivite-legardeta'
      },
      en: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      de: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      nb: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      da: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      sv: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      fr: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      },
      nl: {
        description: '(D.O. Rioja- tempranillo blanco y maturana blanco)',
        title: 'Límite Norte',
        slug: 'limite-norte'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '28.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '28.00' },
    number: '25'
  } as Product,
  'item->product->wines->la-mareta-seco-26': {
    id: 'item->product->wines->la-mareta-seco-26',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      en: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      de: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      nb: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      da: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      sv: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      fr: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      },
      nl: {
        description: '(Malvasia Volcánica - D.O.Lanzarote)',
        title: 'La Mareta Seco',
        slug: 'la-mareta-seco'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '25.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '25.00' },
    number: '26'
  } as Product,
  'item->product->wines->palestra-27': {
    id: 'item->product->wines->palestra-27',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      en: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      de: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      nb: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      da: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      sv: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      fr: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      },
      nl: {
        description: '(Verdejo -D.O Rueda)',
        title: 'Palestra',
        slug: 'palestra'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '19.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '19.50' },
    number: '27'
  } as Product,
  'item->product->wines->valdesil-28': {
    id: 'item->product->wines->valdesil-28',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      en: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      de: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      nb: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      da: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      sv: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      fr: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      },
      nl: {
        description: '(Godello D.O. Valdeorras)',
        title: 'Valdesil',
        slug: 'valdesil'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '29.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '29.00' },
    number: '28'
  } as Product,
  'item->product->wines->chivite-coleccion-125-29': {
    id: 'item->product->wines->chivite-coleccion-125-29',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      en: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      de: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      nb: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      da: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      sv: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      fr: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      },
      nl: {
        description: '(Chardonay-D.O. Navarra)',
        title: 'Chivite Colección 125',
        slug: 'chivite-coleccion-125'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '55.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '55.00' },
    number: '29'
  } as Product,
  'item->product->wines->tameran-30': {
    id: 'item->product->wines->tameran-30',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      en: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      de: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      nb: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      da: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      sv: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      fr: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      },
      nl: {
        description: '(Malvasia volcánica-D.O. Gran Canaria)',
        title: 'Tamerán',
        slug: 'tameran'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '38.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '38.00' },
    number: '30'
  } as Product,
  'item->product->wines->rubicon-31': {
    id: 'item->product->wines->rubicon-31',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      en: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      de: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      nb: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      da: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      sv: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      fr: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      },
      nl: {
        description: '(Listán Negro - D.O. Lanzarote)',
        title: 'Rubicón',
        slug: 'rubicon'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '22.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '22.00' },
    number: '31'
  } as Product,
  'item->product->wines->magali-32': {
    id: 'item->product->wines->magali-32',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      en: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      de: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      nb: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      da: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      sv: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      fr: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      },
      nl: {
        description: '(Syrah-Provence, Francia)',
        title: 'Magali',
        slug: 'magali'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '30.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '30.00' },
    number: '32'
  } as Product,
  'item->product->wines->picolo-codorniu-33': {
    id: 'item->product->wines->picolo-codorniu-33',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      en: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      de: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      nb: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      da: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      sv: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      fr: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      },
      nl: {
        description: '',
        title: 'Picolo Codorniú',
        slug: 'picolo-codorniu'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: ''
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: '4.95'
      }
    },
    price: { amount: '4.95' },
    number: '33'
  } as Product,
  'item->product->wines->sangria-champagne-34': {
    id: 'item->product->wines->sangria-champagne-34',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      en: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      de: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      nb: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      da: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      sv: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      fr: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      },
      nl: {
        description: '',
        title: 'Sangría champagne',
        slug: 'sangria-champagne'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '17.95'
      },
      'itemVariant->three-eighths': {
        amount: '9.95'
      },
      'itemVariant->cup': {
        amount: '5.95'
      }
    },
    price: { amount: '17.95' },
    number: '34'
  } as Product,
  'item->product->wines->venta-las-vacas-35': {
    id: 'item->product->wines->venta-las-vacas-35',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      en: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      de: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      nb: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      da: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      sv: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      fr: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      },
      nl: {
        description: '(Tinta del pais-D.O. Ribera de Duero)',
        title: 'Venta Las Vacas',
        slug: 'venta-las-vacas'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '29.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '29.50' },
    number: '35'
  } as Product,
  'item->product->wines->dominio-basconcillos-finca-de-altura-36': {
    id: 'item->product->wines->dominio-basconcillos-finca-de-altura-36',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      en: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      de: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      nb: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      da: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      sv: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      fr: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      },
      nl: {
        description: '(Tinta del país-D.O. Ribera de Duero)',
        title: 'Dominio Basconcillos Finca de Altura',
        slug: 'dominio-basconcillos-finca-de-altura'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '30.50'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '30.50' },
    number: '36'
  } as Product,
  'item->product->wines->la-partio-37': {
    id: 'item->product->wines->la-partio-37',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      en: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      de: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      nb: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      da: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      sv: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      fr: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      },
      nl: {
        description: '(Priorat 100%-Caranyena Ecolgógico)',
        title: 'La Partió',
        slug: 'la-partio'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '35.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '35.00' },
    number: '37'
  } as Product,
  'item->product->wines->taberner-38': {
    id: 'item->product->wines->taberner-38',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      en: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      de: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      nb: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      da: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      sv: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      fr: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      },
      nl: {
        description: '(Vino de la tierra, Cádiz - Syrah)',
        title: 'Taberner',
        slug: 'taberner'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '35.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '35.00' },
    number: '38'
  } as Product,
  'item->product->wines->almirez-39': {
    id: 'item->product->wines->almirez-39',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      en: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      de: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      nb: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      da: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      sv: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      fr: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      },
      nl: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Almirez',
        slug: 'almirez'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '30.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '30.00' },
    number: '39'
  } as Product,
  'item->product->wines->marques-de-murrieta-reserva-40': {
    id: 'item->product->wines->marques-de-murrieta-reserva-40',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      en: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      de: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      nb: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      da: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      sv: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      fr: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      },
      nl: {
        description: '(Tempranillo graciano mazuelo y garnacha- D.O. Rioja)',
        title: 'Marqués de Murrieta Reserva',
        slug: 'marques-de-murrieta-reserva'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '45.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '45.00' },
    number: '40'
  } as Product,
  'item->product->wines->ahari-41': {
    id: 'item->product->wines->ahari-41',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      en: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      de: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      nb: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      da: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      sv: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      fr: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      },
      nl: {
        description: '(Tempranillo D.O. La Rioja)',
        title: 'Ahari',
        slug: 'ahari'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '50.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '50.00' },
    number: '41'
  } as Product,
  'item->product->wines->puntido-42': {
    id: 'item->product->wines->puntido-42',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      en: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      de: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      nb: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      da: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      sv: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      fr: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      },
      nl: {
        description: '(100% Tempranillo - D.O. Rioja)',
        title: 'Puntido',
        slug: 'puntido'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '55.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '55.00' },
    number: '42'
  } as Product,
  'item->product->wines->numanthia-43': {
    id: 'item->product->wines->numanthia-43',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      en: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      de: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      nb: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      da: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      sv: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      fr: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      },
      nl: {
        description: '(Tinta de Toro-D.O. Toro)',
        title: 'Numanthia',
        slug: 'numanthia'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '60.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '60.00' },
    number: '43'
  } as Product,
  'item->product->wines->finca-de-la-habanera-44': {
    id: 'item->product->wines->finca-de-la-habanera-44',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      en: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      de: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      nb: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      da: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      sv: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      fr: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      },
      nl: {
        description: '(D.O. Valle de la Orotava-100% Listán negro)',
        title: 'Finca de la Habanera',
        slug: 'finca-de-la-habanera'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '43.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '43.00' },
    number: '44'
  } as Product,
  'item->product->wines->fincas-de-ganuza-45': {
    id: 'item->product->wines->fincas-de-ganuza-45',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      en: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      de: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      nb: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      da: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      sv: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      fr: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      },
      nl: {
        description: '(90% Tempranillo 10% Graciano-D.O. Rioja)',
        title: 'Fincas de Ganuza',
        slug: 'fincas-de-ganuza'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '55.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '55.00' },
    number: '45'
  } as Product,
  'item->product->wines->abadia-retuerta-pago-valdebellon-46': {
    id: 'item->product->wines->abadia-retuerta-pago-valdebellon-46',
    type: 'product',
    images: [],
    active: true,
    defaultImg: '',
    mainImg: '',
    displayInfo: {
      es: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      en: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      de: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      nb: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      da: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      sv: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      fr: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      },
      nl: {
        description: '(Vt. Castilla y León-100% Cabernet Sauvignon)',
        title: 'Abadía Retuerta Pago Valdebellón',
        slug: 'abadia-retuerta-pago-valdebellon'
      }
    },
    hasVariants: true,
    hasAllergens: false,
    variants: 'variant->bottle-capacity',
    itemVariantPrices: {
      'itemVariant->three-quarter': {
        amount: '125.00'
      },
      'itemVariant->three-eighths': {
        amount: ''
      },
      'itemVariant->cup': {
        amount: ''
      }
    },
    price: { amount: '125.00' },
    number: '46'
  } as Product,

  ///// info->information
  'item->info->information-1': {
    id: 'item->info->information-1',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-information-1',
    displayInfo: {
      es: {
        description: 'Aforo máximo del local 40 personas',
        title: 'Información 1',
        slug: 'informacion-1'
      },
      en: {
        description: 'Maximum capacity of the premises 40 people',
        title: 'Information 1',
        slug: 'information-1'
      },
      de: {
        description: 'Maximale Kapazität der Räumlichkeiten 40 Personen',
        title: 'Information 1',
        slug: 'information-1'
      },
      nb: {
        description: 'Maksimal kapasitet på lokalene 40 personer',
        title: 'Informasjon 1',
        slug: 'informasjon-1'
      },
      da: {
        description: 'Maksimal kapacitet af lokalerne 40 personer',
        title: 'Information 1',
        slug: 'information-1'
      },
      sv: {
        description: 'Maximal kapacitet för lokalen 40 personer',
        title: 'Information 1',
        slug: 'information-1'
      },
      fr: {
        description: 'Capacité maximale des locaux 40 personnes',
        title: 'Informations 1',
        slug: 'informations-1'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '1'
  } as Info,
  'item->info->information-2': {
    id: 'item->info->information-2',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-information-2',
    displayInfo: {
      es: {
        description: 'Aforo máximo en el baño 2 personas',
        title: 'Información 2',
        slug: 'informacion-2'
      },
      en: {
        description: 'Maximum capacity in the bathroom 2 people',
        title: 'Information 2',
        slug: 'information-2'
      },
      de: {
        description: 'Maximale Kapazität im Badezimmer 2 Personen',
        title: 'Information 2',
        slug: 'information-2'
      },
      nb: {
        description: 'Maks kapasitet på badet 2 personer',
        title: 'Informasjon 2',
        slug: 'informasjon-2'
      },
      da: {
        description: 'Maksimal kapacitet på badeværelset 2 personer',
        title: 'Information 2',
        slug: 'information-2'
      },
      sv: {
        description: 'Max kapacitet i badrummet 2 personer',
        title: 'Information 2',
        slug: 'information-2'
      },
      fr: {
        description: 'Capacité maximale dans la salle de bain 2 personnes',
        title: 'Informations 2',
        slug: 'informations-2'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '2'
  } as Info,
  'item->info->information-3': {
    id: 'item->info->information-3',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-information-3',
    displayInfo: {
      es: {
        description:
          'Puede consultar nuestro menú online con el código qr del inicio o el suministrado en cada una de las mesas',
        title: 'Información 3',
        slug: 'informacion-3'
      },
      en: {
        description:
          'You can consult our online menu with the qr code of the beginning or the one supplied in each of the tables',
        title: 'Information 3',
        slug: 'information-3'
      },
      de: {
        description:
          'Sie können unser Online-Menü mit dem QR-Code des Anfangs oder dem in jeder der Tabellen angegebenen einsehen',
        title: 'Information 3',
        slug: 'information-3'
      },
      nb: {
        description:
          'Du kan se vår nettmeny med qr-koden for begynnelsen eller den som følger med i hver av tabellene',
        title: 'Informasjon 3',
        slug: 'informasjon-3'
      },
      da: {
        description:
          'Du kan konsultere vores online-menu med qr-koden fra begyndelsen eller den, der findes i hver af tabellerne',
        title: 'Information 3',
        slug: 'information-3'
      },
      sv: {
        description:
          'Du kan konsultera vår onlinemeny med qr-koden från början eller den som finns i var och en av tabellerna',
        title: 'Information 3',
        slug: 'information-3'
      },
      fr: {
        description:
          'Vous pouvez consulter notre menu en ligne avec le qr code du début ou celui fourni dans chacun des tableaux',
        title: 'Informations 3',
        slug: 'informations-3'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '3'
  } as Info,
  'item->info->information-4': {
    id: 'item->info->information-4',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-information-4',
    displayInfo: {
      es: {
        description:
          'Le recordamos que tiene a su disposición la información sobre alergénicos del menú',
        title: 'Información 4',
        slug: 'informacion-4'
      },
      en: {
        description:
          'We remind you that the information on allergens from the menu is available to you',
        title: 'Information 4',
        slug: 'information-4'
      },
      de: {
        description:
          'Wir erinnern Sie daran, dass Ihnen die Informationen zu Allergenen aus der Speisekarte zur Verfügung stehen',
        title: 'Information 4',
        slug: 'information-4'
      },
      nb: {
        description:
          'Vi minner om at informasjonen om allergener fra menyen er tilgjengelig for deg',
        title: 'Informasjon 4',
        slug: 'informasjon-4'
      },
      da: {
        description:
          'Vi minder dig om, at informationen om allergener fra menuen er tilgængelig for dig',
        title: 'Information 4',
        slug: 'information-4'
      },
      sv: {
        description:
          'Vi påminner dig om att informationen om allergener från menyn är tillgänglig för dig',
        title: 'Information 4',
        slug: 'information-4'
      },
      fr: {
        description:
          'Nous vous rappelons que les informations sur les allergènes de la carte sont à votre disposition',
        title: 'Informations 4',
        slug: 'informations-4'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '4'
  } as Info,
  'item->info->information-5': {
    id: 'item->info->information-5',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-information-5',
    displayInfo: {
      es: {
        description:
          'Por favor, colabore para que el local sea un espacio seguro leyendo las recomendaciones sanitarias',
        title: 'Información 5',
        slug: 'informacion-5'
      },
      en: {
        description:
          'Please, help make the place a safe space by reading the sanitary recommendations',
        title: 'Information 5',
        slug: 'information-5'
      },
      de: {
        description:
          'Bitte helfen Sie mit, den Ort zu einem sicheren Ort zu machen, indem Sie die Hygieneempfehlungen lesen',
        title: 'Information 5',
        slug: 'information-5'
      },
      nb: {
        description:
          'Vennligst hjelp til å gjøre stedet til et trygt sted ved å lese sanitæranbefalingene',
        title: 'Informasjon 5',
        slug: 'informasjon-5'
      },
      da: {
        description:
          'Hjælp venligst med at gøre stedet til et sikkert sted ved at læse de sanitære anbefalinger',
        title: 'Information 5',
        slug: 'information-5'
      },
      sv: {
        description:
          'Snälla, hjälp till att göra platsen till en säker plats genom att läsa de sanitära rekommendationerna',
        title: 'Information 5',
        slug: 'information-5'
      },
      fr: {
        description: `S'il vous plaît, aidez à faire de l'endroit un espace sûr en lisant les recommandations sanitaires`,
        title: 'Informations 5',
        slug: 'informations-5'
      },
      nl: {
        description: '',
        title: '',
        slug: ''
      }
    },
    number: '5'
  } as Info,
  'item->info->information-6': {
    id: 'item->info->information-6',
    type: 'info',
    images: [],
    active: true,
    hasVariants: false,
    defaultImg: 'image->item->info->info-card-250-2-default',
    mainImg: 'image->item->info->info-card-250-2-information-6',
    displayInfo: {
      es: {
        description: 'Abrimos todos los días de 10:30 a 21:30',
        title: 'Información 6',
        slug: 'informacion-6'
      },
      en: {
        description: 'We open every day from 10:30 to 21:30',
        title: 'Information 6',
        slug: 'information-6'
      },
      de: {
        description: 'Wir haben täglich von 10:30 bis 21:30 geöffnet',
        title: 'Information 6',
        slug: 'information-6'
      },
      nb: {
        description: 'Vi har åpent hver dag fra 10:30 til 21:30',
        title: 'Informasjon 6',
        slug: 'informasjon-6'
      },
      da: {
        description: 'Vi har åbent hver dag fra 10:30 til 21:30',
        title: 'Information 6',
        slug: 'information-6'
      },
      sv: {
        description: 'Vi har öppet varje dag från 10:30 till 21:30',
        title: 'Information 6',
        slug: 'information-6'
      },
      fr: {
        description: 'Nous ouvrons tous les jours de 10h30 à 21h30.',
        title: 'Informations 6',
        slug: 'informations-6'
      },
      nl: {
        description: 'We zijn elke dag open van 10.30 uur tot 21.30 uur.',
        title: 'Informatie 6',
        slug: 'informatie-6'
      }
    },
    number: '6'
  } as Info,

  ///// menu->
  'item->menu->meals': {
    id: 'item->menu->meals',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->meals-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Comidas',
        slug: 'comidas'
      },
      en: {
        title: 'Meals',
        slug: 'meals'
      },
      de: {
        title: 'Lebensmittel',
        slug: 'lebensmittel'
      },
      nb: {
        title: 'Matvarer',
        slug: 'matvarer'
      },
      da: {
        title: 'Fødevarer',
        slug: 'fødevarer'
      },
      sv: {
        title: 'Livsmedel',
        slug: 'livsmedel'
      },
      fr: {
        title: 'Nourriture',
        slug: 'nourriture'
      },
      nl: {
        title: 'Voedsel',
        slug: 'voedsel'
      }
    }
  } as Menu,
  'item->menu->desserts': {
    id: 'item->menu->desserts',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->desserts-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->drinks': {
    id: 'item->menu->drinks',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->drinks-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Bebidas',
        slug: 'bebidas'
      },
      en: {
        title: 'Drinks',
        slug: 'category-drinks'
      },
      de: {
        title: 'Getränke',
        slug: 'getranke'
      },
      nb: {
        title: 'Drikker',
        slug: 'drikker'
      },
      da: {
        title: 'Drikkevarer',
        slug: 'drikkevarer'
      },
      sv: {
        title: 'Drycker',
        slug: 'drycker'
      },
      fr: {
        title: 'Boissons',
        slug: 'boissons'
      },
      nl: {
        title: 'Drankjes',
        slug: 'drankjes'
      }
    }
  } as Menu,
  'item->menu->wines': {
    id: 'item->menu->wines',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->wines-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Vinos',
        slug: 'vinos'
      },
      en: {
        title: 'Wines',
        slug: 'wines'
      },
      de: {
        title: 'Wein',
        slug: 'wein'
      },
      nb: {
        title: 'Viner',
        slug: 'viner'
      },
      da: {
        title: 'Vine',
        slug: 'vine'
      },
      sv: {
        title: 'Viner',
        slug: 'viner'
      },
      fr: {
        title: 'Vins ',
        slug: 'vins'
      },
      nl: {
        title: 'Wijn',
        slug: 'wijn'
      }
    }
  } as Menu,
  'item->menu->info->allergens': {
    id: 'item->menu->info->allergens',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->allergens-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->info->information': {
    id: 'item->menu->info->information',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->info-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->info->gallery': {
    id: 'item->menu->info->gallery',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->gallery-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->starters': {
    id: 'item->menu->meals->starters',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->share-snack-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Para Compartir o Picar',
        slug: 'para-compartir-o-picar'
      },
      en: {
        title: 'To share or snack',
        slug: 'to-share-or-snack'
      },
      de: {
        title: 'Zum Teilen Oder Kleinigkeit Essen',
        slug: 'zum-teilen-oder-kleinigkeit-essen'
      },
      nb: {
        title: 'Å Dele Eller Som Snack',
        slug: 'a-dele-eller-som-snack'
      },
      da: {
        title: 'Til at Dele Eller Til at Nippe Til',
        slug: 'til-at-dele-eller-til-at-nippe-til'
      },
      sv: {
        title: 'Att Dela Eller Mellanmål',
        slug: 'att-dela-eller-mellanmal'
      },
      fr: {
        title: 'Entrées à Partager',
        slug: 'entrees-a-partager'
      },
      nl: {
        title: 'Om te Delen of Happen',
        slug: 'om-te-delen-of-happen'
      }
    }
  } as Menu,
  'item->menu->meals->salads': {
    id: 'item->menu->meals->salads',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->meals-fresh-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->spoon-dishes': {
    id: 'item->menu->meals->spoon-dishes',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->spoon-dishes-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->sea-and-mountains': {
    id: 'item->menu->meals->sea-and-mountains',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->sea-and-montain-1',
    active: true,
    displayInfo: {
      es: {
        title: 'Mar y Montaña',
        slug: 'mar-y-montana'
      },
      en: {
        title: 'Surf & Turf',
        slug: 'surf-turf'
      },
      de: {
        title: 'Berge und Meer',
        slug: 'berge-und-meer'
      },
      nb: {
        title: 'Hav og Fjell',
        slug: 'hav-og-fjell'
      },
      da: {
        title: 'Hav og Bjerge',
        slug: 'hav-og-bjerge'
      },
      sv: {
        title: 'Hav och Berg',
        slug: 'hav-och-berg'
      },
      fr: {
        title: 'Mer et Montagne',
        slug: 'mer-et-montagne'
      },
      nl: {
        title: 'Uit de Zee en de Bergen',
        slug: 'uit-de-zee-en-de-bergen'
      }
    }
  } as Menu,
  'item->menu->meals->prime-cut-meats': {
    id: 'item->menu->prime-cut-meats',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->prime-cut-meats-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->fresh-pasta': {
    id: 'item->menu->meals->fresh-pasta',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->fresh-pasta-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->our-chef-s-suggestions': {
    id: 'item->menu->meals->our-chef-s-suggestions',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->suggestions-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->childrens': {
    id: 'item->menu->meals->childrens',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->children-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->meals->fittings': {
    id: 'item->menu->meals->fittings',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->fittings-1',
    active: true,
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
    }
  } as Menu,
  'item->menu->drinks->bar': {
    id: 'item->menu->drinks->bar',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->bar-1',
    active: false,
    displayInfo: {
      es: {
        title: 'El bar',
        slug: 'el-bar'
      },
      en: {
        title: 'The bar',
        slug: 'the-bar'
      },
      de: {
        title: 'Die Bar',
        slug: 'die-bar'
      },
      nb: {
        title: 'Baren',
        slug: 'baren'
      },
      da: {
        title: 'Baren',
        slug: 'baren'
      },
      sv: {
        title: 'Baren',
        slug: 'baren'
      },
      fr: {
        title: 'Le bar',
        slug: 'le-bar'
      },
      nl: {
        title: 'De bar',
        slug: 'de-bar'
      }
    }
  } as Menu,
  'item->menu->drinks->beers': {
    id: 'item->menu->drinks->beers',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->beers-1',
    active: false,
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
    }
  } as Menu,
  'item->menu->drinks->coffee-shop': {
    id: 'item->menu->drinks->coffee-shop',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->coffee-shop-1',
    active: false,
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
    }
  } as Menu,
  'item->menu->drinks->refreshments': {
    id: 'item->menu->drinks->refreshments',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->refreshments-1',
    active: false,
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
    }
  } as Menu,
  'item->menu->drinks->smoothies': {
    id: 'item->menu->drinks->smoothies',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->smoothies-1',
    active: false,
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
    }
  } as Menu,
  'item->menu->drinks->appetizers': {
    id: 'item->menu->drinks->appetizers',
    type: 'menu',
    images: [],
    defaultImg: 'image->menus->default-menu-item',
    mainImg: 'image->menus->appetizers-1',
    active: false,
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
    }
  } as Menu
};
