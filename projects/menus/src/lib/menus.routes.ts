import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LayoutContentComponent } from "../../../componentes/src/lib/components/layout-content-component/layout-content.component";
import { TestComponent } from "./components/test/test.component";
import { RecursosComponent } from "./components/recursos/recursos.component";
import { MapaComponent } from "./components/mapa/mapa.component";
import { ComunidadComponent } from "./components/comunidad/comunidad.component";
import { DenunciaComponent } from "./components/denuncia/denuncia.component";

const MenusRoutes: Routes = [
    {
        path:"menus",
        component: LayoutContentComponent,
        children: [
            { path: "inicio", component: InicioComponent },
            { path: "test", component: TestComponent },
            { path: "recursos", component: RecursosComponent },
            { path: "mapa", component: MapaComponent },
            { path: "comunidad", component: ComunidadComponent },
            { path: "denuncia", component: DenunciaComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
    {
        path: '**', redirectTo: 'menus', pathMatch: 'full'
    }
]
export const MenusRouting: ModuleWithProviders<any> = RouterModule.forChild(MenusRoutes);