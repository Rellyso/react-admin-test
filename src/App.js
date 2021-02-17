import Home from './pages/Home'

import { AuthProvider } from './Context/AuthContext'

const App = () => {

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  )
}

export default App