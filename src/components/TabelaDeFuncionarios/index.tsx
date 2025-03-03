// Importações do React
import React, { useState } from 'react'

// Importações de arquivos de estilo
import './styles.css'

// Importações de componentes
import Pesquisa from '../Pesquisa'

// Importações de assets (imagens)
import Circle from '../../assets/Circle.png'
import charmDown from '../../assets/charmDown.png'
import Spinner from '../../assets/Spinner.svg'

// Importações de utilitários
import formatPhoneNumber from '../../utils/formatUtils'
import filterEmployees from '../../utils/filterEmployees'

// Importações de hooks personalizados
import useAccordion from '../../hooks/useAccordion'
import { useEmployees } from '../../hooks/useEmployees'

const TabelaDeFuncionarios: React.FC = () => {
  // Estados
  const [search, setSearch] = useState('')

  // Hooks personalizados
  const { accordionState, handleAccordionClick } = useAccordion()
  const { employees } = useEmployees()

  // Variáveis calculadas
  const filteredEmployees = filterEmployees(employees, search)

  return (
    <div className="tabela-container">
      <Pesquisa search={search} setSearch={setSearch} />
      <table className="tabela">
        <thead>
          <tr>
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th className="circle">
              <img src={Circle} alt="" />
            </th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <React.Fragment key={emp.id}>
              <tr className="tbody-tr">
                <td>
                  <img key={emp.id} src={emp.image} alt="" />
                </td>
                <td>{emp.name}</td>
                <td>{emp.job}</td>
                <td>{new Date(emp.admission_date).toLocaleDateString()}</td>
                <td>{formatPhoneNumber(emp.phone)}</td>
                <td>
                  <img
                    onClick={() => handleAccordionClick(emp.id)}
                    className={`charmDown ${
                      accordionState === emp.id ? 'rotate' : ''
                    }`}
                    src={charmDown}
                    alt="Expandir detalhes"
                  />
                </td>
              </tr>
              {accordionState === emp.id && (
                <tr className="accordion-content">
                  <td colSpan={6}>
                    <div className="accordion-active">
                      <div className="accordion-box-tag-p">
                        <p>Cargo: </p>
                        <p>Data de Admissão: </p>
                        <p>Telefone: </p>
                      </div>
                      <div className="accordion-right">
                        <p>{emp.job}</p>
                        <p>
                          {new Date(emp.admission_date).toLocaleDateString()}
                        </p>
                        <p>{formatPhoneNumber(emp.phone)}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {filteredEmployees.length <= 0 && (
        <div className="loading">
          <img src={Spinner} alt="Carregando" />
          <h4>Carregando Lista de Funcionários...</h4>
        </div>
      )}
    </div>
  )
}

export default TabelaDeFuncionarios
