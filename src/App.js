import LoginPage from './Components/Login/LoginPage';
import PreLoader from './PreLoader';

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