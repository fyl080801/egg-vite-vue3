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

const WIDTH = 992; // refer to Bootstrap's responsive design

export const isMobile = () => {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
};

export const resizeHandler = () => {
  if (!document.hidden) {
    const mobile = isMobile();
    // AppModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop);
    if (mobile) {
      // AppModule.CloseSideBar(true);
    }
  }
};

export const useResize = () => {
  const route = useRoute();
  watch(
    () => route.name,
    () => {
      // if (this.device === DeviceType.Mobile && this.sidebar.opened) {
      //   AppModule.CloseSideBar(false);
      // }
    }
  );

  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler);
  });

  onMounted(() => {
    const mobile = isMobile();
    if (mobile) {
      // AppModule.ToggleDevice(DeviceType.Mobile);
      // AppModule.CloseSideBar(true);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
  });
};
