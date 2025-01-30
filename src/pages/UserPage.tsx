import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../index.css';

const UserPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return user ? (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <button onClick={() => { logout(); navigate('/'); }}>Sair</button>
    </div>
  ) : null;
};

export default UserPage;
