import { actionTypes } from '../../models/enums';

export const layoutReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_LAYOUT: {
      const { widgetType, widgets } = action.payload;
      return {
        ...state,
        layout: {
          ...state.layout,
          [widgetType]: widgets,
        },
      };
    }
    default:
      return state;
  }
};
