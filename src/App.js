import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/font-awesome-4.7.0/css/font-awesome.min.css';
import Header from '../src/components/header';
import Main from './components/main/main';
import Footer from '../src/components/footer';
import { placesToVisit } from './data/parks-to-visit';

function App() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [parkData, setParkData] = useState(null);

  useEffect(() => {
    if(selectedPark) {
        const url = `https://developer.nps.gov/api/v1/parks?parkCode=${selectedPark.value}&api_key=uJoltxSCHdJgNxoNSHORQRU4Jk1bYXwNp7EXfCVW`;
        fetch(url)
        .then((response) => response.json())
        .then(setParkData);
    }
  }, [selectedPark]);

  return (
    <div className="App">
      <Header visit={placesToVisit} setSelectedPark={setSelectedPark} />
      <Main parkData={parkData} />
      <Footer parkData={parkData} />
    </div>
  );
}
export default App;
