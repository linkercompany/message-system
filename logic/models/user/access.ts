import { ForbiddenError } from 'backend-helper-kit'
import * as types from '../../types/user/user'

export function checkAccess(requires: any, user: types.user): boolean {
    let tempPermissons = user.permissions

    if (!tempPermissons && requires.length > 0) {
        throw new ForbiddenError(`You not have ${requires.join('->')} access`)
    }

    requires.forEach((item: any) => {
        if (tempPermissons[item]) {
            tempPermissons = tempPermissons[item]
        } else {
            throw new ForbiddenError(`You not have ${requires.join('->')} access`)
        }
    })

    return true
}
