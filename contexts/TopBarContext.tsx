'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface TopBarContextType {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const TopBarContext = createContext<TopBarContextType | undefined>(undefined);

export function TopBarProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);

  return (
    <TopBarContext.Provider value={{ visible, setVisible }}>
      {children}
    </TopBarContext.Provider>
  );
}

export function useTopBar() {
  const context = useContext(TopBarContext);
  if (context === undefined) {
    throw new Error('useTopBar doit être utilisé dans un TopBarProvider');
  }
  return context;
}
