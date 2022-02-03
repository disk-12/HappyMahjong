import React from "react"
import "./Top.scss"
import { Link } from 'react-router-dom';
interface Props {}

export const Top:React.FC<Props> = ({}) =>{
    return <>
        <h1>撮影画面</h1>
        <p>ここは撮影画面です．</p>
        <Link to="/check">確認画面へ遷移</Link>
    </>
}