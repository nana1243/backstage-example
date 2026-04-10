import {
    AuthorizeResult,
    PolicyDecision,
} from '@backstage/plugin-permission-common';

import {
    PermissionPolicy,
    PolicyQuery,
    PolicyQueryUser,
} from '@backstage/plugin-permission-node';

import isAdmin from "../utils/isAdmin";
import isLgePartners from "../utils/isLgePartners";
import isTeamLeader from "../utils/isTeamLeader";


type PermissionRule = (user: PolicyQueryUser) => boolean;
const PERMISSION_RULES: Record<string, PermissionRule> = {
    'admin-panel.view': (user) => isAdmin(user),
    'catalog.entity.delete': (user) => !!(isAdmin(user) || isTeamLeader(user)),
    'scaffolder.task.create': (user) => !isLgePartners(user),
};

class CentralPermissionPolicy implements PermissionPolicy {


    async handle(request: PolicyQuery, user: PolicyQueryUser): Promise<PolicyDecision> {
        const rule = PERMISSION_RULES[request.permission.name];
        if (rule) {
            return rule(user)
                ? {result: AuthorizeResult.ALLOW}
                : {result: AuthorizeResult.DENY};
        }
        return {result: AuthorizeResult.ALLOW};

    }
}

export default CentralPermissionPolicy;