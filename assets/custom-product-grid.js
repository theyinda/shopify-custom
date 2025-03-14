document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".product-grid")
    .addEventListener("click", function (event) {
      const shareButton = event.target.closest(".share-btn");
      if (shareButton) {
        const url = shareButton.getAttribute("data-url");
        navigator.clipboard
          .writeText(url)
          .then(() => {
            alert("Product link copied to clipboard!");
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", async function () {
      const variantId = this.getAttribute("data-variant-id");

      if (!variantId) {
        console.log("hmmm");
        console.error("Variant ID is missing.");
        return;
      }

      try {
        console.log("i got here");
        const response = await fetch("/cart/add.js", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: variantId, quantity: 1 }),
        });

        if (!response.ok) {
          console.log("hater");
          throw new Error("Failed to add item to cart.");
        }

        const cart = await response.json();
        console.log("Cart updated:", cart);
        updateCartCount();
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    });
  });

  async function updateCartCount() {
    try {
      const response = await fetch("/cart.js");
      if (!response.ok) {
        throw new Error("Failed to fetch cart data.");
      }

      const cart = await response.json();
      const cartCountElement = document.querySelector(".cart-count");

      if (cartCountElement) {
        cartCountElement.textContent = cart.item_count;
      }
    } catch (error) {
      console.error("Error updating cart count:", error);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const wishlistBtns = document.querySelectorAll(".wishlist-btn");
  const wishlistCount = document.querySelector(".wishlist-count"); // Icon on header

  function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  }

  function updateWishlistCount() {
    // const wishlist = getWishlist();
    // wishlistCount.textContent = wishlist.length;

    const wishlistCount = document.querySelector(".wishlist-count");
    if (!wishlistCount) return; // Ensure the element exists before updating

    const wishlist = getWishlist();
    wishlistCount.textContent = wishlist.length > 0 ? wishlist.length : "0";
    document.addEventListener("DOMContentLoaded", function () {
      updateWishlistCount();
    });
    document.addEventListener("shopify:section:load", function () {
      updateWishlistCount(); // Ensure wishlist updates when navigating
    });

    // console.log(JSON.parse(localStorage.getItem("wishlist")), 'Gog abeg');
  }

  function toggleWishlist(productId) {
    let wishlist = getWishlist();

    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter((id) => id !== productId);
    } else {
      wishlist.push(productId);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
  }

  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = this.getAttribute("data-product-id");

      console.log(productId, "likedd by kemi");
      toggleWishlist(productId);
    });
  });

  updateWishlistCount(); // Ensure count persists on page load
});
