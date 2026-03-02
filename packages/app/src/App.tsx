import {apiDocsPlugin,} from '@backstage/plugin-api-docs';
import {catalogPlugin,} from '@backstage/plugin-catalog';
import {catalogImportPlugin} from '@backstage/plugin-catalog-import';
import {scaffolderPlugin} from '@backstage/plugin-scaffolder';
import {orgPlugin} from '@backstage/plugin-org';

import {techdocsPlugin} from '@backstage/plugin-techdocs';
import {apis} from './apis';
import {Root} from './components/Root';

import {
    AlertDisplay,
    OAuthRequestDialog,
    SignInPage,
} from '@backstage/core-components';
import {createApp} from '@backstage/app-defaults';
import {AppRouter} from '@backstage/core-app-api';
import {SignalsDisplay} from '@backstage/plugin-signals';
import {githubAuthApiRef} from "@backstage/core-plugin-api";
import routes from "./routes";

const app = createApp({
    apis,
    bindRoutes({bind}) {
        bind(catalogPlugin.externalRoutes, {
            createComponent: scaffolderPlugin.routes.root,
            viewTechDoc: techdocsPlugin.routes.docRoot,
            createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
        });
        bind(apiDocsPlugin.externalRoutes, {
            registerApi: catalogImportPlugin.routes.importPage,
        });
        bind(scaffolderPlugin.externalRoutes, {
            registerComponent: catalogImportPlugin.routes.importPage,
            viewTechDoc: techdocsPlugin.routes.docRoot,
        });
        bind(orgPlugin.externalRoutes, {
            catalogIndex: catalogPlugin.routes.catalogIndex,
        });
    },
    components: {
        SignInPage: props => (
            <SignInPage
                {...props}
                auto
                provider={{
                    id: 'github-auth-provider',
                    title: 'GitHub',
                    message: 'Sign in using GitHub',
                    apiRef: githubAuthApiRef,
                }}
            />
        ),
    },
});


export default app.createRoot(
    <>
        <AlertDisplay/>
        <OAuthRequestDialog/>
        <SignalsDisplay/>
        <AppRouter>
            <Root>{routes}</Root>
        </AppRouter>
    </>,
);
