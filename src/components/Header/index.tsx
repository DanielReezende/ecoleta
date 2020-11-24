import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Ecoleta"/>
      <Link to="/">
        <FiArrowLeft />
        Voltar para home
      </Link>
    </Container>
  );
}

export default Header;