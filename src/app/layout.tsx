import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { getGlobalConfig } from '@/api/utils';

export async function generateMetadata(): Promise<Metadata> {
  const globalConfig = await getGlobalConfig();
  return {
    title: globalConfig.meta.title,
    description: globalConfig.meta.description,
    keywords: globalConfig.meta.keywords,
    icons: globalConfig.meta.favicon,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
