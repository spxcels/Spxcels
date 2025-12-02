import {
  Injectable,
  ExecutionContext,
  UnauthorizedException
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(
    err: unknown,
    user: any,
    info: unknown,
    context: ExecutionContext
  ) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    // Assign user to request object (Typed in AuthenticatedRequest)
    const req = context.switchToHttp().getRequest();
    req.user = user;

    return user;
  }
}
