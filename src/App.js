import './App.css';
import { QueryClient, QueryClientProvider, } from 'react-query';
import AdviseContainer from './components/advice-container';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <AdviseContainer/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
