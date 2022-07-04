<script>
    import VisibilityTracker from "../lib/components/VisibilityTracker.svelte";
    import VisibilityTrackerLink from "../lib/components/VisibilityTrackerLink.svelte";
    import VisibilityTrackerItem from "../lib/components/VisibilityTrackerItem.svelte";

    const sections = [
        {id: 'Section 1'},
        {id: 'Section 2', subSections: [{id: 'Section 2a'}, {id: 'Section 2b'}, {id: 'Section 2c'}]},
        {id: 'Section 3'},
    ]

</script>

<div id="sections-wrapper">

    <VisibilityTracker>

        <div id="links">
            <ul>
                {#each sections as section}
                    <VisibilityTrackerLink id={section.id} let:current>

                        <li class:current-link={current}>
                            <a href="#{section.id}">
                                {section.id}
                            </a>

                            {#if section.subSections}
                                <ul>
                                    {#each section.subSections as subsection}
                                        <VisibilityTrackerLink
                                                id={subsection.id}
                                                group="1"
                                                let:current={currentSubsection}
                                        >
                                            <li class:current-sublink={currentSubsection}>
                                                <a href="#{subsection.id}">
                                                    {subsection.id}
                                                </a>
                                            </li>
                                        </VisibilityTrackerLink>
                                    {/each}
                                </ul>
                            {/if}
                        </li>

                    </VisibilityTrackerLink>
                {/each}
            </ul>
        </div>

        <div id="sections">
            {#each sections as section}
                <VisibilityTrackerItem id={section.id}
                                                let:isIntersecting let:current let:percentage
                >
                    <section class:current-section={current}
                    >
                        <h1>{section.id}</h1>
                        {#if section.subSections}
                            {#each section.subSections as subsection}
                                <VisibilityTrackerItem id={subsection.id} group="1"
                                                                let:current={currentSubsection}
                                >
                                    <div class="subsection" class:current-subsection={currentSubsection}
                                    >
                                        <h2>{subsection.id}</h2>
                                    </div>
                                </VisibilityTrackerItem>
                            {/each}
                        {/if}
                    </section>
                </VisibilityTrackerItem>
            {/each}
        </div>

    </VisibilityTracker>

</div>

<style>
    #sections-wrapper {
        display: flex;
        background-color: #ddd;
    }

    #links {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 0 0 var(--main-nav-width);
        width: var(--sub-nav-width);
    }

    ul {
        list-style: none;
        margin: 2rem auto 0;
        padding: .3rem .2rem;
        max-width: min-content;
        white-space: nowrap;
        background: black;
        color: white;
        border-radius: .3rem;
        font-weight: bold;
    }

    li {
        padding: .5rem;
    }

    ul ul {
        position: relative;
        margin: revert;
    }

    .current-link,
    .current-link .current-sublink{
        color: orangered;
    }
    .current-link .current-sublink {
        box-shadow: -2px 0 0 orangered;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #sections {
        margin-left: calc(var(--main-nav-width) + var(--sub-nav-width));
        width: 700px;
    }

    section {
        position: relative;
        margin: 2rem 0;
        padding: 5rem 3rem;
        min-height: 70vh;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.42);
    }
    section, .subsection {
        border-radius: 2rem;
        transition: all 300ms ease-in-out;
    }

    .subsection {
        padding-top: 8rem;
        min-height: 40rem;
    }

    .current-section {
        color: orangered;
        background: rgba(255, 200, 0, .25);
    }
    .current-section .current-subsection {
        color: orangered;
        border: 2px solid orangered;
        text-decoration: underline;
        background: rgba(230, 195, 69, 0.3);
    }
</style>