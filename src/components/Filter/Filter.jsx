import style from './Filter.module.css';
import { setFilterValue } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';


console.log("filterValue", setFilterValue.toString);

export const Filter = () => {
  
  // console.log("тест знаю что треба видаляти просто чогось не деплоїться", props);

  // const { onInput, inputText } = props;

  const dispatch = useDispatch();
  const value = useSelector( state => state.filterValue);
  

  const handleInput = evt => {
    const input = evt.target;
    // console.log(input.value);
    dispatch(setFilterValue(input.value));
  };

 

  return (
    <div className={style.filterWrapper}>
      <label>Find contacts by name</label>
      <input
        className={style.input}
        onInput={handleInput}
        value={value}
        type="text"
        name="filter"
        placeholder="Type name to find"
      />
    </div>
  );
};


// dispatch(setContact({id: nanoid(),number: number, name: name}));
