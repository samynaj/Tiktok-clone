import React, { useState, useRef } from 'react';
import Footer from '../footer/footer';
import './video.css';

export default function Video() {
    const [play, setPlay] = useState(false)
    const videoRef = useRef(null);
    const onVideoClick = () => {
        if (play) {
            videoRef.current.pause()
            setPlay(false)
        }
        else {
            videoRef.current.play()
            setPlay(true)
        }
    }
    return (
        <div className="video">
            <video 
                className="video__player"
                onClick={onVideoClick}
                loop
                ref={videoRef}
                src="https://v77.tiktokcdn.com/b8dac76fbd098a045702e2d002ac1fa9/6007a485/video/tos/useast2a/tos-useast2a-pve-0068/2e451a1fa5d844c6bcf1ab8fb385edae/?a=1233&br=2528&bt=1264&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210119213309010234106018183A736E&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=amxoam93PDhreTMzZzczM0ApOzc8Njs0PGU2N2Q0PDUzaGczYGNtLS1tLW1fLS1fMTZzczUuYzNiXmJfYV81MGNjL2M6Yw%3D%3D&vl=&vr="
            >
            </video>
            <Footer 
                 channel="samynaj"
                 description="check this dance #fyp #foryoupage #savagelovechallenge"
                 song="Jason Derulo - Savage love"
            />
        </div>
    )
}
