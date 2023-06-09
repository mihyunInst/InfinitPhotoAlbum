import { useRef } from "react";
import Photo from "./Photo";

function PhotoAlbum() {

    const postList = [
        {id: 1, imgSrc : "uns1.jpg", content: "Captivating beats, soulful melodies, a journey that resonates."},
        {id: 2, imgSrc : "uns2.jpg", content: "Harmony woven in every note, emotions unveiled through music."},
        {id: 3, imgSrc : "uns3.jpg", content: "Echoes of passion, lyrics that touch the heart, melodies that linger."},
        {id: 4, imgSrc : "uns4.jpg", content: "Enigmatic rhythms, a symphony of emotions, a tapestry of sound."},
        {id: 5, imgSrc : "uns5.jpg", content: "Whispered tales, a melodic embrace, a sanctuary for the soul."},
        {id: 6, imgSrc : "uns6.jpg", content: "Infinite possibilities, musical expressions of love, hope, and resilience."},
        {id: 7, imgSrc : "uns7.jpg", content: "Serenade your senses, let the music paint vivid emotions."},
        {id: 8, imgSrc : "uns8.jpg", content: "A kaleidoscope of sounds, a symphony of life's moments."},
        {id: 9, imgSrc : "uns9.jpg", content: "Journey into the depths of sound, where melodies ignite emotions."},
        {id: 10, imgSrc : "uns10.jpg", content: "A melodic oasis, where dreams and reality intertwine."},
        {id: 11, imgSrc : "uns11.jpg", content: "Harmonious threads, woven to evoke memories and stir the heart."},
        {id: 12, imgSrc : "uns12.jpg", content: "Melodies that heal, a soundtrack for moments of reflection."},
        {id: 13, imgSrc : "uns13.jpg", content: "A rhythmic tapestry, where emotions find their voice."},
        {id: 14, imgSrc : "uns14.jpg", content: "Unveiling the essence of emotions, melodies that speak without words."},
        {id: 15, imgSrc : "uns15.jpg", content: "An intimate connection, where music whispers secrets of the soul."},
        {id: 16, imgSrc : "uns16.jpg", content: "Celestial vibrations, transcending boundaries, embracing the universe within."},
        {id: 17, imgSrc : "uns17.jpg", content: "A symphony of life, melodies that resonate with the human experience."},
        {id: 18, imgSrc : "uns18.jpg", content: "Euphoric soundscape, where joy and passion collide."},
        {id: 19, imgSrc : "uns19.jpg", content: "Embrace the harmonies, let the music ignite your spirit."},
        {id: 20, imgSrc : "uns20.jpg", content: "A symphony of colors, painting emotions with melodic strokes."}
    ]
 
    return(
        <div className="container">
            <div className="albumBox">
                {postList.map(item => 
                    <Photo 
                        imgSrc={`/img/${item.imgSrc}`} 
                        photoId={item.id} 
                        content={item.content}
                    />
                )}
            </div>
        </div>
    )
}
export default PhotoAlbum;