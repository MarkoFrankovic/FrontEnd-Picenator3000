<template>
  <button
    class="simple_button font-weight-bold display-1"
    @click="redirect(cards[0].route, true)"
  ></button>
</template>

<style>
.simple_button {
  background-color: white;
  background-image: url(C:\Users\Marko\Documents\GitHub\FrontEnd-Picenator3000\frontend\src\assets\merlot.jpg);
  height: 200px;
  width: 200px;
  border: none;
  border-radius: 50%;
  padding: 0px;
  text-align: center;
  display: inline-block;
  outline: none;
  border: 0;
}
</style>
