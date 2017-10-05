import Ember from 'ember';

var messages = [{
  id: 1,
  author: "Pat",
  question: "Can a man and a woman ever just be friends?",
  notes: "For a short time perhaps. Making the friendship last requires that you find each other at least vaguely repulsive. Good luck!"
}, {
  id: 2,
  author: "Jane",
  question: "Why do married folks begin to look like one another?",
  notes: "Watch any two people who like each other talking, and you’ll see a lot of mirroring. One smiles, and so does the other. One nods or raises her eyebrows, and so does the other."
}, {
  id: 3,
  author: "Sam",
  question: "Do animals really have a sixth sense?",
  notes: "A box jellyfish has 24 eyes, an earthworm’s entire body is covered with taste receptors, a cockroach can detect movement 2,000 times the diameter of a hydrogen atom"
}];

export default Ember.Route.extend({
  model(){
    return messages;
  },
});
