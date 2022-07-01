<!--suppress JSUnusedAssignment -->
<script>
    import {getContext} from 'svelte'
    import {key} from '../key.js'

    export let group = 0
    export let id

    const {intersecting, percentages, maxPercentageIds} = getContext(key)

    $: isIntersecting = $intersecting[group]?.[id] ?? false
    $: percentage = $percentages[group]?.[id] ?? 0
    $: current = $maxPercentageIds[group]?.includes(id) ?? false
</script>

    <slot {percentage} {current}/>