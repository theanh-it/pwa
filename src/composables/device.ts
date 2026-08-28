import { ref } from "vue";

export type DevicePlatform = "mobile" | "tablet" | "desktop";

/**
 * Detect the current device category from browser-provided information.
 *
 * `navigator.platform` is used only as a fallback because it is deprecated,
 * but it is still needed to recognise iPadOS browsers requesting desktop sites.
 */
export const detectDevicePlatform = (
  currentNavigator: Navigator | undefined =
    typeof navigator === "undefined" ? undefined : navigator,
): DevicePlatform => {
  if (!currentNavigator) return "desktop";

  const userAgent = currentNavigator.userAgent.toLowerCase();
  const navigatorPlatform = currentNavigator.platform.toLowerCase();
  const isIPadInDesktopMode =
    navigatorPlatform.includes("mac") && currentNavigator.maxTouchPoints > 1;
  const isTablet =
    /ipad|tablet|kindle|playbook|silk/.test(userAgent) ||
    (userAgent.includes("android") && !userAgent.includes("mobile")) ||
    isIPadInDesktopMode;

  if (isTablet) return "tablet";

  const isMobile =
    /iphone|ipod|windows phone|blackberry|iemobile|opera mini/.test(userAgent) ||
    (userAgent.includes("android") && userAgent.includes("mobile"));

  if (isMobile) return "mobile";

  return "desktop";
};

export const useDevice = () => {
  const platform = ref<DevicePlatform>(detectDevicePlatform());

  return { platform };
};
