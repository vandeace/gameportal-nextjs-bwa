import Footer from './Footer';
import Profile from './Profile';
import Menu from './Menu';

export default function SideBar() {
  return (
    <section className='sidebar'>
      <div className='content pt-50 pb-30 ps-30'>
        <Profile />
        <div className='menus'>
          <Menu title='Overview' icon='overview' active />
          <Menu title='Transactions' icon='transaction' />
          <Menu title='Messages' icon='message' />
          <Menu title='Card' icon='card' />
          <Menu title='Rewards' icon='reward' />
          <Menu title='Settings' icon='setting' />
          <Menu title='Log Out' icon='logout' />
        </div>
        <Footer />
      </div>
    </section>
  );
}
