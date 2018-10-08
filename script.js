console.log("External");

function sumArray(arr)
{
    var sum = 0;
    
    arr.forEach(function(value, index)
    {
        sum = sum + value;
    });
    return sum;
    
}

console.log(sumArray([1,2,3,4,5,6]));

function checkEmail(emailString)
{
    var emailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
;
    var match = emailFormat.test(emailString);
    
    return match;

}

// console.log(checkEmail("kazi@od.com"));

// console.log(checkEmail("kazi@od.com"));


var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
function getReadStatus(index){
    var book = library[index];
    return book.readingStatus;
}

console.log(getReadStatus(1));
console.log(getReadStatus(0));
console.log(getReadStatus(2));