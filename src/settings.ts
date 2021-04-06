import { RouteRecordRaw } from 'vue-router';

export interface ISettings {
  appName: string; // Overrides the default title
  description: string;
  help: string; // 帮助链接
  showSettings: boolean; // Controls settings panel display
  showTagsView: boolean; // Controls tagsview display
  showSidebarLogo: boolean; // Controls siderbar logo display
  fixedHeader: boolean; // If true, will fix the header component
  errorLog: string[]; // The env to enable the errorlog component, default 'production' only
  sidebarTextTheme: boolean; // If true, will change active text color for sidebar based on theme
  devServerPort: number; // Port number for webpack-dev-server
  mockServerPort: number; // Port number for mock server
  env: string;
  menu: any[];
  theme: string;
  storyboard: RouteRecordRaw[];
  whiteList?: string[];
  loginPath: string;
}

const getLocals = () => {
  const appTag = document.getElementById('app');
  const appConfig = appTag ? appTag.getAttribute('app-config') : null;

  const defaultAppConfig = {
    appName: 'admin',
    env: '',
    menu: [],
    storyboard: []
  };

  if (!appConfig) {
    return defaultAppConfig;
  }

  try {
    return JSON.parse(appConfig);
  } catch {
    return defaultAppConfig;
  }
};

const settings: ISettings = {
  appName: '',
  description: '',
  showSettings: false,
  showTagsView: false,
  fixedHeader: true,
  showSidebarLogo: true,
  errorLog: ['production'],
  sidebarTextTheme: true,
  loginPath: '/login',
  whiteList: ['/login'],

  // devServerPort: 9527,
  // mockServerPort: 9528,
  ...getLocals()
};

export default settings;
