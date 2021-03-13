import { BrowserRouter as Router } from 'react-router-dom';
import Header from './component/header/Header';
import MainPages from './component/mainpages/pages';
import { DataProvider } from './GlobalState';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <MainPages />
      </Router>
    </DataProvider>
  );
}

export default App;
