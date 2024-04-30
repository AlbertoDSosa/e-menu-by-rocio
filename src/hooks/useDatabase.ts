import { useReducer, useEffect, useState, useCallback } from 'react';
import { useStorageItem } from '@capacitor-community/react-hooks/storage';

import { languages } from 'utils/data/languages';
import { systemData } from 'utils/data/system';
import { pages } from 'utils/data/pages';
import { pageSections } from 'utils/data/sections';
import { categories } from 'utils/data/categories';
import { items } from 'utils/data/items';
import { lists } from 'utils/data/lists';
import { listItems } from 'utils/data/listItems';
import { allergens } from 'utils/data/allergens';
import { variants } from 'utils/data/variants';
import { templates } from 'utils/data/templates';
import { images } from 'utils/data/images';
import { modals } from 'utils/data/modals';
import { slides } from 'utils/data/slides';
import { pageMenus, pageMenuItems } from 'utils/data/menus';
import { State, Action } from 'definitions/reducers';

import { reducers } from 'utils/reducers';

const initialData = {
  generalInfo: systemData.generalInfo,
  screensaver: systemData.screensaver,
  categories,
  items,
  lists,
  listItems,
  pageMenus,
  pageMenuItems,
  images,
  slides
};

const initState = (initialData: any) => initialData;

const reducer = (state: State, action: Action) => {
  const { entity, collection, type, payload } = action;

  if (type === 'state->init') {
    const _payload =
      typeof payload === 'string' ? JSON.parse(payload) : payload;
    return initState(_payload);
  }

  const actionReducer = reducers(entity, collection)[type];
  return actionReducer ? actionReducer(state, action) : state;
};

function useDatabase(): any {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);
  const [initialState, setState] = useStorageItem('state', initialData);

  const [state, dispatch] = useReducer(reducer, initialState, initState);

  const updateState = useCallback(
    (n) => {
      setState(n);
    },
    [setState]
  );

  useEffect(() => {
    if (initialState && !isDatabaseReady) {
      setIsDatabaseReady(true);
    }
  }, [initialState, isDatabaseReady]);

  useEffect(() => {
    if (state) {
      const _initialState =
        typeof initialState === 'string'
          ? JSON.parse(initialState)
          : initialState;
      if (state !== _initialState) {
        updateState(state);
      }
    }
  }, [state]);

  return {
    state,
    system: {
      languages,
      variants,
      allergens,
      templates,
      modals,
      images,
      pages,
      pageSections
    },
    isDatabaseReady,
    dispatch,
    init() {
      dispatch({
        type: 'state->init',
        payload: initialState,
        collection: '',
        entity: ''
      });
    }
  };
}

export default useDatabase;
