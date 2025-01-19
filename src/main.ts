// External Libraries
import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

// Shareds
import { AllExceptionsFilter } from './shareds/filters/all-exceptions.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalFilters(new AllExceptionsFilter())
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
