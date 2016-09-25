

# stack-ds

A simple queue data structure.

## Installation

```bash
	npm install queue-ds -save
```

## API 


* **Queue()** - Constructor `var myqueue = new Queue();`

* **Queue.isQueue(obj)** - Check if obj is Queue. Returns boolean. `Queue.isQueue(myobject);`  

* **.enqueue(obj)** - Enqueue an element. Returns this. `myqueue.enqueue({a:5});`

* **.dequeue()** - Dequeue element. Returns the enqueued object `myqueue.dequeue();`

* **.peek()** - Get the next element in queue. `var elem = myqueue.peek();`

* **.size()** - Get the size of the queue. `var size = myqueue.size();`

* **.isEmpty()** - Check if the queue is empty. Returns boolean. `myqueue.isEmpty();`

* **.setMaxSize(max_size)** - Set the maximum size of the queue. Returns this. `myqueue.setMaxtSize(10);`

* **.getMaxSize()** - Get the maximum size of the queue. `myqueue.getMaxtSize();`

* **.empty()** - Empty the queue. Returns this. `myqueue.empty();`

* **.isFull()** - Check if the queue is full. Returns boolean. `myqueue.isEmpty();`

* **.copy(other)** - Copies other into this. Returns this. `myqueue.copy(otherqueue);`

* **.compare(other)** - Compares other and this. Returns boolean. `myqueue.compare(otherqueue);`

* **.toString(debug)** - Export a string representation of the queue If debug is set to true will export a full representation for each element `myqueue.toString();`

* **.toArray()** - Exports an array with queue's data. `myqueue.toArray();`

## TEST

In order to test the library run : 

```bash
	npm test
```

**You need to have mocha installed**

```bash
	npm install -g mocha
```

## LICENSE 
MIT

Copyright (c) 2016 Skevos Papamichail &lt;contact@skevosp.me&gt; (www.skevosp.me) 
