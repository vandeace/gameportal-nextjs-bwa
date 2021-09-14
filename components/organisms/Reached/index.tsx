import Desriptions from './Description'
export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <Desriptions title="290M+" description="Players Top Up" isEnd={false} />
          <Desriptions title="12.500" description="Games Available" isEnd={false} />
          <Desriptions title="99,9%" description="Happy Players" isEnd={false} />
          <Desriptions title="4.7" description="Rating Worldwide" isEnd={true} />
        </div>
      </div>
    </section>
  )
}
