import './App.css';
import Nav from './components/navBar/Nav';
import AppRoutes from './AppRoutes';
import indexStyle from './index.module.css'

function App() {
  
  return (
    <>
     <Nav/>
     <div className={indexStyle.padding_top_61}>
        <AppRoutes/>
     </div>
    </>
  )
}

export default App
