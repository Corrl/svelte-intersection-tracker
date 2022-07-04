<script>
    import IntersectionTracker from "../lib/components/IntersectionTracker.svelte";
    import IntersectionTrackerLink from "../lib/components/IntersectionTrackerLink.svelte";
    import IntersectionTrackerItem from "../lib/components/IntersectionTrackerItem.svelte";
    import {data} from "../lib/data/data.js";
</script>

<IntersectionTracker>

    <ul>
        {#each data as d}
            <IntersectionTrackerLink
                    id={d.id}
                    let:percentage
                    let:current
            >
                <li
                        style:color="hsl({percentage*70+155}, 50%, 50%)"
                >
                    <div class="link-marker"
                         class:current-link={current}
                    >
                        ★
                    </div>
                    <a href="#{d.id}">{d.title}</a>
                </li>
            </IntersectionTrackerLink>
        {/each}
    </ul>

    <div id="items">
        {#each data as d}
            <IntersectionTrackerItem
                    id={d.id}
                    let:percentage
            >
                <div class="item">
                    <h1
                            style:color="hsl({percentage*90+166}, 50%, 50%)"
                    >
                        {d.title}
                    </h1>
                    <p>
                        {d.content}
                    </p>
                </div>
            </IntersectionTrackerItem>
        {/each}
    </div>

</IntersectionTracker>


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
        display: flex;
        min-height: 2.8rem;
        font-weight: 800;
        font-size: 1.4rem;
        transition: all 400ms;
    }

    .link-marker {
        width: 1.6rem;
        font-size: 0;
        transition: font-size 400ms;
    }

    .current-link {
        font-size: 1em;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        font-size: 2.6rem;
        font-weight: 800;
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
        margin: 3vh 0;
        border-radius: .5rem;
        background: white;
    }

</style>