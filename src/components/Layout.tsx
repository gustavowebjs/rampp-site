import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode | undefined;
};
const Layout: React.FC<LayoutProps> = ({ children }) => <div>{children}</div>;
export default Layout;
