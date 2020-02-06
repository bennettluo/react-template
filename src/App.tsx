import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Routes from './routes';
import './App.css';
import WidgetArea from './components/dnd';
import { coreWidgets, supportWidgets } from './mocks';

const store = createStore({}, {});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <WidgetArea size="exLarge" type="Core" list={coreWidgets} />
          <WidgetArea size="small" type="Support" list={supportWidgets} />
        </div>
      </div>
      <Routes />
    </Provider>
  );
};

export default App;
