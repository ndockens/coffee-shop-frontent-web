import React from 'react';
import ImageCarousel from '../../components/image-carousel/ImageCarousel';

function Home(props) {
    return (
        <div className='row'>
            <div className='column'>
                <ImageCarousel />
            </div>
        </div>
    );
}

export default Home;