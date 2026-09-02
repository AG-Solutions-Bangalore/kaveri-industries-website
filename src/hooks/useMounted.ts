import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * `true` after the component has mounted on the client.
 *
 * Implementation uses `useSyncExternalStore` with a no-op subscriber:
 * - SSR snapshot is `false` (we're on the server).
 * - Client snapshot is `true` (we're hydrated).
 * No `useEffect` is involved, so this satisfies
 * `react-hooks/set-state-in-effect` while keeping SSR/CSR HTML stable.
 *
 * See: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}