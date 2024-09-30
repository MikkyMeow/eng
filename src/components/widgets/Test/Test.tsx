import { FC, useState } from "react";
import { ITest, TTestType } from "../../../api/grammar/types"

interface IProps {
    testType: TTestType;
    test: ITest[];
}

export const Test: FC<IProps> = ({ testType, test }) => {
    const [userAnswers, setUserAnswers] = useState<string[]>(Array(test.length).fill(''));
    const [result, setResult] = useState<{ correctCount: number; incorrectAnswers: number[] | null } | null>(null);

    const handleChange = (index: number, value: string) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = value;
        setUserAnswers(updatedAnswers);
    };

    const checkAnswers = () => {
        let correctCount = 0;
        const incorrectAnswers: number[] = [];

        test.forEach((t, index) => {
            if (userAnswers[index] === t.right) {
                correctCount++;
            } else {
                incorrectAnswers.push(index);
            }
        });

        setResult({ correctCount, incorrectAnswers });
    };

    return (
        <div>
            {test.map((t, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h4>{t.question}</h4>
                    {t.variants.map((variant, i) => (
                        <div key={i}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={variant}
                                    checked={userAnswers[index] === variant}
                                    onChange={() => handleChange(index, variant)}
                                />
                                {variant}
                            </label>
                        </div>
                    ))}
                    {result && result.incorrectAnswers !== null && result.incorrectAnswers.includes(index) && (
                        <div style={{ border: '2px solid red' }}>{/* Красная рамка для неправильных ответов */}</div>
                    )}
                </div>
            ))}
            <button onClick={checkAnswers}>Проверить</button>
            {result && (
                <div>
                    <h2>Результат:</h2>
                    <p>Правильных ответов: {result.correctCount}</p>
                </div>
            )}
        </div>
    );
}