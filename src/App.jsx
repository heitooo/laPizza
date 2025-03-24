import logoImg from "./assets/logo.svg";
import { Card } from "./components/card";
import data from "../data.json";
import locationImg from "./assets/local.png";

export function App() {
  return (
    <>
      <main className="s-main">
        <img src={logoImg} alt="La Pizza pedaço da Itália." />
      </main>

      <section className="best-sellers">
        <h1 className="s-title">Mais vendidas</h1>

        <div className="products">
          {data.pizzas.map(({ id, img, title, description, price }) => (
            <Card
              key={id}
              img={img}
              title={title}
              description={description}
              price={price}
            />
          ))}
        </div>
      </section>
      <section className="about">
        <img src={locationImg} alt="" />
        <p>
          Sobre a La P<span>i</span>z<span>z</span>a<span />
        </p>
        <p className="description"></p>
        <button>ler mais sobre</button>
      </section>
    </>
  );
}
