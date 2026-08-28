import { ref } from "vue";

const isHeaderPage = ref<boolean>(false);
const isBottomBar = ref<boolean>(false);

export const useApp = () => {
  const toggleBottomBar = () => (isBottomBar.value = !isBottomBar.value);
  const showBottomBar = () => (isBottomBar.value = true);
  const hiddenBottomBar = () => (isBottomBar.value = false);

  const showHeaderPage = () => (isHeaderPage.value = true);
  const hiddenHeaderPage = () => (isHeaderPage.value = false);

  return {
    isBottomBar,
    toggleBottomBar,
    showBottomBar,
    hiddenBottomBar,
    // header page
    isHeaderPage,
    showHeaderPage,
    hiddenHeaderPage,
  };
};

export const useHeaderPage = () => {
  const showHeaderPage = () => (isHeaderPage.value = true);
  const hiddenHeaderPage = () => (isHeaderPage.value = false);

  return {
    isHeaderPage,
    showHeaderPage,
    hiddenHeaderPage,
  };
};

export const useBottomBar = () => {
  const toggleBottomBar = () => (isBottomBar.value = !isBottomBar.value);
  const showBottomBar = () => (isBottomBar.value = true);
  const hiddenBottomBar = () => (isBottomBar.value = false);

  return {
    isBottomBar,
    toggleBottomBar,
    showBottomBar,
    hiddenBottomBar,
  };
};
