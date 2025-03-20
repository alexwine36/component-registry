import { keys } from '../../keys';

export const getBaseUrl = () => {
  if (typeof window !== 'undefined' && window?.location?.origin) {
    return window.location.origin;
  }
  return keys().NEXT_PUBLIC_BASE_URL;
};

export const getUrl = (path: string) => {
  return `${getBaseUrl()}/${path}`;
};
