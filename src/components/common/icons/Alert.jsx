const Alert = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg
      className="gUZ ztu U9O kVc"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
      {...props}
    >
      <path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"></path>
    </svg>
  );
};

export default Alert;
