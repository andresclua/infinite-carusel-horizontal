class JSUTIL{
    
    _getElements(id) {
        if (typeof id == "object") {
          return [id];
        } else {
          return document.querySelectorAll(id);
        }
    };

    // .hide(selector)
    hide(sel) {
        this._hideElements(this._getElements(sel));
    };
    _hideElements(elements) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
        this._hideElement(elements[i]);
        }
    };
    _hideElement(element) {
        this._styleElement(element, "display", "none");
    };
    
    //.show(selector)
    show(sel, a) {
        var elements = this._getElements(sel);
        if (a) {this._hideElements(elements);}
        this._showElements(elements);
    };
    _showElements (elements) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
          this._showElement(elements[i]);
        }
    };
    _showElement(element) {
        this._styleElement(element, "display", "block");
    };

    //addStyle [element, property, value]
    addStyle(sel, prop, val) {
        this._styleElements(this._getElements(sel), prop, val);
    };
    _styleElements(elements, prop, val) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {    
            this._styleElement(elements[i], prop, val);
        }
    };
    _styleElement (element, prop, val) {
        element.style.setProperty(prop, val);
    };
    
    //toggleShow(selector)
    toggleShow (sel) {
        var i, x = this._getElements(sel), l = x.length;
        for (i = 0; i < l; i++) {    
          if (x[i].style.display == "none") {
            this._styleElement(x[i], "display", "block");
          } else {
            this._styleElement(x[i], "display", "none");
          }
        }
    };

    // addClass(selector,'class')
    addClass(sel, name) {
        this._addClassElements(this._getElements(sel), name);
    };
    _addClassElements (elements, name) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
          this._addClassElement(elements[i], name);
        }
    };
    _addClassElement (element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    };

    //removeClass(selector,'class')
    removeClass(sel, name) {
        this._removeClassElements(this._getElements(sel), name);
    };
    _removeClassElements(elements, name) {
        var i, l = elements.length, arr1, arr2, j;
        for (i = 0; i < l; i++) {
          this._removeClassElement(elements[i], name);
        }
    };
    _removeClassElement  (element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
          }
        }
        element.className = arr1.join(" ");
    };

    //ToggleClass('class')
    toggleClass(sel, c1, c2) {
        this._toggleClassElements(this._getElements(sel), c1, c2);
    };
    _toggleClassElements(elements, c1, c2) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {    
            this._toggleClassElement(elements[i], c1, c2);
        }
    };
    _toggleClassElement (element, c1, c2) {
        var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
        t1 = (c1 || "");
        t2 = (c2 || "");
        t1Arr = t1.split(" ");
        t2Arr = t2.split(" ");
        arr = element.className.split(" ");
        if (t2Arr.length == 0) {
          allPresent = true;
          for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
          }
          if (allPresent) {
            this._removeClassElement(element, t1);
          } else {
            this._addClassElement(element, t1);
          }
        } else {
          allPresent = true;
          for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
          }
          if (allPresent) {
            this._removeClassElement(element, t1);
            this._addClassElement(element, t2);          
          } else {
            this._removeClassElement(element, t2);        
            this._addClassElement(element, t1);
          }
        }
    };


   // BROWSER DETECTION
  getBrowser(browser) {
      switch (browser) {
          // CHROME 1+
          case 'chrome':
              return navigator.userAgent.indexOf("Chrome") != -1 && !navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf('CriOS') >= 0;
          // SAFARI 3.0+
          case 'safari':
              return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !(navigator.userAgent.indexOf('CriOS') >= 0);
          // FIREFOX 1.0+
          case 'firefox':
              return typeof InstallTrigger !== 'undefined';
          // INTERNET EXPLORER 6-11
          case 'ie':
              return /*@cc_on!@*/false || !!document.documentMode;
          // EDGE 20+
          case 'edge':
              return (navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("Edge/") != -1) ? true : false;
          default:
              return null;
      }
  }

  getTypeDevice(system) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    switch (system) {
        case 'touch':
            return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        case 'android':
            return /android/i.test(userAgent);
        case 'ios':
            return typeof navigator.standalone === 'boolean';
        default:
            return null;
    }
}

   


}
export default JSUTIL;