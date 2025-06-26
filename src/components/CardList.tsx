import { useEffect, useState } from "react";
import { getItems } from "../_internal/api";
import { Card } from "./Card";
import type { Item } from "./types";
import "./CardList.css";

export const CardList = () => {
  const [items, setItems] = useState<Item[]>([]);
  //   const [pagination, setPagination] = useState<Items[]>([]);
  useEffect(() => {
    const logItems = async () => {
      const items = await getItems({ page: 1, pageSize: 20 });
      console.log(items.items);
      setItems(items.items);
    };
    logItems().catch((e) => console.error(e));
  }, []);

  return (
    <>
      <section className="card-list">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
      <div>Pagination</div>
    </>
  );
};
