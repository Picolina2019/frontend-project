import { useDispatch } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useCounterActions } from '../model/slice/CounterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { decrement, increment } = useCounterActions();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement= () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid='value'>{counterValue}</h1>
      <Button onClick={handleIncrement} data-testid='increment-btn'>
        +
      </Button>
      <Button onClick={handleDecrement} data-testid='decrement-btn'>
        -
      </Button>
    </div>
  );
};
