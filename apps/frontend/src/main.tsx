import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import  {worker} from"./mocks/browser"
import App from './app/app';

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    // const { worker } = require('./mocks/browser')
    return worker.start()
  }
  return Promise.resolve()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


prepare().then(() =>{
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

})
