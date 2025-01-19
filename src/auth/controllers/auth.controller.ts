// External Libraries
import { Controller, Post, UseGuards, Request } from '@nestjs/common'

// Auth
import { LocalAuthGuard } from '../guards/auth.guard'

// Services
import { AuthService } from '../services/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }
}
