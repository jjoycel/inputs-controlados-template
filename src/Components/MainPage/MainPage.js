import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  // console.log(nome, idade)

  const mudaNome = (event) => {
    setNome(event.target.value);
   
  }
  const mudaIdade = (event) => {
    setIdade(event.target.value);
    
  }
  const [estadoCivil, setEstadoCivil] = useState("")

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function imprimirvaloresDosInputs(event){
    event.preventDefault();
    console.log({nome, idade, estadoCivil, email, senha})
  
    
  }

  function limparInputs(event){
    event.preventDefault()
      setNome("")
      setIdade("")
      setEstadoCivil("")
      setEmail("")
      setSenha("")
      console.log({nome, idade, estadoCivil, email, senha})
    }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={imprimirvaloresDosInputs}>
        <label>
          Nome:
          <Input type='name' value={nome} onChange={mudaNome}/>
        </label>
        <label>
          Idade:
          <Input value={idade} onChange={mudaIdade}/>
        </label>
        <label>
            Email:
          <Input type='email' value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        </label>
        <label>Senha:
          <Input type='password' value={senha} onChange={(event)=>{setSenha(event.target.value)}}/>
        </label>
        <label>
         Estado civil:
         <select value={estadoCivil} onChange={(event)=>{setEstadoCivil(event.target.value);}}>
          <option disabled value={""}>Selecione</option>
          <option value={"casado"}>Casado(a)</option>
          <option value={"solteiro"}>Solteiro(a)</option>
          <option value={"viuvo"}>Viuvo(a)</option>
         </select>
      </label> 
      <button onClick={limparInputs}>Enviar dados</button>
     </Form>
    </MainContainer>
  )
}

export default MainPage
