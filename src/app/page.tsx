'use client'
import React, { useState, useEffect } from 'react';
import {loadTasks, saveTasks} from "@/app/utils";
import {Task} from "@/app/types";
import {AddTaskForm, Button, TaskList} from "@/app/components";
import {useSortTasks} from "@/app/hooks";

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(loadTasks());
    const { sortedTasks, sortOrder, toggleSortOrder } = useSortTasks(tasks);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const handleAddTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleToggleTask = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };


    return (
        <div style={{maxWidth: '600px', margin: '0 auto', padding: '2rem'}}>
            <h1>Todo App</h1>
            <AddTaskForm onAddTask={handleAddTask}/>
            <Button onClick={toggleSortOrder}>
                Sort: {sortOrder}
            </Button>
            <TaskList tasks={sortedTasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask}/>
        </div>
    );
};

export default Home;

