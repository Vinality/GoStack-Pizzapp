import { NavigationActions } from 'react-navigation';

let navigator;

export function setNavigation(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    }),
  );
}
