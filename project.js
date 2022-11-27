// use .get to pull info from API
$.get("https://randomuser.me/api/?results=3", (data) => {
  let $person0 = $("#person0");
  let $person1 = $("#person1");
  let $person2 = $("#person2");
  const randomPerson0 = data.results[0];
  const randomPerson1 = data.results[1];
  const randomPerson2 = data.results[2];
  // DOM Manipulation to gather image
  $person0.attr("src", randomPerson0.picture.large);
  $person1.attr("src", randomPerson0.picture.large);
  $person2.attr("src", randomPerson0.picture.large);

  //Add random instructor name 1
  $name0 = $("#name0");
  $name0.text(randomPerson0.name.first);


  //Instructor name 2



  //Instructor name 3
});

/* 
$varriablename = $("p") //by tag
                $(".card-body") // . (dot) by class
                $("#person") // # by id

              
*/
