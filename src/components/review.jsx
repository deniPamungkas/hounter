import Card2 from "./card2";
import { register } from "swiper/element/bundle";
import "swiper/css";

const Review = () => {
  register();
  return (
    <section className="w-full px-24 h-[664px] relative overflow-hidden z-10">
      <div className="w-[600px] h-[600px] bg-radial-gradient-yellow absolute -right-[250px] top-[40px] rounded-full z-0" />
      <div className="flex flex-col items-center gap-y-2 mb-10">
        <p className="text-orange-300 font-semibold">See Our Review</p>
        <h1 className="font-bold text-4xl">What Our User Say About Us</h1>
      </div>
      <swiper-container
        slides-per-view={"1"}
        loop={true}
        navigation={true}
        pagination={true}
      >
        <swiper-slide>
          <Card2 />
        </swiper-slide>
        <swiper-slide>
          <Card2 />
        </swiper-slide>
        <swiper-slide>
          <Card2 />
        </swiper-slide>
        <swiper-slide>
          <Card2 />
        </swiper-slide>
        <swiper-slide>
          <Card2 />
        </swiper-slide>
        <swiper-slide>
          <Card2 />
        </swiper-slide>
      </swiper-container>
      {/* <Swiper
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        className=" border-2"
        spaceBetween={10}
        slidesPerView={1}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        onSlideChange={() => {
          console.log("first");
        }}
      >
        <button className="w-10 h-10 bg-fuchsia-500">a</button>
        <button className="w-10 h-10 bg-pink-500">b</button>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
        <SwiperSlide>
          <Card2 />
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
};

export default Review;
