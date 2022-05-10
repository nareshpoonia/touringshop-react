import { WishlistProducts } from "../components/wishlist";
import { useCartContext } from "../context/cart-context";

function Wishlist() {
  const { cartState, cartDispatch } = useCartContext();
  return (
    <div>
      <main className="products-display grow">
        <div className="pt-32 flex-center">
          <h1>My Wishlist</h1>
        </div>
        {cartState.wishlistArray.map((wishlist) => {
          return <WishlistProducts key={wishlist._id} wishlist={wishlist} />;
        })}
      </main>
    </div>
  );
}

export default Wishlist;
