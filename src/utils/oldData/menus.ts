import { PageMenu, PageMenuItem } from 'definitions/models';

export const pageMenus: { [key: string]: PageMenu } = {
  'pageMenu->snacks-and-brunch': {
    id: 'pageMenu->snacks-and-brunch',
    active: false,
    type: 'menu',
    show: false,
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
    },
    selectableItems: [],
    items: ['pageMenuItem->meals->breakfasts', 'pageMenuItem->meals->sandwich']
  }
};

export const pageMenuItems: { [key: string]: PageMenuItem } = {
  'pageMenuItem->info->sanitary-measures': {
    id: 'pageMenuItem->info->sanitary-measures',
    itemId: 'item->menu->info->sanitary-measures',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->info->sanitary-measures',
    modal: '',
    isSubMenu: false,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->snacks-and-brunch': {
    id: 'pageMenuItem->meals->snacks-and-brunch',
    itemId: 'item->menu->meals->snacks-and-brunch',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: 'page->snacks-and-brunch',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: 'pageMenu->snacks-and-brunch'
  },
  'pageMenuItem->meals->breakfasts': {
    id: 'pageMenuItem->meals->breakfasts',
    itemId: 'item->menu->meals->breakfasts',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: '',
    modal: '',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  },
  'pageMenuItem->meals->sandwich': {
    id: 'pageMenuItem->meals->sandwich',
    itemId: 'item->menu->meals->sandwich',
    type: 'menu',
    active: true,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: true,
    isModalMode: false,
    href: '',
    template: '',
    page: '',
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
  'pageMenuItem->meals->extra-menu': {
    id: 'pageMenuItem->meals->extra-menu',
    itemId: 'item->menu->meals->extra-menu',
    type: 'menu',
    active: false,
    showTitle: true,
    showDescription: false,
    showExtraInfo: false,
    show: false,
    isModalMode: true,
    template: '',
    href: '',
    page: '',
    modal: 'modal->blackboard-list->2',
    isSubMenu: true,
    hasSubMenu: false,
    subMenu: ''
  }
};
