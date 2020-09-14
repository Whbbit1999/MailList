import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [DbModule, UsersModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
