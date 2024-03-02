import Card from "../src/components/Card.jsx"
import style from "./components/Card.module.css"

function App() {
  return (
    <div className={style.globalView}>
    <Card 
    colorHeader={style.blueHeader}
    colorBody={style.blueBody}
    price="300"
    extra="10"/>
    <Card 
    colorHeader={style.greenHeader}
    colorBody={style.greenBody}
    price="450"
    extra="50"/>  
    <Card 
    special={style.special}
    colorHeader={style.redHeader}
    colorBody={style.redBody}
    price="550"
    extra="100"/>  
    <Card 
    colorHeader={style.greyHeader}
    colorBody={style.greyBody}
    price="1000"
    extra="200"/>
  </div>
  );
}

export default App;
