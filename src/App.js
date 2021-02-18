import Home from './pages/Home'

const App = () => {

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  )
}

export default App