import { Badge } from "./Badge";

export const CardHeader = ({
  badge,
  type,
}: {
  badge: string;
  type: string;
}) => {
  return type === "2" ? (
    <Badge badge={badge} />
  ) : (
    <div className="card-actions">
      <button type="button">Yes</button>
      <button type="reset">No</button>
    </div>
  );
};
