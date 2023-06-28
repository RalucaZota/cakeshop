<template>
    <div>
        <div> 
            <slot name="img"> 

                <img  alt="img" />
            </slot>
        </div>
        <div class="card-details">
            <slot name="price"> 

                <h2></h2>
            </slot>
            <slot name="text"> 

                <p></p>
            </slot>
         </div>
    </div>
</template>
<script>
export default{
    name: 'universal card',
    
}
</script>