Meteor.publish('topics', function(){
    return Topics.find();
});

Meteor.publish('topic', function(id){
    check(id, String);
    return Topics.find({_id: id});
});

Meteor.publish('threads', function(topicId){
    return Threads.find({topicId: topicId});
});

Meteor.publish('thread', function(id){
    check(id, String);
    return Threads.find({_id: id});
});

Meteor.publish('posts', function(threadId){
    return Posts.find({threadId: threadId});
});

Meteor.publish('post', function(id){
    check(id, String);
    return Posts.find({_id: id});
});

if (Topics.find().count() === 0) {
    _.each(['1. Discussion générale', '3. Aide', '2. Conseils', "4. Problèmes techniques"], function(topicName){
        Topics.insert({name: topicName});
    });
}
