import { writeFileSync } from 'fs';

interface Input {
  read(): string;
}

interface Output {
  write(str: string): void;
}

interface Converter {
  convert(str: string): string;
}

class StaticInput implements Input {
  read(): string {
    return "Static";
  }
}

class NoConvert implements Converter {
  convert(str: string): string {
    return str;
  }
}

class TimestampConvert implements Converter {
  convert(str: string): string {
    return `${Date.now()}: ${str}`;
  }
}

class ConsoleOutput implements Output {
  write(str: string): void {
    console.log(str);
  }
}

class FileOutput implements Output {
  constructor(private path: string) {
  }
  write(str: string): void {
    writeFileSync(this.path, str);
  }
}

class Logger implements Input, Output, Converter {
  constructor(private input: Input, private output: Output, private converter: Converter) {
  }

  read(): string {
    return this.input.read();
  }

  write(str: string): void {
    this.output.write(str);
  }

  convert(str: string): string {
    return this.converter.convert(str);
  }

  log(): void {
    this.read();
  }

  run(): void {
    this.write(this.convert(this.read()));
  }
}

const basicLogger = new Logger(new StaticInput, new ConsoleOutput, new NoConvert);
basicLogger.run();

const timeStampLogger = new Logger(new StaticInput, new FileOutput('log.txt'), new TimestampConvert);
timeStampLogger.run();

// FileOutput - saves in current working directory

// Example of strategy pattern
// ELK Stack - Elasticsearch, Logstash, and Kibana
// The ELK Stack is a collection of three open-source products
// — Elasticsearch, Logstash, and Kibana.
// ELK stack provides centralized logging in order to identify
// problems with servers or applications. It allows you to search all the logs in a single place.

// read, convert, write function - each function is separate
// read - stdin, prompt, file or network
// convert - upper lower
// write terminal, network or file
// 3^3 different possible implementations - strategy pattern allows us to streamline using the implementations.

// Strategy pattern video:
// https://www.youtube.com/watch?v=v9ejT8FO-7I
// Ducks - strategy and behaviour - abstract move strategy and swim behaviour
