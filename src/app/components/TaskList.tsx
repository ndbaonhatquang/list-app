import React from 'react';
import { Task } from '@/app/types';

type TaskListProps = {
    tasks: Task[];
    onToggleTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => (
    <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2 mb-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleTask(task.id)}
                />
                <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
                <button
                    onClick={() => onDeleteTask(task.id)}
                    className="ml-auto px-4 py-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    // className="ml-auto px-4 py-2 text-white bg-red-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // className="ml-auto text-red-500 hover:underline"
                >
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

