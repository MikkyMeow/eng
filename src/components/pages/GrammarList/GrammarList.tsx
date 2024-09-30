import { useEffect, useState } from "react";
import { fetchThemes } from "../../../api/grammar";
import { Link } from "react-router-dom";
import { IThemeList } from "../../../api/grammar/types";

export const GrammarList = () => {
    const [themes, setThemes] = useState<IThemeList[]>([]);

    useEffect(() => {
        const getThemes = async () => {
            const themes = await fetchThemes();
            setThemes(themes);
        }

        getThemes();
    }, []);

    return (
        <>
            <h2>Grammar List</h2>
            <ul>
                {themes.map(({ id, name }) => (
                    <li><Link to={`/grammar/${id}`} >{name}</Link></li>
                ))}
            </ul>
        </>
    )
}