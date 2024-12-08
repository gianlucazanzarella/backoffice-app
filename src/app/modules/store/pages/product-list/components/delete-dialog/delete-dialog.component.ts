import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  imports: [MatButtonModule, MatDialogActions, MatDialogTitle, MatDialogContent],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteDialogComponent {
  data: { title: string; } = inject(MAT_DIALOG_DATA);

  readonly dialogRef: MatDialogRef<DeleteDialogComponent, boolean> = inject(MatDialogRef<DeleteDialogComponent>);

  close(confirm: boolean): void {
    this.dialogRef.close(confirm);
  }
}
