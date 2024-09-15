import LoginPage from './Pages/LoginPage/LoginPage';
import PreLoader from './PreLoader';
import LandingPage from './Pages/LandingPage/LandingPage';


function App() {
  return (
    <>
    <PreLoader />

    <div>
      <LoginPage />
    </div>
    </>
  );
}

export default App;