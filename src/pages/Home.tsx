import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Home = () => {
  const { login, register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha incorretos.');
    }
  };

  const handleRegister = () => {
    if (register(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Nome de usuário já existe. Escolha outro.');
    }
  };

  return (
    <div className="container">
      <h1>Login / Cadastro</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <button onClick={handleRegister}>Cadastrar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Home;
