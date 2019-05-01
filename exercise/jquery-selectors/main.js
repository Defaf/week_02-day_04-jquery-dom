// 1.  Select the H1
let heading = $('h1')
console.log(heading)

// // 2.  Select all of the list items
let listItems = $('li"')
console.log(listItems)

// // 3.  Select only the last list item
let listItem = $("li:last-child") ;
console.log(listItem)

// another solution 
listItem = $('li')[$("li").length]-1 ;
console.log(listItem)