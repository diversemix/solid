import { FileStore } from './file-store';
import { StoreLogger } from './store-logger';
import { StoreCache } from './store-cache';
import { IStore, IStoreLogger } from './types';

const createMessageStore = (): IStore => {
  return new FileStore('');
};

const createMessageStoreWithLogging = (): IStore => {
  const store = new FileStore('');
  return new StoreLogger('FileStore', console, store);
};

const createMessageStoreWithLoggingAndCache = (): IStore => {
  const store = new FileStore('');
  const loggingStore = new StoreLogger('FileStore', console, store);
  const storeCache = new StoreCache(loggingStore, loggingStore);
  return new StoreLogger('StoreCache', console, storeCache)
};

const runTests = (store: IStore, logger: IStoreLogger | null) => {
  const testId = 123;
  const message = 'message1';

  if (logger) logger.reading(testId);
  store.read(testId).getOrElse('<empty>');
  if (logger) logger.readingDone(testId);

  if (logger) logger.saving(testId, message);
  store.save(testId, message);
  if (logger) logger.savingDone(testId, message);

  if (logger) logger.reading(testId);
  store.read(testId).getOrElse('<empty>');
  if (logger) logger.readingDone(testId);
};

const run = (store: any) => {
  if (store instanceof FileStore) {
    runTests(store, null);
  } else {
    runTests(store as IStore, store as IStoreLogger);
  }
}

const log = console;

log.log('---- createMessageStore');
run(createMessageStore());

log.log('---- createMessageStoreWithLogging');
run(createMessageStoreWithLogging());

log.log('---- createMessageStoreWithLoggingAndCache');
run(createMessageStoreWithLoggingAndCache());
