import { useState } from "react";
import style from "./Card.module.css"

function Card (props) {
const {price, extra, colorHeader, colorBody, special} = props;
const [checked, setChoose] = useState(true);
const handleChoose = () => {
    setChoose(!checked);
}
return (
<div className={special}>
<input type="checkbox" className={style.check} onClick={handleChoose}></input>
<label style={!checked ? {color: "darkgreen"} : {display: "none"}}>вы выбрали этот тариф</label>
<header className={colorHeader}>Безлимитный {price}</header>
<section className={colorBody}>
    <article>руб</article>
    <article>{price} /мес</article>
</section>
<section className={style.extra}>до {extra} Мбит/сек</section>
<footer className={style.footer}>Объём включенного трафика не ограничен</footer>
</div>
)
}

export default Card;