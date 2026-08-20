import products from "../data/products.json"
import ProductCard from "../components/product-card";

export default function Store() {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {
        products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            url={product.url}
            price={Number(product.price)}
          />))
      }
    </div>
  )
}
