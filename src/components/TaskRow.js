import React from 'react';
import { Link } from 'react-router-dom';
const TaskRow = ({ task, deleteTask, updateTask }) => <tr>
  <td><Link className={task.done ? 'done' : ''} to={`/tasks/${task.id}`}>{task.title}</Link></td><td>{task.assignee}</td><td>{task.priority}</td><td>{task.hours}</td><td>{task.done ? 'Đã xong' : 'Đang làm'}</td>
  <td><button onClick={() => updateTask(task.id, { done: !task.done })}>{task.done ? 'Làm lại' : 'Hoàn thành'}</button> <button className="danger" onClick={() => deleteTask(task.id)}>Xóa</button></td>
</tr>;
export default TaskRow;
