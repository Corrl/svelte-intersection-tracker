<script>
    import '../app.css'
    import {base} from '$app/paths'
</script>

<nav>
    <ul>
        <li>
            <a href="{base}/">Basic</a>
        </li>
    </ul>
</nav>

<slot/>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400..800&display=swap');

    :global(html) {
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
        /*scroll-padding-top: 40px;*/
    }

    :global(body) {
        margin: 0;
        padding: 0;
        min-height: 100%;

        --main-nav-width: 10rem;
        --sub-nav-width: 200px;
    }

    :global(*) {
        box-sizing: border-box;
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: var(--main-nav-width);
        background: #ededed;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
    }

</style>