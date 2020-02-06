import { actionTypes } from '../../models/enums';

export const layoutReducer = (state = {}, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_LAYOUT: {
      const { widgetType, widgets } = action.payload;
      console.log(widgetType, widgets);
      return {
        ...state,
        layout: {
          [widgetType]: widgets,
        },
      };
    }
    default:
      return state;
  }
};
