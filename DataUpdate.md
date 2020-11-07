1. version 1
``` javascript
const todolist_first = [
    {
        id: 1, 
        header: 'Hello World', 
        list_task: [
            { 
                id: 1,
                task: 'Welcome to learning React!'}
        ]
    },
    {
        id: 1, 
        header: 'Hello World', 
        list_task: [
            { 
                id: 2,
                task: 'Welcome to learning React!22'}
        ]
    },
];
```

2. version 2
``` javascript
const todolist = [
    { id: 0, header: 1, col: 1, content: 'Working' },
    { id: 1, header: -1, col: 1, content: 'task1' },
    { id: 2, header: 1, col: 2, content: 'Done' },
    { id: 3, header: -1, col: 2, content: 'task2' },
];
```

3. version 3
```javascript
    const todolist = {
        1: {
            content: 'Cột 1', 
            list_task: {
                112: 'content cột 1',
                112: 'content cột 1'
            }
        },
        2: {
            content: 'Cột 2', 
            list_task: {
                112: 'content cột 2',
                112: 'content cột 2'
            }
        }
    }
```

4. version 4 [cứ loanh quanh ở việc cần có ID]
```javascript
    const todolist = [ 
        {
            content: 'Cột 1', 
            list_task: [ 
                'content cột 1',
                'content cột 1'
            ]
        },
        {
            content: 'Cột 2', 
            list_task: [ 
                'content cột 2',
                'content cột 2'
            ]
        },
    ]
```