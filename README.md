## TODO APP
>This project contains a simple TODO application 
It has the following features:
- Anyone can create a todo
- Anyone can see their existing todos
- Anyone can mark a todo as done

### Code flow:

```mermaid
graph LR
A[APP] -- create --> B((frontend))
A[APP] -- create --> C((backend))
C --> D(Express)
C --> E(zod for validation)
C --> H(mongoose for connection)
C --> H(mongoDB as DB)
B --> F{React}
```

```mermaid
graph LR
A[APP] -- create --> B((TODO))
B --> C(TODO-1)
B --> D(TODO-2)
C --> F{Mark as Done}
B --> E(TODO-3)
```