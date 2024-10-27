import React, { useState, FormEvent } from 'react';

type AddTaskFormProps = {
    onAddTask: (title: string) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
    const [taskTitle, setTaskTitle] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (taskTitle.trim()) {
            onAddTask(taskTitle.trim());
            setTaskTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Add new task"
                required
                style={{ flex: 1, padding: '0.5rem' }}
            />
            <button
                type="submit"
                className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Add
            </button>
        </form>
    );
};
