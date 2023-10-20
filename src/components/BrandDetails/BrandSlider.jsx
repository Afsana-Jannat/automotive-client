import { useEffect, useState } from 'react';

const BrandSlider = ({ brandName }) => {

    const [images, setImages] = useState([])
    useEffect(() => {
        const url = `https://automotive-server-phi.vercel.app/brand/${brandName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setImages(data.brandImages))
    }, [brandName])


    return (
        <div className='container mx-auto h-[650px]'>
            <div className="carousel w-full">
                {
                    images.map((img)=> <div 
                        key={img}
                    id={img} className="carousel-item relative w-full h-full">
                    <img src={img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default BrandSlider;