import { createContext, useContext, useState } from "react";
import Loading from "react-fullscreen-loading";

const StateContext = createContext({
  loading: null,
  setLoading: () => {},
});

const CustomLoading = ({ loading }) => (
  <>
    {loading === "true" && (
      <div className="custom-loading">
        <div className="custom-loading-spinner"></div>
      </div>
    )}
    <style jsx="true">{`
      .custom-loading {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ffffffb8;
        z-index: 9999;
      }

      .custom-loading-spinner {
        width: 48px;
        height: 48px;
        border: 4px solid #d68436; /* Change this color to your desired single color */
        border-top: 4px solid transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </>
);

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <StateContext.Provider
      value={{
        setLoading,
        loading,
      }}
    >
      <CustomLoading loading={loading ? "true" : "false"} />
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
