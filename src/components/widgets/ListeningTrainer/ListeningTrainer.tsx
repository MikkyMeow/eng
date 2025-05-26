import { Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

interface Sentence {
  eng: string;
  rus: string;
}

interface SentencePlayerProps {
  sentences: Sentence[];
}

export const ListeningTrainer: React.FC<SentencePlayerProps> = ({
  sentences,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const synthRef = useRef(window.speechSynthesis);

  const speak = (text: string, volume = 1): Promise<void> => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = /[а-яА-ЯЁё]/.test(text) ? "ru-RU" : "en-US";
      utterance.volume = volume;
      // @ts-ignore
      utterance.onend = resolve;
      synthRef.current.speak(utterance);
    });
  };

  const playSequence = async (index: number) => {
    const sentence = sentences[index];
    if (!sentence) return;

    setIsPlaying(true);

    await speak(sentence.eng); // Normal English
    await speak(sentence.eng, 0); // Silent English
    await speak(sentence.rus); // Russian

    if (currentIndex < sentences.length - 1) {
      const nextIndex = index + 1;
      setCurrentIndex(nextIndex);
      setTimeout(() => {
        playSequence(nextIndex); // Запуск следующего
      }, 500); // Небольшая задержка для естественного перехода
    } else {
      setIsPlaying(false); // Остановиться в конце
    }
  };

  const handlePlay = () => {
    if (!isPlaying) {
      playSequence(currentIndex);
    } else {
      handlePause();
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    synthRef.current.cancel();
  };

  const goPrev = () => {
    handlePause();
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  const goNext = () => {
    handlePause();
    setCurrentIndex((i) => Math.min(i + 1, sentences.length - 1));
  };

  useEffect(() => {
    // Stop speech if component unmounts
    return () => {
      synthRef.current.cancel();
    };
  }, []);

  const currentSentence = sentences[currentIndex];

  return (
    <div className="p-4 rounded-2xl shadow-lg max-w-md mx-auto space-y-4">
      <div className="text-xl font-semibold">Английский:</div>
      <div className="text-base">{currentSentence.eng}</div>
      <div className="text-xl font-semibold">Русский:</div>
      <div className="text-base">{currentSentence.rus}</div>

      <div className="flex items-center justify-between space-x-2">
        <Button onClick={goPrev}>⬅️ Назад</Button>
        <Button onClick={handlePlay}>
          {isPlaying ? "⏸️ Пауза" : "▶️ Плей"}
        </Button>
        <Button onClick={goNext}>Вперёд ➡️</Button>
      </div>
    </div>
  );
};
