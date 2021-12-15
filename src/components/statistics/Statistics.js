import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <div className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={s.item}
          key={id}
          style={{
            backgroundColor: SetRandomColor(),
          }}
        >
          <span className={s.label}> {label}</span>
          <span className={s.percentage}> {percentage}%</span>
        </li>
      ))}
    </ul>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
function SetRandomColor() {
  let x = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  let z = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return `rgb(${x}, ${y}, ${z})`;
}

//   /* <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>; */
