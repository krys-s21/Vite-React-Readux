import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount , incrementAsync} from "../state/counter/counterSlice";
import { RootState } from "../state/store";

const Counter = () => {
    const count = useSelector((state: RootState)=>state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button 
                    onClick={
                        ()=>dispatch(incrementAsync(15))
                    }>
                        Increment
                </button>
                <button 
                    onClick={
                        ()=>dispatch(decrement())
                    }>
                        Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;