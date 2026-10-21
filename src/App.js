
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';
const BUILD_TAG = "zr-5093";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('gk_tasks');
    if (saved) {
      try { setTasks(JSON.parse(saved)); setLoading(false); return; }
      catch (e) { localStorage.removeItem('gk_tasks'); }
    }
    const controller = new AbortController();
    axios.get('/data/tasks.json', { signal: controller.signal })
      .then(res => { setTasks(res.data); setLoading(false); })
      .catch(err => { if (!axios.isCancel(err) && err.name !== 'CanceledError') { setError(true); setLoading(false); } });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!loading && !error) localStorage.setItem('gk_tasks', JSON.stringify(tasks));
  }, [tasks, loading, error]);

  const addTask = task => setTasks(old => [...old, task]);
  const deleteTask = id => setTasks(old => old.filter(task => task.id !== id));
  const updateTask = (id, changes) => setTasks(old => old.map(task => task.id === id ? { ...task, ...changes } : task));

  if (loading) return <><nav className="nav"><span>Trang chủ</span><span>Danh sách</span><span>Thêm mới</span></nav><p>Đang tải...</p></>;
  if (error) return <><nav className="nav"><span>Trang chủ</span><span>Danh sách</span><span>Thêm mới</span></nav><p>Không tải được dữ liệu</p></>;

  return <Routes><Route path="/" element={<Layout />}>
    <Route index element={<Home tasks={tasks} />} />
    <Route path="tasks" element={<TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />} />
    <Route path="tasks/new" element={<AddTask tasks={tasks} addTask={addTask} />} />
    <Route path="tasks/:id" element={<TaskDetail tasks={tasks} />} />
  </Route></Routes>;
};
export default App;
