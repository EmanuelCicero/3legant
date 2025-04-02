import { Module } from '@nestjs/common';
import { PingModule } from './nest-modules';

@Module({
  imports: [PingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
