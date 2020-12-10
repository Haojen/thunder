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
            flex-direction: column;
            justify-content: center;

            margin-bottom: 15px;
            //border: 1px solid red;

            ul {
                display: flex;
                align-items: flex-end;
                justify-content: center;

                height: 200px;
                padding: 0;

                list-style: none;
                margin-bottom: 15px;

                li {
                    width: 32px;
                    height: 100%;
                    border-radius: 6px;

                    margin: 0 8px;
                    background: -webkit-linear-gradient(bottom, #5559AD, #618CB4);
                }
            }

            .tag {
                $boxShadow: 0 0 0 1.5px;
                padding: 2px 4px;

                border-radius: 2px;
                box-shadow: $boxShadow orange;

                font-size: 12px;
                font-family: monospace;

                margin: 0 2px;

                &.red {
                }
            }
        }
    }

    .progressbar-control-widget {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        max-width: 500px;
        padding: 0 15px;

        border-radius: 25px;
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.04);

        > section {
            display: flex;
            align-items: center;
            justify-content: center;

            padding-top: 2px;
            margin-right: 15px;

            button {
                border: none;
                outline: none;
                cursor: pointer;
                background: none;

                svg {
                    fill: #515151;
                }
            }
        }

        input {
            flex: 2;
            height: 6px;

            outline: none;
            appearance: none;
            border-radius: 5px;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

            &::-webkit-slider-thumb {
                -webkit-appearance: none;

                $size: 16px;
                width: $size;
                height: $size;

                cursor: pointer;
                border-radius: 50%;
                border: 3px solid #fff;
                background: dodgerblue;
                box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>

<template>
    <main class="bubble-sort-widget">
        <section class="pillar-box">
            <ul>
                <li v-for="item in data" :style="`height: ${ item }%; ${ linearGradientColor }`"></li>
            </ul>
            <aside style="display: none">
                <span class="tag" title="nihao2">T=O(n2)</span>
                <span class="tag" title="nihao2">S=O(nlogn)</span>
                <span class="tag" title="nihao2">unstable</span>
            </aside>
        </section>
        <main class="progressbar-control-widget">
            <section>
<!--                <button><svg t="1607585880148" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3141" width="20" height="20"><path d="M913.31200001 384.08853333L732.144 384.08853334c-23.11242666 0-41.80714667-18.72650667-41.80714667-41.80917334 0-23.08074667 18.69578667-41.80714667 41.80714667-41.80714666l72.72736-1e-8c-65.60416-92.70026667-173.48373333-153.296-295.70453333-153.296-200.11413333 0-362.33813333 162.22506667-362.33813334 362.336 0 200.11306667 162.22506667 362.33706667 362.33813334 362.33706667 200.11306667 0 362.33706667-162.22506667 362.33706666-362.33706667 0-23.08074667 18.69482667-41.80714667 41.80618666-41.80714666 23.08266666 0 41.81024 18.72650667 41.81024001 41.80714666 0 246.29226667-199.68 445.95413333-445.95413333 445.95413334-246.27733332 0-445.95519999-199.6608-445.9552-445.95413334 0-246.2912 199.67786667-445.95306667 445.9552-445.95306667 149.4688 0 281.488 73.69237333 362.33706666 186.59733334l0-75.10858667c0-23.08266666 18.69482667-41.80821333 41.80618667-41.80821333 23.08266666 0 41.81024 18.72554667 41.81024 41.80821333l0 167.232C955.12213333 365.36213333 936.39253333 384.08853333 913.31200001 384.08853333Z" fill="#707070" p-id="3142"></path></svg></button>-->
                <button><svg t="1607578541415" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5432" width="26" height="26"><path d="M533.88288 549.45792L970.76224001 805.6064C1002.63424 806.4256 1024 794.39872 1024 762.87488l0-501.79072c-0.58368001-37.00736-21.01248-41.09824-53.23776-42.73152L534.00064 474.624C515.08736 485.82656 495.94368 524.0064 533.88288 549.45792L533.88288 549.45792zM21.82144 549.45792L458.7008 805.6064c31.98976 0.8192 53.23776-11.20768 53.23776-42.72640001l-1e-8-501.79071999c-0.58368001-37.00736-21.01248-41.09824-53.23775999-42.73152l-436.7616 256.26624C3.02591999 485.82656-16.12288 524.0064 21.82144 549.45792L21.82144 549.45792zM21.82144 549.45792" p-id="5433"></path></svg></button>
                <button><svg t="1607578440552" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3832" width="16" height="16"><path d="M981.284723 501.15807v22.846672a61.436429 61.436429 0 0 1-31.550166 52.98892l-763.667612 424.935301c-46.077322 26.174479-70.011931 26.174479-90.49074 14.719144l-21.310762-11.391338a61.564422 61.564422 0 0 1-31.550166-51.389013V71.359052a61.436429 61.436429 0 0 1 31.550166-53.116912l21.310762-11.391338c20.47881-11.391338 44.413418-11.391338 104.121948 22.01472l750.036404 419.303628a61.436429 61.436429 0 0 1 31.550166 52.98892z" p-id="3833"></path></svg></button>
                <button><svg style="transform: rotate(180deg); transform-origin: center" t="1607578541415" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5432" width="26" height="26"><path d="M533.88288 549.45792L970.76224001 805.6064C1002.63424 806.4256 1024 794.39872 1024 762.87488l0-501.79072c-0.58368001-37.00736-21.01248-41.09824-53.23776-42.73152L534.00064 474.624C515.08736 485.82656 495.94368 524.0064 533.88288 549.45792L533.88288 549.45792zM21.82144 549.45792L458.7008 805.6064c31.98976 0.8192 53.23776-11.20768 53.23776-42.72640001l-1e-8-501.79071999c-0.58368001-37.00736-21.01248-41.09824-53.23775999-42.73152l-436.7616 256.26624C3.02591999 485.82656-16.12288 524.0064 21.82144 549.45792L21.82144 549.45792zM21.82144 549.45792" p-id="5433"></path></svg></button>
            </section>
            <input type="range" min="0" max="100" value="100"/>
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
