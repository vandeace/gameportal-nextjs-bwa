import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function CustomLink(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;

  const titleClass = cx({
    'nav-link': true,
    active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={titleClass} aria-current="page" href="/">{title}</a>
      </Link>
    </li>
  );
}
