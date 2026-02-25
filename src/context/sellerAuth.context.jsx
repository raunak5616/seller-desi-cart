import { createContext, useContext, useEffect, useState } from "react";

const SellerAuthContext = createContext(null);

export const SellerAuthProvider = ({ children }) => {
  const [isSellerAuth, setIsSellerAuth] = useState(true);
 useEffect(() => {
    const token = localStorage.getItem("sellerToken");
    setIsSellerAuth(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem("sellerToken", token);
    setIsSellerAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("sellerToken");
    setIsSellerAuth(false);
  };

  return (
    <SellerAuthContext.Provider value={{ isSellerAuth, login, logout }}>
      {children}
    </SellerAuthContext.Provider>
  );
};

// ✅ DEFAULT EXPORT HOOK
const useSellerAuth = () => {
  const context = useContext(SellerAuthContext);

  if (!context) {
    throw new Error(
      "useSellerAuth must be used inside SellerAuthProvider"
    );
  }

  return context;
};

export default useSellerAuth;
