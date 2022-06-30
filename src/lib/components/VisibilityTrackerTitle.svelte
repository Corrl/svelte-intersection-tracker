<script>
    import {getContext} from 'svelte'
    import {key} from '../key.js'

    const {items, percentages, maxPercentageIndices} = getContext(key)

</script>

{#each items as item, index}

    <slot {item} {index}
          current={$maxPercentageIndices.includes(index)}
          percentage={$percentages[index] ?? 0}
    />
{/each}

