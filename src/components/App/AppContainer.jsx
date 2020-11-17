import React from 'react'
import App from "./App"
import {ProviderWrapper as OpinionProviderWrapper} from "contexts/TasksContext.jsx"

const AppContainer = () =>{
  return(
      <OpinionProviderWrapper>
          <App/>
      </OpinionProviderWrapper>
  )
}

export default AppContainer
