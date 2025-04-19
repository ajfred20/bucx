"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SidebarContextType {
  collapsed: boolean;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // Load from localStorage on component mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem("sidebar-collapsed");
      if (savedState) {
        setCollapsed(JSON.parse(savedState));
      }
    } catch (error) {
      console.error("Failed to load sidebar state:", error);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(collapsed));
    } catch (error) {
      console.error("Failed to save sidebar state:", error);
    }
  }, [collapsed]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const setSidebarCollapsed = (newState: boolean) => {
    setCollapsed(newState);
  };

  return (
    <SidebarContext.Provider
      value={{ collapsed, toggleSidebar, setSidebarCollapsed }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
