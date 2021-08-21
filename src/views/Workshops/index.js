import React from "react";

import AppFooter from '../../onepirate/modules/views/AppFooter';
import AppAppBar from '../../onepirate/modules/views/AppAppBar';
import Calendar from "@ericz1803/react-google-calendar";
import {Container,Paper} from "@material-ui/core";
import withRoot from "../../onepirate/modules/withRoot";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImgMediaCard from "../../components/workshopCards";
import style from './style.css'
import Divider from "@material-ui/core/Divider";
const calendar_key = "AIzaSyDR4rE1jSfgxGqLfcRMVOX_5Q0BRd8FFvA";
const calendar_id = '5k5ak8miiagrpmjbf7qd9u18k4@group.calendar.google.com';
let calendars = [
    {
        calendarId: '5k5ak8miiagrpmjbf7qd9u18k4@group.calendar.google.com',
    }
];

const useStyles = makeStyles({
    calendarStyle: {
        marginBottom: "100px"
    },
    bottomMargin: {
        marginBottom: "50px"
    },
});

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    accessibility: true
};

const workshops = [
    {
        title: 'How to use Zoom',
        description:'A video that shows you how to use Zoom',
        img: 'https://i.pcmag.com/imagery/reviews/05fRE6utWAtXmByTrwqgdcU-9.1569481702.fit_scale.size_1028x578.jpg',
        link: 'https://www.youtube.com/watch?v=QOUwumKCW7M'
    },
    {
        title: 'Beginners Guide to Tiktok',
        description: 'A video that shows you a guide on how to use Tik Tok',
        img: 'https://lf16-tiktok-common.ibytedtos.com/obj/tiktok-web-common-sg/mtact/static/images/share_img.png',
        link: 'https://www.youtube.com/watch?v=apoVa0gwER8&list=PLk3xjyeTggSb9A6KwjOc-n0SqZITYO5PY'
    },
    {
        title: 'How to use Instagram',
        description: 'A video that shows you a guide on how to use Instagram',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
        link: 'https://www.youtube.com/watch?v=0Z4AEDyKGdI'
    },
    {
        title: 'How to use Instagram',
        description: 'A video that shows you a guide on how to use Instagram',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
        link: 'https://www.youtube.com/watch?v=0Z4AEDyKGdI'
    },
]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}


function Workshops() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppAppBar />
            <h1 style={{ 'text-align': 'center', 'font-size': '60px'}}>WORKSHOPS</h1>
            <Container maxWidth={'lg'} className={classes.calendarStyle}>
                <Paper elevation={3} className={classes.bottomMargin}>
                    <Calendar apiKey={calendar_key} calendars={calendars} showFooter={false}/>
                </Paper>
                <div className={classes.bottomMargin}>
                    <h1> Recent Uploads </h1>
                    <Slider {...settings}>
                        {workshops.map((tutorial, index) => (
                            <div>
                                <ImgMediaCard title={tutorial.title} description={tutorial.description} imgPreview={tutorial.img} link={tutorial.link}/>
                            </div>
                        ))}

                    </Slider>
                </div>
                <div className={classes.bottomMargin}>
                    <h1> Internet </h1>
                    <Slider {...settings}>
                        {workshops.map((tutorial, index) => (
                            <div>
                                <ImgMediaCard title={tutorial.title} description={tutorial.description} imgPreview={tutorial.img} link={tutorial.link}/>
                            </div>
                        ))}

                    </Slider>
                </div>
                <div>
                    <h1> Phone </h1>
                    <Slider {...settings}>
                        {workshops.map((tutorial, index) => (
                            <div>
                                <ImgMediaCard title={tutorial.title} description={tutorial.description} imgPreview={tutorial.img} link={tutorial.link}/>
                            </div>
                        ))}

                    </Slider>
                </div>
            </Container>
            <AppFooter />
        </React.Fragment>
    )
}

export default withRoot(Workshops);