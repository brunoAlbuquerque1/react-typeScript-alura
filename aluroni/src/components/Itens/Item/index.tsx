import cardapio from '../itens.json';

type Props = typeof cardapio[0];

export default function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div >
      <div >
        <img src={photo} alt={title} />
      </div>
      <div>
        <div >
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <div>
          {/* <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
          })}>{category.label}</div> */}
          <div >{size}g</div>
          <div>{serving} 2 pessoa{serving === 1 ? "" : "s"}</div>
          <div >R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}