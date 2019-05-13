import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSurpriseWubba]'
})
export class SurpriseWubbaDirective implements OnInit {
    //implement this so we can capture the text and use it inside ngOnInit

    initialText: string;

    
    constructor(private e1: ElementRef) { }

    ngOnInit(): void {
        this.initialText = this.e1.nativeElement.innerText;
    }

    //if mouse enters an element on the page where elementref is used then it'll highlight with yellow
    //NOW when we hover over the text it will change to the text message below; NOTE: we need to store previous text
    //so we can change it back when the hover goes away
    @HostListener('mouseenter') onMouseEnter() {
        this.changeText('WubbaLubbaDubDub');
    }

    //when mouse leaves it will go away
    @HostListener('mouseleave') onMouseLeave() {
        this.changeText(this.initialText);
    }

    private changeText(text: string) {
        //this.e1.nativeElement.style.backgroundColor = color;
        this.e1.nativeElement.innerText = text;
    }

}
