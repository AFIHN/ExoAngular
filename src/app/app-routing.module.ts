import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloNameComponent } from './exo1/hello-name/hello-name.component';
import { CalculatorComponent } from './exo2/calculator/calculator.component';
import { TransactionListComponent } from './exo3/transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: '',
    component: HelloNameComponent,
    title: 'Exo1',
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    title: 'Exo2',
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
    title: 'Exo3',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
