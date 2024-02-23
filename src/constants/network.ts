import { BackEndNetworkType, NetworkItem } from '@/types/network';
import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from './misc';

export type WebsiteNetworkConfig = {
  [key in BackEndNetworkType]: NetworkItem;
};

export const BackEndNetWorkMap: Record<string, WebsiteNetworkConfig> = {
  aefinder: {
    dev: {
      name: 'aefinder Testnet',
      networkType: 'TESTNET',
      cmsUrl: 'https://testhome.aefinder.io/cms/',
      s3Url: 'https://aefinder-dev.s3.ap-northeast-1.amazonaws.com/',
    },
    mainnet: {
      name: 'aefinder Mainnet',
      networkType: 'MAIN',
      cmsUrl: 'https://cms.aefinder.io',
      s3Url: 'https://aefinder.s3.ap-northeast-1.amazonaws.com/',
    },
  },
  // Add More ...
};

export const s3Url =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.s3Url
    : '';
