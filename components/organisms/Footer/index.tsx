import Image from 'next/image'
import List from './List'

export default function Footer() {
  const CompanyList = [
    { title: "About Us" },
    { title: "Press Release" },
    { title: "Terms of Use" },
    { title: "Privacy & Policy" }
  ]
  const SupportList = [
    { title: "Refund Policy" },
    { title: "Unlock Rewards" },
    { title: "Live Chatting" }
  ]

  const ConnectList = [
    { title: "hi@store.gg" },
    { title: "team@store.gg" },
    { title: "Pasific 12, Jakarta Selatan" },
    { title: " 021 - 1122 - 090" },
  ]
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/" className="mb-30">
                <Image src="/icons/footer-logo.svg" width={60} height={60} alt="footer logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers
                <br />
                untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>

            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <List title="Company" itemList={CompanyList} isEnd={false} />
                <List title="Support" itemList={SupportList} isEnd={false} />
                <List title="Connect" itemList={SupportList} isEnd={true} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
