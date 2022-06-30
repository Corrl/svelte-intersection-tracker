<script>
    import '../app.css'
    import {base} from '$app/paths'
</script>

<nav>
    <ul>
        <li>
            <a href="{base}/">Basic</a>
        </li>
        <li>
            <a href="{base}/sections">Sections</a>
        </li>
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

    a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
    }

    li {
        margin: .8rem 0;
    }

</style>