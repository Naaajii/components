/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {ChangeDetectionStrategy, Component, ViewEncapsulation, inject} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatSnackBarRef} from './snack-bar-ref';
import {MAT_SNACK_BAR_DATA} from './snack-bar-config';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarClose,
  MatSnackBarLabel,
} from './snack-bar-content';
import {MatIcon} from '@angular/material/icon';

/**
 * Interface for a simple snack bar component that has a message and a single action.
 */
export interface TextOnlySnackBar {
  data: {message: string; action: string};
  snackBarRef: MatSnackBarRef<TextOnlySnackBar>;
  action: () => void;
  hasAction: boolean;
  close: () => void;
}

@Component({
  selector: 'simple-snack-bar',
  templateUrl: 'simple-snack-bar.html',
  styleUrl: 'simple-snack-bar.css',
  exportAs: 'matSnackBar',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButton,
    MatIconButton,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
    MatSnackBarClose,
    MatIcon,
  ],
  standalone: true,
  host: {
    'class': 'mat-mdc-simple-snack-bar',
  },
})
export class SimpleSnackBar implements TextOnlySnackBar {
  snackBarRef = inject<MatSnackBarRef<SimpleSnackBar>>(MatSnackBarRef);
  data = inject(MAT_SNACK_BAR_DATA);

  constructor(...args: unknown[]);
  constructor() {}

  /** Performs the action on the snack bar. */
  action(): void {
    this.snackBarRef.dismissWithAction();
  }

  /** Closes the snackbar */
  close(): void {
    this.snackBarRef.dismiss();
  }

  /** If the action button should be shown. */
  get hasAction(): boolean {
    return !!this.data.action;
  }

  /** If the close button should be shown. */
  get hasClose(): boolean {
    return !!this.data.closeable;
  }
}
