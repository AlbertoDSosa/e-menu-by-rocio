import { ProductList, InfoList } from 'definitions/models';

export const lists: { [key: string]: ProductList | InfoList } = {
  'list->meals->breakfasts': {
    id: 'list->meals->breakfasts',
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
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->breakfasts'],
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
      'listItem->product->meals->breakfasts->toast-with-tomato-puree-and-serrano-cured-ham-1',
      'listItem->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-guacamole-and-cherry-tomatoes-2',
      'listItem->product->meals->breakfasts->toast-with-philadelphia-cream-cheese-rocket-lettuce-and-smoked-salmon-3',
      'listItem->product->meals->breakfasts->yoghurt-with-muesli-fresh-fruit-and-honey-4',
      'listItem->product->meals->breakfasts->scrambled-eggs-with-ham-5',
      'listItem->product->meals->breakfasts->english-breakfast-6'
    ]
  } as ProductList,
  'list->meals->sandwich': {
    id: 'list->meals->sandwich',
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
      'listItem->product->meals->new-york-sandwich-5',
      'listItem->product->meals->hamburger-with-chicken-6',
      'listItem->product->meals->beef-burger-7',
      'listItem->product->meals->mexican-iberian-pork-burger-8',
      'listItem->product->meals->angus-beef-burger-9'
    ],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->sandwich'],
    displayInfo: {
      es: {
        title: 'Brunch',
        slug: 'brunch'
      },
      en: {
        title: 'Brunch',
        slug: 'brunch'
      },
      de: {
        title: 'Brunch',
        slug: 'brunch'
      },
      nb: {
        title: 'Brunch',
        slug: 'brunch'
      },
      da: {
        title: 'Brunch',
        slug: 'brunch'
      },
      sv: {
        title: 'Brunch',
        slug: 'brunch'
      },
      fr: {
        title: 'Brunch',
        slug: 'brunch'
      },
      nl: {
        title: 'Brunch',
        slug: 'brunch'
      }
    },
    items: [
      'listItem->product->meals->artisan-loaf-sandwich-with-squid-1',
      'listItem->product->meals->homemade-bread-with-black-pork-in-lard-2',
      'listItem->product->meals->homemade-bread-with-chicken-3',
      'listItem->product->meals->homemade-bread-with-chorizo-from-teror-4'
    ]
  } as ProductList,
  'list->info->sanitary-measures-1': {
    id: 'list->info->sanitary-measures-1',
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
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->info->sanitary-measures'],
    displayInfo: {
      es: {
        title: 'Medidas Sanitarias 1',
        slug: 'medidas-sanitarias-1'
      },
      en: {
        title: 'Sanitary measures 1',
        slug: 'sanitary-measures-1'
      },
      de: {
        title: 'Hygienemaßnahmen 1',
        slug: 'hygienemassnahmen-1'
      },
      nb: {
        title: 'Sanitære tiltak 1',
        slug: 'sanitaere-tiltak-1'
      },
      da: {
        title: 'Sanitære foranstaltninger 1',
        slug: 'sanitaere-foranstaltninger-1'
      },
      sv: {
        title: 'Sanitära åtgärder 1',
        slug: 'sanitara-atgarder-1'
      },
      fr: {
        title: 'Mesures sanitaires 1',
        slug: 'mesures-sanitaires-1'
      },
      nl: {
        title: 'Sanitaire maatregelen',
        slug: 'sanitaire-maatregelen'
      }
    },
    items: [
      'listItem->info->sanitary-measures->1',
      'listItem->info->sanitary-measures->2',
      'listItem->info->sanitary-measures->3',
      'listItem->info->sanitary-measures->4',
      'listItem->info->sanitary-measures->5',
      'listItem->info->sanitary-measures->6'
    ]
  } as InfoList,
  'list->info->sanitary-measures-2': {
    id: 'list->info->sanitary-measures-2',
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
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->info->sanitary-measures'],
    displayInfo: {
      es: {
        title: 'Medidas Sanitarias 2',
        slug: 'medidas-sanitarias-2'
      },
      en: {
        title: 'Sanitary measures 2',
        slug: 'sanitary-measures-2'
      },
      de: {
        title: 'Hygienemaßnahmen 2',
        slug: 'hygienemassnahmen-2'
      },
      nb: {
        title: 'Sanitære tiltak 2',
        slug: 'sanitaere-tiltak-2'
      },
      da: {
        title: 'Sanitære foranstaltninger 2',
        slug: 'sanitaere-foranstaltninger-2'
      },
      sv: {
        title: 'Sanitära åtgärder 2',
        slug: 'sanitara-atgarder-2'
      },
      fr: {
        title: 'Mesures sanitaires 2',
        slug: 'mesures-sanitaires-2'
      },
      nl: {
        title: 'Sanitaire maatregelen',
        slug: 'sanitaire-maatregelen'
      }
    },
    items: [
      'listItem->info->sanitary-measures->7',
      'listItem->info->sanitary-measures->8',
      'listItem->info->sanitary-measures->9',
      'listItem->info->sanitary-measures->10',
      'listItem->info->sanitary-measures->11',
      'listItem->info->sanitary-measures->12'
    ]
  } as InfoList,
  'list->meals->extra-menu': {
    id: 'list->meals->extra-menu',
    type: 'product',
    active: false,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: false,
    showDescription: false,
    showExtraInfo: false,
    showTitle: false,
    template: 'template->list->default',
    selectableItems: [],
    editable: false,
    maxItems: 12,
    categories: ['category->meals->extra-menu'],
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
      'listItem->product->meals->extra-menu->-1',
      'listItem->product->meals->extra-menu->-2',
      'listItem->product->meals->extra-menu->-3',
      'listItem->product->meals->extra-menu->-4',
      'listItem->product->meals->extra-menu->-5',
      'listItem->product->meals->extra-menu->-6',
      'listItem->product->meals->extra-menu->-7',
      'listItem->product->meals->extra-menu->-8',
      'listItem->product->meals->extra-menu->-9',
      'listItem->product->meals->extra-menu->-10',
      'listItem->product->meals->extra-menu->-11',
      'listItem->product->meals->extra-menu->-12',
      'listItem->product->meals->extra-menu->-13',
      'listItem->product->meals->extra-menu->-14',
      'listItem->product->meals->extra-menu->-15',
      'listItem->product->meals->extra-menu->-16',
      'listItem->product->meals->extra-menu->-17',
      'listItem->product->meals->extra-menu->-19',
      'listItem->product->meals->extra-menu->-19',
      'listItem->product->meals->extra-menu->-20'
    ]
  } as ProductList,
  'list->meals->default': {
    id: 'list->meals->default',
    type: 'product',
    active: false,
    defaultImg: '',
    mainImg: '',
    sortable: true,
    hasVariants: false,
    show: false,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    editable: true,
    maxItems: 8,
    template: 'template->list->default',
    categories: ['category->default'],
    displayInfo: {
      es: {
        title: '',
        slug: ''
      },
      en: {
        title: '',
        slug: ''
      },
      de: {
        title: '',
        slug: ''
      },
      nb: {
        title: '',
        slug: ''
      },
      da: {
        title: '',
        slug: ''
      },
      sv: {
        title: '',
        slug: ''
      },
      fr: {
        title: '',
        slug: ''
      },
      nl: {
        title: '',
        slug: ''
      }
    },
    selectableItems: [
      'listItem->product->meals->default->-4',
      'listItem->product->meals->default->-5',
      'listItem->product->meals->default->-6',
      'listItem->product->meals->default->-7',
      'listItem->product->meals->default->-8',
      'listItem->product->meals->default->-9',
      'listItem->product->meals->default->-10',
      'listItem->product->meals->default->-11',
      'listItem->product->meals->default->-12',
      'listItem->product->meals->default->-13',
      'listItem->product->meals->default->-14',
      'listItem->product->meals->default->-15',
      'listItem->product->meals->default->-16',
      'listItem->product->meals->default->-17',
      'listItem->product->meals->default->-18',
      'listItem->product->meals->default->-19',
      'listItem->product->meals->default->-20'
    ],
    items: [
      'listItem->product->meals->suggestions-of-the-day->norwegian-pickled-herring-1',
      'listItem->product->meals->suggestions-of-the-day->steak-tartar-2',
      'listItem->product->meals->suggestions-of-the-day->tuna-tartare-3'
    ]
  } as ProductList
};
