import './App.module.css';
import Layout from './components/Layout/Layout';
import BudgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
     <Layout>
       <p><BudgerBuilder /></p>
     </Layout>
    </div>
  );
}

export default App;
