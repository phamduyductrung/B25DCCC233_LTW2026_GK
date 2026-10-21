import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIORITIES } from '../data';
const AddTask = ({ tasks, addTask }) => {
  const [title, setTitle] = useState(''); const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Trung bình'); const [hours, setHours] = useState(''); const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !assignee.trim() || hours === '') { setMessage('Vui lòng nhập đầy đủ thông tin phía dưới form'); return; }
    const numberHours = Number(hours);
    if (!Number.isInteger(numberHours) || numberHours < 1 || numberHours > 40) { setMessage('Số giờ phải từ 1 đến 40'); return; }
    const newId = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    addTask({ id: newId, title: title.trim(), assignee: assignee.trim(), priority, hours: numberHours, done: false });
    navigate('/tasks', { replace: true });
  };
  return <><h1>Thêm công việc</h1><form onSubmit={handleSubmit} className="task-form">
    <label htmlFor="task-title">Tên công việc<input id="task-title" value={title} onChange={e => setTitle(e.target.value)} /></label>
    <label htmlFor="task-assignee">Người làm<input id="task-assignee" value={assignee} onChange={e => setAssignee(e.target.value)} /></label>
    <label htmlFor="task-add-priority">Mức ưu tiên<select id="task-add-priority" value={priority} onChange={e => setPriority(e.target.value)}>{PRIORITIES.map(p => <option key={p}>{p}</option>)}</select></label>
    <label htmlFor="task-hours">Số giờ ước tính<input id="task-hours" type="number" value={hours} onChange={e => setHours(e.target.value)} /></label>
    {message && <p className="error">{message}</p>}<button type="submit">Thêm</button>
  </form></>;
};
export default AddTask;
