import { Colors } from '../../../styles';

const ValidationWarning = ({ width = 16, height = 16 }) => {
  return (
    <svg
      className="gUZ sj_ U9O kVc"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
      fill={Colors.warning}
    >
      <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18c2.29 0 3.74-2.49 2.6-4.5zm-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0l-1.95-1.94-1.94 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.95-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94 1.94 1.94z"></path>
    </svg>
  );
};

export default ValidationWarning;
