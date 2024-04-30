import React, { createContext, useEffect, useContext } from 'react';
import uid from 'short-uuid';
import useDatabase from '../hooks/useDatabase';
import {
  categoryActions,
  itemActions,
  listActions,
  listItemActions,
  pageMenuActions,
  pageMenuItemActions,
  allergenicActions,
  slideActions,
  screensaverActions,
  imageActions
} from '../utils/actions';

import {
  GeneralInfo,
  DisplayInfo,
  Price,
  Category,
  List,
  Item,
  Allergenic,
  Modal,
  Slide,
  PageSection
} from 'definitions/models';

export interface DataContextState {
  generalInfo: GeneralInfo;
  screensaver: any;
  getData(props: GetDataProps): Results;
  set(props: SetProps): void;
  add(props: AddProps): void;
  reorder(props: ReorderProps): void;
  remove(props: RemoveProps): void;
  create(props: CreateProps): void;
  update(props: UpdateProps): void;
  delete(props: DeleteProps): void;
}

const DataContext = createContext<DataContextState>({} as DataContextState);

export const DataContextProvider: React.FC = (props: any) => {
  const { init, state, dispatch, system, isDatabaseReady } = useDatabase();

  useEffect(() => {
    if (isDatabaseReady) {
      init();
    }
  }, [isDatabaseReady]);

  return (
    <DataContext.Provider
      value={{
        generalInfo: state?.generalInfo,
        screensaver: state?.screensaver,
        getData({ collection, from }) {
          if (from === 'state') {
            const array = Object.values(state[collection as StateColletion]);

            return {
              array,
              dictionary: state[collection as StateColletion]
            };
          } else {
            const array = Object.values(system[collection as SystemCollection]);

            return {
              array,
              dictionary: system[collection as SystemCollection]
            };
          }
        },
        set({ action, info, entity, entityId, id }) {
          if (action === 'show') {
            if (info === 'item') {
              const _set: { [key: string]: () => void } = {
                list: () => {
                  dispatch({
                    type: listActions.SET_SHOW,
                    payload: id,
                    entity: entity,
                    collection: 'lists'
                  });
                },
                pageMenuItem: () => {
                  dispatch({
                    type: pageMenuItemActions.SET_SHOW,
                    payload: id,
                    entity: entity,
                    collection: 'pageMenuItems'
                  });
                },
                listItem: () => {
                  dispatch({
                    type: listItemActions.SET_SHOW,
                    payload: id,
                    entity: entity,
                    collection: 'listItems'
                  });
                }
              };

              _set[entity]();
            } else if (info === 'title') {
              const _set: { [key: string]: () => void } = {
                list: () => {
                  dispatch({
                    type: listActions.SET_SHOW_TITLE,
                    payload: id,
                    entity: entity,
                    collection: 'lists'
                  });
                },
                listItem: () => {
                  dispatch({
                    type: listItemActions.SET_SHOW_TITLE,
                    payload: id,
                    entity: entity,
                    collection: 'listItems'
                  });
                },
                pageMenuItem: () => {
                  dispatch({
                    type: pageMenuItemActions.SET_SHOW_TITLE,
                    payload: id,
                    entity: entity,
                    collection: 'pageMenuItems'
                  });
                }
              };

              _set[entity]();
            } else if (info === 'description') {
              const _set: { [key: string]: () => void } = {
                list: () => {
                  dispatch({
                    type: listActions.SET_SHOW_DESCRIPTION,
                    payload: id,
                    entity: entity,
                    collection: 'lists'
                  });
                },
                listItem: () => {
                  dispatch({
                    type: listItemActions.SET_SHOW_DESCRIPTION,
                    payload: id,
                    entity: entity,
                    collection: 'listItems'
                  });
                },
                pageMenuItem: () => {
                  dispatch({
                    type: pageMenuItemActions.SET_SHOW_DESCRIPTION,
                    payload: id,
                    entity: entity,
                    collection: 'pageMenuItems'
                  });
                }
              };

              _set[entity]();
            } else if (info === 'extra-info') {
              const _set: { [key: string]: () => void } = {
                list: () => {
                  dispatch({
                    type: listActions.SET_SHOW_EXTRA_INFO,
                    payload: id,
                    entity: entity,
                    collection: 'lists'
                  });
                },
                listItem: () => {
                  dispatch({
                    type: listItemActions.SET_SHOW_EXTRA_INFO,
                    payload: id,
                    entity: entity,
                    collection: 'listItems'
                  });
                },
                pageMenuItem: () => {
                  dispatch({
                    type: pageMenuItemActions.SET_SHOW_EXTRA_INFO,
                    payload: id,
                    entity: entity,
                    collection: 'pageMenuItems'
                  });
                }
              };

              _set[entity]();
            } else if (info === 'price') {
              const update: { [key: string]: () => void } = {
                listItem: () => {
                  dispatch({
                    type: listItemActions.SET_SHOW_PRICE,
                    payload: id,
                    entity: entity,
                    collection: 'listItems'
                  });
                }
              };

              update[entity]();
            }
          } else if (action === 'active') {
            const _set: { [key: string]: () => void } = {
              item: () => {
                dispatch({
                  type: itemActions.SET_ACTIVE,
                  payload: id,
                  entity: entity,
                  collection: 'items'
                });
              },
              category: () => {
                dispatch({
                  type: categoryActions.SET_ACTIVE,
                  payload: id,
                  entity: entity,
                  collection: 'categories'
                });
              }
            };

            _set[entity]();
          } else if (action === 'id') {
            if (info === 'image') {
              const _set: { [key: string]: () => void } = {
                slide: () => {
                  dispatch({
                    type: slideActions.SET_MAIN_IMAGE,
                    payload: { id, entityId },
                    entity: entity,
                    collection: 'slides'
                  });
                }
              };

              _set[entity]();
            }
          }
        },
        add({ entity, entityId, itemId }) {
          const _add: { [key: string]: () => void } = {
            list: () => {
              dispatch({
                type: listActions.ADD_ITEM,
                entity: entity,
                collection: 'lists',
                payload: { entityId, itemId }
              });
            },
            pageMenu: () => {
              dispatch({
                type: pageMenuActions.ADD_ITEM,
                entity: entity,
                collection: 'pageMenus',
                payload: { entityId, itemId }
              });
            },
            allergenic: () => {
              dispatch({
                type: allergenicActions.ADD,
                entity: entity,
                collection: 'items',
                payload: { entityId, itemId }
              });
            },
            screensaver: () => {
              dispatch({
                type: screensaverActions.ADD_SLIDE,
                entity: entity,
                collection: 'slides',
                payload: { itemId }
              });
            },
            slide: () => {
              dispatch({
                type: slideActions.ADD_IMAGE,
                entity: entity,
                collection: 'slides',
                payload: { itemId }
              });
            }
          };

          _add[entity]();
        },
        reorder({ entity, entityId, from, to }) {
          const _reorder: { [key: string]: () => void } = {
            list: () => {
              dispatch({
                type: listActions.REORDER_ITEMS,
                entity: entity,
                collection: 'lists',
                payload: { entityId, from, to }
              });
            },
            pageMenu: () => {
              dispatch({
                type: pageMenuActions.REORDER_ITEMS,
                entity: entity,
                collection: 'pageMenus',
                payload: { entityId, from, to }
              });
            },
            allergenic: () => {
              dispatch({
                type: allergenicActions.REORDER,
                entity: entity,
                collection: 'items',
                payload: { entityId, from, to }
              });
            },
            screensaver: () => {
              dispatch({
                type: screensaverActions.REORDER_SLIDES,
                entity: entity,
                collection: 'slides',
                payload: { from, to }
              });
            }
          };

          _reorder[entity]();
        },
        remove({ action, entity, entityId, itemId, items }) {
          if (action === 'one') {
            const _remove: { [key: string]: () => void } = {
              list: () => {
                dispatch({
                  type: listActions.REMOVE_ITEM,
                  entity: entity,
                  collection: 'lists',
                  payload: { entityId, itemId }
                });
              },
              pageMenu: () => {
                dispatch({
                  type: pageMenuActions.REMOVE_ITEM,
                  entity: entity,
                  collection: 'pageMenus',
                  payload: { entityId, itemId }
                });
              },
              allergenic: () => {
                dispatch({
                  type: allergenicActions.REMOVE,
                  entity: entity,
                  collection: 'items',
                  payload: { entityId, itemId }
                });
              }
            };

            _remove[entity]();
          } else {
            const removeAll: { [key: string]: () => void } = {
              list: () => {
                dispatch({
                  type: listActions.REMOVE_ALL_ITEMS,
                  entity: entity,
                  collection: 'lists',
                  payload: { entityId, items }
                });
              },
              pageMenu: () => {
                dispatch({
                  type: pageMenuActions.REMOVE_ALL_ITEMS,
                  entity: entity,
                  collection: 'pageMenus',
                  payload: { entityId, items }
                });
              },
              allergenic: () => {
                dispatch({
                  type: allergenicActions.REMOVE_ALL,
                  entity: entity,
                  collection: 'items',
                  payload: { entityId, items }
                });
              }
            };

            removeAll[entity]();
          }
        },
        create({ entity, payload, collection, addToEntity, entityId }) {
          const { displayInfo, lang, image } = payload;
          const { slug }: DisplayInfo = displayInfo[lang];
          const id = `${entity}->${addToEntity}->${slug}->${uid.generate()}`;
          const _create: { [key: string]: () => void } = {
            slide: () => {
              dispatch({
                type: slideActions.CREATE_SLIDE,
                entity: addToEntity,
                payload: { id, displayInfo },
                collection
              });

              if (addToEntity === 'screensaver') {
                dispatch({
                  type: screensaverActions.ADD_SELECTABLE_SLIDE,
                  entity: addToEntity,
                  payload: { id, displayInfo },
                  collection
                });
              }
            },
            image: () => {
              dispatch({
                type: imageActions.CREATE,
                entity: addToEntity,
                payload: { id, displayInfo, lang, image },
                collection
              });

              if (addToEntity === 'slide') {
                dispatch({
                  type: slideActions.ADD_IMAGE,
                  entity: addToEntity,
                  payload: { id, entityId },
                  collection
                });
              }
            }
          };
          _create[entity]();
        },
        update({ action, entity, payload }) {
          if (action === 'info') {
            const _update: { [key: string]: () => void } = {
              item: () => {
                dispatch({
                  type: itemActions.UPDATE_DISPLAY_INFO,
                  entity: entity,
                  collection: 'items',
                  payload: payload as NewDisplayInfo
                });
              },
              category: () => {
                dispatch({
                  type: categoryActions.UPDATE_DISPLAY_INFO,
                  entity: entity,
                  collection: 'categories',
                  payload: payload as NewDisplayInfo
                });
              },
              list: () => {
                dispatch({
                  type: listActions.UPDATE_DISPLAY_INFO,
                  entity: entity,
                  collection: 'lists',
                  payload: payload as NewDisplayInfo
                });
              },
              pageMenu: () => {
                dispatch({
                  type: pageMenuActions.UPDATE_DISPLAY_INFO,
                  entity: entity,
                  collection: 'pageMenus',
                  payload: payload as NewDisplayInfo
                });
              },
              slide: () => {
                dispatch({
                  type: slideActions.UPDATE_DISPLAY_INFO,
                  entity: entity,
                  collection: 'slides',
                  payload: payload as NewDisplayInfo
                });
              }
            };

            _update[entity]();
          } else if (action === 'price') {
            dispatch({
              type: itemActions.UPDATE_ITEM_PRICE,
              payload: payload as NewPrice
            });
          } else if (action === 'itemVariantPrice') {
            dispatch({
              type: itemActions.UPDATE_ITEM_VARIANT_PRICE,
              payload: payload as NewVariantPrice
            });
          } else if (action === 'number') {
            dispatch({
              type: itemActions.UPDATE_ITEM_NUMBER,
              payload: payload as NewNumber
            });
          }
        },
        delete() {}
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export type StateColletion =
  | 'lists'
  | 'items'
  | 'categories'
  | 'listItems'
  | 'pageMenus'
  | 'pageMenuItems'
  | 'images'
  | 'slides';

export type SystemCollection =
  | 'images'
  | 'languages'
  | 'variants'
  | 'allergens'
  | 'templates'
  | 'modals'
  | 'pages'
  | 'pageSections';

export type UpdateDisplayInfoEntity =
  | 'item'
  | 'category'
  | 'list'
  | 'pageMenu'
  | 'listItem'
  | 'pageMenuItem';

export type EditItemEntity = 'list' | 'pageMenu' | 'allergenic';

export type ReorderItems = {
  entityId: string;
  from: number;
  to: number;
};

export type EditItem = {
  entityId: string;
  itemId: string;
};

export type DeleteAllItems = {
  entityId: string;
  items: Array<string>;
};

export type Dictionary = {
  [key: string]: any;
};

export type Results = {
  array: Array<any>;
  dictionary: Dictionary;
};

export type DisplayInfoEntity =
  | Category
  | List
  | Item
  | Allergenic
  | Modal
  | Slide;

export type EditImageEntity =
  | PageSection
  | Slide
  | Item
  | List
  | Modal
  | Allergenic;

export type NewPrice = {
  id: string;
  price: Price;
};

export type NewVariantPrice = {
  itemId: string;
  variantId: string;
  price: Price;
};

export type NewNumber = {
  id: string;
  number: string;
};

export type NewDisplayInfo = {
  id: string;
  displayInfo: DisplayInfo;
  lang: string;
};

export type EditImageCollection =
  | 'slides'
  | 'sections'
  | 'lists'
  | 'items'
  | 'pageMenuItems'
  | 'modals';

interface GetDataProps {
  collection: SystemCollection | StateColletion;
  from: 'system' | 'state';
}

export type SetEntity =
  | 'item'
  | 'list'
  | 'pageMenu'
  | 'listItem'
  | 'pageMenuItem'
  | 'slide';

interface SetProps {
  action: 'show' | 'active' | 'id';
  info: 'item' | 'price' | 'title' | 'description' | 'extra-info' | 'image';
  entityId?: string;
  entity: SetEntity;
  id: string;
}

export type ArrayEditEntity =
  | 'list'
  | 'slide'
  | 'images'
  | 'pageMenu'
  | 'allergenic'
  | 'screensaver';

interface AddProps {
  entity: ArrayEditEntity;
  entityId: string;
  itemId?: string;
}

interface ReorderProps {
  entity: ArrayEditEntity;
  entityId: string;
  from: number;
  to: number;
}

interface RemoveProps {
  action: 'one' | 'many';
  entity: ArrayEditEntity;
  entityId: string;
  itemId?: string;
  items?: string[];
}

interface CreateProps {
  collection: 'slides' | 'images';
  entity: 'slide' | 'image';
  addToEntity?: 'screensaver' | 'slide';
  entityId?: string;
  payload: {
    lang: string;
    image?: string;
    displayInfo: { [key: string]: DisplayInfo };
  };
}

export type UpdateEntity =
  | 'item'
  | 'category'
  | 'list'
  | 'pageMenu'
  | 'listItem'
  | 'pageMenuItem'
  | 'screensaver'
  | 'generalInfo'
  | 'slide';

interface UpdateProps {
  action: 'info' | 'price' | 'itemVariantPrice' | 'number';
  entity: UpdateEntity;
  payload: NewDisplayInfo | NewNumber | NewPrice | NewVariantPrice;
}

interface DeleteProps {
  entity:
    | 'item'
    | 'category'
    | 'list'
    | 'pageMenu'
    | 'listItem'
    | 'pageMenuItem'
    | 'slide';
  id: string;
}

export const useData = (): DataContextState | any => useContext(DataContext);

export default DataContext;
