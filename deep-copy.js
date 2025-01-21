function deepCopy(obj, cache = new Map()) {
    if (typeof obj!== 'object' || obj === null) {
        return obj;
    }
    /* 

    This is for circular references,
    if the var of an object references the object itself,
    this will not create an infinite loop.
    
    */
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    
    if (obj instanceof Date) {
        return new Date(obj);
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if (obj instanceof Set) {
        let copy = new Set();
        cache.set(obj, copy)
        for (let items of obj) {
            copy.add(deepCopy(items, cache))
        }
        return copy
    }

    let copy = Array.isArray(obj)? [] : {};
    cache.set(obj, copy)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], cache);
        }
    }
    return copy;
}


/* const importantObject = {
    name: "John Doe",
    age: 30,
    dateOfBirth: new Date('1994-05-10'), // Date object
    hobbies: ["reading", "travelling", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
    },
    isActive: true,
    tags: new Set(["developer", "mentor"]), // Set object
    friends: [
        {
            name: "Jane",
            age: 28,
            isActive: true,
        },
        {
            name: "Doe",
            age: 35,
            isActive: false,
        }
    ],
    contactInfo: {
        email: "john@example.com",
        phone: "123-456-7890",
    },
    preferences: {
        notifications: true,
        darkMode: false,
    },
};

importantObject.circularRef = importantObject;

const copiedObj = deepCopy(importantObject);

console.log(copiedObj); */