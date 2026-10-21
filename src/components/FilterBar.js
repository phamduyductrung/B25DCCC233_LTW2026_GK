import React from 'react';
import { PRIORITIES } from '../data';
const FilterBar = ({ query, setQuery, priority, setPriority }) => <div className="filters">
  <label htmlFor="task-query">Tìm kiếm <input id="task-query" value={query} onChange={e => setQuery(e.target.value)} placeholder="Tên công việc" /></label>
  <label htmlFor="task-priority">Mức ưu tiên <select id="task-priority" value={priority} onChange={e => setPriority(e.target.value)}><option value="Tất cả">Tất cả</option>{PRIORITIES.map(p => <option key={p}>{p}</option>)}</select></label>
</div>;
export default FilterBar;
