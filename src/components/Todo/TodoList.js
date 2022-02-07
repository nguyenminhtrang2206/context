import React, { useContext } from "react";

import { notes } from "../../notes";
import classes from "./TodoList.module.css";
import { NotesContext } from "../store/todoStore";

const TodoList = () => {
  const context = useContext(NotesContext);
  console.log(context);

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {context.notes.map(note => {
        return (
          <div className={classes.todo} key={note.id}>
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
