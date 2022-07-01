export const data = [
    {
        id: 'title1',
        title: 'Title 1',
        content: "Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1].\n\n The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible. Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible."
    },

    {
        id: 'title2', title: 'Title 2', content: `Rather than reporting every infinitesimal change in how much a target element is visible, the Intersection Observer API uses thresholds. When you create an observer, you can provide one or more numeric values representing percentages of the target element which are visible. Then, the API only reports changes to visibility which cross these thresholds.

For example, if you want to be informed every time a target's visibility passes backward or forward through each 25% mark, you would specify the array [0, 0.25, 0.5, 0.75, 1] as the list of thresholds when creating the observer.

When the callback is invoked, it receives a list of IntersectionObserverEntry objects, one for each observed target which has had the degree to which it intersects the root change such that the amount exposed crosses over one of the thresholds, in either direction.

You can see if the target currently intersects the root by looking at the entry's isIntersecting property; if its value is true, the target is at least partially intersecting the root element or document. This lets you determine whether the entry represents a transition from the elements intersecting to no longer intersecting or a transition from not intersecting to intersecting.

Note that it's possible to have a non-zero intersection rectangle, which can happen if the intersection is exactly along the boundary between the two or the area of boundingClientRect is zero. This state of the target and root sharing a boundary line is not considered enough to be considered transitioning into an intersecting state.

To get a feeling for how thresholds work, try scrolling the box below around. Each colored box within it displays the percentage of itself that's visible in all four of its corners, so you can see these ratios change over time as you scroll the container. Each box has a different set of thresholds:

The first box has a threshold for each percentage point of visibility; that is, the IntersectionObserver.thresholds array is [0.00, 0.01, 0.02, ..., 0.99, 1.00].
The second box has a single threshold, at the 50% mark.
The third box has thresholds every 10% of visibility (0%, 10%, 20%, etc.).
The last box has thresholds each 25%.`
    },

    {
        id: 'title3',
        title: 'Title 3',
        content: `Historically, detecting visibility of an element, or the relative visibility of two elements in relation to each other, has been a difficult task for which solutions have been unreliable and prone to causing the browser and the sites the user is accessing to become sluggish. As the web has matured, the need for this kind of information has grown. Intersection information is needed for many reasons, such as: Each entry in the list of thresholds is an IntersectionObserverEntry object describing one threshold that was crossed; that is, each entry describes how much of a given element is intersecting with the root element, whether or not the element is considered to be intersecting or not, and the direction in which the transition occurred.`
    },

    {
        id: 'title4', title: 'Title 4', content: `For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the intersectionRatio is going down, we use the string decreasingColor and replace the word "ratio" in that with the intersectionRatio before setting the target element's background-color.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable prevRatio. For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the intersectionRatio is going down, we use the string decreasingColor and replace the word "ratio" in that with the intersectionRatio before setting the target element's background-color.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable prevRatio. For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the intersectionRatio is going down, we use the string decreasingColor and replace the word "ratio" in that with the intersectionRatio before setting the target element's background-color.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable prevRatio. For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the intersectionRatio is going down, we use the string decreasingColor and replace the word "ratio" in that with the intersectionRatio before setting the target element's background-color.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable prevRatio.For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the intersectionRatio is going down, we use the string decreasingColor and replace the word "ratio" in that with the intersectionRatio before setting the target element's background-color.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable prevRatio.For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the intersectionRatio is going down, we use the string decreasingColor and replace the word "ratio" in that with the intersectionRatio before setting the target element's background-color.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable prevRatio.`
    },

    {
        id: 'title5', title: 'Title 5', content: `Rather than reporting every infinitesimal change in how much a target element is visible, the Intersection Observer API uses thresholds. When you create an observer, you can provide one or more numeric values representing percentages of the target element which are visible. Then, the API only reports changes to visibility which cross these thresholds.

For example, if you want to be informed every time a target's visibility passes backward or forward through each 25% mark, you would specify the array [0, 0.25, 0.5, 0.75, 1] as the list of thresholds when creating the observer.

When the callback is invoked, it receives a list of IntersectionObserverEntry objects, one for each observed target which has had the degree to which it intersects the root change such that the amount exposed crosses over one of the thresholds, in either direction.

You can see if the target currently intersects the root by looking at the entry's isIntersecting property; if its value is true, the target is at least partially intersecting the root element or document. This lets you determine whether the entry represents a transition from the elements intersecting to no longer intersecting or a transition from not intersecting to intersecting.

Note that it's possible to have a non-zero intersection rectangle, which can happen if the intersection is exactly along the boundary between the two or the area of boundingClientRect is zero. This state of the target and root sharing a boundary line is not considered enough to be considered transitioning into an intersecting state.

To get a feeling for how thresholds work, try scrolling the box below around. Each colored box within it displays the percentage of itself that's visible in all four of its corners, so you can see these ratios change over time as you scroll the container. Each box has a different set of thresholds.`
    },

    {
        id: 'title6',
        title: 'Title 6',
        content: `Each entry in the list of thresholds is an IntersectionObserverEntry object describing one threshold that was crossed; that is, each entry describes how much of a given element is intersecting with the root element, whether or not the element is considered to be intersecting or not, and the direction in which the transition occurred.`
    },

    {
        id: 'title7',
        title: 'Title 7',
        content: `ceives a list of IntersectionObserverEntry objects, one for each observed target which has had the degree to which it intersects the root change such that the amount exposed crosses over one of the thresholds, in either direction.

You can see if the target currently intersects the root by looking at the entry's isIntersecting property; if its value is true, the target is at least partially intersecting the root element or document. This lets you determine whether the entry represents a transition from the elements intersecting to no longer intersecting or a transition from not intersecting to intersecting.

Note that it's possible to have a non-zero inter.`
    },
]