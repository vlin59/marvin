const natural = require('natural');
const StopwordsFilter = require('node-stopwords-filter');
const classifier = new natural.BayesClassifier();
const stopFilter = new StopwordsFilter();

var Marvin = function(){
  this.name = "Marvin"
  this.actions = {
    "show": true,
    "listen": true,
    "play": true,
    "display": true,
    "find": true,
    "toggle": true
  };

}

Marvin.prototype.clean = function(query) {

    query = query.toLowerCase().replace("marvin", "");
    query = this.stripAction(query);
    query = stopFilter.filter(query);

    return query;
};

Marvin.prototype.action = function(marvin, query){
  const action;

    for(var key in this.actions){
      if(query.includes(key)){
        return key;
      }
    }

    return null;
}

Marvin.prototype.checkForSong = function(action, query){
  // Look for a song
  query = query.toLowerCase().replace("marvin", "");
  query = this.stripAction(query);
  // query = stopFilter.filter(query);

  return query.trim();
}

Marvin.prototype.stripAction = function(query){

  for(var key in this.actions){
    if(query.includes(key)){
      return query.replace(key, "");
    }
  }

}

Marvin.prototype.actionRedirect = function(marvin, action, query, cb){

  if(action === "show" || action === "find" || action === "display"){
    const filteredQuery = marvin.clean(query);
    cb(filteredQuery);
  }

  if(action === "play" || action === "listen"){
    const song = this.checkForSong(action, query);
    cb(song);
  }

  if(action === "toggle"){
    cb("toggle");
  }

}

Marvin.prototype.classify = function(action, filtered, cb){
  if(action === "play"){
     natural.BayesClassifier.load('./ml/classifier-musicPlayer.json', null, function(err, musicClassifier) {
      console.log("It's play");
       const category = musicClassifier.classify(filtered);
       console.log("The category is ", category);
       cb(category);
     });
  } else {
    natural.BayesClassifier.load('./ml/classifier.json', null, function(err, classifier) {
      console.log("regular classifier");
       const category = classifier.classify(filtered);
       cb(category);
    });
  }
}

exports.classifyQuery = function(query, cb){

    const marvin = new Marvin();
    const action = marvin.action(marvin, query);

    marvin.actionRedirect(marvin, action, query, function(filtered){

      if(filtered == "toggle"){
        cb(['lights', 'lights']);
      } else {
        marvin.classify(action, filtered, function(category){
          filtered = Array.isArray(filtered) ? filtered.join(" ") : filtered;
          console.log([category, filtered, action]);
          cb([category, filtered, action]);
        });
      }



    });

}

