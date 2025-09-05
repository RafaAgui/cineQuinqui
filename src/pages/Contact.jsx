import './Contact.css';
import { useState } from 'react';

export default function Contact() {

const [ items, setItems ] = useState ({ });


const onSubmitHandler = (e) => {
  e.preventDefault();
  localStorage.setItem('contactFormData', JSON.stringify(items));
  console.log(JSON.stringify(items))
}

const  onChangeInput = (e) => {
  const {name, value} = e.target;
  setItems((prevState) => ({...prevState, [name]: value }))
}

  return (
    <>
      <h1>Contacto</h1>
      <form action="" className="form" onSubmit={onSubmitHandler}>
        <input type="text" className="form__input"name="name" placeholder="Nombre" onChange={onChangeInput}/>
        <input type="text" className="form__input"name="secondname" placeholder="Apellido" onChange={onChangeInput}/>
        <input type="pass" className="form__input"name="pass" placeholder="pass" onChange={onChangeInput}/>

        <button className="form__button" type="submit">Enviar</button>
      </form>
    </>
  )
}
