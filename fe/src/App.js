// import logo from './logo.svg';
import logo from './asset/pink.png';
import './App.css';
import './styles.css';
import TicketList from './TicketList';
import Background from './asset/black.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{  
  backgroundImage: "url(" + "https://i.redd.it/j2955rqs5xe91.jpg" + ")",
  backgroundPosition: 'top center',
  backgroundSize: '100%',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat'
}}>
      <h1 style={{marginTop:'-150px'}}>SKOVOL</h1>
      </header>
      <main>
        <TicketList/>
      </main>
      <footer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a style={{color:'#cb6295'}} className='text-dark' href='https://skovol.com/'>
          <b>SKOVOL</b>
        </a>
      </div>
      </footer>
    </div>
  );
}

export default App;
