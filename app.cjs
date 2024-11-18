//1) Installing and setting up Mongoose:



require('dotenv').config();  // Loads environment variables from the .env file
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const mongoose = require('mongoose');


  
  // 2)Create a person with this prototype:

const personInstance = new Person({
  name: 'Oyebolu Ibukun',
  age: 23,
  favoriteFoods: ['Burgers', 'Salad', 'Ice Cream']
});

// Save the document to the database using a callback
personInstance.save((err, savedPerson) => {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Person saved successfully:', savedPerson);
  }


  mongoose.connection.close();
});


//3) Create Many Records with Model.create()

const mongoose = require('mongoose');
const Person = require('./path/to/your/personModel'); // Adjust the path as needed

// Array of people to create
const arrayOfPeople = [
  { name: 'Alice', age: 29, favoriteFoods: ['Pizza', 'Salad'] },
  { name: 'Bob', age: 35, favoriteFoods: ['Pasta', 'Steak'] },
  { name: 'Charlie', age: 22, favoriteFoods: ['Sushi', 'Burger'] }
];

// Create multiple records
Person.create(arrayOfPeople, (err, people) => {
  if (err) {
    console.error('Error creating people:', err);
  } else {
    console.log('People created successfully:', people);
  }

  // Close the connection after the operation
  mongoose.connection.close();
});

//  Use Model.find() to Search Your Database

function findPeopleByName(name) {
  Person.find({ name: name }, (err, people) => {
    if (err) {
      console.error('Error finding people:', err);
    } else {
      console.log('People found:', people);
    }
    mongoose.connection.close();
  });
}


// Use Model.findOne() to Return a Single Matching Document

function findOneByFood(food) {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) {
      console.error('Error finding person by food:', err);
    } else {
      console.log('Person found by food:', person);
    }
    mongoose.connection.close();
  });
}

//Use Model.findById() to Search by _id
function findPersonById(personId) {
  Person.findById(personId, (err, person) => {
    if (err) {
      console.error('Error finding person by ID:', err);
    } else {
      console.log('Person found by ID:', person);
    }
    mongoose.connection.close();
  });
}

const mongoose = require('mongoose');
const Person = require('./path/to/your/personModel'); // Adjust the path as needed

function findEditThenSave(personId) {
  // Find the person by _id
  Person.findById(bob, (err, person) => {
    if (err) {
      console.error('Error finding person by ID:', err);
      mongoose.connection.close();
      return;
    }

    if (person) {
      
      person.favoriteFoods.push('hamburger');

   
      person.markModified('favoriteFoods');

      
      person.save((saveErr, updatedPerson) => {
        if (saveErr) {
          console.error('Error saving updated person:', saveErr);
        } else {
          console.log('Updated person saved:', updatedPerson);
        }
        mongoose.connection.close();
      });
    } else {
      console.log('No person found with that ID');
      mongoose.connection.close();
    }
  });
}

// Call the function with a sample _id (replace with an actual _id from your DB)
findEditThenSave('your_person_id_here');


//. Delete One Document Using findByIdAndRemove()
function deletePersonById(personId) {
  Person.findByIdAndRemove(personId, (err, deletedPerson) => {
    if (err) {
      console.error('Error deleting person by ID:', err);
    } else {
      console.log('Deleted person:', deletedPerson);
    }
    mongoose.connection.close();
  });
}

// Call the function with a sample _id (replace with an actual _id from your DB)
deletePersonById('your_person_id_here');

Person.deleteMany({ name: 'Mary' }, (err, result) => {
  if (err) {
    console.error('Error deleting people:', err);
  } else {
    console.log('Result of deletion:', result);
  }
  mongoose.connection.close();
});
