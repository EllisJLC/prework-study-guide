var topic = 'JavaScript';
const topics = ['JavaScript', 'HTML', 'CSS', "Git"];

if (topics.includes(topic)) {
    console.log("Let's learn" + topic);
}
else {
    console.log('Please try again.');
}

for (var x=0; x < topics.length; x++) {
    console.log(topics[x]);
}

