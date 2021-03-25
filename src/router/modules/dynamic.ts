import { RouteRecordRaw } from 'vue-router';
import { isArray } from 'lodash-es';
import settings from '@/settings';
import Layout from '@/layout';

const eachTree = (tree, callback) => {
  for (const i in tree) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const result = eachTreeNode(tree[i], callback);
    if (result === false) {
      break;
    }
  }
};

const eachTreeNode = (node, callback) => {
  const result = callback(node);
  if (result === false) {
    return false;
  }

  if (node.children && isArray(node.children) && node.children.length > 0) {
    eachTree(node.children, callback);
  }
};

const initRoutes = (): RouteRecordRaw[] => {
  // return settings.pages.map((menu: any, index: number) => {
  //   const { path, icon, title, roles = [] } = menu
  //   return {
  //     name: `/pages${path}`,
  //     path: `/resource/pages${path}`,
  //     redirect: `/pages${path}`,
  //     meta: {
  //       title: title,
  //       icon: !isEmpty(icon) ? icon : 'component',
  //       activeMenu: `/pages${path}`,
  //       breadcrumb: true,
  //       roles: roles
  //     }
  //   }
  // })

  eachTree(settings.storyboard, (story) => {
    story.component = () => import('@/views/dynamic/Index.vue');
  });

  return [
    {
      path: '/pages',
      component: Layout,
      children: settings.storyboard,
    },
  ];
  // return settings.storyboard
};

export default initRoutes();
