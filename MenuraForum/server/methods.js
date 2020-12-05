Meteor.methods({
    createThread: function(topicId, content){
        check(topicId, String);
        check(content, String);
        const user = Meteor.user();
        if (!user) {
            throw new Meteor.Error("Vous n'êtes pas connecté.");
        }
        if (!content){
            throw new Meteor.Error("Erreur!");
        }

        const thread = {
            author: user.emails[0].address,
            createdAt: new Date(),
            topicId: topicId,
            content: content
        };
        return Threads.insert(thread);
    },
    
    createPost: function(threadId, content){
        check(threadId, String);
        check(content, String);
        const user = Meteor.user();
        if (!user) {
            throw new Meteor.Error("Vous n'êtes pas connecté.");
        }
        if (!content) {
            throw new Meteor.Error("Erreur!");
        }

        const post = {
            author: user.emails[0].address,
            createdAt: new Date(),
            threadId: threadId,
            content: content
        };
        return Posts.insert(post);
    }
});
