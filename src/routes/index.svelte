<!--suppress HtmlUnknownAttribute -->
<script>
    import VisibilityTrackerTitle from "../lib/components/VisibilityTrackerTitle.svelte";
    import VisibilityTrackerItem from "../lib/components/VisibilityTrackerItem.svelte";
    import {data} from "../lib/data/data.js";
    import VisibilityTracker from "../lib/components/VisibilityTracker.svelte";
</script>

<VisibilityTracker items={data}>

    <ul>
        <VisibilityTrackerTitle let:item let:current let:percentage>
            <li class:current-title={current}
            style:font-weight="{percentage*400+400}">
                <a href="#{item.id}">
                    <span>{item.title}</span> - {percentage}
                </a>
            </li>
        </VisibilityTrackerTitle>
    </ul>

    <div id="items">
        <VisibilityTrackerItem let:item let:current let:percentage>
            <div id={item.id}
                 class="item"
                 class:current-item={current}
            >
                <h1>
                    {item.title} - <span style="font-weight: normal">{percentage}</span>
                </h1>
                <p>
                    {item.content}
                </p>
            </div>
        </VisibilityTrackerItem>
    </div>

</VisibilityTracker>


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

    .current-title {
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
