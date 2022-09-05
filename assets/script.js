const topics = ['JavaScript', 'HTML', 'CSS', "Git"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

if (topics.includes(randomTopic)) {
    console.log("Let's learn" + randomTopic);
}
else {
    console.log('Please try again.');
}

function listTopics() {
    for (var x=0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}


function testFunction() {
    console.log("Test function running!");
}

testFunction();

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

  console.log('Topics covered in pre-work');
  listTopics();
  console.log("Let's work on this topic:");
  selectTopic();