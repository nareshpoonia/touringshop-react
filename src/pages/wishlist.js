import { WishlistProducts } from "../components/wishlist";
import { useCartContext } from "../context/cart-context";
import { useEffect } from "react";
import { getWishlist } from "../utilities";

function Wishlist() {
  useEffect(() => {
    if (!cartState.cart) {
      (async () => {
        try {
          const wishlistItems = await getWishlist(authToken);
          cartDispatch({
            type: "UPDATE_WISHLIST",
            payload: wishlistItems?.data.wishlist,
          });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  const { cartState, cartDispatch } = useCartContext();
  return (
    <div>
      <main className="products-display grow">
        <div className="pt-32 flex-center">
          <h1>My Wishlist</h1>
        </div>
        {cartState.wishlist.map((wishlist) => {
          return <WishlistProducts key={wishlist._id} wishlist={wishlist} />;
        })}
      </main>
    </div>
  );
}

export default Wishlist;
