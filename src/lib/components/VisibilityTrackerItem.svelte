<script>
    import {onMount} from 'svelte'
    import {getContext} from 'svelte'
    import {key} from '../key.js'

    const {items, percentages, maxPercentageIndices} = getContext(key)

    let itemWrapperRefs = []

    onMount(() => {
        const fineness = 100

        const options = {
            threshold: Array.from({length: fineness}, (_, i) => i / fineness).concat(0.99) // last item would sometimes not trigger with 1
        }

        const observer = new IntersectionObserver(handleIntersectionChange, options)

        itemWrapperRefs.forEach(section => observer.observe(section))

        function handleIntersectionChange(entries) {

            entries.forEach(entry => {
                const index = entry.target.dataset.index
                const percentageOfElement = entry.intersectionRatio
                const percentageOfRoot = entry.intersectionRect.height / entry.rootBounds.height
                $percentages[index] = Math.max(round(percentageOfElement), round(percentageOfRoot))
            })
        }

        return () => observer.disconnect()
    })

    function round(num) {
        return Math.ceil(num * 100) / 100
    }

</script>

{#each items as item, index}
    <div class="svt-item-wrapper"
         data-index={index}
         bind:this={itemWrapperRefs[index]}
    >
        <slot {item} {index}
              current={$maxPercentageIndices.includes(index)}
              percentage={$percentages[index] ?? 0}
        />
    </div>
{/each}
