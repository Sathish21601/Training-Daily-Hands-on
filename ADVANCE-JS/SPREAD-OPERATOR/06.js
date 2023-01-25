/**
 * 6. Use object spread to make a shallow copy of the following object.
 * Again, use array and object spread (as required) to create a deep copy of the object. 
 * Test out if making a change to name and front camera details on the iPhone11 object affects 
   the shallow copy. 
 * What about the deep copy? Is it affected?
   ```
  const iPhone11 = {
  name: 'iPhone 11',
  manufacturer: 'Apple',
  price: 699,
  specs: {
  color: 'White',
  memory: {
  value: 128,
  unit: 'MB'
  },
  cameras: {
  front: '12 MP Wide',
  rear: '12 MP Ultra Wide'
  },
  availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
  }
 }
 ```
 */
const iPhone11 = {
  name: "iPhone 11",
  manufacturer: "Apple",
  price: 699,
  specs: {
    color: "White",
    memory: {
      value: 128,
      unit: "MB",
    },
    cameras: {
      front: "12 MP Wide",
      rear: "12 MP Ultra Wide",
    },
    availableColors: ["Black", "Green", "Yellow", "Purple", "Red", "White"],
  },
};

const copyIphone = {
  ...iPhone11,
  ...699,
  specs: {
    ...iPhone11.specs,
    memory: {
      ...iPhone11.specs.memory,
    },
    cameras: {
      ...iPhone11.specs.cameras,
    },
    availableColors: [...iPhone11.specs.availableColors],
  },
};

copyIphone.name = "iPhone 13 Pro";
copyIphone.price = 100000;
copyIphone.specs.cameras.front = "15 MP ";
copyIphone.specs.cameras.rear = "64 MP ";
copyIphone.availableColors = "Black";

console.log(iPhone11);
console.log(copyIphone);
