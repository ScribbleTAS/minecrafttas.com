[![hugo github pages](https://github.com/MinecraftTAS/minecrafttas.com/actions/workflows/gh-pages.yaml/badge.svg)](https://test.minecrafttas.com)  
The source code for https://minecrafttas.com

Uses a completely custom theme that I would not recommend to copy...
## Installation
1. Download [Hugo Extended](https://github.com/gohugoio/hugo/releases) (hugo_extended_\<number\>_windows-amd64)
2. Extract it and put it in the mctas.com folder
3. Run `./hugo.exe server` or `./startserver.sh`
5. Open `http://localhost:1313/`

## Contributing
Want to add new pages and guides? Add a markdown file into the content folder and choose a subdirectory. The html will be automatically generated.  

You may also use the command `hugo new <filename>.md` or `hugo new <directory>/<filename>.md` to let hugo initialize a new file with a template.
  
### HTML in markdown
To add html to your markdown simply encase the tags with `{{<rawhtml>}}`
```html
{{<rawhtml>}}
	<p> Your html code here! <p>
{{</rawhtml>}}
```

## Generating
Running `hugo` will generate the html files in the `public/` directory