
import {StrictMode}  from 'react'; 

import { createRoot } from 'react-dom/client';
import Menu from './src/componens/menu';


createRoot(document.getElementById('header')).render(
  <StrictMode>

<Menu/>
    

  </StrictMode>
);