import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const Slider = () => {
    const data = [
        {
          image: "https://images.unsplash.com/photo-1550028061-dace477da557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          caption: "Hero"
        },
        {
          image: "https://images.unsplash.com/photo-1668073231019-0d6e89488463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9uZGElMjBtb3RvcmJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          caption: "Honda"
        },
        {
          image: "https://images.unsplash.com/photo-1658327915180-99dcde188425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eWFtYWhhJTIwbW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          caption: "Yamaha"
        },
        
        {
          image: "https://images.unsplash.com/photo-1644879796743-32f929189b81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFqYWolMjBtb3RvcmJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          caption: "Bajaj "
        },
        
        
        {
          image: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          caption: "TVS"
        },
        {
          image: "https://images.unsplash.com/photo-1651137727535-d2af8297f027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1enVraSUyMG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          caption: "Suzuki"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
       <div >
            <div  >
        <h2 className='text-center text-3xl font-bold'>Our Top Selling Brands</h2>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel 
            data={data}
            time={2000}
            width="1440px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1440px",
              maxHeight: "600px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
       </div>
    );
};

export default Slider;