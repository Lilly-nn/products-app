import Categories from '@/components/home-page/Categories';
import ProductsSection from '@/components/home-page/ProductsSection';
import MembersSection from '@/components/home-page/MembersSection';
import ClientFeedback from '@/components/home-page/ClientFeedback';
import HomeBrands from '@/components/home-page/HomeBrands';
import BestDeals from '@/components/home-page/BestDeals';
import MainSlide from '@/components/home-page/MainSlide';

export default function Home() {
  return (
    <main className='container'>
      <MainSlide />
      <Categories />
      <ProductsSection />
      <BestDeals />
      <MembersSection />
      <ClientFeedback />
      <HomeBrands />
    </main>
  );
}
