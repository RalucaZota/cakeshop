<template>
 <div>
    <div class="d-flex justify-space-around align-center py-4">
      <v-btn
        variant="text"
        icon="mdi-minus"
        @click="model = Math.max(model - 1, 0)"
      ></v-btn>
      {{ model }}
      <v-btn
        variant="text"
        icon="mdi-plus"
        @click="model = Math.min(model + 1, 4)"
      ></v-btn>
    </div>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
        :value="i"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>



export default defineComponent({
  name: 'Carousel',
  components: {

  },
})
</script>

<style>
.carousel{
  margin-top: 150px;
}
.carousel__item {
  background: red;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>