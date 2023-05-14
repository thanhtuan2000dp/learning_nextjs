import { useReducer } from "react";

export default function Task() {}

function tasksReducer(tasks: [], action: any) {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...tasks,
                { id: action.id, text: action.text, done: false },
            ];
        case "UPDATE_TASK":
            return tasks.map((task: Task) => {
                if (task.id === action.id) {
                    return action.task;
                } else {
                    return task;
                }
            });
        case "DELETE_TASK":
            return tasks.filter((task: Task) => task.id !== action.id);
        default:
            throw Error("Action type not found " + action.type);
    }
}

const initialTasks: Array<Task> = [
    {
        id: 1,
        text: "Task 1",
        done: false,
    },
    {
        id: 2,
        text: "Task 2",
        done: false,
    },
    {
        id: 3,
        text: "Task 3",
        done: false,
    },
];

type Task = {
    id: number;
    text: string;
    done: boolean;
};
