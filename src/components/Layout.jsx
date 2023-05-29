import React from 'react';

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full z-0 bg-primary 2xl:p-32 xlarge:p-24 large:p-16 middle:p-12 small:p-8 xs:p-6 ${className}`}>
      {children}
    </div>
  );
}

export default Layout;
