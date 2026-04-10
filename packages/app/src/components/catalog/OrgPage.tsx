import {EntityLayout, EntityLinksCard} from "@backstage/plugin-catalog";
import {entityWarningContent} from "./Common";
import {
    EntityGroupProfileCard,
    EntityMembersListCard,
    EntityOwnershipCard,
    EntityUserProfileCard
} from "@backstage/plugin-org";
import {Grid} from "@material-ui/core";

export const UserPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            <Grid container spacing={3}>
                {entityWarningContent}
                <Grid item xs={12} md={6}>
                    <EntityUserProfileCard variant="gridItem"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <EntityOwnershipCard variant="gridItem"/>
                </Grid>
            </Grid>
        </EntityLayout.Route>
    </EntityLayout>
);

export const GroupPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            <Grid container spacing={3}>
                {entityWarningContent}
                <Grid item xs={12} md={6}>
                    <EntityGroupProfileCard variant="gridItem"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <EntityOwnershipCard variant="gridItem"/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <EntityMembersListCard/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <EntityLinksCard/>
                </Grid>
            </Grid>
        </EntityLayout.Route>
    </EntityLayout>
);
