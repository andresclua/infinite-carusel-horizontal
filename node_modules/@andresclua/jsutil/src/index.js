import JSUTIL from './js_helper';

class Page{
    constructor(){
        this.init()
    }
    init(){ 
        var jsutil = new JSUTIL()
        
        /*
            Add Class
        */
        jsutil.addClass(document.getElementById('add-class-trigger'),'add-class')

        /*
            Remove Class
        */
        jsutil.removeClass(document.getElementById('remove-class-trigger'),'remove-class');

        /*
            Toggle Class
        */
        document.getElementById('toggle-class-trigger').addEventListener('click', ()=>{
            jsutil.toggleClass(document.getElementById('toggle-class-trigger'),'toggle-class');
        });

        /*
            add Style
        */
        jsutil.addStyle(document.getElementById('add-style-trigger'),'background-color','orange');
        jsutil.addStyle(document.getElementById('add-style-trigger'),'padding','10px');

        /*
            dispay none
        */
        document.getElementById('hide-trigger').addEventListener('click', (e)=>{
            e.preventDefault()
            jsutil.hide(document.getElementById('hide-trigger'));
        });

        /*
            display block
        */
        document.getElementById('show-trigger').addEventListener('click', (e)=>{
            e.preventDefault()
            jsutil.show(document.getElementById('content-to-show'));
        });

        /*
            get Browser
        */
        var browsers = ['chrome','safari','firefox','ie','edge']
        browsers.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`is this browser ${element}? ${jsutil.getBrowser(element)} `))
            document.getElementById('browserList').appendChild(li);
        });

        var devices = ['touch','android','ios']
        devices.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`is this ${element}? ${jsutil.getTypeDevice(element)} `))
            document.getElementById('detectdevice').appendChild(li);
        });
    }
}
export default Page;

new Page()
