import Card from './Card';
import TableRow from './TableRow';

export default function Overview() {
  return (
    <main className='main-wrapper'>
      <div className='ps-lg-0'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Overview</h2>
        <div className='top-up-categories mb-30'>
          <p className='text-lg fw-medium color-palette-1 mb-14'>
            Top Up Categories
          </p>
          <div className='main-content'>
            <div className='row'>
              <Card nominal={180005000} icon='desktop'>
                Game
                <br /> Desktop
              </Card>
              <Card nominal={8455000} icon='mobile'>
                Game
                <br /> Mobile
              </Card>
              <Card nominal={5000000} icon='other'>
                Other
                <br /> Categories
              </Card>
            </div>
          </div>
        </div>
        <div className='latest-transaction'>
          <p className='text-lg fw-medium color-palette-1 mb-14'>
            Latest Transactions
          </p>
          <div className='main-content main-content-table overflow-auto'>
            <table className='table table-borderless'>
              <thead>
                <tr className='color-palette-1'>
                  <th className='text-start' scope='col'>
                    Game
                  </th>
                  <th scope='col'>Item</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title='Mobile Legends: The New Battle 2021'
                  image='1'
                  item={200}
                  category='Mobile'
                  price={290000}
                  status='Pending'
                />
                <TableRow
                  title='Call of Duty: Modern'
                  image='2'
                  item={550}
                  category='Desktop'
                  price={740000}
                  status='Success'
                />
                <TableRow
                  title='Clash of Clans'
                  image='3'
                  item={100}
                  category='Mobile'
                  price={120000}
                  status='Failed'
                />
                <TableRow
                  title='The Royal Game'
                  image='4'
                  item={225}
                  category='Mobile'
                  price={200000}
                  status='Pending'
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
