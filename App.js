import './App.css';
import FunctionApp from './TestComponent/FunctionApp';
import ProductsList from './TestComponent/ProductsApp';
import SetCountButton from './TestComponent/SetCountButton';
import UpdateCountTogether from './TestComponent/UpdateCountTogether';

function App() {
  return (
    <div className="App">
      <FunctionApp/>
      <ProductsList/>
      <SetCountButton/>
      <UpdateCountTogether/>
    </div>
  );  
}

export default App;
