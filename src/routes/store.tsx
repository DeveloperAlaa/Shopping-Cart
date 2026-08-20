import ProductCard from "../components/product-card";

export default function Store() {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      <ProductCard />
      <ProductCard />
      <ProductCard /> 
    </div>
  )
}
