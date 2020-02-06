import { push, replace } from 'connected-react-router';

export const pushRoute = (payload: any) => {
  return push(payload);
};

export const replaceRoute = (payload: any) => {
  return replace(payload);
};
