import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name:any;
  okay:any;
  show:any;
  hide:any;
  onclick(){
    this.show= !this.show;
    this.hide=false;
    this.name="febvgefbuybube bubfebuqbe hbuebubeyuebfe fuyhebyfeywbfubehfue yubyrefyuqwebuf ewyuh uh yu3rbfvr";
  }
  sclick(){
    this.hide= !this.hide;
    this.show=false;
    this.okay="jnfen ccccccccccc  dddddddddddddd rrrrrrr tg    t         jk jj rg vr vj";
  }
}
