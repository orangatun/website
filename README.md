# Website

This website is inspired by [CSS Zen Garden](https://csszengarden.com/) for the CSS based design. Changing the css from `/css/01/` to `/css/03/` or `/css/xx/` should make it show up with different layouts. This one is currently up on [https://raghunadham.com](https://raghunadham.com). The previous version is up here [v2](https://v2.raghunadham.com)

The currrent version of the website uses a single open typeface:
- [Inter](https://rsms.me/inter/) typeface.



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
