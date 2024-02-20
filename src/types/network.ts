export type NetworkType = 'MAIN' | 'TESTNET';
export type BackEndNetworkType = 'dev' | 'mainnet';
export type NetworkItem = { name: string; networkType: NetworkType; cmsUrl: string; s3Url: string };
