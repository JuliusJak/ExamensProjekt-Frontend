<template>
    <div class="top-bar">
        <nav>
            <RouterLink to="/" class="routerLink">Home</RouterLink>

        </nav>
    </div>


<RouterView />
</template>

<style scoped>
.top-bar{
    background-color: black;
}
.routerLink{
    color: white;
}

</style>