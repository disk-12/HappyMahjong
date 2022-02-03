import React from "react"
import { Link } from "react-router-dom"

import "./Result.scss"

interface Props {}

export const Result:React.FC<Props> = ({}) =>{
    return <>
        <h1>点数画面</h1>
        <p>ここは点数画面です．</p>

        <Link to="/">撮影画面へ遷移</Link>
    </>
}