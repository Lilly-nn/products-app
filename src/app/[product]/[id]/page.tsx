'use client';
import LikeSvg from '@/components/UI/LikeSvg';
import SocialIcons from '@/components/UI/SocialIcons';
import Stars from '@/components/UI/Stars';
import Button from '@/components/UI/button/Button';
import RelatedProducts from '@/components/productPage/RelatedProducts';
import {
  addAmount,
  addToCart,
  extractAmount,
  removeFromCart,
} from '@/context/features/cart/cartSlice';
import { useGetOneProductQuery } from '@/context/services/productsApi';
import useChangeCurrency from '@/hooks/useChangeCurrency';
import { useCheckLiked, useGetLiked } from '@/hooks/useLiked';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ProductType } from '@/types/productsType';
import { calculateRating } from '@/utils/calculateRating';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useDispatch } from 'react-redux';

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOneProductQuery(id.toString());
  const [currentImage, setCurrentImage] = useState(0);
  const { cartItems } = useTypedSelector((state) => state.cart);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [chosenQuantity, setChosenQuantity] = useState(1);
  const dispatch = useDispatch();
  const tags = [...new Set([data?.brand, data?.category, data?.title.split(' ')[0]])];
  const [transformValue, setTransformValue] = useState(0);
  const { productPrice, originalPrice, currencySign } = useChangeCurrency(data);

  function addToBag() {
    if (data) {
      if (!isAddedToBag) {
        dispatch(addToCart({ ...data, chosenQuantity }));
      } else {
        setChosenQuantity(1);
        dispatch(removeFromCart({ ...data, chosenQuantity }));
      }
    }
    setIsAddedToBag(!isAddedToBag);
  }

  function addQuantity() {
    if (data && chosenQuantity < data.stock) {
      setChosenQuantity(chosenQuantity + 1);
      dispatch(
        addAmount({
          ...data,
          chosenQuantity,
        })
      );
    } else {
      alert("we don't have more items in stock");
    }
  }

  function subtractQuantity() {
    if (data && chosenQuantity > 1) {
      setChosenQuantity(chosenQuantity - 1);
      dispatch(
        extractAmount({
          ...data,
          chosenQuantity,
        })
      );
    }
  }

  async function addToLiked(product: ProductType) {
    setIsLiked(!isLiked);
    try {
      await axios.put('/api/liked', {
        userId: localStorage.getItem('user_id'),
        product,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useCheckLiked(setIsLiked, Number(id));

  useEffect(() => {
    if (data) {
      if (cartItems.find((item) => item.id === data.id)) {
        setIsAddedToBag(true);
      }
      cartItems.forEach((item) => {
        if (item.id === data?.id) {
          setChosenQuantity(item.chosenQuantity);
        }
      });
    }
  }, [data?.id, cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='product__section'>
      <div className='product__container container'>
        {data && (
          <>
            <div className='product__img'>
              <div className='images'>
                <IoIosArrowDown
                  className={`arrow-down arrow ${
                    transformValue <= -88 || data.images.length <= 4 ? 'disabled' : ''
                  }`}
                  onClick={() => transformValue > -88 && setTransformValue(transformValue - 88)}
                />
                <IoIosArrowUp
                  className={`arrow-up arrow ${
                    transformValue >= 0 || data.images.length <= 4 ? 'disabled' : ''
                  }`}
                  onClick={() => transformValue < 0 && setTransformValue(transformValue + 88)}
                />
                <div className='container'>
                  {data.images.map((img, index) => (
                    <img
                      style={{ transform: `translateY(${transformValue}px)` }}
                      key={img}
                      onClick={() => setCurrentImage(index)}
                      src={img}
                      className={`${currentImage === index ? 'active' : ''}`}
                      alt='image'
                    />
                  ))}
                </div>
              </div>
              <div className='main-img'>
                <img src={data.images[currentImage]} />
              </div>
            </div>
            <div className='product__details'>
              <div className='product__header'>
                <div className='flex items-center gap-2'>
                  <h2 className='title'>{data.title}</h2>
                  <span className='stock'>{data.stock > 0 ? 'in stock' : 'out of stock'}</span>
                </div>
                <div className='rating-cont'>
                  <div className='stars'>
                    <Stars stars={calculateRating(data.rating)} />
                  </div>
                  <span className='rating'>Rating: {data.rating}</span>
                </div>
                <div className='price-info'>
                  <span className='original-price'>
                    {currencySign}
                    {originalPrice?.toFixed(2)}
                  </span>
                  <span className='discounted-price'>
                    {currencySign}
                    {productPrice?.toFixed(2)}
                  </span>
                  <span className='discount'>{data.discountPercentage}% Off</span>
                </div>
              </div>
              <div className='product__content'>
                <div className='share'>
                  <p className='item__name'>
                    Brand: <span className='item__content'>{data.brand}</span>
                  </p>
                  <div className='flex gap-x-[10px] items-center'>
                    <p className='text-[#1A1A1A] text-sm font-normal mt-[4px]'>Share item:</p>
                    <SocialIcons />
                  </div>
                </div>
                <p className='description'>{data.description}</p>
                <div className='flex items-center justify-between gap-x-3'>
                  <div className='quantity-info'>
                    <div className='quantity'>
                      <button onClick={subtractQuantity}>-</button>
                      <span>{chosenQuantity}</span>
                      <button onClick={addQuantity}>+</button>
                    </div>
                  </div>
                  <div className='interaction'>
                    <Button
                      value={isAddedToBag ? 'Remove from cart' : 'Add to cart'}
                      type='button'
                      onClick={addToBag}
                    />
                    <div
                      className={`like ${isLiked ? 'active' : ''}`}
                      onClick={() => addToLiked(data)}>
                      <LikeSvg />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-y-3'>
                  <p className='item__name'>
                    Category:{' '}
                    <span className='item__content'>{data.category.split('-').join(' ')}</span>
                  </p>
                  <p className='item__name'>
                    Tags:{' '}
                    {tags.map((tag) => (
                      <span key={tag} className='item__content tag'>
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
        {isLoading && <span>Loading..</span>}
        {!isLoading && !data && <p>This product wasn`&apos;t found</p>}
      </div>
      {data && <RelatedProducts productId={data.id} productCategory={data.category} />}
    </section>
  );
}
