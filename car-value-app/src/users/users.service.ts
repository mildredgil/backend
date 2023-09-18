import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repository.create({ email, password });
    return this.repository.save(user);
  }

  findOne(id: number) {
    if (!id) return null;
    return this.repository.findOneBy({ id });
  }

  find(email: string) {
    return this.repository.findBy({ email });
  }

  async update(id: number, opts: Partial<User>) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, opts);
    return this.repository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    return this.repository.remove(user);
  }
}
