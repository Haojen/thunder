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

            //border: 1px solid red;

            height: 200px;
            margin-bottom: 15px;

            > div {
                width: 32px;
                height: 100%;
                border-radius: 4px;

                margin: 0 8px;
                background: -webkit-linear-gradient(bottom, #5559AD, #618CB4);
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
            <div v-for="item in data"
                 :style="`height: ${ item }%; ${ linearGradientColor }`">
            </div>
        </section>
        <main class="progress-bar-widget">
            <input type="range" min="0" max="100" value="70"/>
        </main>
    </main>
</template>

<script>
import anime from 'animejs'
import randomColor from '../shared/randomColor'
import randomRangeNumber from '../shared/randomRangeNumber'

function createLinearGradient() {
    const color = randomColor()
    return `background: -webkit-linear-gradient(bottom, ${ color.colors.join(',') });`
}

export default {
    name: "bubble-sort",
    data() {
        return {
            linearGradientColor: createLinearGradient(),
            data: randomRangeNumber(10, 5),
            infoText: ''
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
