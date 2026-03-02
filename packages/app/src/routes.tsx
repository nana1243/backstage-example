import {FlatRoutes} from "@backstage/core-app-api";
import {CatalogEntityPage, CatalogIndexPage} from "@backstage/plugin-catalog";
import {entityPage} from "./components/catalog/EntityPage";
import {TechDocsIndexPage, TechDocsReaderPage} from "@backstage/plugin-techdocs";
import {TechDocsAddons} from "@backstage/plugin-techdocs-react";
import {ReportIssue} from "@backstage/plugin-techdocs-module-addons-contrib";
import {ScaffolderPage} from "@backstage/plugin-scaffolder";
import {ApiExplorerPage} from "@backstage/plugin-api-docs";
import {catalogEntityCreatePermission} from '@backstage/plugin-catalog-common/alpha';
import {CatalogImportPage} from "@backstage/plugin-catalog-import";
import {SearchPage} from "@backstage/plugin-search";
import {searchPage} from "./components/search/SearchPage";
import {UserSettingsPage} from "@backstage/plugin-user-settings";
import {CatalogGraphPage} from "@backstage/plugin-catalog-graph";
import {NotificationsPage} from "@backstage/plugin-notifications";
import {Navigate, Route} from "react-router";
import {RequirePermission} from "@backstage/plugin-permission-react";

const routes = (
    <FlatRoutes>
        <Route path="/" element={<Navigate to="catalog"/>}/>
        <Route path="/catalog" element={<CatalogIndexPage/>}/>
        <Route
            path="/catalog/:namespace/:kind/:name"
            element={<CatalogEntityPage/>}
        >
            {entityPage}
        </Route>
        <Route path="/docs" element={<TechDocsIndexPage/>}/>
        <Route
            path="/docs/:namespace/:kind/:name/*"
            element={<TechDocsReaderPage/>}
        >
            <TechDocsAddons>
                <ReportIssue/>
            </TechDocsAddons>
        </Route>
        <Route path="/create" element={<ScaffolderPage/>}/>
        <Route path="/api-docs" element={<ApiExplorerPage/>}/>
        <Route
            path="/catalog-import"
            element={
                <RequirePermission permission={catalogEntityCreatePermission}>
                    <CatalogImportPage/>
                </RequirePermission>
            }
        />
        <Route path="/search" element={<SearchPage/>}>
            {searchPage}
        </Route>
        <Route path="/settings" element={<UserSettingsPage/>}/>
        <Route path="/catalog-graph" element={<CatalogGraphPage/>}/>
        <Route path="/notifications" element={<NotificationsPage/>}/>
    </FlatRoutes>
);


export default routes;