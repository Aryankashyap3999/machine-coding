export const InputElement = ({ addTodo }) => {

    function handleFormSubmit (e) {
        e.preventDefault();
        const text = e.target.elements.todo.value.trim();
        if (!text) return;
        addTodo(text);
        e.target.reset();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name="todo" type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}
