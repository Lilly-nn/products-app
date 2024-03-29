'use client';
import Button from '@/components/UI/button/Button';
import Input from '@/components/UI/input/Input';
import { addAmount, extractAmount, removeFromCart } from '@/context/features/cart/cartSlice';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { currencyRates } from '@/info/currency/currencyRates';
import { CartProductType } from '@/types/productsType';
import { convertFromUSD } from '@/utils/convertCurrencies';
import { useRouter } from 'next/navigation';
import { GrFormClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';

export default function CartPage() {
  const { cartItems, totalPrice } = useTypedSelector((state) => state.cart);
  const { chosenCurrency } = useTypedSelector((state) => state.cart);
  const currencySign = chosenCurrency === 'UAH' ? 'UAH' : chosenCurrency === 'EUR' ? '€' : '$';
  const shippingCost = 0;
  const router = useRouter();
  const dispatch = useDispatch();
  const currency = currencyRates.find((el) => el.hasOwnProperty(chosenCurrency));
  const currentCurrency = currency && currency[chosenCurrency];

  return (
    <section className='cart__section'>
      <div className='cart__container container'>
        <h2 className='cart__title'>My Shopping Cart</h2>
        <div className='cart__content'>
          <div>
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
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          onClick={() => router.push(`/${item.category}/${item.id}`)}
                        />
                        <span>{item.title}</span>
                      </div>
                      <div className='price'>
                        <span>
                          {currencySign !== 'UAH' ? currencySign : ''}
                          {chosenCurrency !== 'USD' && currentCurrency
                            ? convertFromUSD(item.price, currentCurrency).toFixed(2)
                            : item.price}
                        </span>
                      </div>
                      <div className='quantity-info'>
                        <div className='quantity'>
                          <button onClick={() => dispatch(extractAmount(item))}>-</button>
                          <span>{item.chosenQuantity}</span>
                          <button onClick={() => dispatch(addAmount(item))}>+</button>
                        </div>
                      </div>
                      <div className='total'>
                        <span className='font-medium'>
                          {currencySign !== 'UAH' ? currencySign : ''}
                          {chosenCurrency !== 'USD' && currentCurrency
                            ? convertFromUSD(
                                item.price * item.chosenQuantity,
                                currentCurrency
                              ).toFixed(2)
                            : item.price * item.chosenQuantity}
                        </span>
                      </div>
                      <button className='close' onClick={() => dispatch(removeFromCart(item))}>
                        <GrFormClose />
                      </button>
                    </div>
                  ))}
              </div>
              <div className='footer'>
                <button type='button' onClick={() => router.back()} className='footer__link'>
                  Return to shop
                </button>
              </div>
            </div>
            <div className='cart__content-coupon'>
              <span>Coupon code</span>
              <Input placeholder='Enter code' text='Apply Coupon' />
            </div>
          </div>

          <div className='cart__content-total'>
            <span className='title'>Cart total</span>
            <div className='items'>
              <div className='item'>
                <span className='item__name'>Subtotal:</span>
                <span className='item__price'>
                  {currencySign !== 'UAH' ? currencySign : ''}
                  {totalPrice.toFixed(2)}
                </span>
              </div>
              <div className='item'>
                <span className='item__name'>Shipping:</span>
                <span className='item__price'>
                  {shippingCost > 0 ? `$${shippingCost}` : 'Free'}
                </span>
              </div>

              <div className='item'>
                <span className='item__name'>Total:</span>
                <span className='item__price'>
                  {currencySign}
                  {(totalPrice + shippingCost).toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              value='Proceed to checkout'
              type='button'
              disabled={cartItems.length > 0 ? false : true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
