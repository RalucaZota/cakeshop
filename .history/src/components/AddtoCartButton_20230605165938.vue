<template>
    <div>
        <a href="#" class="cart-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Add to cart
    </a>
    </div>
</template>
<script>
export default {
    name: 'AddtoCartButton'
}
</script>
<style >
.cart-button {
    border: 2px solid red;
    border-radius: 8px;
    width: 70px;
    position: relative;
    display: inline-block;
    /* padding: 15px 30px; */
    color: #2196f3;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 16px;
    overflow: hidden;
    transition: 0.2s;
}



.cart-button:hover {
    color: #255784;
    background:pink;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    transition-delay: 1s;
}


.cart-button span {
    position: absolute;
    display: block;
}




.cart-button span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #2196f3);
}



.cart-button:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
}


.cart-button span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #2196f3);
}

.cart-button:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
}



.cart-button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #2196f3);
}

.cart-button:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
}



.cart-button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #2196f3);
}

.cart-button:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
}
</style>