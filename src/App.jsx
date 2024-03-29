import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./components/Home"
import Main from "./components/Main"
import Introduction from "./slides/Introduction"
import Installation from "./slides/Installation"
import Configuration from "./slides/Configuration"
import VirtualHosts from "./slides/VirtualHosts"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> }></Route>
        <Route path="learn" element={ <Main /> }>
          <Route index element={ <Introduction /> } />
          <Route path="installation" element={ <Installation /> } />
          <Route path="configuration" element={ <Configuration /> } />
          <Route path="vhosts" element={ <VirtualHosts /> } />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
