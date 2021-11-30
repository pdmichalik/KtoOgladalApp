<template>
  <div>
    <Footer />
  </div>
</template>
<script>
import { CardSection } from '@/assets/database/data.js';
export default {
  layout: 'landingHeader',
  head: {
    title: 'Home'
  },
  data() {
    return {
      CardList: CardSection,
      food: [
        {
          img: require('~/assets/images/food/15.jpg'),
          name: 'Order Food Online',
          
        },
        {
          img: require('~/assets/images/food/16.jpg'),
          name: 'Go Out For Meal',
          
        },
        {
          img: require('~/assets/images/food/17.jpg'),
          name: 'Nightlife & Clubs',
          
        },
        {
          img: require('~/assets/images/food/18.jpg'),
          name: 'Pro Membership',
          
        },
        {
          img: require('~/assets/images/food/5.png'),
          name: 'Most Searched of 2020'
        },
        {
          img: require('~/assets/images/food/6.png'),
          name: 'Best Openings of 2020'
        },
        {
          img: require('~/assets/images/food/7.png'),
          name: 'Trending This Week'
        },
        {
          img: require('~/assets/images/food/8.png'),
          name: 'Best Of New York'
        },
        {
          img: require('~/assets/images/food/9.png'),
          name: 'Italian'
        },
        {
          img: require('~/assets/images/food/10.png'),
          name: 'Chinesse'
        },
        {
          img: require('~/assets/images/food/11.png'),
          name: 'Japanesse'
        },
        {
          img: require('~/assets/images/food/12.png'),
          name: 'Indian'
        },
        {
          img: require('~/assets/images/food/13.png'),
          name: 'Thai Food'
        },
        {
          img: require('~/assets/images/food/14.png'),
          name: 'Mexican'
        },
        
      ]
    }
  }
}
</script>
<style lang="scss">
 .bg-transparent {
   background-color: transparent !important;
 }
 .o-hidden {
   overflow: hidden !important;
 }
</style>