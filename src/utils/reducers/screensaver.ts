import { screensaverActions } from '../actions';
import { State, Action } from 'definitions/reducers';
import { moveArrayItem } from '.';

export const screensaverReducers = () => {
  return {
    [screensaverActions.ADD_SELECTABLE_SLIDE]: (
      state: State,
      action: Action
    ): any => {
      const { id } = action.payload;
      const oldSelectableSlides = state.screensaver.slides;

      return {
        ...state,
        screensaver: {
          ...state.screensaver,
          selectableSlides: [...oldSelectableSlides, id]
        }
      };
    },
    [screensaverActions.ADD_SLIDE]: (state: State, action: Action): any => {
      const { itemId: slideId } = action.payload;
      const oldSlides = state.screensaver.slides;
      const newSelectableSlides = state.screensaver.selectableSlides!.filter(
        (slide: string) => slide !== slideId
      );
      return {
        ...state,
        screensaver: {
          ...state.screensaver,
          slides: [...oldSlides, slideId],
          selectableSlides: newSelectableSlides
        }
      };
    },
    [screensaverActions.REORDER_SLIDES]: (
      state: State,
      action: Action
    ): any => {
      const { to, from } = action.payload;

      const newScreensaverSlides = moveArrayItem(
        state.screensaver.slides,
        from,
        to
      );

      return {
        ...state,
        screensaver: { ...state.screensaver, slides: newScreensaverSlides }
      };
    }
  };
};
