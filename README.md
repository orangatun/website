# Website

This website is inspired by [CSS Zen Garden](https://csszengarden.com/) for the CSS based design. Changing the css from `/css/01/` to `/css/03/` or `/css/xx/` should make it show up with different layouts. This one is currently up on [https://raghunadham.com](https://raghunadham.com). The previous iteration is up here [v2](https://v2.raghunadham.com)

The currrent iteration of the website uses a single open typeface:
- [Inter](https://rsms.me/inter/) typeface.

The design is inspired by [Brittany Chiang's website](https://brittanychiang.com/). She built it with Tailwind and Next.js. I built it from scratch, with CSS3 and plain JS. 

Check out the README for this iteration at [here](https://github.com/orangatun/website/tree/main/css/03)

## Structure
```
.
├── css                         # This is where all the CSS files are
│   ├── 01                      
│   ├── 02                      # styles of css for version 2
│   └── 03                      # styles of css for the same html
│       ├── base-style.css      # tag-level css
│       ├── hidden.css          # this is where the hidden fields are
│       ├── navbar.css          # styling elements inside navbar
│       ├── sections.css        # styling elements inside sections of the page
│       └── README.me           # README for this version, giving information about the website.
├── js                          # This is where all the JS files are
│   └── 03                      
│       ├── background.js       # mouse pointer event handler for background aura effect
│       ├── navbar.js           # navbar effects and elements
│       └── sections.js         # styling elements inside navbar
├── index.html                  # The html page
├── files                       # files for the website
│   └── photo.png               # a picture for the portfolio (unused)
├── LICENSE
└── README.md

```

Thank you for checking this out! Feel free to leave me a message, or use the source. All I ask is that you give credit to the author. Thanks again!
