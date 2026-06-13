import type { Task } from './type.ts';

export default function TaskList({task} : {task: Task}) {
    return (
        <div>
            <div>{task.title}</div>
                {task.children?.map((child) => 
                    (<TaskList key={child.id} task={child} />)
                )}
        </div>
    );
}