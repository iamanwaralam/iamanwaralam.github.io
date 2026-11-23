import type { IconType } from 'react-icons';
import { FaGooglePlay, FaLinux, FaMicrosoft } from 'react-icons/fa6';
import type { StoreLink } from '@/data/types';

/** Brand icon and button label for each app-store link. */
export const STORE_META: Record<StoreLink['store'], { label: string; icon: IconType }> = {
  microsoft: { label: 'Microsoft Store', icon: FaMicrosoft },
  'google-play': { label: 'Google Play', icon: FaGooglePlay },
  linux: { label: 'Linux', icon: FaLinux },
};
