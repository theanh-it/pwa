import { useRouter, useRoute } from "vue-router";

import { ROUTER_NAME } from "@constants/router-name";

export const useAppRouter = () => {
  const router = useRouter();
  const route = useRoute();

  const goToBack = () => router.back();
  const goToName = (
    name: string,
    query?: Record<string, any>,
    params?: Record<string, any>,
  ) => router.push({ name, query, params });
  const goToPath = (path: string, query?: Record<string, any>) =>
    router.push({ path, query });

  const goToHome = (query?: Record<string, any>) =>
    router.push({ name: ROUTER_NAME.home, query });

  return {
    router,
    route,
    goToBack,
    goToName,
    goToPath,
    // public
    goToHome,
  };
};
