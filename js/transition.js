import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    
    in({from,to,done}) {

        const tl = new TimelineLite();

        tl.fromTo(to, 0.7, {left: '-100%'}, {left: '0%', onComplete: function() {
            from.remove();
            done();
        }})
        .fromTo(to.children[0], 2.0, {opacity: '0'}, {opacity: '1'})
    }

    out({from,done}) {
        done();
    } 
} 

export default Fade;