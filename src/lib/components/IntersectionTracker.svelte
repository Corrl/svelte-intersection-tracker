<!--suppress JSUnusedLocalSymbols -->
<script>
    import {onMount, setContext} from 'svelte'
    import {key} from '../key.js'

    import {derived, writable} from "svelte/store";

    export const observer = writable(null)

    export const intersecting = writable({})
    export const percentages = writable({})

    export const maxPercentageIds = derived(percentages, $percentages => {
        const maxIds = Object.entries($percentages).map(([group, dict]) => {
            const percentages = Object.values(dict)
            if (percentages.length > 0 && percentages.some(p => p !== 0)) {
                const maxPercentage = Math.max(...percentages)
                const maxIds = Object.entries(dict).reduce((maxIds, entry) => {
                    const [id, percentage] = entry
                    if (percentage === maxPercentage) maxIds.push(id)
                    return maxIds
                }, [])
                return [group, maxIds]
            } else {
                return [group, []]
            }
        })
        return Object.fromEntries(maxIds)
    })

    setContext(key, {
        observer,
        intersecting,
        percentages,
        maxPercentageIds
    })

    export let options = {}

    onMount(() => {
        const iOSupport = 'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype

        if (!iOSupport) return

        const fineness = options.fineness ?? 100

        const fullOptions = {
            root: setRoot(options.root),
            rootMargin: options.rootMargin ?? '0px',
            threshold: options.threshold ?? Array.from({length: fineness}, (_, i) => i / fineness).concat(1) // last item sometimes doesn't trigger with 1? >> better .99?
        }

        console.log(fullOptions)
        function setRoot(root) {
            return root instanceof Element && root
                || typeof root === 'string' && document.getElementById(root)
                || null
        }

        $observer = new IntersectionObserver(handleIntersectionChange, fullOptions)

        const groups = new Set([...document.querySelectorAll('[data-group]')].map(elem => elem.dataset.group))
        for (let group of groups) {
            $intersecting[group] = {}
            $percentages[group] = {}
        }

        return () => $observer.disconnect()
    })

    function handleIntersectionChange(entries) {
        entries.forEach(entry => {
            const elem = entry.target
            const id = elem.id
            const group = elem.dataset.group
            $intersecting[group][id] = entry.isIntersecting
            const percentageOfElement = entry.intersectionRatio
            const percentageOfRoot = entry.intersectionRect.height / entry.rootBounds.height
            $percentages[group][id] = Math.max(round(percentageOfElement), round(percentageOfRoot))
        })
    }

    function round(num) {
        return Math.ceil(num * 100) / 100
    }

</script>

<slot/>

