import { Card } from "./card";

export function List({ listData }) {
  return (
    <div className="cards-list">
      <ul>
        {listData
          .filter((item) => item.show)
          .map((item) => (
            <li className="card-item" key={item.id}>
              <Card {...item} />
            </li>
          ))}
      </ul>
    </div>
  );
}