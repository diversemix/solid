import { MessageStoreImplementation } from './message-store';

const log = console;

log.log('Creating and Configuring...');

const testId = 123;
const ms = new MessageStoreImplementation();

log.log('Running...');

ms.save(testId, 'message1');
log.log(`  written to ${ms.getFilename(testId)}`);
log.log(`  read ${ms.read(testId)}`);
ms.read(testId);

log.log('Done!');
