import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
