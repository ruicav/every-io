## every-io

### to run:

```
docker build . -t ruicav/every-io

docker run -p 3000:3000 -d ruicav/every-io
```

### query examples:

```
query {
    login(email: "um@bol.com", password: "123")
}

mutation {
    createTask(title: "2", description: "2 desc", status: TO_DO) {
        id
    }
}


mutation {
    updateTask(id: 1, title: "Task 1 Atualizada") {
        id
    }
}

query {
    getAllTasks {
        description
        id
        title
    }
}

query {
    getTask(id: 1) {
        id
    }
}
```
