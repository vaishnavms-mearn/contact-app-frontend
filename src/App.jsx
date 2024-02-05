
import './App.css';
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Add from './Components/Add'
import Edit from './Components/Edit'
import View from './Components/View';
import PageNotFound from './Components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          {/* /http://localhost:3000/home */}
          <Route path='/' element={<Home />} />
          {/* /http://localhost:3000/contacts */}
          <Route path='/contacts/' element={<Contacts />} />
          {/* /http://localhost:3000/view/1 */}
          <Route path='/contacts/add' element={<Add />} />
          {/* /http://localhost:3000/view/1 */}
          <Route path='/contacts/view/:id' element={<View />} />
          {/* /http://localhost:3000/edit/1 */}
          <Route path='/contacts/edit/:id' element={<Edit />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
