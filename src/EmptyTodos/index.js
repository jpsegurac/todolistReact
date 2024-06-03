import React from "react";
import { TodoContext } from "../TodoContext";

function EmptyTodos() {
  const {totalTodos} = React.useContext(TodoContext)
  if (totalTodos > 0) {
    return (
      <p>No hay resultados para tu busqueda</p>
    );
  } else {
    return (
      <p>Crea tu primer ToDo </p>
    );
  }
}

export { EmptyTodos };