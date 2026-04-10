import {PolicyQueryUser} from '@backstage/plugin-permission-node';
import isAdmin from "../utils/isAdmin";
import isTeamLeader from "../utils/isTeamLeader";
import isLgePartners from "../utils/isLgePartners";


export type PermissionRule = (user: PolicyQueryUser) => boolean;

export const PERMISSION_RULES: Record<string, PermissionRule> = {
    'admin-panel.view': (user) => isAdmin(user),
    'catalog.entity.delete': (user) => (isAdmin(user) || isTeamLeader(user)),
    'scaffolder.task.create': (user) => !isLgePartners(user),
};