import React from 'react';
const Home = ({ tasks }) => {
  const doneCount = tasks.reduce((total, task) => total + (task.done ? 1 : 0), 0);
  const remainingHours = tasks.reduce((total, task) => total + (!task.done ? task.hours : 0), 0);
  return <><h1>Công việc nhóm</h1><p>Tổng số công việc: {tasks.length}</p><p>Số công việc đã xong: {doneCount}</p><p>Tổng số giờ còn lại: {remainingHours}</p></>;
};
export default Home;
