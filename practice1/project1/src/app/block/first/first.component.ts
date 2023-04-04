// import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

// export class FirstComponent{}

export class FirstComponent implements OnInit,OnDestroy{
  @Input() msg:any;
  name="BHARATH";
  time:any;
  constructor(){
    console.log(this.name);
  }

  ngOnInit(){
    console.log('bharath');
    this.time=setInterval(() => {
      console.log('Interval');
    },1000)
  }

  ngOnDestroy(){
    console.log('ondestroy');
    clearInterval(this.time);
  }
}

 