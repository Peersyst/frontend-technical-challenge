import './App.css';
import { Fragment } from 'react';
import GlobalStyles from './GlobalStyles';
import AppRouter from './router';

function App() {
  return (
    <Fragment> 
      <GlobalStyles />
      <AppRouter/>
    </Fragment>
  );
}

export default App;
