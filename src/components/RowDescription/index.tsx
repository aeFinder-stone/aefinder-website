import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import styles from './styles.module.scss';
import { DescriptionComponent } from '@/types/components/description';

export interface RowDescriptionProps {
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  gap?: number;
  content: string;
  contentSize?: number;
  className?: string;
  subContentList?: Array<DescriptionComponent>;
  multiLayer?: boolean;
}

export default function RowDescription(props: RowDescriptionProps) {
  const {
    iconSrc = '',
    iconWidth = 24,
    iconHeight = 24,
    gap = 16,
    content = '',
    contentSize,
    className,
    subContentList,
    multiLayer = false,
  } = props;

  return (
    <div
      className={clsx([styles.rowDescription, className])}
      style={multiLayer ? { marginBottom: '40px' } : { marginBottom: '16px' }}>
      {iconSrc && (
        <CommonImage
          src={iconSrc}
          style={{ minWidth: iconWidth, minHeight: iconHeight, marginRight: gap }}
          alt="descriptionIcon"
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {Array.isArray(subContentList) && subContentList.length > 0 ? (
        <SecondaryList content={content} subContentList={subContentList} />
      ) : (
        <div className={multiLayer ? styles.title : ''} style={{ fontSize: contentSize }}>
          {content}
        </div>
      )}
    </div>
  );
}

function SecondaryList({ content, subContentList }: { content: string; subContentList: Array<DescriptionComponent> }) {
  return (
    <div className={styles.secondaryList}>
      <div className={styles.title}>{content}</div>
      {subContentList.map((item, index) => {
        return <div className={styles.desc} key={index}>{`${item.text}`}</div>;
      })}
    </div>
  );
}
