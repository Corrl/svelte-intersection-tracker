<script>
    import UniversalVisibilityTracker from "../lib/components/UniversalVisibilityTracker.svelte";
    import UniversalVisibilityTrackerLink from "../lib/components/UniversalVisibilityTrackerLink.svelte";
    import UniversalVisibilityTrackerItem from "../lib/components/UniversalVisibilityTrackerItem.svelte";

    const sections = [
        {id: 'Section 1'},
        {id: 'Section 2', subSections: [{id: 'Section 2a'}, {id: 'Section 2b'}, {id: 'Section 2c'}]},
        {id: 'Section 3'},
    ]

</script>

<div id="sections-wrapper">

    <UniversalVisibilityTracker>

        <div id="links">
            <ul>
                {#each sections as section}
                    <UniversalVisibilityTrackerLink id={section.id} let:current>

                        <li class:current-link={current}>
                            <a href="#{section.id}">
                                {section.id}
                            </a>

                            {#if section.subSections}
                                <ul>
                                    {#each section.subSections as subsection}
                                        <UniversalVisibilityTrackerLink
                                                id={subsection.id}
                                                group="1"
                                                let:current={currentSubsection}
                                        >
                                            <li class:current-sublink={currentSubsection}>
                                                <a href="#{subsection.id}">
                                                    {subsection.id}
                                                </a>
                                            </li>
                                        </UniversalVisibilityTrackerLink>
                                    {/each}
                                </ul>
                            {/if}
                        </li>

                    </UniversalVisibilityTrackerLink>
                {/each}
            </ul>
        </div>

        <div id="sections">
            {#each sections as section}
                <UniversalVisibilityTrackerItem id={section.id}
                                                let:isIntersecting let:current let:percentage
                >
                    <section class:current-section={current}
                    >
                        <h1>{section.id}</h1>
                        {#if section.subSections}
                            {#each section.subSections as subsection}
                                <UniversalVisibilityTrackerItem id={subsection.id} group="1"
                                                                let:current={currentSubsection}
                                >
                                    <div class="subsection" class:current-subsection={currentSubsection}
                                    >
                                        <h2>{subsection.id}</h2>
                                    </div>
                                </UniversalVisibilityTrackerItem>
                            {/each}
                        {/if}
                    </section>
                </UniversalVisibilityTrackerItem>
            {/each}
        </div>

    </UniversalVisibilityTracker>

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
        padding: 2rem;
        width: var(--sub-nav-width);
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        border-left: 5px solid #dddddd;
        padding: .5rem;
    }

    ul ul {
        position: relative;
    }

    .current-link,
    .current-link .current-sublink{
        border-left: 5px solid black;
    }

    a {
        color: inherit;
    }

    #sections {
        margin-left: calc(var(--main-nav-width) + var(--sub-nav-width));
        width: 700px;
    }

    section {
        position: relative;
        margin: 2rem;
        padding: 5rem 3rem;
        min-height: 70vh;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.42);
    }
    section, .subsection {
        border-radius: 2rem;
        transition: all .5s ease-in-out;
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