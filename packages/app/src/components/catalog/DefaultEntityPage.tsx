import {EntityLayout} from "@backstage/plugin-catalog";
import {overviewContent, techdocsContent} from "./Common";

export const DefaultEntityPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            {overviewContent}
        </EntityLayout.Route>

        <EntityLayout.Route path="/docs" title="Docs">
            {techdocsContent}
        </EntityLayout.Route>
    </EntityLayout>
);
