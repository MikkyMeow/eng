import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom";
import { fetchTheme } from "../../../api/grammar";
import { ITheme } from "../../../api/grammar/types";
import { Test } from "../../widgets/Test/Test";

export const GrammarTheme = () => {
    const { id } = useParams();
    const [theme, setTheme] = useState<ITheme | null>(null);

    useEffect(() => {
        const getTheme = async () => {
            const theme = await fetchTheme(Number(id));

            setTheme(theme);
        }

        getTheme();
    }, []);

    return (
        <>
            {theme && (
                <>
                    <ReactMarkdown>{theme.description}</ReactMarkdown>
                    <Test testType={theme.testType} test={theme.test} />
                </>
            )}
        </>
    )
}