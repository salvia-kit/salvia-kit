import { IIconProps } from '@/src/utils/childrenType';

const ArrowDownIcon = ({ className }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className || 'h-4 w-4 mt-0.5'}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowDownIcon;
