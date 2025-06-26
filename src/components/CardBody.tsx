import img from "../assets/react.svg";
import "./CardBody.css";
export const CardBody = ({
  type,
  title,
  description,
}: {
  type: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="card-body">
      {type === "1" && <img className="card-image" src={img} />}
      <h2>{title}</h2>
      {type === "2" && <p>{description}</p>}
    </div>
  );
};
