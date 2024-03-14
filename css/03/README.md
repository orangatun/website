# Version 3

This one is based on the latest [Brittany Chiang's website](https://brittanychiang.com/)

It's not a source copy paste situation. I'm going to try to replicate the same effect (the best I can).
She used Tailwind CSS and Next.js for her website. I'll be using plain CSS and JS and see how close I can get.

## Approach

I retain the other elements of the previous design, and modify one element at a time. Starting with the navbar which is now a sticky sidebar. 

## Future improvements
- Burring other sub-sections on hover of a sub-section

## References

#### Aura effect
Check out [David Piano's codepen](https://codepen.io/davidkpiano/pen/gOoNZNe) and [Frontend FYI - Youtube video](https://youtu.be/u1s3uHQibAs) for an understanding of how I pulled it off. There's always the code.

If you're looking for a quick way, hopefully this saves you some time:

```javascript
const bodyEl = document.getElementsByTagName("body");

bodyEl[0].addEventListener("pointermove", (ev) => {
    const rect = bodyEl[0].getBoundingClientRect();
    
    bodyEl[0].style.setProperty("--x", `${ev.clientX}px`);// - rect.left}px`);
    bodyEl[0].style.setProperty("--y", `${ev.clientY-rect.top+96}px`);// - rect.top}px`);
});
```

Wherever you choose to set the effect, set it as the `background-image`
```css
    background-image: radial-gradient(circle 600px at var(--x,100px) var(--y,100px), var(--body-transparent-color) -700%, #0A192F 100%);
```

