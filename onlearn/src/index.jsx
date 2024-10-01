/* @refresh reload */
import { render } from 'solid-js/web';

import './styles/index.css';
import MainPage from './pages/main-page';

const root = document.getElementById('root');


render(() => <MainPage />, root);
