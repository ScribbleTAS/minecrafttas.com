The source code for https://minecrafttas.com

Uses a custom theme.
## Installation
Download and install Hugo Extended, either via the [releases page](https://github.com/gohugoio/hugo/releases) or by using
```
winget install Hugo.Hugo.Extended
```
And that's it! No other dependencies needed! Hugo Extended comes with Sass support for css and we use *raw* JavaScript for our needs, which is kind of a cleansing experience...

## Contributing
Want to add new pages and guides? Add a markdown file into the content folder and choose a subdirectory. The html will be automatically generated.  

You may also use the command `hugo new <filename>.md` or `hugo new <directory>/<filename>.md` to let hugo initialize a new file with a template.
  
### Shortcodes
Our custom template features a bunch of shortcodes
A list is available on the [Wiki](https://github.com/MinecraftTAS/minecrafttas.com/wiki/Shortcodes)

## Generating
Running `hugo` will generate the html files in the `public/` directory