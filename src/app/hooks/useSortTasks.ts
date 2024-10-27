import { useState } from 'react';
import { Task } from '@/app/types';

type SortOrder = 'ASC' | 'DESC' | 'NONE';

export const useSortTasks = (initialTasks: Task[]) => {
    const [sortOrder, setSortOrder] = useState<SortOrder>('NONE');

    const sortedTasks = () => {
        switch (sortOrder) {
            case 'ASC':
                return [...initialTasks].sort((a, b) => a.title.localeCompare(b.title));
            case 'DESC':
                return [...initialTasks].sort((a, b) => b.title.localeCompare(a.title));
            case 'NONE':
            default:
                return initialTasks;
        }
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            if (prevOrder === 'NONE') return 'ASC';
            if (prevOrder === 'ASC') return 'DESC';
            return 'NONE';
        });
    };

    return {
        sortedTasks: sortedTasks(),
        sortOrder,
        toggleSortOrder,
    };
};

