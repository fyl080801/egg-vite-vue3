import { readonly, reactive } from 'vue';
import defaultSettings, { ISettings } from '../settings';

const initState = {
  ...defaultSettings,
  theme: '', // elementVariables.theme,
  fixedHeader: defaultSettings.fixedHeader,
  showSettings: defaultSettings.showSettings,
  showTagsView: defaultSettings.showTagsView,
  showSidebarLogo: defaultSettings.showSidebarLogo,
  sidebarTextTheme: defaultSettings.sidebarTextTheme,
  help: defaultSettings.help,
  appName: defaultSettings.appName,
};

const createState = () => {
  return reactive(initState);
};

const createActions = (state: ISettings) => {
  console.log(state);
  return {};
};

const state = createState();
const actions = createActions(state);

export const useStore = () => {
  return {
    state: readonly(state),
    action: readonly(actions),
  };
};

// const stateSymbol = Symbol('settingsModule');

// const getState = () => {
//   return inject<ISettingsState>(stateSymbol) || ({} as ISettingsState);
// };

// export const createStore = () => {
//   provide(
//     stateSymbol,
//     reactive({
//       theme: '', // elementVariables.theme,
//       fixedHeader: defaultSettings.fixedHeader,
//       showSettings: defaultSettings.showSettings,
//       showTagsView: defaultSettings.showTagsView,
//       showSidebarLogo: defaultSettings.showSidebarLogo,
//       sidebarTextTheme: defaultSettings.sidebarTextTheme,
//       help: defaultSettings.help,
//       appName: defaultSettings.appName,
//     })
//   );

//   return getState;
// };

// export const useState = () => {
//   return getState();
// };
