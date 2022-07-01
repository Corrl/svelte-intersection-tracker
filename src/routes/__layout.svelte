<script>
    import '../app.css'
    import {base} from '$app/paths'
    import {page} from '$app/stores';

    const links = [
        ['/', 'Basic'],
        ['/sections/', 'Sections'],
        ['/universal/', 'Universal']

    ]

</script>

<nav>
    <ul>
        {#each links as [href, text]}
            <li>
                <a href="{base}{href}"
                   class:open={`${base}${$page.url.pathname}` === href}
                >
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
        margin: .4rem 0;

    }

    a {
        display: block;
        color: inherit;
        text-decoration: none;
        font-weight: bold;
        padding: .4rem .6rem;
        border-radius: .2rem;
    }

    a:hover {
        text-decoration: underline;
    }

    .open {
        background: black;
        color: white;
    }
</style>