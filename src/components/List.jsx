const List = (props) => {
  const itemList = props.items;
  const category = props.category;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.property}</b>
    </li>
  ));

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-3">
        <h3 className="p-3 text-2xl border rounded-md mb-4 w-[300px] text-center">
          {category}
        </h3>
        <ul className="mb-6">{listItems}</ul>
      </div>
    </>
  );
};

export default List;
