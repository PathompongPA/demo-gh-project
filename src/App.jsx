import { cva } from 'class-variance-authority'
import './App.css'
import { LoginPage } from './page'

const style = {
  app: cva(["w-screen h-screen flex justify-center items-center "])
}

function App() {
  return (
    <div className={style.app()}>
      <LoginPage />
    </div>
  )
}

export default App
