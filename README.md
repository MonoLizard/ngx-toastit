<<<<<<< HEAD
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/MonoLizard/achievy/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/MonoLizard/achievy/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
=======
# ngx-toastit
An unobtrusive toast module for Angular. [Demo](https://monolizard.github.io/ngx-toastit/)

## Usage

- Install toastit
```bash
npm i -S ngx-toastit
```
- Also install peer dependencies if you're missing them.
- Add ToastitModule to your project
```ts
@NgModule({
    declarations: [AppComponent],
    imports: [ToastitModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
- Inject ToastitService when you want to add a toastit
```ts
public constructor(private toastitService: ToastitService) {}

public AddToastit(){
    this.toastitService.add(options: IToastit);
}
```

## Options

### Required
```ts
title: string = ''
```
Toastit title.
### Optional
```ts
align: ToastitAlign = ToastitAlign.TR
```
The point where the toastit will appear. Default value is top right.


| type | info |
| ---- | ---- |
| `ToastitAlign.TR` | Top right |
| `ToastitAlign.TC` | Top center |
| `ToastitAlign.TL` | Top left |
| `ToastitAlign.BR` | Bottom right |
| `ToastitAlign.BC` | Bottom center |
| `ToastitAlign.BL` | Bottom left |

---
```ts
enterAnimation: any = ToastitAnimation.fadeIn
```
Animation config for entering toastits. Animations use material design motion for its easings and timings. Check the [demo](https://monolizard.github.io/ngx-toastit/) page for visualization.


| type |
| ---- |
| `ToastitAnimation.fadeIn` |
| `ToastitAnimation.shrinkIn` |
| `ToastitAnimation.slideInLeft` |
| `ToastitAnimation.slideInRight` |
| `ToastitAnimation.slideInTop` |
| `ToastitAnimation.slideInBottom` |
| `ToastitAnimation.scaleIn` |

---
```ts
leaveAnimation: any = ToastitAnimation.fadeOut
```
Animation config for exiting toastits. Animations use material design motion for its easings and timings. Check the [demo](https://monolizard.github.io/ngx-toastit/) page for visualization.


| type |
| ---- |
| `ToastitAnimation.fadeOut` |
| `ToastitAnimation.shrinkOut` |
| `ToastitAnimation.slideOutLeft` |
| `ToastitAnimation.slideOutRight` |
| `ToastitAnimation.slideOutTop` |
| `ToastitAnimation.slideOutBottom` |
| `ToastitAnimation.scaleOut` |

---
```ts
parent: string | Element = 'body'
```
Toasit parent, could be a selector string or Element.

---
```ts
timeout: number = 5
```
Toastit will wait x seconds before exiting.

---
```ts
type: ToastitType = ToastitType.Info
```
Toastit type.


| type | info |
| ---- | ---- |
| `ToastitType.Info` | Used for info messages |
| `ToastitType.Pin` | Pinned toastits will remain in place until you remove it manually |
| `ToastitType.Progress` | Progress toastit, used in conjunction with observables, has an animation icon |
| `ToastitType.Success` | Used for success messages |
| `ToastitType.Warning` | Used to show error messages |

---
```ts
message: string = ''
```
Toastit message.

---
```ts
observable: Observable<any> = undefined
```
If an observable is supplied, toastit will subscribe to it and exit after the observable is finished. 
## Styling
Toastit uses BEM notation for its classes and `ViewEncapsulation.NONE` in Angular so its styles can be customized in global scope with ease.


| class | info |
| ----- | ---- |
| `.toastit` | Main toastit class |
| `.toastit--info` | Type added main class |
| `.toastit--align-top-right` | Align added main class |
| `.toastit__icon` | Icon class |
| `.toastit__icon--info` | Type added icon class |
| `.toastit__content` | Parent class of title and message |
| `.toastit__title` | Title class |
| `.toastit__title--info` | Type added title class |
| `.toastit__message` | Message class |
| `.toastit__message--info` | Type added message class |
>>>>>>> release-v1.0.0
