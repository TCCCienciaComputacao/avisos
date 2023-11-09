import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
            <div className="header text-center"></div>
            <div className="container--total">
                <div className="flex--menu">
                    <div className="text--menu">
                        <p>MENU</p>
                    </div>
                    <div class="flex2">
                        <div class="box2">
                            <button class="btn btn-secondary btn--menus">Cadastro de Instituição</button>
                        </div>
                        <div class="box2">
                            <button class="btn btn-secondary btn--menus">Cadastro de Turma</button>
                        </div>
                        <div class="box2">
                            <button class="btn btn-secondary btn--menus">Cadastro de Professor</button>
                        </div>
                        <div class="box2">
                            <button class="btn btn-secondary btn--menus">Cadastro de Disciplina</button>
                        </div>
                    </div>

                    <div class="flex3">
                        <div class="box3">
                            <button class="btn btn-secondary btn--menus">Criar Grade</button>
                        </div>
                        <div class="box3">
                            <button class="btn btn-secondary btn--menus">Calendário</button>
                        </div>
                        <div class="box3">
                            <button class="btn btn-secondary btn--menus">Notificações</button>
                        </div>
                        <div class="box3">
                            <button class="btn btn-secondary btn--menus">Configurações</button>
                        </div>
                    </div>
                </div>


                <div className="task-container">
                    <div className="container--btn">
                        <button className="btn btn-danger mt-2" onClick={() => setModal(true)} >Create Task</button>
                    </div>
                    {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                </div>
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />

        </>
    );
};

export default TodoList;