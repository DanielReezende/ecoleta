import React from 'react';

import { Container, Fieldset } from './styles';

import Header from '../../components/Header';

const CreatePoint: React.FC = () => {
  return (
    <Container>
      <Header />

      <form>
        <h1>Cadastro do <br/> Ponto de Coleta</h1>

        <Fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name"/>
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email"/>
            </div>

            <div className="field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input type="text" name="whatsapp" id="whatsapp"/>
            </div>
          </div>

        </Fieldset>

        <Fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
        </Fieldset>

        <Fieldset>
          <legend>
            <h2>Ítens de Coleta</h2>
          </legend>
        </Fieldset>

      </form>
    </Container>
  );
}

export default CreatePoint;