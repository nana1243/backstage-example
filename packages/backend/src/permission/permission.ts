import {
    AuthorizeResult,
    PolicyDecision,
} from '@backstage/plugin-permission-common';

import {
    PermissionPolicy,
    PolicyQuery,
    PolicyQueryUser,
} from '@backstage/plugin-permission-node';
import {PERMISSION_RULES} from "./rules";


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