import * as React from 'react'

const DeviceContext = React.createContext()

function DeviceReducer(state, action) {
  switch (action.type) {
    case 'select': {
      return {...state, selectedDeviceCards: action.payload}
    }
  
    default: return state;
  }
}

function DeviceProvider({children}) {
  const [state, dispatch] = React.useReducer(DeviceReducer, {selectedDeviceCards: []})
  
  const value = {state, deviceDispatch: dispatch}
  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
}

function useDevice() {
  const context = React.useContext(DeviceContext)
  if (context === undefined) {
    throw new Error('useDevice must be used within a DeviceProvider')
  }
  return context
}

export {DeviceProvider, useDevice}
