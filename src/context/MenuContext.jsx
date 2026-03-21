import React, { createContext, useContext, useState } from "react";
import { menuData, menuCategories, allMenuItems } from "../data/menuData";

// ─── Context ────────────────────────────────────────────────
const MenuContext = createContext(null);

// ─── Provider ───────────────────────────────────────────────
export const MenuProvider = ({ children }) => {
    // Menu data comes from the shared data file (Option C).
    // To switch to an API (Option B), replace the initial state
    // with [] and add a useEffect fetch("/api/menu") here.
    const [menu] = useState(menuData);

    return (
        <MenuContext.Provider value={{ menu, menuCategories, allMenuItems }}>
            {children}
        </MenuContext.Provider>
    );
};

// ─── Hook ────────────────────────────────────────────────────
export const useMenu = () => {
    const ctx = useContext(MenuContext);
    if (!ctx) throw new Error("useMenu must be used inside <MenuProvider>");
    return ctx;
};
