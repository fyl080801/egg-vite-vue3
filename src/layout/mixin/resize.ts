// export default Vue.extend({
//   computed: {
//     device() {
//       return AppModule.device
//     },
//     sidebar() {
//       return AppModule.sidebar
//     }
//   },
//   watch: {
//     $route() {
//       if (this.device === DeviceType.Mobile && this.sidebar.opened) {
//         AppModule.CloseSideBar(false)
//       }
//     }
//   },
// })

import { onBeforeMount, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';
import { app } from '../../store';
import { DeviceType } from '../../store/app';

const WIDTH = 992; // refer to Bootstrap's responsive design

export const isMobile = () => {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
};

export const useResize = () => {
  const route = useRoute();

  const appStore = app.useStore();

  const resizeHandler = () => {
    if (!document.hidden) {
      const mobile = isMobile();

      appStore.toggleDevice(mobile ? DeviceType.Mobile : DeviceType.Desktop);

      if (mobile) {
        appStore.closeSideBar(true);
      }
    }
  };

  watch(
    () => route.name,
    () => {
      if (appStore.device === DeviceType.Mobile && appStore.sidebar.opened) {
        appStore.closeSideBar(false);
      }
    }
  );

  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler);
  });

  onMounted(() => {
    const mobile = isMobile();
    if (mobile) {
      appStore.toggleDevice(DeviceType.Mobile);
      appStore.closeSideBar(true);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
  });
};
