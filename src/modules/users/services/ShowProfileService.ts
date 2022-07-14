import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  user_id: string;
}

class ShowProfileService {
  public async execute({ user_id }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError('User does not exists.');

    return user;
  }
}

export default ShowProfileService;
