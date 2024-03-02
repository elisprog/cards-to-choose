import style from "./Card.module.css"

function Card (props) {
const {price, extra, colorHeader, colorBody, special} = props;
return (
<div className={special}>
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