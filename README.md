# API for not to do list

This Api is created for not to do list application.
Here is the link for the front end app ...

## APIS

### Task API

All the task api will follow the following format `{rootUrl}/api/v1/task`

| #   | Method   | Path        | Description                              |
| --- | -------- | ----------- | ---------------------------------------- |
| 1   | `GET`    | `/`         | Get all tasks                            |
| 2   | `POST`   | `/`         | send a task obj to store in the database |
| 3   | `DELETE` | `/{taskId}` | Delete the specific task                 |
| 4   | `PATCH`  | `/`         | Update the Task Name                     |

### User API

All the user api will follow the following format `{rootUrl}/api/v1/user`
