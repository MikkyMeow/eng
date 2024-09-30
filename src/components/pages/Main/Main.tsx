import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <>
            <h2>Main page</h2>
            <ul>
                <li><Link to='/grammar'>Grammar</Link></li>
                <li><Link to='/units'>Units</Link></li>
            </ul>
        </>
    )
}