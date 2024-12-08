import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-dialog',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatSelectModule
  ],
  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDialogComponent implements OnInit {

  productForm: FormGroup;

  readonly dialogRef: MatDialogRef<CreateDialogComponent, boolean> = inject(MatDialogRef<CreateDialogComponent>);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: new FormControl<string>('', [Validators.required]),
      category: new FormControl<string>('', [Validators.required]),
      price: new FormControl<string>('', [Validators.required, Validators.pattern(/^\d+$/)]),
      employee: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      reviews: new FormControl<string>('', [Validators.required])
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    this.dialogRef.close({
      ...this.productForm.value,
      reviews: [
        this.productForm.get('reviews')?.value
      ]
    });
  }
}
