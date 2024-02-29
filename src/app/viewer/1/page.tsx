'use client'

import { useState, useEffect } from "react"

const text = `Глава I

Пока мистер Хаггин не подхватил его неожиданно под мышку и не спустился на корму поджидавшего вельбота, Джерри и не подозревал, что ему грозит какая-нибудь неприятность. Мистер Хаггин был его любимым господином в течение всех шести месяцев жизни Джерри. Джерри не знал мистера Хаггина под именем «господина», ибо слову «господин» не нашлось места в словаре Джерри. А Джерри был гладкошёрстным золотисто-рыжим ирландским терьером.

Но в сознании Джерри «мистер Хаггин» значит то же самое, что в наших словарях значит для собаки слово «господин». Слова «мистер Хаггин» Джерри слышал постоянно: так называли его господина многие — Боб, клерк и Дерби, надсмотрщик на плантации. И редкие посетители, двуногие человеческие существа, вроде тех, кто приехал на «Эренджи», обращались к его господину «мистер Хаггин».

Но собаки в своем смутном, неясном, переоценивающем людей сознании возносят своих господ и любят их больше, чем те заслуживают. «Господин» значит для них то же, что значил «мистер Хаггин» для Джерри, — больше, значительно больше, чем для людей. Человек считает себя «господином» своей собаки, но собака считает своего господина «богом».

Однако слова «бог» не было в словаре Джерри, хотя он уже успел приобрести определенный и довольно пространный словарь. «Мистер Хаггин» значило то же, что и «бог». Для Джерри слова «мистер Хаггин» звучали так же, как звучит слово «бог» для людей, ему поклоняющихся. Короче — мистер Хаггин был богом Джерри.`

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

let words = parseText(text);

export default function Player() {   
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    let speed = 230;

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
            <h1 className="player-text m-auto bah-bah">{words[index].content}</h1>
        </div><div className="h-32"></div>
        <button onClick={handlePlay} className="w-64 h-16 border-r-2 border-2 border-neutral-500">Play</button>
        <button onClick={handlePause} className="w-64 h-16 border-r-2 border-2 border-neutral-500">Pause</button>
    </div>
  );
};