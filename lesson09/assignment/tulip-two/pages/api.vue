<template>
    
    <div>
        <h3> {{ item.name }} </h3>
        <a href="item.url"> {{ item.title }} </a>
        <img :src="item.urlToImage">
        <p> {{ item.description }} </p>
    </div>
    
</template>

<script>
export default {
	props: {
		item: Object
	}
}
</script>

<style scoped>



</style>