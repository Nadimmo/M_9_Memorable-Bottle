
import PropType from 'prop-types'
import './Cart.css'
const Cart = ({addCount,hadlerRemoveFromCart}) => {
    // console.log(addCount)
    return (
        <div>
            <h3>Cart Length : {addCount.length}</h3>
            <div className="cartContainer">
                {
                    addCount.map(bottal => <div key={addCount.id}>
                        <img  src= {bottal.img}></img>
                        <button onClick={()=> hadlerRemoveFromCart(bottal.id)}>Remove</button>
                    </div> )
                }
            </div>
        </div>
        
    );
};

Cart.propTypes = {
    addCount: PropType.array,
    hadlerRemoveFromCart: PropType.func.isRequired
}
export default Cart;