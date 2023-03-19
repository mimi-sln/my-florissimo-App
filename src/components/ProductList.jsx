import ProductContainer from './productCard'

const ProductList = ({products, count, setCount, addItem}) => {
  return (   
    <section className="monthlyHits">
    <h2>THIS MONTH'S HITS</h2>
    <div className="gridSelection">
      {products.map((product) => (
        <ProductContainer
          addItem={addItem}
          product={product}
          setCount={setCount}
          count={count}
          key={product.id}
        />
      ))}
    </div>
    </section>
  );
};

export default ProductList;

