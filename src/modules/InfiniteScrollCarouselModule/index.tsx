import clsx from 'clsx';
import InfiniteScrollCarousel from '@/components/InfiniteScrollCarousel';
import { IInfiniteScrollCarouselModule } from '@/types/modules/infiniteScrollCarouselModule';
import useGetVertical from '@/hooks/useGetVertical';
import styles from './styles.module.scss';

interface IInfiniteScrollCarouselModuleProps {
  module: IInfiniteScrollCarouselModule;
}

const DEFAULT_PADDING_VERTICAL = 120;

export default function InfiniteScrollCarouselModule({
  module: { commonStyles, title, carouselList },
}: IInfiniteScrollCarouselModuleProps) {
  const { getVertical } = useGetVertical();
  const { paddingVertical, defaultBackgroundColor } = commonStyles;
  return (
    <section
      className={clsx('section-container', styles.infiniteScrollCarouselModuleWrapper)}
      style={{
        paddingTop: getVertical(paddingVertical ?? DEFAULT_PADDING_VERTICAL) + 'px',
        paddingBottom: getVertical(paddingVertical ?? DEFAULT_PADDING_VERTICAL) + 'px',
        backgroundColor: defaultBackgroundColor,
      }}>
      {!!title?.text && <div className={styles.title}>{title.text}</div>}
      <InfiniteScrollCarousel carouselList={carouselList} />
    </section>
  );
}
