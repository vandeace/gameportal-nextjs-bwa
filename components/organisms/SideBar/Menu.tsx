import cx from 'classnames';
import Image from 'next/image';

interface MenuProps {
  title: string;
  icon:
    | 'overview'
    | 'transaction'
    | 'message'
    | 'card'
    | 'reward'
    | 'setting'
    | 'logout';
  active?: boolean;
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, icon, active } = props;
  
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className='me-3 icon'>
        <Image src={`/icons/ic-menu-${icon}.svg`} height={25} width={25} />
      </div>
      <p className='item-title m-0'>
        <a href='/#' className='text-lg text-decoration-none'>
          {title}
        </a>
      </p>
    </div>
  );
}
