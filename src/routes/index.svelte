<script>
    import VisibilityTrackerTitle from "../lib/components/VisibilityTrackerTitle.svelte";
    import VisibilityTrackerItem from "../lib/components/VisibilityTrackerItem.svelte";
    import {data} from "../lib/data/data.js";
</script>

<ul>
    <VisibilityTrackerTitle {data} let:d let:current let:percentage>
        <li class:current-title={current}>
            <a href="#{d.id}">
                <span>{d.title}</span> - {percentage}
            </a>
        </li>
    </VisibilityTrackerTitle>
</ul>

<div id="items">
    <VisibilityTrackerItem {data} let:d let:current let:percentage>
        <div class="item"
             class:current-item={current}
        >
            <h1 id={d.id}>
                {d.title} - <span style="font-weight: normal">{percentage}</span>
            </h1>
            <p class="section-content">
                {d.content}
            </p>
        </div>
    </VisibilityTrackerItem>
</div>

<style>

    ul {
        list-style: none;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        width: var(--sub-nav-width);
        padding: 2rem;
        margin-left: var(--main-nav-width);
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
        transition: background 600ms;
    }
    .current-item {
        background: #f0f5f0;
    }
</style>
