import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloNameComponent } from './exo1/hello-name/hello-name.component';
import { CalculatorComponent } from './exo2/calculator/calculator.component';
import { TransactionListComponent } from './exo3/transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: '',
    component: HelloNameComponent,
    title: 'Hello someone',
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
    title: 'Calculator',
  },
  {
    path: 'transactions',
    component: TransactionListComponent,
    title: 'Transactions',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
