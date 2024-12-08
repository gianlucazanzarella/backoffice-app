import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrl: './create-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDialogComponent {

  data: any = inject(MAT_DIALOG_DATA);

  readonly dialogRef: MatDialogRef<CreateDialogComponent, boolean> = inject(MatDialogRef<CreateDialogComponent>);

  close(confirm: boolean): void {
    this.dialogRef.close(confirm);
  }
}
