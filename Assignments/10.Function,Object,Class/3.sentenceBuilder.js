let sentenceBuilder = {
    subject: "",
    verb: "",
    object: "",
    
    buildSentence: function() {
        if (!this.subject || !this.verb || !this.object) {
            return "Incomplete sentence";
        }
        return `${this.subject} ${this.verb} ${this.object}.`;
    },

    addProperty: function(property, value) {
        if (property in this) {
            this[property] = value;
        } else {
            console.log("Invalid property");
        }
    }
};

sentenceBuilder.addProperty("subject", "The cat");
sentenceBuilder.addProperty("verb", "chased");
sentenceBuilder.addProperty("object", "the mouse");

console.log(sentenceBuilder.buildSentence()); 
