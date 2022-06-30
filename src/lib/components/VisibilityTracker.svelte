<!--suppress JSUnusedAssignment, JSUnusedLocalSymbols -->
<script>
    import {setContext} from 'svelte'
    import {key} from '../key.js'

    import {writable, derived} from 'svelte/store'

    export let items

    const percentages = writable([])

    const maxPercentageIndices = derived(percentages, $percentages => {
        const maxPercentage = Math.max(...$percentages)
        return $percentages.reduce((indices, p, i) => p === maxPercentage ? indices.concat(i) : indices, [])
    })

    setContext(key, {
        items,
        percentages,
        maxPercentageIndices
    })
</script>


<slot />