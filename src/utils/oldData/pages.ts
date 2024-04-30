import { Page } from 'definitions/models';

export const pages: { [key: string]: Page } = {
  'page->snacks-and-brunch': {
    id: 'page->snacks-and-brunch',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->meals->breakfasts-1',
      'pageSection->drinks->smoothies-1',
      'pageSection->meals->sandwich-1'
    ],
    isPolySection: true,
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
  },
  'page->sandwich': {
    id: 'page->sandwich',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->sandwich-1'],
    isPolySection: true,
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
  },
  'page->info->sanitary-measures': {
    id: 'page->info->sanitary-measures',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->slide',
    sections: [
      'pageSection->info->sanitary-measures-1',
      'pageSection->info->sanitary-measures-2'
    ],
    isPolySection: false,
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
  'page->extra-menu': {
    id: 'page->extra-menu',
    menuId: '',
    active: true,
    type: 'page',
    defaultImg: '',
    mainImg: '',
    template: 'template->page->single-section',
    sections: ['pageSection->meals->extra-menu'],
    isPolySection: false,
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
