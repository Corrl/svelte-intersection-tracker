<script>
    import {onMount} from 'svelte'
    import {maxPercentageIndices, percentages} from "../stores/stores.js";

    export let data

    let items = []

    onMount(() => {

        const options = {
            threshold: Array.from({length: 101}, (_, i) => i / 100)
        }

        const observer = new IntersectionObserver(handleIntersectionChange, options)

        items.forEach(section => observer.observe(section))

        function handleIntersectionChange(entries) {

            entries.forEach(entry => {
                const index = entry.target.dataset.index
                const percentageOfElement = entry.intersectionRatio
                const percentageOfRoot = entry.intersectionRect.height / entry.rootBounds.height
                $percentages[index] = Math.max(percentageOfElement.toFixed(2), percentageOfRoot.toFixed(2))
            })
        }

        return () => observer.disconnect()
    })

</script>

{#each data as d, index}
    <div data-index={index}
         bind:this={items[index]}
    >
        <slot {d}
              current={$maxPercentageIndices.includes(index)}
              percentage={$percentages[index] ?? 0}
        />
    </div>
{/each}

<style>
    div {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid lightgrey;
    }
</style>