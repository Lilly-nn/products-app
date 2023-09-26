'use client';
import { addAmount, extractAmount, removeFromCart } from '@/context/features/cart/cartSlice';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CartProductType, ProductType } from '@/types/productsType';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

export default function CartPage() {
  const { cartItems, totalPrice } = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <section className='cart__section'>
      <div className='cart__container container'>
        <h2 className='cart__title'>My Shopping Cart</h2>
        <h3>{totalPrice}</h3>
        <div className='cart__content'>
          <div className='cart__content-table'>
            <div className='header'>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            <div className='content'>
              {cartItems.length > 0 &&
                cartItems.map((item: CartProductType) => (
                  <div key={item.id} className='row'>
                    <div className='product'>
                      <img src={item.images[0]} alt={item.title} />
                      <span>{item.title}</span>
                    </div>
                    <div className='price'>
                      <span>${item.price}</span>
                    </div>
                    <div className='quantity-info'>
                      <div className='quantity'>
                        <button onClick={() => dispatch(extractAmount(item))}>-</button>
                        <span>{item.chosenQuantity}</span>
                        <button onClick={() => dispatch(addAmount(item))}>+</button>
                      </div>
                    </div>
                    <div className='total'>
                      <span className='font-medium'>${item.price * item.chosenQuantity}</span>
                    </div>
                    <button className='close' onClick={() => dispatch(removeFromCart(item))}>
                      <GrFormClose />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
