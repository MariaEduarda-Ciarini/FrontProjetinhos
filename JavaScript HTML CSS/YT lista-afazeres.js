const toDoList = [{
    name: 'Fazer Jantar',
    vencimentoDate: '2023-08-07',
}, {
    name: 'Lavar pratos',
    vencimentoDate: '2023-08-07'
}];

renderTodoList();

function renderTodoList() {
    let toDoListHTML = '';

    for (let i = 0; i < toDoList.length; i++) {
        const todoObject = toDoList[i];
        const { name, vencimentoDate } = todoObject;
        const html = `
<div>${name}</div>
<div>${vencimentoDate}</div>
<button onclick="
toDoList.splice(${i}, 1); 
renderTodoList();
" class="deletar-afazeres-button">Deletar</button>
`;
        toDoListHTML += html;
    }


    document.querySelector('.lista-afazeres')
        .innerHTML = toDoListHTML;
};

function addPendência() {
    const inputElement = document.querySelector('.js-nome-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-vencimento-Date-input');
    const vencimentoDate = dateInputElement.value;

    toDoList.push({
        //name: nome,
        //vencimentoDate: dueDate,
        name,
        vencimentoDate
    });


    inputElement.value = '';

    renderTodoList();
}
