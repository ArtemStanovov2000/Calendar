import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Window from './containers/Window';
import { storeSyncer } from './storeSyncer/storeSyncer';

storeSyncer.getStore()

export default function App2() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Window />} />
        </Routes>
      </Router>
    </Provider>
  );
}
