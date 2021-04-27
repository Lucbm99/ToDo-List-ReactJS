import React, { useState } from 'react';
import './App.css';

function App(props) {

  const [tasksList, setTasksList] = useState([]);
  const [textTask, setTextTask] = useState('');

  const handleAddTask = (title) => {
    // tratamento de erros, caso o campo esteja em branco
    if(textTask === '') {
      alert("Preencha o campo corretamente, para adicionar uma tarefa.")
    } else { 
      let newTasksList = [...tasksList, {title: title, done: true}];
      setTasksList(newTasksList);
  
      setTextTask('');
    }
  }

  const handleEnter = (e) => {
    if(e.keyCode === 13) {
      if(textTask === '') {
        alert("Preencha o campo corretamente, para adicionar uma tarefa.")
      } else {
        let newTasksList = [...tasksList, {title: textTask, done: true}];
        setTasksList(newTasksList);
  
        setTextTask('');
      }
    }
  }

  const handleDoneTask = (index) => {
    let newTasksList = [...tasksList];
    newTasksList[index].done = !newTasksList[index].done;

    setTasksList(newTasksList);

  }

  return (
    <div className="title">
      <h1>To-do list</h1>
      <p>Organize seus afazeres por meio desta ferramenta.</p>
        <div className="input-task">

          {/* input para adição de tarefas */}
          <input type="text" placeholder="Digite uma tarefa..." value={textTask} onChange={(e) =>setTextTask(e.target.value)} onKeyUp={handleEnter} />

          {/* botão para adicionar as tarefas */}
          <button className="add-task" onClick={() => handleAddTask(textTask)}>Adicionar</button>

        </div>
        <ul className="items">
            {tasksList.map((item, index) => ( 
              <label key={index}>
                <input type="checkbox" onClick={() => handleDoneTask(index)} />

                  {/* se checbox não marcada, exibe a tarefa normalmente */}
                  {item.done === true && 
                    item.title
                  }
                  {/* se checbox marcada, exibe a tarefa riscada e pinta a mesma de vermelho */}
                  {item.done === false &&
                    <del>{item.title}</del>
                  }
              </label>
            ))}
          </ul>
    </div>
  );
}

export default App;
