// import { Product } from 'definitions/models';

import { itemActions } from '../actions';

import { State, Action } from 'definitions/reducers';

export const itemReducers = () => {
  return {
    [itemActions.UPDATE_ITEM_PRICE]: (state: State, action: Action): any => {
      const { id, price } = action.payload;
      const oldItem = state['items'][id];
      const newItem = { ...oldItem, price };

      return { ...state, items: { ...state['items'], [id]: newItem } };
    },
    [itemActions.UPDATE_ITEM_VARIANT_PRICE]: (
      state: State,
      action: Action
    ): any => {
      const { itemId, variantId, price } = action.payload;
      const oldItem = state['items'][itemId];

      const newItemVariantPrices = {
        ...oldItem.itemVariantPrices,
        [variantId]: price
      };

      const newItem = { ...oldItem, itemVariantPrices: newItemVariantPrices };

      return { ...state, items: { ...state['items'], [itemId]: newItem } };
    },
    [itemActions.UPDATE_ITEM_NUMBER]: (state: State, action: Action): any => {
      const { id, number } = action.payload;
      const oldItem = state['items'][id];
      const newItem = { ...oldItem, number };

      return { ...state, items: { ...state['items'], [id]: newItem } };
    }
  };
};
