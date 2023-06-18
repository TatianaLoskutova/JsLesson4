const todoListsId_1 = '1'
const todoListsId_2 = '2'


const todoLists = [
    {
        id: todoListsId_1,
        title: "What to lear",
        filter: "all"
    },
    {
        id: todoListsId_2,
        title: "What to buy",
        filter: "all"
    }
]

const getKey = () => {}

const tasks = {
    [todoListsId_1]: [  // внутри квадр скобок сидит выражение
        {id: "10", title: "HTML", isDone: false},
        {id: "20", title: "CSS", isDone: false},
        {id: "30", title: "JS/TS", isDone: false}
    ],
    [todoListsId_2]: [
        {id: "11", title: "MEAT", isDone: false},
        {id: "21", title: "CHEESE", isDone: false},
        {id: "31", title: "BEER", isDone: false}
    ],
    [10+20]: [], // в виде строки будет 30
    [getKey()]: []
}

console.log(tasks)
// C-(R) - UD

const addTodoList = (todoListTitle) => {
    const newTodoId = '3'
    const newTodo = {
        id: newTodoId,
        title: todoListTitle,
        filter: 'all'
    }
    const updatedTodos = [...todoLists, newTodo]
    console.log(updatedTodos)
    const updatedTasks = {...tasks, [newTodoId]: []}
    console.log(updatedTasks)
}

addTodoList('What to read')

const changeTodoListFilter = (todoListsId, newFilterValue) => {
    const updatedTodos = todoLists.map(tl => tl.id === todoListsId ? {...tl, filter: newFilterValue} : tl)
    console.log(updatedTodos)
}

changeTodoListFilter(todoListsId_1, 'active')

const removeTodoList = (todoListsId) => {
    const updatedTodos = todoLists.filter(tl => tl.id !== todoListsId)
    console.log(updatedTodos)
    delete tasks[todoListsId]
    console.log(tasks)
}
removeTodoList(todoListsId_1)

const students = [
    {   id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: "2",
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: "3",
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: "4",
        name: "John",
        age: 21,
        isMarried: false,
        scores: 100
    }
];

const sts = {}
for (let i = 0; i < students.length; i++) {
    sts[students[i].id] = students[i] // sts[students[i].id] это теперь ключ с айдишкой
    delete sts[students[i].id].id
}
console.log(sts)

// const ages = {
//     '21': 2,
//     '22': 1,
//     '20': 1
// }

const ages = {}
for (let i = 0; i < students.length; i++) {
    if (Object.keys(ages).includes(String(students[i].age))) {
        ages[students[i].age] = ages[students[i].age] + 1
    } else {
        ages[students[i].age] = 1
    }
}
console.log(ages)

const agesFullData = {}
for (let i = 0; i < students.length; i++) {
    if (Object.keys(agesFullData).includes(String(students[i].age))) {
        agesFullData[students[i].age].push(students[i])
    } else {
        agesFullData[students[i].age] = []
        agesFullData[students[i].age].push(students[i])
    }
}
console.log(agesFullData)