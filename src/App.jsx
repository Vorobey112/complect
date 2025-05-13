import Header from './components/Header/Header';
import Map from './components/Map/Map';
import { View } from './components/View/View';
import Presentation from './components/Presentation/Presentation';
import { River } from './components/River/River';
import Lobbi from './components/Lobbi/Lobbi';
import Forms from './components/Forms/Forms';
import Otdel from './components/Otdel/Otdel';
import Develop from './components/Develop/Develop';
import Banks from './components/Banks/Banks';
import Footer from './components/Footer/Footer';
import { MainTest } from './components/Test/MainTest';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Map />
      <View />
      <Presentation />
      <River />
      <Lobbi />
      <Forms />

      <HashRouter>
      <MainTest />
      </HashRouter>
      
      <Otdel />
      <Develop />
      <Banks />
      <Footer />
    </div>
  );
}

export default App;