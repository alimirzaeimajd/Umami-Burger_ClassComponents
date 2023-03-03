import './App.css';
import { Component } from 'react';
import Layout from './Components/Layout/BurgerLayout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }

}

export default App;
