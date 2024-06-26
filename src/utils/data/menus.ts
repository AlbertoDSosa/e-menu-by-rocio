import { PageMenu, PageMenuItem } from 'definitions/models';

export const pageMenus: { [key: string]: PageMenu } = {
  'pageMenu->main-menu': {
    id: 'pageMenu->main-menu',
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    active: true,
    template: '',
    maxItems: 8,
    displayInfo: {
      es: {
        title: 'Menú Principal',
        slug: 'menu-principal'
      },
      en: {
        title: 'Main Menu',
        slug: 'main-menu'
      },
      de: {
        title: 'Hauptmenü',
        slug: 'hauptmenu'
      },
      nb: {
        title: 'Hovedmeny',
        slug: 'hovedmeny'
      },
      da: {
        title: 'Hovedmenu',
        slug: 'hovedmenu'
      },
      sv: {
        title: 'Huvudmeny',
        slug: 'huvudmeny'
      },
      fr: {
        title: 'Menu principal',
        slug: 'menu-principal'
      },
      nl: {
        title: 'Hoofdmenu',
        slug: 'hoofdmenu'
      }
    },
    selectableItems: ['pageMenuItem->info->sanitary-measures'],
    items: [
      'pageMenuItem->meals',
      'pageMenuItem->desserts',
      'pageMenuItem->main-menu->fittings',
      'pageMenuItem->drinks',
      'pageMenuItem->wines',
      'pageMenuItem->info->allergens',
      'pageMenuItem->information',
      'pageMenuItem->info->gallery'
    ]
  },
  'pageMenu->meals': {
    id: 'pageMenu->meals',
    active: true,
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    template: '',
    maxItems: 8,
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
    },
    selectableItems: [
      'pageMenuItem->meals->snacks-and-brunch',
      'pageMenuItem->meals->fittings',
      'pageMenuItem->meals->extra-menu'
    ],
    items: [
      'pageMenuItem->meals->starters',
      'pageMenuItem->meals->salads',
      'pageMenuItem->meals->spoon-dishes',
      'pageMenuItem->meals->fresh-pasta',
      'pageMenuItem->meals->sea-and-mountains',
      'pageMenuItem->meals->prime-cut-meats',
      'pageMenuItem->meals->our-chef-s-suggestions',
      'pageMenuItem->meals->childrens'
    ]
  },
  'pageMenu->drinks': {
    id: 'pageMenu->drinks',
    active: true,
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    template: '',
    maxItems: 8,
    displayInfo: {
      es: {
        title: 'Bebidas',
        slug: 'bebidas'
      },
      en: {
        title: 'Drinks',
        slug: 'drinks'
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
    },
    selectableItems: [],
    items: [
      'pageMenuItem->drinks->appetizers',
      'pageMenuItem->drinks->smoothies',
      'pageMenuItem->drinks->refreshments',
      'pageMenuItem->drinks->beers',
      'pageMenuItem->drinks->coffee-shop',
      'pageMenuItem->drinks->bar'
    ]
  },
  'pageMenu->wines': {
    id: 'pageMenu->wines',
    active: false,
    type: 'menu',
    show: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    defaultImg: '',
    mainImg: '',
    editable: false,
    sortable: true,
    categories: [],
    template: '',
    maxItems: 8,
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
    },
    selectableItems: [],
    items: [
      'pageMenuItem->wines->red-wines',
      'pageMenuItem->wines->rose-wines',
      'pageMenuItem->wines->white-wines',
      'pageMenuItem->wines->sweet-wines',
      'pageMenuItem->wines->sangrias-and-champagnes'
    ]
  }
};

export const pageMenuItems: { [key: string]: PageMenuItem } = {
  'pageMenuItem->meals': {
    id: 'pageMenuItem->meals',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    itemId: 'item->menu->meals',
    isModalMode: false,
    href: '',
    template: '',
    page: '',
    modal: '',
    isSubMenu: false,
    hasSubMenu: true,
    subMenu: 'pageMenu->meals'
  },
  'pageMenuItem->desserts': {
    id: 'pageMenuItem->desserts',
    itemId: 'item->menu->desserts',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->desserts',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->drinks': {
    id: 'pageMenuItem->drinks',
    itemId: 'item->menu->drinks',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->drinks',
    modal: '',
    isSubMenu: false,
    hasSubMenu: true,
    subMenu: 'pageMenu->drinks'
  },
  'pageMenuItem->drinks->refreshments': {
    id: 'pageMenuItem->drinks->refreshments',
    itemId: 'item->menu->drinks->refreshments',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->refreshments',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->drinks->beers': {
    id: 'pageMenuItem->drinks->beers',
    itemId: 'item->menu->drinks->beers',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->beers',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->drinks->coffee-shop': {
    id: 'pageMenuItem->drinks->coffee-shop',
    itemId: 'item->menu->drinks->coffee-shop',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->coffee-shop',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->drinks->smoothies': {
    id: 'pageMenuItem->drinks->smoothies',
    itemId: 'item->menu->drinks->smoothies',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->smoothies',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->drinks->appetizers': {
    id: 'pageMenuItem->drinks->appetizers',
    itemId: 'item->menu->drinks->appetizers',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->appetizers',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->drinks->bar': {
    id: 'pageMenuItem->drinks->bar',
    itemId: 'item->menu->drinks->bar',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->bar',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->wines': {
    id: 'pageMenuItem->wines',
    itemId: 'item->menu->wines',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->wines',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->info->allergens': {
    id: 'pageMenuItem->info->allergens',
    itemId: 'item->menu->info->allergens',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->allergens',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->information': {
    id: 'pageMenuItem->information',
    itemId: 'item->menu->info->information',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->information',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->info->gallery': {
    id: 'pageMenuItem->info->gallery',
    itemId: 'item->menu->info->gallery',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->gallery',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->starters': {
    id: 'pageMenuItem->meals->starters',
    itemId: 'item->menu->meals->starters',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->starters',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->salads': {
    id: 'pageMenuItem->meals->salads',
    itemId: 'item->menu->meals->salads',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->salads',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->spoon-dishes': {
    id: 'pageMenuItem->meals->spoon-dishes',
    itemId: 'item->menu->meals->spoon-dishes',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->spoon-dishes',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->sea-and-mountains': {
    id: 'pageMenuItem->meals->sea-and-mountains',
    itemId: 'item->menu->meals->sea-and-mountains',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->sea-and-mountains-2',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->fresh-pasta': {
    id: 'pageMenuItem->meals->fresh-pasta',
    itemId: 'item->menu->meals->fresh-pasta',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->fresh-pasta',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->prime-cut-meats': {
    id: 'pageMenuItem->meals->prime-cut-meats',
    itemId: 'item->menu->meals->prime-cut-meats',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->prime-cut-meats',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->our-chef-s-suggestions': {
    id: 'pageMenuItem->meals->our-chef-s-suggestions',
    itemId: 'item->menu->meals->our-chef-s-suggestions',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->our-chef-s-suggestions',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->childrens': {
    id: 'pageMenuItem->meals->childrens',
    itemId: 'item->menu->meals->childrens',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    template: '',
    href: '',
    page: 'page->childrens',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->fittings': {
    id: 'pageMenuItem->meals->fittings',
    itemId: 'item->menu->meals->fittings',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: true,
    template: '',
    href: '',
    page: '',
    modal: 'modal->blackboard-list->1',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->main-menu->fittings': {
    id: 'pageMenuItem->main-menu->fittings',
    itemId: 'item->menu->meals->fittings',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: true,
    template: '',
    href: '',
    page: '',
    modal: 'modal->blackboard-list->1',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  }
};
