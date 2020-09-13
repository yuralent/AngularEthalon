import {Input, Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

interface InitVarContext<T> {
  initVar: T;
}

@Directive({
  selector: '[initVar]'
})
export class InitVarDirective<T> implements OnInit {
  private context: InitVarContext<T> = {initVar: null};

  constructor(private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<InitVarContext<T>>) {
  }

  @Input()
  set initVar(value: T) {
    this.context.initVar = value;
  }

  ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
}
