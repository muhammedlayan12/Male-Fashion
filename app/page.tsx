{/* <link
rel="stylesheet"
href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
/> */}


import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Banner from "@/app/components/Banner";
import ProductsHomePage from "@/app/components/ProductsHomePage";
import ProductsDeal from "@/app/components/ProductsDeal";
import SocialPost from "@/app/components/SocialPost";
import BlogHomePage from "@/app/components/BlogHomePage";
import Footer from "@/app/components/Footer";
export default function page() {
  return (
    <div>
      {/*===============HEADER SECTION==================*/}
      <Header></Header>
       {/*===============NAVBAR SECTION==================*/}
      <Navbar></Navbar>
       {/*===============HERO SECTION==================*/}
      <Hero></Hero>
       {/*===============BANNER SECTION==================*/}
       <Banner></Banner>
       {/*===============HOME-PAGE-PRODUCTS SECTION==================*/}
       <ProductsHomePage></ProductsHomePage>
       {/*===============PRODUCTS-DEAL SECTION==================*/}
       <ProductsDeal></ProductsDeal>
       {/*===============VIRAL-PRODUCTS SECTION==================*/}
       <SocialPost></SocialPost>
       {/*===============Blog SECTION==================*/}
       <BlogHomePage></BlogHomePage>
       {/*===============Footer SECTION==================*/}
       <Footer></Footer>
    </div>
  );
}
