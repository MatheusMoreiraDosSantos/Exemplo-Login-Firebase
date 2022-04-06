import React, { useState } from "react";
import { Container } from "./style";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";
import "../../services/firebase";

function Login() {
  const auth = getAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if(user.email === '' || user.password === '') {
      alert('Preencha os campos obrigatórios');
      return
    }
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location.assign("/Home");
        sessionStorage.setItem('user', user.toString())
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(
          "E-mail ou senha inválidos, entre em contato com o suporte para mais infomações"
        );
        console.log(errorCode, errorMessage);
      });
  };
  const handleResetPassword = () => {
    if(user.email === ""){
      alert("Digite seu E-mail para redefinição de e-mail");
      return
    }
    setUser({ ...user, password: '' })
    sendPasswordResetEmail(auth, user.email, undefined).then((response)=>{
     alert('O e-mail de redefinição de senha foi enviado. Verifique sua caixa de entrada.')
    }).catch((error)=>{
      alert('Ocorreu um erro ao enviar o e-mail, tente novamento ou contate o susporte.')
      console.log(error);
    })
  }
  return (
    <>
      <Container>
        <input  
          value={user.email}
          type="e-mail"
          placeholder="Email"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />
        <input  
          value={user.password}
          type="password"
          placeholder="Senha"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />
        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleResetPassword} className="redefinirSenha" >
          Esqueci a senha.
        </button>
      </Container>
    </>
  );
};

export default Login;
