import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemquantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemquantity(pizzaId))}
            >
                -
            </Button>
            <span className="test-sm font-semibold">{currentQuantity}</span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
                +
            </Button>
        </div>
    );
}

export default UpdateItemQuantity;
