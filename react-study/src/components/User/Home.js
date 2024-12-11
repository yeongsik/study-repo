import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Home() {
    const banners = [
        { id: 1, image: 'https://via.placeholder.com/1200x400?text=Banner+1', title: 'Summer Collection' },
        { id: 2, image: 'https://via.placeholder.com/1200x400?text=Banner+2', title: 'Winter Collection' },
        { id: 3, image: 'https://via.placeholder.com/1200x400?text=Banner+3', title: 'Big Sale' },
    ];

    const categories = [
        { id: 1, name: "Men's Clothing", image: 'https://via.placeholder.com/400x600?text=Men' },
        { id: 2, name: "Women's Clothing", image: 'https://via.placeholder.com/400x600?text=Women' },
        { id: 3, name: "Accessories", image: 'https://via.placeholder.com/400x600?text=Accessories' },
    ];

    const bestItems = [
        { id: 1, name: 'Summer Dress', price: '$59.99', image: 'https://via.placeholder.com/300x400?text=Product+1' },
        { id: 2, name: 'Casual Blazer', price: '$89.99', image: 'https://via.placeholder.com/300x400?text=Product+2' },
        { id: 3, name: 'Kids\' T-Shirt', price: '$25.99', image: 'https://via.placeholder.com/300x400?text=Product+3' },
    ];

    return (
        <div>
            {/* Hero Section */}
            <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} loop={true}>
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img src={banner.image} alt={banner.title} className="img-fluid" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Categories Section */}
            <div className="container my-5">
                <h2 className="mb-4">Shop by Categories</h2>
                <div className="row">
                    {categories.map((category) => (
                        <div className="col-md-4 mb-3" key={category.id}>
                            <div className="card">
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{category.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Best Items Section */}
            <div className="container my-5">
                <h2 className="mb-4">Best Items</h2>
                <Swiper spaceBetween={20} slidesPerView={3}>
                    {bestItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card">
                                <img src={item.image} className="card-img-top" alt={item.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Event Banner */}
            <div className="container my-5">
                <div className="bg-dark text-white p-5 text-center rounded">
                    <h2>Special Event</h2>
                    <p>Don't miss out on our exclusive deals and discounts!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
