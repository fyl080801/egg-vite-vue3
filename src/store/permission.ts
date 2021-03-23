import { reactive, readonly } from 'vue';
// import { RouteRecordRaw } from 'vue-router';

export interface IPermissionState {
  menu: any[];
}

const initState: IPermissionState = {
  menu: [
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '',
      title: 'Dashoard',
      icon: 'dashboard',
      meta: { title: 'Dashboard', icon: 'dashboard' },
    },
  ],
};

const createState = () => {
  return reactive(initState);
};

const createActions = (state: IPermissionState) => {
  console.log(state);
  return {
    // setSize: setSize(state),
    // toggleDevice: toggleDevice(state),
    // closeSideBar: closeSideBar(state),
    // toggleSideBar: toggleSideBar(state),
  };
};

const state = createState();
const actions = createActions(state);

export const useStore = () => {
  return {
    state: readonly(state),
    actions: readonly(actions),
  };
};
