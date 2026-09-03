import { appColors } from './colors';

export function useAppTheme() {
  return {
    colors: appColors,
  } as const;
}
