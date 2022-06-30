<script>
    import VisibilityTracker from "../lib/components/VisibilityTracker.svelte";
    import VisibilityTrackerTitle from "../lib/components/VisibilityTrackerTitle.svelte";
    import VisibilityTrackerItem from "../lib/components/VisibilityTrackerItem.svelte";

    const sections = [
        {id: 'Section 1'},
        {id: 'Section 2', subSections: [{id: 'Section 2a'}, {id: 'Section 2b'}, {id: 'Section 2c'}]},
        {id: 'Section 3'},
    ]

</script>

<div id="sections-wrapper">

<VisibilityTracker items={sections}>

    <ul>
        <VisibilityTrackerTitle let:item let:current let:percentage>
            <li class:current-title={current}>
                <a href="#{item.id}">
                    {item.id}
                </a>
            </li>
        </VisibilityTrackerTitle>
    </ul>

    <div id="sections">
        <VisibilityTrackerItem let:item let:current let:percentage>
            <section
                    class:active={current}
            >
                {item.id}
            </section>
        </VisibilityTrackerItem>
    </div>

</VisibilityTracker>

</div>

<style>
    #sections-wrapper {
        display: flex;
        background-color: #ddd;
    }

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

    #sections {
        margin-left: calc(var(--main-nav-width) + var(--sub-nav-width));
        width: 700px;
    }

    section {
        background-color: rgba(255, 255, 255, 0.42);
        margin: 2rem;
        padding: 5vw;
        border-radius: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 50vh;
        transition: .5s ease-in-out;
    }

    .active {
        color: orangered;
        background: rgba(255, 200, 0, .25);
    }
</style>