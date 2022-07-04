<script>
    import VisibilityTracker from "../lib/components/VisibilityTracker.svelte";
    import VisibilityTrackerLink from "../lib/components/VisibilityTrackerLink.svelte";
    import VisibilityTrackerItem from "../lib/components/VisibilityTrackerItem.svelte";
    import {data} from "../lib/data/data.js";
</script>


<VisibilityTracker>

    <ul>
        {#each data as d}
            <VisibilityTrackerLink
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
            </VisibilityTrackerLink>
        {/each}
    </ul>

    <div id="items">
        {#each data as d}
            <VisibilityTrackerItem
                    id={d.id}
                    let:isIntersecting
                    let:percentage
                    let:current
            >
                <div class="item"
                     class:current-item={current}
                >
                    <h1>
                        {d.title}
                    </h1>
                    <h2>isIntersecting: <span>{isIntersecting}</span></h2>
                    <h2>percentage: <span>{percentage}</span></h2>
                    <h2>current: <span>{current}</span></h2>
                    <p>
                        {d.content}
                    </p>
                </div>
            </VisibilityTrackerItem>
        {/each}
    </div>

</VisibilityTracker>


<style>
    ul {
        list-style: none;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 0 0 var(--main-nav-width);
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

    h2 {
        margin: 0 0 .5rem 0;
        font-size: 1.1rem;
    }
    h2 span {
        color: teal;
    }

</style>