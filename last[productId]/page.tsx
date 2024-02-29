'use client'

import { useState, useEffect } from "react"
import { GET } from "../src/app/viewer/page";



function parseText(text: string) {
    //'–' '-'
    let a = []
    
    let was_space = true
    let word = ""
    let word_time = 1

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case ' ': case '\n': case '\t':
                if (was_space) continue
                else {
                    was_space = true
                    if (text[i] === '\n') word_time = 1.5

                    a.push({
                        content: word,
                        speed: word_time
                    })
                    
                    word_time = 1
                    word = ""
                }
            break;

            default:
                switch (text[i]) {
                    case ',': case ';': case '–':
                        word_time = 1.2
                        break
                    case '!': case '?': case ':': case '.':
                        word_time = 1.5
                        break
                }

                word+= text[i]
                was_space = false   
        }
    }

    return a
}

export default async function Player({item, params}:
    {
        item: string,
        params: {productId: string}
    })
{   
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const text = await GET(parseInt(params.productId))
    let words = parseText(text !== undefined ? text : 'error');
    let speed = 130;

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isPlaying) {
        intervalId = setInterval(() => {
            if (index < words.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
            } else {
            setIsPlaying(false);
            }
        }, speed);
        }

        return () => clearInterval(intervalId);
    }, [isPlaying, index]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="text-center w-full">
        <div className="w-full">
            <h1 className="player-text m-auto">{words[index].content}</h1>
        </div>
        <button onClick={handlePlay} className="w-64 h-16 border-r-2 border-2 border-neutral-500">Play</button>
        <button onClick={handlePause} className="w-64 h-16 border-r-2 border-2 border-neutral-500">Pause</button>
    </div>
  );
};