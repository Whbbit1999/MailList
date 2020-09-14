import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const options = new DocumentBuilder()
  .setTitle('后台管理api')
  .setDescription('供后台管理界面调用的服务端api')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000/api-docs')
}
bootstrap();
