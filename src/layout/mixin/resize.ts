import { onBeforeMount, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore, DeviceType } from '../../store/app';

const WIDTH = 992; // refer to Bootstrap's responsive design

export const isMobile = () => {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
};

export const useResize = () => {
  const route = useRoute();

  const {
    state,
    actions: { toggleDevice, closeSideBar },
  } = useStore();

  const resizeHandler = () => {
    if (!document.hidden) {
      const mobile = isMobile();

      toggleDevice(mobile ? DeviceType.Mobile : DeviceType.Desktop);

      if (mobile) {
        closeSideBar(true);
      }
    }
  };

  watch(
    () => route.name,
    () => {
      if (state.device === DeviceType.Mobile && state.sidebar.opened) {
        closeSideBar(false);
      }
    }
  );

  onBeforeMount(() => {
    window.addEventListener('resize', resizeHandler);
  });

  onMounted(() => {
    const mobile = isMobile();
    if (mobile) {
      toggleDevice(DeviceType.Mobile);
      closeSideBar(true);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
  });
};
