import { readonly, reactive } from 'vue';
import * as cookies from '../utils/cookies';

// const stateSymbol = Symbol('appModule');

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
  // language: string
  size: string;
}

// const getState = () => {
//   return inject<IAppState>(stateSymbol) || ({} as IAppState);
// };

// export const createStore = () => {
//   provide(
//     stateSymbol,
//     reactive({
//       sidebar: {
//         opened: cookies.getSidebarStatus() !== 'closed',
//         withoutAnimation: false,
//       },
//       device: DeviceType.Desktop,
//       size: cookies.getSize() || 'medium',
//     })
//   );

//   return getState;
// };

const initState: IAppState = {
  sidebar: {
    opened: cookies.getSidebarStatus() !== 'closed',
    withoutAnimation: false,
  },
  device: DeviceType.Desktop,
  size: cookies.getSize() || 'medium',
};

const setSize = (state: IAppState) => (size: string) => {
  state.size = size;

  cookies.setSize(size);
};

const toggleDevice = (state: IAppState) => (device: DeviceType) => {
  state.device = device;
};

const closeSideBar = (state: IAppState) => (withoutAnimation: boolean) => {
  state.sidebar = state.sidebar || {};
  state.sidebar.opened = false;
  state.sidebar.withoutAnimation = withoutAnimation;
  cookies.setSidebarStatus('closed');
};

const toggleSideBar = (state: IAppState) => (withoutAnimation: boolean) => {
  state.sidebar = state.sidebar || {};
  state.sidebar.opened = !state.sidebar.opened;
  state.sidebar.withoutAnimation = withoutAnimation;
  if (state.sidebar.opened) {
    cookies.setSidebarStatus('opened');
  } else {
    cookies.setSidebarStatus('closed');
  }
};

const createState = () => {
  return reactive(initState);
};

const createActions = (state: IAppState) => {
  return {
    setSize: setSize(state),
    toggleDevice: toggleDevice(state),
    closeSideBar: closeSideBar(state),
    toggleSideBar: toggleSideBar(state),
  };
};

const state = createState();
const actions = createActions(state);

export const useStore = () => {
  return {
    state: readonly(state),
    action: readonly(actions),
  };
};

// export const useState = () => {
//   return getState();
// };

// export const useActions = () => {
//   const state = getState();

//   return {
//     setSize: (size: string) => {
//       state.size = size;

//       cookies.setSize(size);
//     },

//     toggleDevice: (device: DeviceType) => {
//       state.device = device;
//     },

//     closeSideBar: (withoutAnimation: boolean) => {
//       state.sidebar = state.sidebar || {};
//       state.sidebar.opened = false;
//       state.sidebar.withoutAnimation = withoutAnimation;
//       cookies.setSidebarStatus('closed');
//     },

//     toggleSideBar: (withoutAnimation: boolean) => {
//       state.sidebar = state.sidebar || {};
//       state.sidebar.opened = !state.sidebar.opened;
//       state.sidebar.withoutAnimation = withoutAnimation;
//       if (state.sidebar.opened) {
//         cookies.setSidebarStatus('opened');
//       } else {
//         cookies.setSidebarStatus('closed');
//       }
//     },
//   };
// };
