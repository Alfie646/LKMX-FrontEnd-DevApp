import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
  //Hace el focus en los textfields
  useEffect(() => {
    inputRef.current.focus();
  });

  //Handler para testear un cambio en el textfield
  const handleChange = e => {
    setInput(e.target.value);
  };
  //Handler para testear cuando se ha presionado el button
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Modifica la Tarea'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Escribe una Tarea'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Agregar
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
