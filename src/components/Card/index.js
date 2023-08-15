import style from "./Card.module.css";

function Card({ id }) {
  return (
    <section className={style.card}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5FLBpzV2L4WxKzzjvwkjijHHiQw`} />
      </a>
    </section>
  );
}

export default Card;

