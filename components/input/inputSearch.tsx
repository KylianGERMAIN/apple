interface Props {}

export default function InputSearch({}: Props) {
  return (
    <div className="global__search">
      <div className="line__search">
        <div className="block__search">
          <span className="search__icon"></span>
          <input type="text" className="" placeholder="Search apple.com" />
        </div>
      </div>
    </div>
  );
}
