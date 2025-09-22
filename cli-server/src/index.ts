#!/usr/bin/env node
import { Command } from 'commander';
import { inicializerServerCach } from './server.js';
const program = new Command();

program
.name('caching-proxy')
.description("Servidor de cache reverso CLI")
.version("1.0.0")
.option('--port <port>', 'Porta do servidor')
.option('--origin <origin>', 'Origem do servidor')
.action(({ port, origin }) => inicializerServerCach(port, origin))

// process.argv node vê o que foi digitado no terminal depois de node index.js
program.parse(process.argv);