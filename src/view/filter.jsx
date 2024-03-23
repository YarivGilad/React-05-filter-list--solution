import { useRef } from "react";

export function Filter({ listData, onFilter }) {
  const num = useRef(-1);
  const input = useRef(null);

  const updateList = () => {
    num.current = 0;
    const txt = input.current.value;

    const filteredList = listData.map((item) => {
      const show = item.first_name.toLowerCase().includes(txt.toLowerCase());
      if (show) num.current++;
      return { ...item, show };
    });
    onFilter(filteredList);
  };

  return (
    <div className="header">
      <h4 className="filter_title">
        {num.current !== -1 ? num.current : listData.length} items filtered
      </h4>
      <input ref={input} onChange={updateList} className="filter"/>
    </div>
  );
}