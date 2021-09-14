/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Auth from './Auth';
import Link from './Link';
import ToggleMenu from './ToggleMenu';

export default function Navbar() {
  return (

    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image src="/icons/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ms-auto text-lg gap-lg-0 gap-2"
            >
              <Link title="Home" active />
              <Link title="Games" />
              <Link title="Rewards" />
              <Link title="Discover" />
              <Link title="Global Rank" />
              <Auth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
