import React from 'react';
import TaskRow from './TaskRow';
const TaskTable = ({ tasks, deleteTask, updateTask }) => <table><thead><tr><th>Công việc</th><th>Người làm</th><th>Ưu tiên</th><th>Số giờ</th><th>Trạng thái</th><th>Thao tác</th></tr></thead>
<tbody>{tasks.map(task => <TaskRow key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />)}</tbody></table>;
export default TaskTable;
