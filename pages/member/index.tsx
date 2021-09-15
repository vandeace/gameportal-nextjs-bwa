import Overview from '../../components/organisms/Overview';
import SideBar from '../../components/organisms/SideBar';

export default function Member() {
  return (
    <section className='overview overflow-auto'>
      <SideBar />
      <Overview />
    </section>
  );
}
