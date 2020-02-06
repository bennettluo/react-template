import { action } from 'typesafe-actions';
import { actionTypes } from '../../models/enums';
import { TypeWidget } from '../../components/dnd/types';

export const globalActions: any = {
  loading: (payload: string) => action(actionTypes.LOADING, payload),
  updateLayout: (payload: Array<TypeWidget>) =>
    action(actionTypes.UPDATE_LAYOUT, payload),
};
