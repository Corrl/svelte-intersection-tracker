<!--suppress JSUnusedAssignment -->
<script>
    import {getContext} from 'svelte'
    import {key} from './key.js'

    const {observer, intersecting, percentages, maxPercentageIds} = getContext(key)

    export let group = 0
    export let id

    let item

    $: if ($observer) $observer.observe(item)

    $: isIntersecting = $intersecting[group]?.[id] ?? false
    $: percentage = $percentages[group]?.[id] ?? 0
    $: current = $maxPercentageIds[group]?.includes(id) ?? false
</script>

<div {id}
     data-group={group}
     bind:this={item}
     class="svelte-intersection-tracker-item"
>
    <slot {isIntersecting} {percentage} {current}
    />
</div>