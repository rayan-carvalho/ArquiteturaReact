import React from 'react';
import Header from './components/Button';
import Button from './components/Button';
import DadosPessoais from './DadosPessoais';
import DadosEndereco from './DadosEndereco';
import DadosBancarios from './DadosBancarios';
import DadosResumo from './DadosResumo';

function Candidato() {
  return (
    <>
    <Header/>
    <DadosPessoais/>
    <DadosEndereco/>
    <DadosBancarios/>
    <DadosResumo/>
    <Button/>
    </>
  );
}

export default Candidato;