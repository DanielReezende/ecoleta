import React, { useState, useEffect, ChangeEvent, SelectHTMLAttributes } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Container, Fieldset, ItemsGroup } from './styles';
import axios from 'axios';

import Header from '../../components/Header';
import api from '../../services/api';

interface Items {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}
interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const [items, setItems] = useState<Items[]>([])
  const [ufs, setUfs] = useState<string[]>([])
  const [cities, setCities] = useState<string[]>([])

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    api.get('/items').then(response => setItems(response.data))
  }, [])

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla)

        setUfs(ufInitials)
      })
  }, [])

  useEffect(() => {
    if (selectedUf === '0') return;

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome)

        setCities(cityNames)
      })

  }, [selectedUf])

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf)
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city)
  }

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

          <MapContainer center={[-22.3792809,-42.9514275]} zoom={15} >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-22.3792809,-42.9514275]}>
              </Marker>
          </MapContainer>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf" value={selectedUf} onChange={handleSelectedUf}>
                <option value="0">Selecione uma UF</option>
                { ufs.map(uf => (
                  <option key={uf} value={uf}>{ uf }</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city" value={selectedCity} onChange={handleSelectedCity}>
                <option value="0">Selecione uma Cidade</option>
                { cities.map(city => (
                  <option key={city} value={city}>{ city }</option>
                ))}
              </select>
            </div>
          </div>

        </Fieldset>

        <Fieldset>
          <legend>
            <h2>Ítens de Coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ItemsGroup>
           { items.map(item => (
            <li key={item.id}>
              <img src={item.image_url} alt={item.title}/>
              <span>{item.title}</span>
            </li>
           ))}
          </ItemsGroup>

        </Fieldset>
        
        <button type="submit">
          Cadastrar ponto de coleta
        </button>        
      </form>
    </Container>
  );
}

export default CreatePoint;