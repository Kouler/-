'use client'

import { useState, useEffect } from "react"

const text = `Глава 1

У-у-у-у-у-гу-гуг-гуу! О, гляньте на меня, я погибаю. Вьюга в подворотне ревёт мне отходную, и я вою с ней. Пропал я, пропал. Негодяй в грязном колпаке – повар столовой нормального питания служащих центрального совета народного хозяйства – плеснул кипятком и обварил мне левый бок.

Какая гадина, а ещё пролетарий. Господи, боже мой – как больно! До костей проело кипяточком. Я теперь вою, вою, да разве воем поможешь.

Чем я ему помешал? Неужели я обожру совет народного хозяйства, если в помойке пороюсь? Жадная тварь! Вы гляньте когда-нибудь на его рожу: ведь он поперёк себя шире. Вор с медной мордой. Ах, люди, люди. В полдень угостил меня колпак кипятком, а сейчас стемнело, часа четыре приблизительно пополудни, судя по тому, как луком пахнет из пожарной пречистенской команды. Пожарные ужинают кашей, как вам известно. Но это – последнее дело, вроде грибов. Знакомые псы с Пречистенки, впрочем, рассказывали, будто бы на Неглинном в ресторане «бар» жрут дежурное блюдо – грибы, соус пикан по 3р.75 к. порция. Это дело на любителя всё равно, что калошу лизать… У-у-у-у-у…

Бок болит нестерпимо, и даль моей карьеры видна мне совершенно отчётливо: завтра появятся язвы и, спрашивается, чем я их буду лечить?

Летом можно смотаться в Сокольники, там есть особенная, очень хорошая трава, а кроме того, нажрёшься бесплатно колбасных головок, бумаги жирной набросают граждане, налижешься. И если бы не грымза какая-то, что поёт на лугу при луне – «Милая Аида» – так, что сердце падает, было бы отлично. А теперь куда пойдёшь? Не били вас сапогом? Били. Кирпичом по рёбрам получали? Кушано достаточно. Всё испытал, с судьбой своей мирюсь и, если плачу сейчас, то только от физической боли и холода, потому что дух мой ещё не угас… Живуч собачий дух.

Но вот тело моё изломанное, битое, надругались над ним люди достаточно. Ведь главное что – как врезал он кипяточком, под шерсть проело, и защиты, стало быть, для левого бока нет никакой. Я очень легко могу получить воспаление лёгких, а, получив его, я, граждане, подохну с голоду. С воспалением лёгких полагается лежать на парадном ходе под лестницей, а кто же вместо меня, лежащего холостого пса, будет бегать по сорным ящикам в поисках питания? Прохватит лёгкое, поползу я на животе, ослабею, и любой спец пришибёт меня палкой насмерть. И дворники с бляхами ухватят меня за ноги и выкинут на телегу… `

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

export default function Player({item, params}:
    {
        item: string,
        params: {productId: string}
    })
{   
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