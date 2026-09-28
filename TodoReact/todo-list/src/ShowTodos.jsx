export const ShowTodos = ({ todos, removeTodo }) => {
    return (
        <ul>
            {todos.map((ele, idx) => (
                <li key={idx}>
                    {ele} <button onClick={() => removeTodo(idx)}>x</button>
                </li>
            ))}
        </ul>
    )
}
