import { CardHeader } from "./CardHeader";
import type { Item } from "./types";
import "./Card.css";
import { CardBody } from "./CardBody";

export const Card = ({ item }: { item: Item }) => {
  return (
    <div className="card">
      <CardHeader badge={item.badge} type={item.type} />
      <CardBody
        type={item.type}
        title={item.title}
        description={item.subtitle}
      />
    </div>
  );
};
