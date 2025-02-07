import {hightlightsSlides} from "../constants/index.js";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    });

    const [loadedData, setLoadedData] = useState([]);

    const {isEnd, isLastVideo, startPlay, videoId, isPlaying} = video;

    useEffect(()=> {
        if (loadedData.length > 3){
            if (!isPlaying){
                videoRef.current[videoId].pause();
            }else{
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]);

    useEffect(()=> {
        const currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]){
            //animate the progress of the video
            let anim = gsap.to(span[videoId], {
                onUpdate: ()=> {},
                onComplete: ()=> {}
            })
        }
    }, [videoId, startPlay])

    return (
        <>
            <div className='flex items-center'>
                {hightlightsSlides.map((slide) => (
                    <div key={slide.id} id='slider' className='sm:pr-20 pr-10'>
                        <div className='video-carousel_container'>
                            <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                                <video id='video'
                                       playsInline={true}
                                       preload='auto'
                                       muted
                                >
                                    <source src={slide.video} type='video/mp4'/>
                                </video>
                            </div>

                            <div className='absolute top-12 left-[5%] z-10'>
                                {slide.textLists.map((text) => (
                                    <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default VideoCarousel;