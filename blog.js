const posts = [
{
author: "Admin",
title:"Welcome to Our Blog",
content:"In a few days, our blog will have many new posts. You will enjoy reading",
id:1
},
{
author: "Moderator",
title:"First Post of Our Blog",
content:"What a beautiful isn't it. Let's enjoy the day",
id:2
},
{
author: "Co-Author",
title:"Second Post of Our Blog",
content:"Who deleted my previous posts",
id:3
}
]


let newPost = {
author: "Co-Author",
title:"Third Post of Our Blog",
content:"Now I added this way",
id:4
}

//with callback
/*
const getPosts =(data,callback)=>{

let allPosts = data.map(blogPost => blogPost )

callback(allPosts)

}

const sortPosts = (allData)=> {
let sortedPosts = allData.sort((a,b)=> b.id-a.id)
console.log("with callback sortedPosts", sortedPosts)
return sortedPosts
}


const writePost = (postList,postToAdd, callback) =>{

postList.push(postToAdd)
console.log(postList)
callback(postList)

}

getPosts(posts, sortPosts);
writePost(posts, newPost, sortPosts)

*/

//with Promise & then/catch

/*

const getPosts = new Promise(function(resolve,reject){
let allPosts = posts.map(blogPost => blogPost )

if(allPosts){
//console.log("Fetched Data: ", allPosts);
resolve(allPosts)
}else{
reject("No blog posts were found")
}

})



const sortPosts = (allData)=>{ 
let sorted = allData.sort((a,b)=> b.id-a.id)
//console.log("Sorted Data: ", allData)
return sorted;
}

const printPosts =(updatedPosts)=>{

console.log(updatedPosts)
return updatedPosts;
}



const writePost = (allPosts,newContent) =>{
allPosts.push(newContent)
return allPosts;
}


getPosts
.then(posts=> printPosts(posts)) //For showing each step
.then(content => sortPosts(content))
.then(posts=> printPosts(posts)) //Checking if sorting the posts done correct
.then((allPosts)=> writePost(posts,newPost))
.then(posts=> printPosts(posts))// Checking how the new post added
.then((newContent)=> sortPosts(newContent))
.then((posts)=>printPosts(posts)) // Showing the final output
.catch(err => console.log(err))




*/

//with async-await

const getPosts= async(postlist) => {
try{
let postArray = await postlist.map(item =>item)
return postArray
}catch{

return "error occured"
}

}

const sortPosts =(postlist)=>{

postlist.sort((a,b)=> b.id-a.id)

}

const writePost =(postlist, newContent)=>{

postlist.push(newContent)

}



const workflow=async(postlist, newContent)=>{

let allPosts = await getPosts(postlist)
console.log("For showing the first step",allPosts) //For showing each step
sortPosts(allPosts)
console.log("Checking if sorting the posts done correct",allPosts)//Checking if sorting the posts done correct
writePost(allPosts,newContent)
console.log("Checking how the new post added",allPosts)// Checking how the new post added
sortPosts(allPosts)
console.log("Showing the final output",allPosts) // Showing the final output

}

workflow(posts, newPost)




