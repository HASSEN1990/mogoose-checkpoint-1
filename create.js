require('./server');
const Person = require('./person')


const personn = new Person ({ 
    name: 'Hassen',
    age: 31,
    favoriteFoods: ['Pizza'] 
})

personn.save( function (err,persons){
if(err) {console.log('Error')}else{

  console.log('Saved ')
  console.log(persons)
}
})

const arrayOfPeople = [
    { name: "amina", age: 21, favoriteFoods: ["chawarma"] },
    { name: "yousser", age: 32, favoriteFoods: ["mosli"] },
    { name: "ahlem", age: 40, favoriteFoods: ["spaghety"] },
  ];
  
Person.create(arrayOfPeople,(err,persons)=>{
  if(err){console.log('Error')}else{
    console.log('Added')
    console.log(persons)
  }
})
Person.find({ name: 'yousser' }, (err, persons) => {
  if (err) {
      console.log("Error");
  } else {
      console.log("Done ");
      console.log(persons);
  }
})

Person.findOne({favoriteFoods : 'spaghety'},(err,persons)=>{
  if (err) {
    console.log("Error");
} else {
    console.log("Done");
    console.log(persons);
}
})

Person.findById('id', (err, persons) =>{
  if (err) {
      console.log("Error");
  } else {
      console.log("Done");
      console.log(persons);
  }
}

);


Person.findById('id',(err,data)=>{
  if (err) return console.log(err);
  data.favoriteFoods.push('hamburger');
  data.save((err, persons) =>
  {
      if (err) {
          console.log("Error");
      } else {
          console.log("Done");
          console.log(persons);
      }
   }
  );
}) 
Person.findOneAndUpdate({name : "ahlem"},{$set: {age :45}}, {new : true},
(err, persons) => {
  if (err) {
      console.log("Error");
  } else {
      console.log("Updated");
      console.log(persons);
  }
});

Person.findByIdAndRemove('id', (err, persons) =>
{
    if (err){
        console.log('Error')
    }
    else{
        console.log('Deleted');
        console.log(persons);
    }

}
); 
Person.remove({ name: 'hassen' }, (err, persons) =>
{
 if (err){
     console.log('Error')
 }
 else{
     console.log('Deleted');
     console.log(persons);
 }

});
Person.find({ favoriteFoods: "omlette" })
.sort({ name: 1 })
.limit(2)
.select({ age: 0 })
.exec((err, persons) =>
{
   if (err){
       console.log('Error')
   }
   else{
       console.log('Done');
       console.log(persons);
   }

}
);   