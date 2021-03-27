export const MailIcon: React.FC<any> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -25 135 135"
      className="max-h-10 sm:max-h-12 text-white hover:text-gray-600 fill-current"
      width="64"
    >
      <polygon points="1 1 133.9 1 67.5 43 1 1" />
      <polygon points="133.9 1 133.9 85.1 1 85.1 1 1 67.5 43 133.9 1" />
      <line
        x1={67.5}
        y1={43.1}
        x2={133.9}
        y2={1}
        style={{
          fill: "none",
          stroke: "#231f20",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
      <line
        x1={1}
        y1={1}
        x2={67.5}
        y2={43.1}
        style={{
          fill: "none",
          stroke: "#231f20",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};
