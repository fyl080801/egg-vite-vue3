import { inject, provide, reactive } from 'vue';
import defaultSettings from '../settings';

export interface ISettingsState {
  theme: string;
  fixedHeader: boolean;
  showSettings: boolean;
  showTagsView: boolean;
  showSidebarLogo: boolean;
  sidebarTextTheme: boolean;
  help: string;
  appName: string;
}

const stateSymbol = Symbol('settingsModule');

const getState = () => {
  return inject<ISettingsState>(stateSymbol) || ({} as ISettingsState);
};

export const createStore = (
  state: ISettingsState = {
    theme: '', // elementVariables.theme,
    fixedHeader: defaultSettings.fixedHeader,
    showSettings: defaultSettings.showSettings,
    showTagsView: defaultSettings.showTagsView,
    showSidebarLogo: defaultSettings.showSidebarLogo,
    sidebarTextTheme: defaultSettings.sidebarTextTheme,
    help: defaultSettings.help,
    appName: defaultSettings.appName,
  }
) => {
  provide(stateSymbol, reactive(state));

  return getState;
};

export const useStore = () => {
  const state = getState();

  return reactive({
    ...state,
  });
};
