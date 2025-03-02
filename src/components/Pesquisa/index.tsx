import React, { Dispatch, SetStateAction } from 'react';
import Default from '../../assets/Default.png';
import './styles.css';

interface PesquisaProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Pesquisa: React.FC<PesquisaProps> = ({ search, setSearch }) => {
  return (
    <section className='box-main'>
      <div>
        <h1>Funcionários</h1>
      </div>
      <div className='box-pesquisa'>
        <img className='icone-pesquisa' src={Default} alt="Icone de Pesquisa" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="pesquisa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Pesquisa;