import type { UserRead } from "~/client"
import { isNonEmptyString } from "~/util/string"

export function username(u: UserRead): string {
  if (isNonEmptyString(u.first_name)) {
    if (isNonEmptyString(u.last_name)) {
      return `${u.first_name} ${u.last_name}`
    }
    return u.first_name
  }
  return u.email
}
