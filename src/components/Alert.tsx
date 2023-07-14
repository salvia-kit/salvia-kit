import React from 'react';

export function Alert() {
  const timeOut = React.useRef<any>(null);
  const [seen, setSeen] = React.useState(
    localStorage.getItem('new_info_seen') || 'false',
  );

  const onClose = () => {
    setSeen('true');
    localStorage.setItem('new_info_seen', 'true');
  };

  React.useEffect(() => {
    timeOut.current = setTimeout(() => onClose(), 15000);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, []);

  return (
    <>
      {seen !== 'true' && (
        <div className="w-full bg-black py-3 fixed z-40 top-0">
          <div className="shadow text-white md:text-lg text-center px-2 md:px-0 font-title">
            2 new dashboards have been added to the catalog
          </div>
          <div className="shadow text-white md:text-lg text-center px-2 md:px-0 font-title">
            Dashboards for Angular, Svelte-kit (stable v1) and Solid.js are now
            available
            <button onClick={onClose} className="text-2xl pl-2">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
