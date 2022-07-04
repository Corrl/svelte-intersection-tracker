# Svelte Intersection Tracker

By using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) this Svelte Component(set) enables tracking of the following options

- **isIntersecting**
- **percentage** - Math.max(visible % of element, % element is taking up of viewport)
- **current** - elements with highest percentage

## Demo

https://corrl.github.io/svelte-intersection-tracker/

## Usage

### Structure

```html

<IntersectionTracker options={{...}}>
    ...

    <IntersectionTrackerLink
            id={data.id}
            let:isIntersecting
            let:percentage
            let:current>
        ...
    </IntersectionTrackerLink>

    ...

    <IntersectionTrackerItem
            id={data.id}
            let:isIntersecting
            let:percentage
            let:current>
        ...
    </IntersectionTrackerItem>

    ...

</IntersectionTracker>
```

### Basic - current

```html

<IntersectionTracker>

    <ul>
        {#each data as d}
        <IntersectionTrackerLink id={d.id}
                                 let:current
        >
            <li class:current-link={current}>
                <a href="#{d.id}">{d.title}</a>
            </li>
        </IntersectionTrackerLink>
        {/each}
    </ul>

    <div id="items">
        {#each data as d}
        <IntersectionTrackerItem id={d.id}
                                 let:current
        >
            <div class="item"
                 class:current-item={current}
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
```

## API

### Props `<IntersectionTracker>`

| Name               | Type                         | Default              | Description                                                                                                                                                                                                                                                                           | Required |
|--------------------|------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| options.root       | `HTMLElement`&#124; `string` | `window`             | Either reference to element or id as string. The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target.                                                                                                                                                                                                                                         | `false`  |
| options.rootMargin | `string`                     | `0px`                | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin)                                                       | `false`  |
| options.fineness   | `number`                     | `100`                  | Based on the value an array for `options.threshold`is generated, see examples below                                                                                                                                                                                                   | `false`  |
| options.threshold  | `number` &#124;  `number[]`        | `[0, 0.01, 0.02, 0.03, ..., 0.97, 0.98, 0.99, 1]` | Overwrites `fineness` if provided. Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold) | `false`  |

| fineness      |threshold|
|---------------|---|
| 5             |`[0, 0.2, 0.4, 0.6, 0.8, 1]`|
| 10            |`[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]`|
| 100 (default) |`[0, 0.01, 0.02, 0.03, 0.04, 0.05, ..., 0.95, 0.96, 0.97, 0.98, 0.99, 1]`|

### Props `<IntersectionTrackerLink>/<IntersectionTrackerItem>`

| Name  | Type     | Default | Description                                                              | Required |
|-------|----------|---------|--------------------------------------------------------------------------|----------|
| id    | `string` | -       | Tracked items will be wrapped in a div with the provided id              | `true`   |
| group | `number` | `0`       | By defining groups items can be watched seperately e.g. with subsections | `false`  |

### let:props

|                    | Type      | Default | Description                                                                                                                                                                                                                                    |
|--------------------|-----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let:isIntersecting | `boolean` | `false`   | Is true if the target element intersects with the intersection observer's root                                                                                                                                                                 |
| let:percentage     | `number`  | `0`       | Value between 0 and 1 representing the higher value of either the visible percentage of the elements area or the percentage the element is taking up of the viewport<br/>0.2 => Either 20% of element visible or element fills 20% of viewport |
| let:current        | `boolean` | `false`   | True if element has highest percentage in own group. May be true for multiple elements if they share the same percentage, e.g. 1 when 100% visible.                                                                                            |

