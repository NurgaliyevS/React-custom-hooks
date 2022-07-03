import React, { useState } from "react";
import useRequest from "./hooks/useRequest";

import axios from "axios";

function App() {

  const [todos, loading, error] = useRequest(fetchTodos);

  function fetchTodos(query) {
    return axios.get("https://jsonplaceholder.typicode.com/todos")
  }

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>Произошла ошибка при загрузке данных</h1>
  }

  return (
    <div>
      {todos && todos.map((todo) => (
        <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
          {todo.id}. {todo.title}
        </div>
      ))}
    </div>
  );
}

export default App;

// comments to useDebounce hook
// allows to make request only when user stoped writing data to input field

// const [value, setValue] = useState("");
// const debouncedSearch = useDebounce(search, 500);

// function search(query) {
//   fetch(`https://jsonplaceholder.typicode.com/todos=`+query)
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//       })
// }

// const onChange = e  => {
//   setValue(e.target.value);
//   debouncedSearch(e.target.value);
// }

// return (
//   <div>
//     <input type="text" value={value} onChange={onChange}/>
//   </div>
// );
