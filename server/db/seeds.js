

use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Zsolt",
        email: "Zsolt@hotmail.com",
        checkedInStatus: "false"
    
},
    {
        name: "John",
        email: "John@hotmail.com",
        checkedInStatus: "false"
    
},
    {
        name: "Juan",
        email: "Juan@hotmail.com",
        checkedInStatus: "false"
    
}
]);