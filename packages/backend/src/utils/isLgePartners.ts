import {PolicyQueryUser} from "@backstage/plugin-permission-node";

const isLgePartners = (user: PolicyQueryUser): boolean => {
    const userEmail = user?.info.profile?.email;
    return userEmail.includes('@lgepartners.com')
}


export default isLgePartners;