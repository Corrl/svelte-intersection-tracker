<script>
    import {maxPercentageIndices, percentages} from "../stores/stores.js";

    export let data
</script>

{#each data as d, index}

    <slot {d}
          current={$maxPercentageIndices.includes(index)}
          percentage={$percentages[index] ?? 0}
    />
{/each}

