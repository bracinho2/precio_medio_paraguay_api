import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/data/users.service";
import { SignInDto } from "../interactor/signin_dto";


@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async signIn(signInDto: SignInDto): Promise<any> {

        const user = await this.usersService.findOne(signInDto.username);

        if (user?.password !== signInDto.password) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.userId, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
