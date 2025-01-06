export const PriorityIndicator = ({
  color,
  priority,
}: {
  color: string;
  priority: string;
}) => {
  return (
    <div
      className={`h-[8px] w-[8px] ${
        priority ? color : 'bg-neutral-100'
      } rounded-full`}
    />
  );
};
