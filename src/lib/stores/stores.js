import {writable, derived} from 'svelte/store'

export const percentages = writable([])

export const maxPercentageIndices = derived(percentages, $percentages => {
    const maxPercentage = Math.max(...$percentages)
    return $percentages.reduce((indices, p, i) => p === maxPercentage ? indices.concat(i) : indices, [])
})