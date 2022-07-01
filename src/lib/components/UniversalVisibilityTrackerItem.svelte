<!--suppress JSUnusedAssignment -->
<script>
    import {getContext} from 'svelte'
    import {key} from '../key.js'

    export let group = 0
    export let id

    const {elementsToObserve, intersecting, percentages, maxPercentageIds} = getContext(key)

    function register(node) {
        if(!elementsToObserve[group]) elementsToObserve[group] = []
        elementsToObserve[group].push(node)
    }

    $: isIntersecting = $intersecting[group]?.[id] ?? false
    $: percentage = $percentages[group]?.[id] ?? 0
    $: current = $maxPercentageIds[group]?.includes(id) ?? false
</script>

<div {id}
     data-group={group}
     use:register
>
    <slot {isIntersecting} {percentage} {current}
    />
</div>