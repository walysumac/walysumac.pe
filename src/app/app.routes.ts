import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/layout/intro/intro.component').then(
                (m) => m.IntroComponent
            ),
    },
    {
        path: '',
        loadComponent: () =>
            import('./components/layout/main-layout/main-layout.component').then(
                (m) => m.MainLayoutComponent
            ),
        children: [
            {
                path: 'acerca-de-nosotros',
                loadComponent: () =>
                    import('./components/pages/aboutus/aboutus.component').then(
                        (m) => m.AboutusComponent
                    ),
            },
            {
                path: 'productos',
                loadComponent: () =>
                    import('./components/pages/products/products.component').then(
                        (m) => m.ProductsComponent
                    ),
            },

            {
                path: 'servicios',
                loadComponent: () =>
                    import('./components/pages/services/services.component').then(
                        (m) => m.ServicesComponent
                    ),
            },
            {
                path: 'contactanos',
                loadComponent: () =>
                    import('./components/pages/contactus/contactus.component').then(
                        (m) => m.ContactusComponent
                    ),
            },
            {
                path: '**',
                redirectTo: 'productos',
            },
        ],
    },
];
