import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact by name
    <input
      className={s.Filter}
      name="filter"
      type="text"
      placeholder="Enter to find"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
