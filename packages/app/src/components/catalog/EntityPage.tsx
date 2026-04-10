import {
    EntitySwitch,
    isKind,
} from '@backstage/plugin-catalog';
import {ApiPage} from "./ApiPage";
import {ComponentPage} from "./ComponentPage";
import {DefaultEntityPage} from "./DefaultEntityPage";
import {GroupPage, UserPage} from "./OrgPage";
import {DomainPage, SystemPage} from "./SystemDomainPage";


export const entityPage = (
    <EntitySwitch>
        <EntitySwitch.Case if={isKind('component')} children={ComponentPage}/>
        <EntitySwitch.Case if={isKind('api')} children={ApiPage}/>
        <EntitySwitch.Case if={isKind('group')} children={GroupPage}/>
        <EntitySwitch.Case if={isKind('user')} children={UserPage}/>
        <EntitySwitch.Case if={isKind('system')} children={SystemPage}/>
        <EntitySwitch.Case if={isKind('domain')} children={DomainPage}/>

        <EntitySwitch.Case>{DefaultEntityPage}</EntitySwitch.Case>
    </EntitySwitch>
);
