<script>
    import '../app.css'
    import {base} from '$app/paths'
    import {page} from '$app/stores';
    import GitHubMark from "../lib/GitHubMark.svelte";

    const links = [
        ['/', 'Basic'],
        ['/percentage1/', 'Percentage 1'],
        ['/percentage2/', 'Percentage 2'],
        ['/subsections/', 'SubSections'],
    ]

    console.log($page.url)
</script>

<nav>
    <ul>
        <li>
            <a href="https://github.com/Corrl/svelte-intersection-tracker">
                <GitHubMark /><br>
                Svelte<br>
                Intersection<br>
                Tracker<br>
            </a>
        </li>
        {#each links as [href, text]}
            <li
                    class:current="{`${$page.url.pathname}` === href}"
            >
                <a href="{base}{href}">
                    {text}
                </a>
            </li>
        {/each}
    </ul>
</nav>

<slot/>

<style>

    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: var(--main-nav-width);
        background: #ededed;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    li {
        position: relative;
        margin: .4rem 0;
    }

    li:first-child a {
        font-weight: 800;
        /*font-size: 1.05rem;*/
    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
        font-weight: bold;
        padding: .4rem .4rem;
        border-radius: .2rem;
    }

    a:hover {
        text-decoration: underline;
    }

    .current {
        /*text-decoration: underline;*/
    }

    .current::before {
        content: '●';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-100%, -50%);
    }
</style>