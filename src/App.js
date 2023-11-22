import MainPage from './pages/mainPage/mainPage';
import './App.css'
import AboutPage from './pages/aboutPage/aboutPage';
import UsersPage from './pages/usersPage/UsersPage';



const App = () => {
  return (
    <div className='App'>
      <MainPage />
      <AboutPage />
      <UsersPage />
    </div>
  );
};

export default App;
