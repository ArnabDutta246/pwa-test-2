import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'code-editor',
    loadChildren: () => import('./pages/code-editor/code-editor.module').then( m => m.CodeEditorPageModule)
  },
  {
    path: 'codepan',
    loadChildren: () => import('./pages/codepan/codepan.module').then( m => m.CodepanPageModule)
  },
  {
    path: 'themes',
    loadChildren: () => import('./pages/themes/themes.module').then( m => m.ThemesPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order-page/order-page.module').then( m => m.OrderPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
