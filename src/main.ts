import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // el whitelis ademite la lista y omite los datos que no necesito
      whitelist: true,
      // el forbi... lo manda un error informado que datos no son relevantes
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3001);

  // los validacion Pipes a nivel global van aqui con los DTO decorados y realice validaciones de forma auto
  //el app es el nest con expres de fondo... llamamoas asi useGlobalPipes
}
bootstrap();
