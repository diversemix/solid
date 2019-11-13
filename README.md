# solid

A walk-through of improving an example "Message Store" to demonstrate SOLID principles.

----

## Tutorial

There is documentation to read in the code if you want to go at your own pace.
Otherwise you can follow the tutorial in the
[associated gitbook here](https://diversemix.gitbook.io/diversedev/typescript/solid-in-typescript)

## Getting started

After cloning the repo, you can run the final example using `make run`.

Example:

```{bash}
git clone git@github.com:diversemix/solid.git
cd solid/message-store
make run
```

## Exercises

1. Use the class `CompositeStoreWriter` defined in the file `composite-store-writer.ts` to replace the use of the decorator pattern to use the composite pattern.
2. Create an implementation of `ICacheLogger` and use it to replace the cache's use of `IStoreLogger`.
3. Reading from a non-existant file in the `FileStore` class can throw an error, come up with a solution that will log this within the current architecture.
4. Create an implementation of `IStore` that saves the messages into a [sqlite in memory db](https://github.com/mapbox/node-sqlite3#usage).
5. Implement the `Factory Pattern` to switch on which implementation of `IStore` to use.
6. Create tests for the implementations of `IStore`.
