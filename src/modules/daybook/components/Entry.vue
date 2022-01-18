<template>
    <div
        class="entry-container mb-3 pointer p-2"
    >
        <!-- titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis lectus, porttitor quis ultricies eu, ornare ac odio. Donec non scelerisque nisi, sed fermentum purus. Nullam in ullamcorper augue, ac feugiat arcu. Sed suscipit posuere sem, et lacinia turpis fermentum quis. Sed at porttitor lacus. Integer egestas dictum porttitor. Aenean porta auctor erat, nec iaculis turpis. Nam ullamcorper consequat molestie.
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    
    .entry-description {
        font-size: 12px;
    }
}

</style>