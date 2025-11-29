import { RouterModule, Routes } from "@angular/router";
import { LayoutContentComponent } from "./components/layout-content-component/layout-content.component";
import { ModuleWithProviders } from "@angular/core";

const ComponentesRoutes: Routes = [
    {
        path:"componentes",
        component:  LayoutContentComponent
    },
    {
        path: '**', redirectTo: 'home', pathMatch: 'full'
    }
]
export const ComponentesRouting: ModuleWithProviders<any> = RouterModule.forChild(ComponentesRoutes);