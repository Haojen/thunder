<style scoped lang="scss">
    .bubble-sort-widget {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        //height: 100px;
        //border: 1px solid red;

        .pillar-box {
            display: flex;
            justify-content: center;
            align-items: flex-end;

            height: 200px;
            margin-bottom: 15px;

            > div {
                width: 32px;
                height:  100%;
                border: 1px solid green;
                border-radius: 4px;
                margin: 0 8px;
            }
        }
    }

    .progress-bar-widget {
        width: 50%;
        input {
            width: 100%;
        }
    }
</style>

<template>
    <main class="bubble-sort-widget">
        <section class="pillar-box">
            <div v-for="item in data" :style="`height: ${ item * 10 + 10}%`"></div>
        </section>
        <main class="progress-bar-widget">
            <input type="range" min="0" max="100" value="70"/>
        </main>
    </main>
</template>

<script>
import anime from 'animejs'
export default {
    name: "bubble-sort",
    data() {
        return {
            data: [
                1,
                3,
                5,
                7,
                9,
                12,
                0,
                4,
                2
            ]
        }
    },
    mounted() {
        // anime({
        //     targets: this.$el,
        //     opacity: [1, 0],
        //     delay: 2000
        // })
    }
}
</script>
