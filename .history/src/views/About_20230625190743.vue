<template>
    <div>
        <h1>About</h1>
        <universal-card/>
    </div>
</template>
<script>
import UniversalCard from '../components/UniversalCard.vue';
export default {
    name: 'about',
    components:{
        UniversalCard
       
    },
    data() {
        return {
            momentsInfo: [
                {id: 1, price: 'Backer of the year 2022', img: '', text: lorem20
            }
            ]
        }
    }
}
</script>