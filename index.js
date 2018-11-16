$(document).ready(function(){
  
    $('#searchUser').on('keyup',function(e){
      let username = e.target.value;
      //make request to Githubb
      $.ajax({
        url:'https://api.github.com/users/' + username,
        data:{
          client_id:'80a9fddcdcd0f67ce4f5',
          client_secret:'e3653d27cbc47d0814e6efd935c92ceaef06768f'
        }
      }).done(function(user){
       /* $ajax({
          url:'https://api.github.com/users/' + username +'/repos',
          data:{
          client_id:'80a9fddcdcd0f67ce4f5',
          client_secret:'e3653d27cbc47d0814e6efd935c92ceaef06768f'
        }
        }).done(function(repos){
          
          console.log(repos);
          
        })*/
        
        $("#profile").html(`
           ${user.name}
           <img class="thumbnail avatar" src="${user.avatar_url}">
           <a target="_blank" class="block" href="${user.html_url}">View Profile</a>
           <span class="label-one">Public Repos: ${user.public_repos}</span>
           <span class="label-two">Public Gists: ${user.public_gists}</span>
           <span class="label-three">Followers: ${user.followers}</span>
           <span class="label-four">Following: ${user.following}</span>
           <br><br>
           <ul class= "list-group">
               <li class="list-group-one">Company: ${user.company}</li>
               <li class="list-group-two">Company: ${user.blog}</li>
               <li class="list-group-three">Company: ${user.location}</li>
               <li class="list-group-four">Company: ${user.created_at}</li>
           </ul>     
           <h3 class ="page-header">Latest Repos</h3>
           <div id="repos"></div>
   
         `);
      });
      
    });
     
   });