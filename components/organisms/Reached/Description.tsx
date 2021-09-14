interface DescrtiptionProps {
  title: string;
  description: string;
  isEnd: boolean;
}

export default function Descriptions(props: DescrtiptionProps) {
  const { title, description, isEnd } = props
  return (
    <>
      <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{description}</p>
      </div>
      {!isEnd && <>   <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none" />
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" /> </>}
    </>
  )
}
