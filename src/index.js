
import './index.scss'
import JSUTIL from '@andresclua/jsutil';
import gsap from 'gsap';

// OG - https://codepen.io/supah/pen/VwegJwV


const lerp = (v0, v1, t) => {
    return v0 * ( 1 - t ) + v1 * t
}

class InfiniteCaruselHorizontal{
    constructor(){
        /**
         * Dom Elements
         */
        this.JSUTIL = new JSUTIL()
        this.DOM ={
            menu : document.querySelector('.menu'),
            items : document.querySelectorAll('.menu--item'),
            images: document.querySelectorAll('.menu--item img')
        }

        // Variables used Globally
        this.menuWidth = this.DOM.menu.clientWidth
        this.itemWidth = this.DOM.items[0].clientWidth
        this.wrapWidth = this.DOM.items.length * this.itemWidth

        // scroll 
        this.scrollSpeed = 0
        this.oldScrollY = 0
        this.scrollY = 0
        this.y = 0

        // touch events
        this.touchStart = 0;
        this.touchX = 0;
        this.isDragging = false

        this.init()
        this.events()
    }
    init(){
        this.fireScroll(0)
        this.RAF()
    }
    events(){
        // 🛞 Event
        const handleMouseWheel = (e) => {
            this.scrollY -= e.deltaY * 0.9
        }
        
        // ✊ Events
        const handleTouchStart = (e) => {
            this.touchStart = e.clientX || e.touches[0].clientX
            this.isDragging = true
            this.JSUTIL.addClass(this.DOM.menu,'--is-dragging')

        }
        const handleTouchMove = (e) => {
            if (!this.isDragging) return
            this.touchX = e.clientX || e.touches[0].clientX
            this.scrollY += (this.touchX - this.touchStart) * 2.5
            this.touchStart = this.touchX
        }
        const handleTouchEnd = () => {
            this.isDragging = false
            this.JSUTIL.removeClass(this.DOM.menu,'--is-dragging')
        }

        
        // 👂 Evennt Listeners
        this.DOM.menu.addEventListener('mousewheel', handleMouseWheel)

        this.DOM.menu.addEventListener('touchstart', handleTouchStart)
        this.DOM.menu.addEventListener('touchmove', handleTouchMove)
        this.DOM.menu.addEventListener('touchend', handleTouchEnd)

        this.DOM.menu.addEventListener('mousedown', handleTouchStart)
        this.DOM.menu.addEventListener('mousemove', handleTouchMove)
        this.DOM.menu.addEventListener('mouseleave', handleTouchEnd)
        this.DOM.menu.addEventListener('mouseup', handleTouchEnd)

        this.DOM.menu.addEventListener('selectstart', () => { return false })

        // resize
        window.addEventListener('resize', () => {
            this.menuWidth = this.DOM.menu.clientWidth
            this.itemWidth = this.DOM.items[0].clientWidth
            this.wrapWidth = this.DOM.items.length * this.itemWidth
        })
    }
    fireScroll = (scroll) => {
        gsap.set(this.DOM.items, {
            x: (i) => {
                return i * this.itemWidth + scroll
            },
            modifiers: {
                x: (x, target) => {
                    const s = gsap.utils.wrap(-this.itemWidth, this.wrapWidth - this.itemWidth, parseInt(x))
                    return `${s}px`
                }
            }
        })
    } 
    RAF() {
            this.y = lerp(this.y, this.scrollY, .1)
            this.fireScroll(this.y)
        
            this.scrollSpeed = this.y - this.oldScrollY
            this.oldScrollY = this.y
        
            gsap.to(this.DOM.items, {
                skewX: -this.scrollSpeed * .02,
                rotate: this.scrollSpeed * .01,
                scale: 1 - Math.min(100, Math.abs(this.scrollSpeed)) * 0.003
            })
            requestAnimationFrame(()=>{this.RAF()})
        }
}
export default InfiniteCaruselHorizontal;
new InfiniteCaruselHorizontal()


