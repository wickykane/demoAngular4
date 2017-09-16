import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ContentComponent } from "./content/content.component"
const routes: Routes = [
    {
        path: 'list',
        component: ContentComponent
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: AddEmployeeComponent
    }
]
export const routing = RouterModule.forRoot(routes);  