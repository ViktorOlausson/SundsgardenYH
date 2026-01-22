interface Contact{
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
}

let contacts: Contact[] = [  {
    id: 1,
    name: "Anna Andersson",
    email: "anna.andersson@gmail.com"
  },
  {
    id: 2,
    name: "Erik Johansson",
    phone: "+46 70 123 45 67"
  },
  {
    id: 3,
    name: "Maria Svensson",
    email: "maria.svensson@hotmail.com",
    phone: "+46 73 987 65 43",
    tags: ["friend", "gym"]
  },
  {
    id: 4,
    name: "Johan Karlsson",
    email: "johan.karlsson@company.se",
    tags: ["work"]
  },
  {
    id: 5,
    name: "Lisa Nilsson"
  },
  {
    id: 6,
    name: "Oskar Pettersson",
    email: "oskar.p@gmail.com",
    phone: "+46 76 555 12 34",
    tags: ["family", "emergency"]
  }]

function addContact(c: Contact){
    contacts.push(c)
    console.log(`Added ${c.name} to contact array`);
}

function listContacts(){
    for(let i = 0; i < contacts.length; i++){
        console.log(`${contacts[i]?.id} Name: ${contacts[i]?.name}, Email: ${contacts[i]?.email ?? "not found"}, Phone: ${contacts[i]?.phone ?? "not found"}
--------------------------------------------`);
    }
}

function findByName(_name: string): Contact[]{

  let result: Contact[] = contacts.filter((c) => c.name.toLowerCase().includes(_name.toLowerCase()))
  console.log(result)
  return result
}



function removeById(_id: number): boolean{
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i]?.id === _id){
      let index: number = contacts.findIndex(c => c.id === _id) 
      contacts.splice(index, 1)
      console.log(`Removed contact with id: ${_id}`)
      return true
    }
  }
  console.log(`Could not find contact with id: ${_id}`);
  return false
}

let person: Contact = {id: 0, name: "person personson", email: "person@gmail.com"}

addContact(person)
listContacts()

console.log("--------------------------------------------------------");

findByName("erik")
removeById(0)

console.log("--------------------------------------------------------");
listContacts()
findByName("erik")