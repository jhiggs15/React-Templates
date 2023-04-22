import Headshot from '../../assets/Headshot.jpg'
import { increment } from '../../slices/exampleSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/redux'

const Page1 = () => {
  const count = useAppSelector((state) => state.example.value)
  const dispatch = useAppDispatch();
  const onClick = () => dispatch(increment()); 

  return (
    <div>
      <h1>Page 1</h1>
      <h1>Count: {count}</h1>
      <img className='h-[20px] rounded-full' src={Headshot} />
      <button onClick={onClick}>Click Me!</button>
    </div>

  )
}

export default Page1;
