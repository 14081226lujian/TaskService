// TypeScript file
interface EventEmitter{

    addObserver(observer : Observer);

    removeObserver(observer : Observer);

    notify(object : Object);

}