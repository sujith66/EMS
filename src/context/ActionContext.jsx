import * as React from "react";

const ActionContext = React.createContext();

function ActionReducer(state, action) {
  switch (action.type) {
    case "scan": {
      return { ...state, actions: action.payload };
    }
    case "terminate": {
      return { ...state, actions: action.payload };
    }
    default:
      return state;
  }
}

function ActionProvider({ children }) {
  const [state, dispatch] = React.useReducer(ActionReducer, { actions: [] });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, actionDispatch: dispatch };
  return (
    <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
  );
}

function useAction() {
  const context = React.useContext(ActionContext);
  if (context === undefined) {
    throw new Error("useAction must be used within a ActionProvider");
  }
  return context;
}

export { ActionProvider, useAction };
