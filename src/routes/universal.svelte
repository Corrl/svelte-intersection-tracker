<script>
    import UniversalVisibilityTracker from "../lib/components/UniversalVisibilityTracker.svelte";
    import UniversalVisibilityTrackerLink from "../lib/components/UniversalVisibilityTrackerLink.svelte";
    import UniversalVisibilityTrackerItem from "../lib/components/UniversalVisibilityTrackerItem.svelte";
    import {data} from "../lib/data/data.js";
</script>


<UniversalVisibilityTracker>

    <ul>
        {#each data as d}
            <UniversalVisibilityTrackerLink
                    id={d.id}
                    let:isIntersecting
                    let:percentage
                    let:current
            >
                <li
                        class:current-link={current}
                >
                    <a href="#{d.id}">{d.title}</a>
                </li>
            </UniversalVisibilityTrackerLink>
        {/each}
    </ul>


    <div id="items">
        {#each data as d}
            <UniversalVisibilityTrackerItem
                    id={d.id}
                    let:isIntersecting
                    let:percentage
                    let:current
            >
                <div class="item"
                     class:current-item={current}
                >
                    <h1>
                        {d.title} - <span style="font-weight: normal">{percentage}</span>
                    </h1>
                    <p>
                        {d.content}
                    </p>
                </div>
            </UniversalVisibilityTrackerItem>
        {/each}
    </div>

</UniversalVisibilityTracker>


<style>
    ul {
        list-style: none;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        margin-left: var(--main-nav-width);
        width: var(--sub-nav-width);
        padding: 2rem;
    }

    li {
        border-left: 5px solid #dddddd;
        padding: .5rem;
    }

    .current-link {
        border-left: 5px solid black;
    }

    a {
        color: inherit;
    }

    p {
        white-space: pre-wrap;
    }

    #items {
        margin-left: calc(var(--main-nav-width) + var(--sub-nav-width));
        width: 700px;
    }

    .item {
        padding: 2rem 4rem;
        transition: all 600ms;
        margin: 3vh 0;
        border-radius: .5rem;
    }

    .current-item {
        background: #f0f5f1;
    }
</style>