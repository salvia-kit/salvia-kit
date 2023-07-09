interface IconProps {
  className?: string;
}

function FolderIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`text-yellow-400 ${className || 'h-5 w-5 mt-0.5'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
        clipRule="evenodd"
      />
      <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
    </svg>
  );
}

function FileIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className || 'h-5 w-5'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function JsIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className || 'h-6 w-6'}
    >
      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
      />
    </svg>
  );
}

function VueIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 261.76 226.69"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      className={className || 'h-4 w-4 mt-1'}
    >
      <title>Vue</title>
      <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
            fill="#41b883"
          />
        </g>
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
            fill="#34495e"
          />
        </g>
      </g>
    </svg>
  );
}

function JSXIcon(props: IconProps) {
  return (
    <div className={props.className || 'h-6 w-6'}>
      <img src="/images/others/jsx.png" alt="Jsx" />
    </div>
  );
}

export function TSIcon(props: IconProps) {
  return (
    <div className={props.className || 'h-5 w-5'}>
      <img src="/svg/ts.svg" alt="Typescript" />
    </div>
  );
}

function AngularIcon({
  className,
  color = 'red',
}: {
  className?: string;
  color?: 'yellow' | 'red';
}) {
  return (
    <div className={className || 'h-6 w-6'}>
      <img
        src={color === 'red' ? '/svg/angular.png' : '/svg/angular-yellow.png'}
        alt="Angular"
      />
    </div>
  );
}

export { FolderIcon, FileIcon, JsIcon, VueIcon, JSXIcon, AngularIcon };
