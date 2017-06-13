// implement prefix tree (trie)
// Tries can actually be faster than the worst case against a hashmap or binary search tree. The reason being is that
// the worst case for run time is O(k) where k is the length of the string being searched against.
// If we implement a search via an imperfect hashmap, then we can run into a worst case of handling collisions. Worst case
// of this case (if hash function is super bad) is O(N) look up time, but usually it's just O(1) with O(k) evaluating the hash
// So, this is actually much better to implement with larger data sets (i.e. the whole english language)
// Pros:
// - there are no collisions of different keys in the trie
// No need to provide a hash function based on collisions
// Cons:
// Storage since memory is allocated *per character in string* rather than the whole stirng in one memory slot 

var Trie = function () {

};

Trie.prototype.insert = function () {

};
