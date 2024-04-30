import { InfoCategory, ProductCategory } from 'definitions/models';

export const categories: { [key: string]: ProductCategory | InfoCategory } = {
  'category->meals->breakfasts': {
    id: 'category->meals->breakfasts',
    active: true,
    type: 'product',
    hasVariants: false,
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
    },
    items: [
      'item->product->meals->breakfasts->toast-with-tomato-puree-and-serrano-cured-ham-1',
      'item->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-guacamole-and-cherry-tomatoes-2',
      'item->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-rocket-lettuce-and-smoked-salmon-3',
      'item->product->meals->breakfasts->yoghurt-with-muesli-fresh-fruit-and-honey-4',
      'item->product->meals->breakfasts->scrambled-eggs-with-ham-5',
      'item->product->meals->breakfasts->english-breakfast-6'
    ]
  },
  'category->meals->sandwich': {
    id: 'category->meals->sandwich',
    active: true,
    type: 'product',
    hasVariants: false,
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
    },
    items: [
      'item->product->meals->artisan-loaf-sandwich-with-squid-1',
      'item->product->meals->homemade-bread-with-black-pork-in-lard-2',
      'item->product->meals->homemade-bread-with-chicken-3',
      'item->product->meals->homemade-bread-with-chorizo-from-teror-4',
      'item->product->meals->new-york-sandwich-5',
      'item->product->meals->hamburger-with-chicken-6',
      'item->product->meals->beef-burger-7',
      'item->product->meals->mexican-iberian-pork-burger-8',
      'item->product->meals->angus-beef-burger-9',
      'item->product->meals->vegan-hamburger-10'
    ]
  },
  'category->info->sanitary-measures': {
    id: 'category->info->sanitary-measures',
    active: true,
    type: 'info',
    hasVariants: false,
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
    },
    items: [
      'item->info->sanitary-measures->1',
      'item->info->sanitary-measures->2',
      'item->info->sanitary-measures->3',
      'item->info->sanitary-measures->4',
      'item->info->sanitary-measures->5',
      'item->info->sanitary-measures->6',
      'item->info->sanitary-measures->7',
      'item->info->sanitary-measures->8',
      'item->info->sanitary-measures->9',
      'item->info->sanitary-measures->10',
      'item->info->sanitary-measures->11',
      'item->info->sanitary-measures->12'
    ]
  },
  'category->meals->extra-menu': {
    id: 'category->meals->extra-menu',
    active: false,
    type: 'product',
    hasVariants: false,
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
    },
    items: [
      'item->product->meals->extra-menu->-1',
      'item->product->meals->extra-menu->-2',
      'item->product->meals->extra-menu->-3',
      'item->product->meals->extra-menu->-4',
      'item->product->meals->extra-menu->-5',
      'item->product->meals->extra-menu->-6',
      'item->product->meals->extra-menu->-7',
      'item->product->meals->extra-menu->-8',
      'item->product->meals->extra-menu->-9',
      'item->product->meals->extra-menu->-10',
      'item->product->meals->extra-menu->-11',
      'item->product->meals->extra-menu->-12',
      'item->product->meals->extra-menu->-13',
      'item->product->meals->extra-menu->-14',
      'item->product->meals->extra-menu->-15',
      'item->product->meals->extra-menu->-16',
      'item->product->meals->extra-menu->-17',
      'item->product->meals->extra-menu->-18',
      'item->product->meals->extra-menu->-19',
      'item->product->meals->extra-menu->-20'
    ]
  }
};
