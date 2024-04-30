import { PageSection } from 'definitions/models';

export const pageSections: { [key: string]: PageSection } = {
  'pageSection->meals->breakfasts-1': {
    id: 'pageSection->meals->breakfasts-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-breakfasts',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->breakfasts'],
    number: '1',
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
  },
  'pageSection->meals->sandwich-1': {
    id: 'pageSection->meals->sandwich-1',
    type: 'section',
    active: true,
    template: 'template->pageSection->two-rows-multi-col->single-col-list',
    defaultImg: 'image->section->aside-1500-300-default',
    mainImg: 'image->section->aside-1500-300-brunch',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->sandwich'],
    number: '1',
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
    }
  },
  'pageSection->info->sanitary-measures-1': {
    id: 'pageSection->info->sanitary-measures-1',
    template: 'template->pageSection->info-list',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->sanitary-measures-1'],
    number: '1',
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
  },
  'pageSection->info->sanitary-measures-2': {
    id: 'pageSection->info->sanitary-measures-2',
    template: 'template->pageSection->info-list',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    listItemsForCol: 6,
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: false,
    lists: ['list->info->sanitary-measures-2'],
    number: '1',
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
  },
  'pageSection->meals->extra-menu': {
    id: 'pageSection->meals->extra-menu',
    type: 'section',
    active: true,
    defaultImg: '',
    mainImg: '',
    template: 'template->pageSection->simple-list',
    show: true,
    showExtraInfo: false,
    showDescription: false,
    showTitle: true,
    listItemsForCol: 6,
    lists: ['list->meals->extra-menu'],
    number: '1',
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
  }
};
