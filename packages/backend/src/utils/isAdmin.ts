import {PolicyQueryUser} from "@backstage/plugin-permission-node";

const isAdmin = (user: PolicyQueryUser) => {
    return user?.identity.ownershipEntityRefs.includes('group:default/admin');
}

export default isAdmin;