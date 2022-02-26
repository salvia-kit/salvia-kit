import { useEffect, useRef, useState } from 'react';

const Alert = () => {
  const timeOut = useRef<any>(null);
  const [seen, setSeen] = useState(
    localStorage.getItem('info_seen') || 'false',
  );

  const onClose = () => {
    setSeen('true');
    localStorage.setItem('info_seen', 'true');
  };

  useEffect(() => {
    timeOut.current = setTimeout(() => onClose(), 6000);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, []);

  return (
    <>
      {seen !== 'true' && (
        <div className="w-full bg-black py-3 fixed z-40 top-0">
          <div className="shadow text-white md:text-lg text-center px-2 md:px-0 font-title">
            Salvia-kit dashboards for Svelte are now available
            <button onClick={onClose} className="text-2xl pl-2">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
