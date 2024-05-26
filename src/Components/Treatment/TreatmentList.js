import React from 'react';
import TreatmentData from './TreatmentData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import '../../style/Treatment.css';

const TreatmentList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section id="treatments" className="treatment-container">
      <div className="treatment-wrapper">
        <h1 className="treatment-title">Treatments</h1>
        <div className="treatment-carousel">
          <Slider {...settings}>
            {TreatmentData.map((data) => (
              <div key={data.id}>
                <Card className="treatment-item">
                  
                  <CardContent>
                    <Typography className="treatment-name" gutterBottom variant="h5" component="div">
                      {data.name}
                    </Typography>
                    <Typography className="treatment-description" variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TreatmentList;
