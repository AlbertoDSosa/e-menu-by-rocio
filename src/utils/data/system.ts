export const systemData: any = {
  appTypes: {
    'appType->basic': {
      id: 'appType->basic',
      displayInfo: {
        es: {
          title: '',
          description: '',
          slug: ''
        },
        en: {
          title: '',
          description: '',
          slug: ''
        }
      }
    },
    'appType->default': {
      id: 'appType->default',
      displayInfo: {
        es: {
          title: '',
          description: '',
          slug: ''
        },
        en: {
          title: '',
          description: '',
          slug: ''
        }
      }
    }
  },
  appInfo: {
    version: '0.0.1',
    appType: 'appType->basic',
    appLanguages: ['es', 'en']
  },
  generalInfo: {
    companyName: 'By Rocío',
    baseLanguage: 'es',
    dataVersion: '0',
    logoImg: '',
    qrImg: 'image->qr->qr-flag',
    url: 'https://example.com',
    appLanguages: ['es', 'en', 'de', 'nb', 'da', 'sv', 'fr', 'nl'],
    displayInfo: {
      es: {
        title: 'Información',
        extraInfo: 'Los precios no incluyen IGIC',
        slug: 'informacion'
      },
      en: {
        title: 'Information',
        extraInfo: 'Prices do not include IGIC',
        slug: 'information'
      },
      de: {
        title: 'Information',
        extraInfo: 'Die Preise beinhalten keine IGIC',
        slug: 'information'
      },
      nb: {
        title: 'Informasjon',
        extraInfo: 'Prisene inkluderer ikke IGIC',
        slug: 'informasjon'
      },
      da: {
        title: 'Information',
        extraInfo: 'Priserne inkluderer ikke IGIC',
        slug: 'information'
      },
      sv: {
        title: 'Information',
        extraInfo: 'Priserna inkluderar inte IGIC',
        slug: 'information'
      },
      fr: {
        title: 'Informations',
        extraInfo: `Les prix n'incluent pas l'IGIC`,
        slug: 'informations'
      },
      nl: {
        title: 'Informatie',
        extraInfo: 'Prijzen zijn exclusief IGIC',
        slug: 'informatie'
      }
    }
  },
  screensaver: {
    active: true,
    maxItems: 20,
    selectableSlides: [],
    slides: [
      'slide->screensaver->logo-1',
      'slide->screensaver->breakfasts-1',
      'slide->screensaver->breakfasts-2',
      'slide->screensaver->smoothies-1',
      'slide->screensaver->out-menu-1',
      'slide->screensaver->out-menu-2',
      'slide->screensaver->out-menu-3',
      'slide->screensaver->out-menu-4',
      'slide->screensaver->out-menu-5',
      'slide->screensaver->out-menu-6',
      'slide->screensaver->out-menu-7',
      'slide->screensaver->out-menu-8',
      'slide->screensaver->out-menu-9',
      'slide->screensaver->out-menu-10',
      'slide->screensaver->live-music-1',
      'slide->screensaver->live-music-2'
    ],
    slideOpts: {
      speed: 1000,
      autoplay: {
        delay: 5000
      }
    },
    timeToShow: 'time->screensaver->1-minute-and-half',
    selectableTimesToShow: {
      'time->screensaver->30-seconds': {
        id: 'time->screensaver->30-seconds',
        time: 30000,
        displayInfo: {
          es: {
            title: '30 segundos'
          }
        }
      },
      'time->screensaver->1-minute': {
        id: 'time->screensaver->1-minute',
        time: 60000,
        displayInfo: {
          es: {
            title: '1 minuto'
          }
        }
      },
      'time->screensaver->1-minute-and-half': {
        id: 'time->screensaver->1-minute-and-half',
        time: 90000,
        displayInfo: {
          es: {
            title: '1 minuto y medio'
          }
        }
      },
      'time->screensaver->2-minutes': {
        id: 'time->screensaver->2-minutes',
        time: 120000,
        displayInfo: {
          es: {
            title: '2 minutos'
          }
        }
      }
    }
  }
};
