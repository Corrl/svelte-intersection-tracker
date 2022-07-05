<script>
    import IntersectionTracker from "../lib/IntersectionTracker.svelte";
    import IntersectionTrackerLink from "../lib/IntersectionTrackerLink.svelte";
    import IntersectionTrackerItem from "../lib/IntersectionTrackerItem.svelte";
    import {data} from "../lib/data.js";
</script>

<div id="percentage-1-wrapper">

    <IntersectionTracker options={{rootMargin: '-100px 0px -100px 0px'}}>

        <ul>
            {#each data as d}
                <IntersectionTrackerLink
                        id={d.id}
                        let:percentage
                >
                    <li
                            style:font-weight="{400+400*percentage}"
                            style:font-size="{1+.4*percentage}rem"
                    >
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
                    <div class="item"
                         style:background="rgba(255,255,255,{percentage*.5+.3})"
                         style:box-shadow="{4*percentage}px {4*percentage}px {20*percentage+10}px {5*percentage}px rgba(113,127,132,{percentage*.4})"
                    >
                        <h1>
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

</div>

<style>
    #percentage-1-wrapper {
        display: flex;
        padding: 100px 0 100px 0;
        background: #d8e2e6;
    }

    ul {
        list-style: none;
        position: fixed;
        top: 40px;
        left: 0;
        margin: 0 0 0 var(--main-nav-width);
        width: var(--sub-nav-width);
        padding: 2rem;
    }

    li {
        min-height: 2.8rem;
        display: grid;
        place-content: center;
    }

    a {
        color: inherit;
        text-decoration: none;
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
    }

</style>