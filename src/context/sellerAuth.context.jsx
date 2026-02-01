import { createContext, useContext, useEffect, useState } from "react";

const SellerAuthContext = createContext(null);

export const SellerAuthProvider = ({ children }) => {
  const [isSellerAuth, setIsSellerAuth] = useState(true);

  useEffect(() => {

    setIsSellerAuth(true);
  }, []);

  const login = (token) => {
    localStorage.setItem("sellerToken", token);
    setIsSellerAuth(true);
  };

  const logout = () => {
    localStorage.removeItem("sellerToken");
    setIsSellerAuth(true);
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
