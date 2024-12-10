import { booleanAttribute, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, model, OnDestroy, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { v4 as uuidv4 } from 'uuid';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-reviews-input',
  providers: [{ provide: MatFormFieldControl, useExisting: CustomReviewsInputComponent }],
  templateUrl: './custom-reviews-input.component.html',
  styleUrl: './custom-reviews-input.component.scss',
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomReviewsInputComponent implements ControlValueAccessor, MatFormFieldControl<string[]>, OnDestroy {
  static nextId = 0;


  ngControl = inject(NgControl, { optional: true, self: true });
  readonly comments: FormGroup;
  readonly stateChanges = new Subject<void>();
  readonly touched = signal(false);
  readonly controlType = 'example-tel-input';
  readonly id = `example-tel-input-${ CustomReviewsInputComponent.nextId++ }`;
  readonly _userAriaDescribedBy = input<string>('', { alias: 'aria-describedby' });
  readonly _placeholder = input<string>('', { alias: 'placeholder' });
  readonly _required = input<boolean, unknown>(false, {
    alias: 'required',
    transform: booleanAttribute,
  });
  readonly _disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly _value = model<string[] | null>(null, { alias: 'value' });
  onChange = (_: any) => { };
  onTouched = () => { };

  protected readonly _formField = inject(MAT_FORM_FIELD, {
    optional: true,
  });

  private readonly _focused = signal(false);
  private readonly _disabledByCva = signal(false);
  private readonly _disabled = computed(() => this._disabledByInput() || this._disabledByCva());
  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  get focused(): boolean {
    return this._focused();
  }

  get empty() {
    const {
      value: { area, exchange, subscriber },
    } = this.comments;

    return !area && !exchange && !subscriber;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  get userAriaDescribedBy() {
    return this._userAriaDescribedBy();
  }

  get placeholder(): string {
    return this._placeholder();
  }

  get required(): boolean {
    return this._required();
  }

  get disabled(): boolean {
    return this._disabled();
  }

  get value(): string[] | null {
    return this._value();
  }

  get errorState(): boolean {
    return this.comments.invalid && this.touched();
  }
  constructor() {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.comments = inject(FormBuilder).group({});

    this.comments.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      this.stateChanges.next();
    });

    this.comments.valueChanges.pipe(takeUntilDestroyed()).subscribe(value => {
      const comments = this.comments.valid
        ? Object.values(this.comments.value) as string[]
        : null;
      console.log(comments);
      this._updateValue(comments);
      this.onChange(this.value);
    });
  }

  addReview(): void {
    this.comments.addControl(uuidv4(), new FormControl<string>(''));
  }

  deleteReview(id: unknown): void {
    this.comments.removeControl(id as string);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  setDescribedByIds(ids: string[]) {
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.example-tel-input-container',
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick() {
    // if (this.comments.controls.subscriber.valid) {
    //   this._focusMonitor.focusVia(this.subscriberInput(), 'program');
    // } else if (this.comments.controls.exchange.valid) {
    //   this._focusMonitor.focusVia(this.subscriberInput(), 'program');
    // } else if (this.comments.controls.area.valid) {
    //   this._focusMonitor.focusVia(this.exchangeInput(), 'program');
    // } else {
    //   this._focusMonitor.focusVia(this.areaInput(), 'program');
    // }
  }

  writeValue(comments: string[] | null): void {
    this._updateValue(comments);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabledByCva.set(isDisabled);
  }

  _handleInput(): void {
    // this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

  private _updateValue(comments: string[] | null) {
    this._value.set(comments);
  }

  trackByFn(index: number, item: any): string {
    return item.key; // Usa la chiave unica dell'elemento, ad esempio "comment.key"
  }
}
