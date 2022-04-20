import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ConvertParamToNumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'string') {
      return Number(value);
    }
    return value;
  }
}
