import {
    EntityDependsOnComponentsCard,
    EntityDependsOnResourcesCard,
    EntityLayout,
    isComponentType
} from "@backstage/plugin-catalog";
import {cicdContent, overviewContent, techdocsContent} from "./Common";
import {EntityKubernetesContent, isKubernetesAvailable} from "@backstage/plugin-kubernetes";
import {EntityConsumedApisCard, EntityProvidedApisCard} from "@backstage/plugin-api-docs";
import {Grid} from "@material-ui/core";
import {DefaultEntityPage} from "./DefaultEntityPage";

const serviceEntityPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            {overviewContent}
        </EntityLayout.Route>

        <EntityLayout.Route path="/ci-cd" title="CI/CD">
            {cicdContent}
        </EntityLayout.Route>

        <EntityLayout.Route
            path="/kubernetes"
            title="Kubernetes"
            if={isKubernetesAvailable}
        >
            <EntityKubernetesContent/>
        </EntityLayout.Route>

        <EntityLayout.Route path="/api" title="API">
            <Grid container spacing={3} alignItems="stretch">
                <Grid item md={6}>
                    <EntityProvidedApisCard/>
                </Grid>
                <Grid item md={6}>
                    <EntityConsumedApisCard/>
                </Grid>
            </Grid>
        </EntityLayout.Route>

        <EntityLayout.Route path="/dependencies" title="Dependencies">
            <Grid container spacing={3} alignItems="stretch">
                <Grid item md={6}>
                    <EntityDependsOnComponentsCard variant="gridItem"/>
                </Grid>
                <Grid item md={6}>
                    <EntityDependsOnResourcesCard variant="gridItem"/>
                </Grid>
            </Grid>
        </EntityLayout.Route>

        <EntityLayout.Route path="/docs" title="Docs">
            {techdocsContent}
        </EntityLayout.Route>
    </EntityLayout>
);

const websiteEntityPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            {overviewContent}
        </EntityLayout.Route>

        <EntityLayout.Route path="/ci-cd" title="CI/CD">
            {cicdContent}
        </EntityLayout.Route>

        <EntityLayout.Route
            path="/kubernetes"
            title="Kubernetes"
            if={isKubernetesAvailable}
        >
            <EntityKubernetesContent/>
        </EntityLayout.Route>

        <EntityLayout.Route path="/dependencies" title="Dependencies">
            <Grid container spacing={3} alignItems="stretch">
                <Grid item md={6}>
                    <EntityDependsOnComponentsCard variant="gridItem"/>
                </Grid>
                <Grid item md={6}>
                    <EntityDependsOnResourcesCard variant="gridItem"/>
                </Grid>
            </Grid>
        </EntityLayout.Route>

        <EntityLayout.Route path="/docs" title="Docs">
            {techdocsContent}
        </EntityLayout.Route>
    </EntityLayout>
);



export const ComponentPage = (
    <EntitySwitch>
        <EntitySwitch.Case if={isComponentType('service')}>
            {serviceEntityPage}
        </EntitySwitch.Case>

        <EntitySwitch.Case if={isComponentType('website')}>
            {websiteEntityPage}
        </EntitySwitch.Case>

        <EntitySwitch.Case>{DefaultEntityPage}</EntitySwitch.Case>
    </EntitySwitch>
);

