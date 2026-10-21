import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import TaskTable from '../components/TaskTable';
const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState('Tất cả');
  const handleQueryShift = value => setQuery(value);
  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()) && (priority === 'Tất cả' || task.priority === priority));
  return <><h1>Danh sách công việc</h1><FilterBar query={query} setQuery={handleQueryShift} priority={priority} setPriority={setPriority} /><p>Tìm thấy {filteredTasks.length} công việc</p>{filteredTasks.length === 0 ? <p>Không có dữ liệu</p> : <TaskTable tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask} />}</>;
};
export default TaskList;
