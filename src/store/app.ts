import { provide, inject, reactive } from 'vue';
import * as cookies from '../utils/cookies';

const stateSymbol = Symbol('appModule');

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

export const getState = () => {
  return inject<IAppState>(stateSymbol) || ({} as IAppState);
};

export const createStore = (
  state: IAppState = {
    sidebar: {
      opened: cookies.getSidebarStatus() !== 'closed',
      withoutAnimation: false,
    },
    device: DeviceType.Desktop,
    size: cookies.getSize() || 'medium',
  }
) => {
  provide(stateSymbol, reactive(state));

  return getState;
};

export const setSize = (size: string) => {
  const state = getState();

  state.size = size;

  cookies.setSize(size);
};

export const toggleDevice = (device: DeviceType) => {
  const state = getState();

  state.device = device;
};

export const closeSideBar = (withoutAnimation: boolean) => {
  const state = getState();

  state.sidebar.opened = false;
  state.sidebar.withoutAnimation = withoutAnimation;
  cookies.setSidebarStatus('closed');
};

export const toggleSideBar = (withoutAnimation: boolean) => {
  const state = getState();

  state.sidebar.opened = !state.sidebar.opened;
  state.sidebar.withoutAnimation = withoutAnimation;
  if (state.sidebar.opened) {
    cookies.setSidebarStatus('opened');
  } else {
    cookies.setSidebarStatus('closed');
  }
};
