interface ListProps {
  title: string;
  itemList: Array<any>;
  isEnd: boolean;
}
export default function List(props: ListProps) {

  const { title, itemList, isEnd } = props;

  return (
    <div className={!isEnd ? `col-md-4 col-6 mb-lg-0 mb-25` : `col-md-4 col-12 mt-lg-0 mt-md-0 mt-25`}>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {itemList.map((item) => (
          <li className="mb-6">
            <a href="/" className="text-lg color-palette-1 text-decoration-none">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
