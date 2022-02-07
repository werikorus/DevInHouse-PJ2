import React from "react";
import Rotas from './pages/routes';
import { PageHeader } from './Components/PageHeader';
import { PageFooter } from './Components/PageFooter';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <PageHeader />   
      <Rotas />
      <PageFooter /> 
    </>
  );
}

export default App;
