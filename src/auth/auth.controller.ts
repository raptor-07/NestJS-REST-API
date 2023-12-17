import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup() {
    return 'signup';
  }

  @Post('signin')
  async signin() {
    return 'signin';
  }
}
