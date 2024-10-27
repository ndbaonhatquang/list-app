import {Task} from "@/app/types";
import {TASKS} from "@/app/constants/task";

export const loadTasks = (): Task[] => {
    const storedTasks = localStorage.getItem(TASKS);
    return storedTasks ? JSON.parse(storedTasks) : [];
};

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem(TASKS, JSON.stringify(tasks));
};
