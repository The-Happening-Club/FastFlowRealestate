export const ChevronToggle = ({
  spin = '0',
  color = 'bg-black',
}: {
  spin: string;
  color: string;
}) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(-${spin}deg)` }}
      className={`transform transition-all duration-700 ease-in-out rotate-${spin}`}
    >
      <path
        d="M13 7L7 1L1 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
