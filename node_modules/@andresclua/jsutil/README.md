
Hello everyone! 
This is my first project within npm, I hope it will be of great use to the community.
The need within several projects in which I have worked has been the kick of this project.
Basic operations that we use daily in web development.
On the examples everything is done with ID, but it works with queryselector and queryselectorall

## How does it work?
```sh
npm install @andresclua/jsutil
```

## include the library in file
```sh
import JSUTIL from '@andresclua/jsutil';
```
and voila, it is ready to use!
# Example

#### Add Class
```sh
var JSUTIL = new JSUTIL()
JSUTIL.addClass(document.getElementById('bar'),'foo')
```

#### Remove Class
```sh
var JSUTIL = new JSUTIL()
JSUTIL.removeClass(document.getElementById('bar'),'foo')
```

#### Toggle Class
```sh
var JSUTIL = new JSUTIL()
JSUTIL.toggleClass(document.getElementById('bar'),'foo')
```

####  Add Style
```sh
var JSUTIL = new JSUTIL()
JSUTIL.addStyle(document.getElementById('add-style-trigger'),'background-color','orange');
JSUTIL.addStyle(document.getElementById('add-style-trigger'),'padding','10px');
```

####  Hide Element
```sh
var JSUTIL = new JSUTIL()
document.getElementById('hide-trigger').addEventListener('click', (e)=>{
    e.preventDefault()
    JSUTIL.hide(document.getElementById('hide-trigger'));
});
```

####  Show Element
```sh
var JSUTIL = new JSUTIL()
document.getElementById('show-trigger').addEventListener('click', (e)=>{
    e.preventDefault()
    JSUTIL.show(document.getElementById('content-to-show'));
});
```

####  Get Browser
Available options:
 - chrome
 - safari
 - firefox
 - ie
 - edge

Returns Boolean

Example: 
```sh
var JSUTIL = new JSUTIL()
JSUTIL.getBrowser('chrome')
```


####  Get Device Type

Available options:
 - touch
 - android
 - ios

Returns Boolean

Example: 
```sh
var JSUTIL = new JSUTIL()
JSUTIL.getTypeDevice('touch')
```

#  For Nuxt Projects
```sh
npm install @andresclua/jsutil
```
```sh
  plugins: [
    { src: "~/plugins/jsutil.js", ssr: false },
  ],
```
```sh
import JSUTIL from '@andresclua/jsutil';
export default ({ app },inject) => {
    inject('JSUTIL', () => new JSUTIL() );
};
```
```sh
<template>
    <p ref="test">this is a test</p>
</template>
<script>
export default {
    mounted() {
        if (process.client) {
                this.$JSUTIL().addClass(this.$refs.test,'foo');
                console.log( 'is chrome?',this.$JSUTIL().getBrowser('chrome') );
        }
    },
}
</script>
```
![awesome](https://media.giphy.com/media/LeikbswJKXOMM/giphy.gif)

[Github Profile](https://github.com/andresclua/)