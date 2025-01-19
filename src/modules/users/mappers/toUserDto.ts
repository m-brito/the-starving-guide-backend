// Entities
import { User } from '@users/entities/user.entity'

// Dtos
import { UserDto } from '@users/dtos/user.dto'

export function toUserDto(user: User): UserDto {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    image: user.image,
    created_at: user.created_at,
    updated_at: user.updated_at,
    steamId: user.steamId
  }
}
