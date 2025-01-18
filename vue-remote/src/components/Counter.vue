<template>
    <div>
        <p>Counter: {{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>

export default {
    name: 'Counter',
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    }
}
</script>

<style>
button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>